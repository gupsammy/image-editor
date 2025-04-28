import OpenAI from "openai";
import { NextResponse } from "next/server";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Helper to determine image MIME type based on OpenAI format
function getMimeType(format: string | null | undefined): string {
  switch (format) {
    case "jpeg":
      return "image/jpeg";
    case "webp":
      return "image/webp";
    case "png":
    default:
      return "image/png";
  }
}

export async function POST(request: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OpenAI API key not configured." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { modelId, parameters } = body;

    if (!modelId || !parameters || !parameters.prompt) {
      return NextResponse.json(
        { error: "Missing modelId or parameters (prompt required)." },
        { status: 400 }
      );
    }

    // --- Map frontend parameters to OpenAI API options ---
    const options: OpenAI.Images.ImageGenerateParams = {
      model: modelId,
      prompt: parameters.prompt,
    };

    // Model-specific parameters
    if (modelId === "dall-e-2" || modelId === "dall-e-3") {
      // Common for dall-e-2 and dall-e-3
      options.response_format = "b64_json"; // Request b64_json for DALL-E models

      if (modelId === "dall-e-2") {
        options.n = parameters.n ? parseInt(parameters.n, 10) : 1;
        options.size = parameters.size || "1024x1024";
      } else {
        // dall-e-3
        options.n = 1; // DALL-E 3 only supports n=1
        options.size = parameters.size || "1024x1024";
        options.quality = parameters.quality || "standard";
        options.style = parameters.style || "vivid";
      }
    } else if (modelId === "gpt-image-1") {
      // Parameters specific to gpt-image-1
      // NOTE: response_format is NOT set for gpt-image-1
      options.n = parameters.n ? parseInt(parameters.n, 10) : 1;
      options.size =
        parameters.size === "auto" ? null : parameters.size || null;
      options.quality =
        parameters.quality === "auto" ? null : parameters.quality || null;
      options.background =
        parameters.background === "auto" ? null : parameters.background || null;
      options.output_format = parameters.output_format || "png"; // Keep track for MIME type
      // Only set output_compression if format is jpeg or webp
      if (
        (options.output_format === "jpeg" ||
          options.output_format === "webp") &&
        parameters.output_compression
      ) {
        options.output_compression =
          parseInt(parameters.output_compression, 10) || 100;
      }
      options.moderation =
        parameters.moderation === "auto" ? null : parameters.moderation || null;
    } else {
      return NextResponse.json(
        { error: "Unsupported modelId." },
        { status: 400 }
      );
    }
    // --- End Parameter Mapping ---

    console.log(`Calling OpenAI Images API with options:`, options);

    const response = await openai.images.generate(options);

    console.log("OpenAI API Response Received");

    // Convert b64_json to data URLs
    const urls = (response.data || [])
      .map((item) => {
        if (!item.b64_json) {
          console.warn("Missing b64_json in OpenAI response item");
          return null;
        }
        const mimeType = getMimeType(options.output_format);
        return `data:${mimeType};base64,${item.b64_json}`;
      })
      .filter((url) => url !== null) as string[];

    return NextResponse.json({ urls });
  } catch (error: any) {
    console.error("Error calling OpenAI API:", error);
    // Attempt to parse potential OpenAI error response
    let errorMessage = "Failed to generate image";
    if (error.response && error.response.data && error.response.data.error) {
      errorMessage = error.response.data.error.message;
    } else if (error.message) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
