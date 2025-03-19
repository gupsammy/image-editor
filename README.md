# AI-Powered Image Editor

A powerful image editor application built with Next.js and React that lets you generate and edit images using various AI models through Replicate's API.

## Features

- Generate images using text prompts with various AI models
- Edit existing images using inpainting and outpainting techniques
- Upload your own images as a starting point
- Maintain a history of all generated and edited images
- Simple and intuitive user interface

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- A Replicate API token (get one at [replicate.com](https://replicate.com))

### Installation

1. Clone this repository:

   ```
   git clone <repository-url>
   cd image-editor
   ```

2. Install dependencies:

   ```
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following:

   ```
   REPLICATE_API_TOKEN=your_replicate_api_token_here
   ```

4. Start the development server:

   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3001](http://localhost:3001) in your browser to use the application.

## How to Use

1. **Generate a new image**:

   - Select a generation model from the dropdown
   - Enter a text prompt
   - Click "Generate"

2. **Edit an existing image**:

   - Upload or select an image from your history
   - Draw a mask on the area you want to edit
   - Choose between inpaint (replace the selected area) or outpaint (extend the image)
   - Enter a text prompt for the edited area
   - Click "Apply Edit"

3. **View your history**:
   - All generated and edited images are saved automatically
   - Browse through your history in the sidebar

## Configuration

### API Keys

This application requires the following API key:

- **Replicate API Token**: Used for image generation and editing. Get one at [replicate.com](https://replicate.com).

Add your API key to the `.env.local` file as shown in the installation section.

### Available Models

The application includes various AI models from Replicate for different image generation and editing tasks. These are configured in `src/lib/models.ts`.

## Technical Details

- **Frontend**: React, Next.js, TailwindCSS
- **Image Processing**: Canvas API
- **Storage**: IndexedDB for local image history
- **APIs**: Replicate for AI image generation

## Advanced Configuration

For advanced users who want to modify the application:

- Image model configurations: `src/lib/models.ts`
- API integration: `src/lib/api.ts` and `src/app/api/replicate/generate-image/route.ts`
- Local storage: `src/lib/db.ts`

## Optional Personal Models

To use your own personal models, create a `.env.local` file with the following variables:

```bash
NEXT_PUBLIC_PERSONAL_MODEL_1="your_model_id_here"
NEXT_PUBLIC_PERSONAL_MODEL_2="your_model_id_here"
```

These models are optional and the app will work perfectly without them.

## License

[Your License Information]

## Acknowledgments

- This project uses Replicate's API for AI image models
- Built with Next.js and Tailwind CSS

```

```
