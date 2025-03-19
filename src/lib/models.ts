import { ModelConfig } from "@/types/image-editor";

export const GENERATION_MODELS: ModelConfig[] = [
  {
    id: "black-forest-labs/flux-schnell",
    name: "Flux Schnell",
    type: "generation",
    parameters: [
      {
        name: "prompt",
        type: "text",
        label: "Prompt",
      },
      {
        name: "aspect_ratio",
        type: "select",
        label: "Aspect Ratio",
        default: "1:1",
        options: [
          "1:1",
          "16:9",
          "21:9",
          "3:2",
          "2:3",
          "4:5",
          "5:4",
          "3:4",
          "4:3",
          "9:16",
          "9:21",
        ],
      },
      {
        name: "num_outputs",
        type: "range",
        label: "Number of Images",
        min: 1,
        max: 4,
        default: 1,
      },
      {
        name: "num_inference_steps",
        type: "range",
        label: "Inference Steps",
        min: 1,
        max: 4,
        default: 4,
      },
      {
        name: "seed",
        type: "number",
        label: "Seed",
      },
      {
        name: "output_format",
        type: "select",
        label: "Output Format",
        default: "webp",
        options: ["webp", "jpg", "png"],
      },
      {
        name: "output_quality",
        type: "range",
        label: "Output Quality",
        min: 0,
        max: 100,
        default: 80,
      },
      {
        name: "megapixels",
        type: "select",
        label: "Resolution",
        default: "1",
        options: ["1", "0.25"],
      },
    ],
  },
  {
    id: "black-forest-labs/flux-dev",
    name: "Flux Dev",
    type: "generation",
    parameters: [
      {
        name: "prompt",
        type: "text",
        label: "Prompt",
      },
      {
        name: "aspect_ratio",
        type: "select",
        label: "Aspect Ratio",
        default: "1:1",
        options: [
          "1:1",
          "16:9",
          "21:9",
          "3:2",
          "2:3",
          "4:5",
          "5:4",
          "3:4",
          "4:3",
          "9:16",
          "9:21",
        ],
      },
      {
        name: "num_outputs",
        type: "range",
        label: "Number of Images",
        min: 1,
        max: 4,
        default: 1,
      },
      {
        name: "guidance",
        type: "range",
        label: "Guidance Scale",
        min: 0,
        max: 10,
        step: 0.1,
        default: 3,
      },
      {
        name: "num_inference_steps",
        type: "range",
        label: "Inference Steps",
        min: 1,
        max: 50,
        default: 28,
      },
      {
        name: "seed",
        type: "number",
        label: "Seed",
      },
      {
        name: "output_format",
        type: "select",
        label: "Output Format",
        default: "webp",
        options: ["webp", "jpg", "png"],
      },
      {
        name: "output_quality",
        type: "range",
        label: "Output Quality",
        min: 0,
        max: 100,
        default: 80,
      },
      {
        name: "megapixels",
        type: "select",
        label: "Resolution",
        default: "1",
        options: ["1", "0.25"],
      },
    ],
  },
  {
    id: "ideogram-ai/ideogram-v2",
    name: "Ideogram v2",
    type: "generation",
    parameters: [
      {
        name: "prompt",
        type: "text",
        label: "Prompt",
      },
      {
        name: "negative_prompt",
        type: "text",
        label: "Negative Prompt",
      },
      {
        name: "aspect_ratio",
        type: "select",
        label: "Aspect Ratio",
        default: "1:1",
        options: [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "16:10",
          "10:16",
          "3:1",
          "1:3",
        ],
      },
      {
        name: "resolution",
        type: "select",
        label: "Resolution",
        default: "None",
        options: [
          "None",
          "512x1536",
          "576x1408",
          "576x1472",
          "576x1536",
          "640x1024",
          "640x1344",
          "640x1408",
          "640x1472",
          "640x1536",
          "704x1152",
          "704x1216",
          "704x1280",
          "704x1344",
          "704x1408",
          "704x1472",
          "720x1280",
          "736x1312",
          "768x1024",
          "768x1088",
          "768x1152",
          "768x1216",
          "768x1232",
          "768x1280",
          "768x1344",
          "832x960",
          "832x1024",
          "832x1088",
          "832x1152",
          "832x1216",
          "832x1248",
          "864x1152",
          "896x960",
          "896x1024",
          "896x1088",
          "896x1120",
          "896x1152",
          "960x832",
          "960x896",
          "960x1024",
          "960x1088",
          "1024x640",
          "1024x768",
          "1024x832",
          "1024x896",
          "1024x960",
          "1024x1024",
          "1088x768",
          "1088x832",
          "1088x896",
          "1088x960",
          "1120x896",
          "1152x704",
          "1152x768",
          "1152x832",
          "1152x864",
          "1152x896",
          "1216x704",
          "1216x768",
          "1216x832",
          "1232x768",
          "1248x832",
          "1280x704",
          "1280x720",
          "1280x768",
          "1280x800",
          "1312x736",
          "1344x640",
          "1344x704",
          "1344x768",
          "1408x576",
          "1408x640",
          "1408x704",
          "1472x576",
          "1472x640",
          "1472x704",
          "1536x512",
          "1536x576",
          "1536x640",
        ],
      },
      {
        name: "magic_prompt_option",
        type: "select",
        label: "Magic Prompt",
        default: "Auto",
        options: ["Auto", "On", "Off"],
      },
      {
        name: "style_type",
        type: "select",
        label: "Style",
        default: "None",
        options: [
          "None",
          "Auto",
          "General",
          "Realistic",
          "Design",
          "Render 3D",
          "Anime",
        ],
      },
      {
        name: "seed",
        type: "number",
        label: "Seed",
      },
      {
        name: "guidance_scale",
        type: "range",
        label: "Guidance Scale",
        min: 0,
        max: 10,
        default: 3,
        step: 0.1,
      },
      {
        name: "num_inference_steps",
        type: "range",
        label: "Inference Steps",
        min: 1,
        max: 50,
        default: 28,
      },
      {
        name: "output_format",
        type: "select",
        label: "Output Format",
        default: "webp",
        options: ["webp", "jpg", "png"],
      },
      {
        name: "output_quality",
        type: "range",
        label: "Output Quality",
        min: 0,
        max: 100,
        default: 80,
      },
    ],
  },
  {
    id: "ideogram-ai/ideogram-v2-turbo",
    name: "Ideogram v2 Turbo",
    type: "generation",
    parameters: [
      {
        name: "prompt",
        type: "text",
        label: "Prompt",
      },
      {
        name: "negative_prompt",
        type: "text",
        label: "Negative Prompt",
      },
      {
        name: "aspect_ratio",
        type: "select",
        label: "Aspect Ratio",
        default: "1:1",
        options: [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "16:10",
          "10:16",
          "3:1",
          "1:3",
        ],
      },
      {
        name: "resolution",
        type: "select",
        label: "Resolution",
        default: "None",
        options: [
          "None",
          "512x1536",
          "576x1408",
          "576x1472",
          "576x1536",
          "640x1024",
          "640x1344",
          "640x1408",
          "640x1472",
          "640x1536",
          "704x1152",
          "704x1216",
          "704x1280",
          "704x1344",
          "704x1408",
          "704x1472",
          "720x1280",
          "736x1312",
          "768x1024",
          "768x1088",
          "768x1152",
          "768x1216",
          "768x1232",
          "768x1280",
          "768x1344",
          "832x960",
          "832x1024",
          "832x1088",
          "832x1152",
          "832x1216",
          "832x1248",
          "864x1152",
          "896x960",
          "896x1024",
          "896x1088",
          "896x1120",
          "896x1152",
          "960x832",
          "960x896",
          "960x1024",
          "960x1088",
          "1024x640",
          "1024x768",
          "1024x832",
          "1024x896",
          "1024x960",
          "1024x1024",
          "1088x768",
          "1088x832",
          "1088x896",
          "1088x960",
          "1120x896",
          "1152x704",
          "1152x768",
          "1152x832",
          "1152x864",
          "1152x896",
          "1216x704",
          "1216x768",
          "1216x832",
          "1232x768",
          "1248x832",
          "1280x704",
          "1280x720",
          "1280x768",
          "1280x800",
          "1312x736",
          "1344x640",
          "1344x704",
          "1344x768",
          "1408x576",
          "1408x640",
          "1408x704",
          "1472x576",
          "1472x640",
          "1472x704",
          "1536x512",
          "1536x576",
          "1536x640",
        ],
      },
      {
        name: "magic_prompt_option",
        type: "select",
        label: "Magic Prompt",
        default: "Auto",
        options: ["Auto", "On", "Off"],
      },
      {
        name: "style_type",
        type: "select",
        label: "Style",
        default: "None",
        options: [
          "None",
          "Auto",
          "General",
          "Realistic",
          "Design",
          "Render 3D",
          "Anime",
        ],
      },
      {
        name: "seed",
        type: "number",
        label: "Seed",
      },
      {
        name: "guidance_scale",
        type: "range",
        label: "Guidance Scale",
        min: 0,
        max: 10,
        default: 3,
        step: 0.1,
      },
      {
        name: "num_inference_steps",
        type: "range",
        label: "Inference Steps",
        min: 1,
        max: 50,
        default: 28,
      },
      {
        name: "output_format",
        type: "select",
        label: "Output Format",
        default: "webp",
        options: ["webp", "jpg", "png"],
      },
      {
        name: "output_quality",
        type: "range",
        label: "Output Quality",
        min: 0,
        max: 100,
        default: 80,
      },
    ],
  },
];

