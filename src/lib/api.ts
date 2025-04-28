interface GenerateImageParams {
  modelId: string;
  parameters: Record<string, any>;
}

interface GenerateImageResponse {
  urls: string[];
}

export async function generateImage({
  modelId,
  parameters,
}: GenerateImageParams): Promise<GenerateImageResponse> {
  const response = await fetch("/api/replicate/generate-image", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      modelId,
      ...parameters,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate image");
  }

  return await response.json();
}

export async function generateOpenAIImage({
  modelId,
  parameters,
}: GenerateImageParams): Promise<GenerateImageResponse> {
  const response = await fetch("/api/openai/generate-image", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ modelId, parameters }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("OpenAI API Error Response:", errorData);
    throw new Error(errorData.error || "Failed to generate image via OpenAI");
  }

  return await response.json();
}