export const EDITING_MODELS: ModelConfig[] = [
  {
    id: "black-forest-labs/flux-fill-pro",
    name: "Flux Fill Pro",
    type: "editing",
    parameters: [
      {
        name: "prompt",
        type: "text",
        label: "Prompt",
      },
      {
        name: "steps",
        type: "range",
        label: "Steps",
        min: 1,
        max: 50,
        default: 50,
      },
      {
        name: "guidance",
        type: "range",
        label: "Guidance Scale",
        min: 2,
        max: 5,
        step: 0.1,
        default: 3,
      },
      {
        name: "seed",
        type: "number",
        label: "Seed",
      },
      {
        name: "output_format",
        type: "select",
        label: "Output Format",
        default: "jpg",
        options: ["jpg", "png"],
      },
      {
        name: "safety_tolerance",
        type: "range",
        label: "Safety Tolerance",
        min: 1,
        max: 6,
        default: 2,
      },
      {
        name: "prompt_upsampling",
        type: "select",
        label: "Prompt Upsampling",
        default: "false",
        options: ["true", "false"],
      },
    ],
  },
  {
    id: "ideogram-ai/ideogram-v2",
    name: "Ideogram v2 (Edit)",
    type: "editing",
    parameters: [
      {
        name: "prompt",
        type: "text",
        label: "Prompt",
      },
      {
        name: "negative_prompt",
        type: "text",
        label: "Negative Prompt",
      },
      {
        name: "magic_prompt_option",
        type: "select",
        label: "Magic Prompt",
        default: "Auto",
        options: ["Auto", "On", "Off"],
      },
      {
        name: "style_type",
        type: "select",
        label: "Style",
        default: "None",
        options: [
          "None",
          "Auto",
          "General",
          "Realistic",
          "Design",
          "Render 3D",
          "Anime",
        ],
      },
      {
        name: "seed",
        type: "number",
        label: "Seed",
      },
      {
        name: "guidance_scale",
        type: "range",
        label: "Guidance Scale",
        min: 0,
        max: 10,
        default: 3,
        step: 0.1,
      },
      {
        name: "num_inference_steps",
        type: "range",
        label: "Inference Steps",
        min: 1,
        max: 50,
        default: 28,
      },
      {
        name: "output_format",
        type: "select",
        label: "Output Format",
        default: "webp",
        options: ["webp", "jpg", "png"],
      },
      {
        name: "output_quality",
        type: "range",
        label: "Output Quality",
        min: 0,
        max: 100,
        default: 80,
      },
    ],
  },
  {
    id: "ideogram-ai/ideogram-v2-turbo",
    name: "Ideogram v2 Turbo (Edit)",
    type: "editing",
    parameters: [
      {
        name: "prompt",
        type: "text",
        label: "Prompt",
      },
      {
        name: "negative_prompt",
        type: "text",
        label: "Negative Prompt",
      },
      {
        name: "magic_prompt_option",
        type: "select",
        label: "Magic Prompt",
        default: "Auto",
        options: ["Auto", "On", "Off"],
      },
      {
        name: "style_type",
        type: "select",
        label: "Style",
        default: "None",
        options: [
          "None",
          "Auto",
          "General",
          "Realistic",
          "Design",
          "Render 3D",
          "Anime",
        ],
      },
      {
        name: "seed",
        type: "number",
        label: "Seed",
      },
      {
        name: "guidance_scale",
        type: "range",
        label: "Guidance Scale",
        min: 0,
        max: 10,
        default: 3,
        step: 0.1,
      },
      {
        name: "num_inference_steps",
        type: "range",
        label: "Inference Steps",
        min: 1,
        max: 50,
        default: 28,
      },
      {
        name: "output_format",
        type: "select",
        label: "Output Format",
        default: "webp",
        options: ["webp", "jpg", "png"],
      },
      {
        name: "output_quality",
        type: "range",
        label: "Output Quality",
        min: 0,
        max: 100,
        default: 80,
      },
    ],
  },
];

export const MODELS = [
  ...(process.env.NEXT_PUBLIC_PERSONAL_MODEL_1
    ? [
        {
          id: process.env.NEXT_PUBLIC_PERSONAL_MODEL_1,
          name: "Personal Model 1",
          type: "generation",
          parameters: [
            {
              name: "prompt",
              type: "text",
              label: "Prompt",
            },
            {
              name: "model",
              type: "select",
              label: "Model Type",
              default: "dev",
              options: ["dev", "schnell"],
            },
            {
              name: "aspect_ratio",
              type: "select",
              label: "Aspect Ratio",
              default: "1:1",
              options: [
                "1:1",
                "16:9",
                "21:9",
                "3:2",
                "2:3",
                "4:5",
                "5:4",
                "3:4",
                "4:3",
                "9:16",
                "9:21",
                "custom",
              ],
            },
            {
              name: "width",
              type: "range",
              label: "Width",
              min: 256,
              max: 1440,
              step: 16,
              default: 512,
            },
            {
              name: "height",
              type: "range",
              label: "Height",
              min: 256,
              max: 1440,
              step: 16,
              default: 512,
            },
            {
              name: "num_outputs",
              type: "range",
              label: "Number of Images",
              min: 1,
              max: 4,
              default: 1,
            },
            {
              name: "guidance_scale",
              type: "range",
              label: "Guidance Scale",
              min: 0,
              max: 10,
              step: 0.1,
              default: 3,
            },
            {
              name: "num_inference_steps",
              type: "range",
              label: "Inference Steps",
              min: 1,
              max: 50,
              default: 28,
            },
            {
              name: "prompt_strength",
              type: "range",
              label: "Prompt Strength",
              min: 0,
              max: 1,
              step: 0.1,
              default: 0.8,
            },
            {
              name: "seed",
              type: "number",
              label: "Seed",
            },
            {
              name: "output_format",
              type: "select",
              label: "Output Format",
              default: "webp",
              options: ["webp", "jpg", "png"],
            },
            {
              name: "output_quality",
              type: "range",
              label: "Output Quality",
              min: 0,
              max: 100,
              default: 80,
            },
            {
              name: "go_fast",
              type: "select",
              label: "Fast Generation",
              default: "false",
              options: ["true", "false"],
            },
            {
              name: "megapixels",
              type: "select",
              label: "Resolution",
              default: "1",
              options: ["1", "0.25"],
            },
            {
              name: "lora_scale",
              type: "range",
              label: "LoRA Scale",
              min: -1,
              max: 3,
              step: 0.1,
              default: 1,
            },
            {
              name: "extra_lora",
              type: "text",
              label: "Extra LoRA",
            },
            {
              name: "extra_lora_scale",
              type: "range",
              label: "Extra LoRA Scale",
              min: -1,
              max: 3,
              step: 0.1,
              default: 1,
            },
          ],
        },
        {
          id: process.env.NEXT_PUBLIC_PERSONAL_MODEL_1,
          name: "Personal Model 1 (Edit)",
          type: "editing",
          parameters: [
            {
              name: "prompt",
              type: "text",
              label: "Prompt",
            },
            {
              name: "model",
              type: "select",
              label: "Model Type",
              default: "dev",
              options: ["dev", "schnell"],
            },
            {
              name: "num_outputs",
              type: "range",
              label: "Number of Images",
              min: 1,
              max: 4,
              default: 1,
            },
            {
              name: "prompt_strength",
              type: "range",
              label: "Prompt Strength",
              min: 0,
              max: 1,
              step: 0.1,
              default: 0.8,
            },
            {
              name: "guidance_scale",
              type: "range",
              label: "Guidance Scale",
              min: 0,
              max: 10,
              step: 0.1,
              default: 3,
            },
            {
              name: "num_inference_steps",
              type: "range",
              label: "Inference Steps",
              min: 1,
              max: 50,
              default: 28,
            },
            {
              name: "seed",
              type: "number",
              label: "Seed",
            },
            {
              name: "output_format",
              type: "select",
              label: "Output Format",
              default: "webp",
              options: ["webp", "jpg", "png"],
            },
            {
              name: "output_quality",
              type: "range",
              label: "Output Quality",
              min: 0,
              max: 100,
              default: 80,
            },
            {
              name: "go_fast",
              type: "select",
              label: "Fast Generation",
              default: "false",
              options: ["true", "false"],
            },
            {
              name: "megapixels",
              type: "select",
              label: "Resolution",
              default: "1",
              options: ["1", "0.25"],
            },
            {
              name: "lora_scale",
              type: "range",
              label: "LoRA Scale",
              min: -1,
              max: 3,
              step: 0.1,
              default: 1,
            },
            {
              name: "extra_lora",
              type: "text",
              label: "Extra LoRA",
            },
            {
              name: "extra_lora_scale",
              type: "range",
              label: "Extra LoRA Scale",
              min: -1,
              max: 3,
              step: 0.1,
              default: 1,
            },
          ],
        },
      ]
    : []),
  ...(process.env.NEXT_PUBLIC_PERSONAL_MODEL_2
    ? [
        {
          id: process.env.NEXT_PUBLIC_PERSONAL_MODEL_2,
          name: "Personal Model 2",
          type: "generation",
          parameters: [
            {
              name: "prompt",
              type: "text",
              label: "Prompt",
            },
            {
              name: "model",
              type: "select",
              label: "Model Type",
              default: "dev",
              options: ["dev", "schnell"],
            },
            {
              name: "aspect_ratio",
              type: "select",
              label: "Aspect Ratio",
              default: "1:1",
              options: [
                "1:1",
                "16:9",
                "21:9",
                "3:2",
                "2:3",
                "4:5",
                "5:4",
                "3:4",
                "4:3",
                "9:16",
                "9:21",
                "custom",
              ],
            },
            {
              name: "width",
              type: "range",
              label: "Width",
              min: 256,
              max: 1440,
              step: 16,
              default: 512,
            },
            {
              name: "height",
              type: "range",
              label: "Height",
              min: 256,
              max: 1440,
              step: 16,
              default: 512,
            },
            {
              name: "num_outputs",
              type: "range",
              label: "Number of Images",
              min: 1,
              max: 4,
              default: 1,
            },
            {
              name: "guidance_scale",
              type: "range",
              label: "Guidance Scale",
              min: 0,
              max: 10,
              step: 0.1,
              default: 3,
            },
            {
              name: "num_inference_steps",
              type: "range",
              label: "Inference Steps",
              min: 1,
              max: 50,
              default: 28,
            },
            {
              name: "prompt_strength",
              type: "range",
              label: "Prompt Strength",
              min: 0,
              max: 1,
              step: 0.1,
              default: 0.8,
            },
            {
              name: "seed",
              type: "number",
              label: "Seed",
            },
            {
              name: "output_format",
              type: "select",
              label: "Output Format",
              default: "webp",
              options: ["webp", "jpg", "png"],
            },
            {
              name: "output_quality",
              type: "range",
              label: "Output Quality",
              min: 0,
              max: 100,
              default: 80,
            },
            {
              name: "go_fast",
              type: "select",
              label: "Fast Generation",
              default: "false",
              options: ["true", "false"],
            },
            {
              name: "megapixels",
              type: "select",
              label: "Resolution",
              default: "1",
              options: ["1", "0.25"],
            },
            {
              name: "lora_scale",
              type: "range",
              label: "LoRA Scale",
              min: -1,
              max: 3,
              step: 0.1,
              default: 1,
            },
            {
              name: "extra_lora",
              type: "text",
              label: "Extra LoRA",
            },
            {
              name: "extra_lora_scale",
              type: "range",
              label: "Extra LoRA Scale",
              min: -1,
              max: 3,
              step: 0.1,
              default: 1,
            },
          ],
        },
        {
          id: process.env.NEXT_PUBLIC_PERSONAL_MODEL_2,
          name: "Personal Model 2 (Edit)",
          type: "editing",
          parameters: [
            {
              name: "prompt",
              type: "text",
              label: "Prompt",
            },
            {
              name: "model",
              type: "select",
              label: "Model Type",
              default: "dev",
              options: ["dev", "schnell"],
            },
            {
              name: "num_outputs",
              type: "range",
              label: "Number of Images",
              min: 1,
              max: 4,
              default: 1,
            },
            {
              name: "prompt_strength",
              type: "range",
              label: "Prompt Strength",
              min: 0,
              max: 1,
              step: 0.1,
              default: 0.8,
            },
            {
              name: "guidance_scale",
              type: "range",
              label: "Guidance Scale",
              min: 0,
              max: 10,
              step: 0.1,
              default: 3,
            },
            {
              name: "num_inference_steps",
              type: "range",
              label: "Inference Steps",
              min: 1,
              max: 50,
              default: 28,
            },
            {
              name: "seed",
              type: "number",
              label: "Seed",
            },
            {
              name: "output_format",
              type: "select",
              label: "Output Format",
              default: "webp",
              options: ["webp", "jpg", "png"],
            },
            {
              name: "output_quality",
              type: "range",
              label: "Output Quality",
              min: 0,
              max: 100,
              default: 80,
            },
            {
              name: "go_fast",
              type: "select",
              label: "Fast Generation",
              default: "false",
              options: ["true", "false"],
            },
            {
              name: "megapixels",
              type: "select",
              label: "Resolution",
              default: "1",
              options: ["1", "0.25"],
            },
            {
              name: "lora_scale",
              type: "range",
              label: "LoRA Scale",
              min: -1,
              max: 3,
              step: 0.1,
              default: 1,
            },
            {
              name: "extra_lora",
              type: "text",
              label: "Extra LoRA",
            },
            {
              name: "extra_lora_scale",
              type: "range",
              label: "Extra LoRA Scale",
              min: -1,
              max: 3,
              step: 0.1,
              default: 1,
            },
          ],
        },
      ]
    : []),
  ...(process.env.NEXT_PUBLIC_BRAHMINS_SAMBAR_MODEL_ID
    ? [
        {
          id: process.env.NEXT_PUBLIC_BRAHMINS_SAMBAR_MODEL_ID,
          name: "Brahmins Sambhar",
          type: "generation",
          parameters: [
            {
              name: "prompt",
              type: "text",
              label: "Prompt",
            },
            {
              name: "model",
              type: "select",
              label: "Model Type",
              default: "dev",
              options: ["dev", "schnell"],
            },
            {
              name: "aspect_ratio",
              type: "select",
              label: "Aspect Ratio",
              default: "1:1",
              options: [
                "1:1",
                "16:9",
                "21:9",
                "3:2",
                "2:3",
                "4:5",
                "5:4",
                "3:4",
                "4:3",
                "9:16",
                "9:21",
                "custom",
              ],
            },
            {
              name: "width",
              type: "range",
              label: "Width",
              min: 256,
              max: 1440,
              step: 16,
              default: 512,
            },
            {
              name: "height",
              type: "range",
              label: "Height",
              min: 256,
              max: 1440,
              step: 16,
              default: 512,
            },
            {
              name: "num_outputs",
              type: "range",
              label: "Number of Images",
              min: 1,
              max: 4,
              default: 1,
            },
            {
              name: "guidance_scale",
              type: "range",
              label: "Guidance Scale",
              min: 0,
              max: 10,
              step: 0.1,
              default: 3,
            },
            {
              name: "num_inference_steps",
              type: "range",
              label: "Inference Steps",
              min: 1,
              max: 50,
              default: 28,
            },
            {
              name: "prompt_strength",
              type: "range",
              label: "Prompt Strength",
              min: 0,
              max: 1,
              step: 0.1,
              default: 0.8,
            },
            {
              name: "seed",
              type: "number",
              label: "Seed",
            },
            {
              name: "output_format",
              type: "select",
              label: "Output Format",
              default: "webp",
              options: ["webp", "jpg", "png"],
            },
            {
              name: "output_quality",
              type: "range",
              label: "Output Quality",
              min: 0,
              max: 100,
              default: 80,
            },
            {
              name: "go_fast",
              type: "select",
              label: "Fast Generation",
              default: "false",
              options: ["true", "false"],
            },
            {
              name: "megapixels",
              type: "select",
              label: "Resolution",
              default: "1",
              options: ["1", "0.25"],
            },
            {
              name: "lora_scale",
              type: "range",
              label: "LoRA Scale",
              min: -1,
              max: 3,
              step: 0.1,
              default: 1,
            },
            {
              name: "extra_lora",
              type: "text",
              label: "Extra LoRA",
            },
            {
              name: "extra_lora_scale",
              type: "range",
              label: "Extra LoRA Scale",
              min: -1,
              max: 3,
              step: 0.1,
              default: 1,
            },
          ],
        },
        {
          id: process.env.NEXT_PUBLIC_BRAHMINS_SAMBAR_MODEL_ID,
          name: "Brahmins Sambhar (Edit)",
          type: "editing",
          parameters: [
            {
              name: "prompt",
              type: "text",
              label: "Prompt",
            },
            {
              name: "model",
              type: "select",
              label: "Model Type",
              default: "dev",
              options: ["dev", "schnell"],
            },
            {
              name: "num_outputs",
              type: "range",
              label: "Number of Images",
              min: 1,
              max: 4,
              default: 1,
            },
            {
              name: "prompt_strength",
              type: "range",
              label: "Prompt Strength",
              min: 0,
              max: 1,
              step: 0.1,
              default: 0.8,
            },
            {
              name: "guidance_scale",
              type: "range",
              label: "Guidance Scale",
              min: 0,
              max: 10,
              step: 0.1,
              default: 3,
            },
            {
              name: "num_inference_steps",
              type: "range",
              label: "Inference Steps",
              min: 1,
              max: 50,
              default: 28,
            },
            {
              name: "seed",
              type: "number",
              label: "Seed",
            },
            {
              name: "output_format",
              type: "select",
              label: "Output Format",
              default: "webp",
              options: ["webp", "jpg", "png"],
            },
            {
              name: "output_quality",
              type: "range",
              label: "Output Quality",
              min: 0,
              max: 100,
              default: 80,
            },
            {
              name: "go_fast",
              type: "select",
              label: "Fast Generation",
              default: "false",
              options: ["true", "false"],
            },
            {
              name: "megapixels",
              type: "select",
              label: "Resolution",
              default: "1",
              options: ["1", "0.25"],
            },
            {
              name: "lora_scale",
              type: "range",
              label: "LoRA Scale",
              min: -1,
              max: 3,
              step: 0.1,
              default: 1,
            },
            {
              name: "extra_lora",
              type: "text",
              label: "Extra LoRA",
            },
            {
              name: "extra_lora_scale",
              type: "range",
              label: "Extra LoRA Scale",
              min: -1,
              max: 3,
              step: 0.1,
              default: 1,
            },
          ],
        },
      ]
    : []),
  ...GENERATION_MODELS,
  ...EDITING_MODELS,
];
