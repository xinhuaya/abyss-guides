import { randomUUID } from 'crypto';
import { uploadFile } from '@/storage';
import { thumbnailMockVariants } from './mock-results';
import type {
  ThumbnailFormat,
  ThumbnailGenerationAsset,
  ThumbnailGenerationInput,
  ThumbnailGenerationRequest,
  ThumbnailGenerationResponse,
  ThumbnailVariant,
} from './types';

const SUPPORTED_FORMATS = new Set<ThumbnailFormat>(['16:9', '9:16', '1:1']);
const REPLICATE_API_BASE = 'https://api.replicate.com/v1';
const REPLICATE_POLL_DELAY_MS = 1200;
const REPLICATE_MAX_POLLS = 35;
const REPLICATE_CREATE_MAX_ATTEMPTS = 3;
const GENERATED_THUMBNAIL_FOLDER = 'thumbai/generated';

function cleanInput(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function normalizeAsset(
  asset: ThumbnailGenerationAsset
): ThumbnailGenerationAsset {
  return {
    kind: asset.kind,
    source: asset.source,
    ...(asset.url ? { url: asset.url } : {}),
    ...(asset.key ? { key: asset.key } : {}),
    ...(asset.name ? { name: asset.name } : {}),
    ...(asset.mimeType ? { mimeType: asset.mimeType } : {}),
  };
}

function normalizeAssets(
  body: Partial<ThumbnailGenerationRequest>
): ThumbnailGenerationAsset[] {
  const assets = Array.isArray(body.assets)
    ? body.assets.map(normalizeAsset)
    : [];
  const referenceImageUrl = cleanInput(body.referenceImageUrl);
  const referenceImageKey = cleanInput(body.referenceImageKey);

  if (
    referenceImageUrl &&
    !assets.some((asset) => asset.kind === 'reference' && asset.url)
  ) {
    assets.push({
      kind: 'reference',
      source: 'upload',
      url: referenceImageUrl,
      ...(referenceImageKey ? { key: referenceImageKey } : {}),
    });
  }

  return assets;
}

export function normalizeThumbnailGenerationRequest(
  body: Partial<ThumbnailGenerationRequest>
):
  | { ok: true; input: ThumbnailGenerationInput }
  | { ok: false; error: string; status: number } {
  const prompt = cleanInput(body.prompt);
  const format = (cleanInput(body.format) || '16:9') as ThumbnailFormat;
  const outputLanguage =
    cleanInput(body.outputLanguage) || cleanInput(body.language) || 'en';
  const generationMode = body.generationMode === 'live' ? 'live' : 'preview';
  const strategy = cleanInput(body.strategy);
  const layout = cleanInput(body.layout);
  const source = body.source === 'workbench' ? 'workbench' : 'home';
  const sourceUrl = cleanInput(body.sourceUrl);
  const assets = normalizeAssets(body);

  if (!prompt) {
    return { ok: false, error: 'Prompt is required', status: 400 };
  }

  if (!SUPPORTED_FORMATS.has(format)) {
    return { ok: false, error: 'Unsupported thumbnail format', status: 400 };
  }

  const input: ThumbnailGenerationInput = {
    prompt,
    format,
    generationMode,
    outputLanguage,
    source,
    assets,
    assetsCount:
      typeof body.assetsCount === 'number' ? body.assetsCount : assets.length,
    hasReferenceImage:
      Boolean(body.hasReferenceImage) ||
      assets.some((asset) => asset.kind === 'reference'),
    ...(strategy ? { strategy } : {}),
    ...(layout ? { layout } : {}),
    ...(sourceUrl ? { sourceUrl } : {}),
  };

  return { ok: true, input };
}

export async function generateMockThumbnailDirections(
  input: ThumbnailGenerationInput
): Promise<ThumbnailGenerationResponse> {
  await new Promise((resolve) => setTimeout(resolve, 650));

  return {
    jobId: `mock-${randomUUID()}`,
    status: 'completed',
    provider: {
      id: 'mock',
      mode: 'mock',
      model: 'local-thumbnail-director-v0',
    },
    input,
    results: thumbnailMockVariants,
  };
}

function getGenerationProvider() {
  return process.env.THUMBAI_GENERATION_PROVIDER?.trim() || 'mock';
}

function getReplicateModelPath() {
  return (
    process.env.REPLICATE_IMAGE_MODEL?.trim() ||
    process.env.REPLICATE_MODEL?.trim() ||
    ''
  );
}

function getAspectRatio(format: ThumbnailFormat) {
  if (format === '9:16') return '9:16';
  if (format === '1:1') return '1:1';
  return '16:9';
}

function buildImagePrompt(input: ThumbnailGenerationInput) {
  const parts = [
    `Create a high-click YouTube thumbnail for: ${input.prompt}`,
    `Output language for any readable thumbnail text: ${input.outputLanguage}`,
    `Canvas ratio: ${input.format}`,
    input.strategy ? `Thumbnail strategy: ${input.strategy}` : '',
    input.layout ? `Composition: ${input.layout}` : '',
    input.hasReferenceImage
      ? 'Match the visual energy of the reference image without copying any protected logo or brand mark.'
      : '',
    'Use bold readable text, clear subject separation, high contrast, and creator-friendly composition.',
    'Do not include watermarks, UI chrome, or fake platform badges.',
  ];

  return parts.filter(Boolean).join('\n');
}

function buildReplicateInput(input: ThumbnailGenerationInput) {
  return {
    prompt: buildImagePrompt(input),
    aspect_ratio: getAspectRatio(input.format),
    num_outputs: 3,
    output_format: 'png',
    reference_image: input.assets.find((asset) => asset.kind === 'reference')
      ?.url,
  };
}

async function sleep(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

function extractImageUrls(output: unknown): string[] {
  if (typeof output === 'string') return [output];
  if (Array.isArray(output)) {
    return output
      .flatMap((item) => extractImageUrls(item))
      .filter((url) => url.startsWith('http'));
  }
  if (output && typeof output === 'object') {
    const values = Object.values(output as Record<string, unknown>);
    return values.flatMap((item) => extractImageUrls(item));
  }
  return [];
}

async function persistGeneratedImage(
  imageUrl: string,
  index: number
): Promise<{ url: string; key: string } | null> {
  try {
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error(`Failed to download generated image: ${response.status}`);
    }

    const contentType =
      response.headers.get('content-type')?.split(';')[0]?.trim() ||
      'image/png';
    const extension = contentType.includes('webp')
      ? 'webp'
      : contentType.includes('jpeg')
        ? 'jpg'
        : 'png';
    const buffer = Buffer.from(await response.arrayBuffer());

    return uploadFile(
      buffer,
      `replicate-thumbnail-${index + 1}.${extension}`,
      contentType,
      GENERATED_THUMBNAIL_FOLDER
    );
  } catch (error) {
    console.error('Failed to persist generated image:', error);
    return null;
  }
}

async function mapReplicateOutputToVariants(
  imageUrls: string[]
): Promise<ThumbnailVariant[]> {
  const persistedImages = await Promise.all(
    imageUrls.map((url, index) => persistGeneratedImage(url, index))
  );

  return thumbnailMockVariants.map((variant, index) => ({
    ...variant,
    ...(persistedImages[index]?.url
      ? {
          imageUrl: persistedImages[index].url,
          storageKey: persistedImages[index].key,
          temporaryImageUrl: imageUrls[index],
        }
      : imageUrls[index]
        ? { imageUrl: imageUrls[index], temporaryImageUrl: imageUrls[index] }
        : {}),
  }));
}

async function fetchReplicatePrediction(
  url: string,
  token: string
): Promise<Record<string, unknown>> {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Replicate prediction failed: ${response.statusText}`);
  }

  return (await response.json()) as Record<string, unknown>;
}

function getReplicateRetryDelayMs(message: string) {
  try {
    const parsed = JSON.parse(message) as { retry_after?: unknown };
    if (typeof parsed.retry_after === 'number') {
      return Math.min(Math.max(parsed.retry_after, 1), 20) * 1000;
    }
  } catch {
    // Replicate sometimes returns plain text; fall through to a short backoff.
  }

  const secondsMatch = message.match(/~?(\d+)s/);
  if (secondsMatch?.[1]) {
    return Math.min(Number(secondsMatch[1]), 20) * 1000;
  }

  return 8000;
}

async function createReplicatePrediction(
  modelPath: string,
  token: string,
  input: ThumbnailGenerationInput
) {
  let lastError = '';

  for (let attempt = 0; attempt < REPLICATE_CREATE_MAX_ATTEMPTS; attempt += 1) {
    const response = await fetch(
      `${REPLICATE_API_BASE}/models/${modelPath}/predictions`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Prefer: 'wait=8',
        },
        body: JSON.stringify({
          input: buildReplicateInput(input),
        }),
      }
    );

    if (response.ok) {
      return (await response.json()) as Record<string, unknown>;
    }

    lastError = await response.text();

    if (
      response.status !== 429 ||
      attempt === REPLICATE_CREATE_MAX_ATTEMPTS - 1
    ) {
      throw new Error(
        `Replicate request failed: ${lastError || response.status}`
      );
    }

    await sleep(getReplicateRetryDelayMs(lastError));
  }

  throw new Error(`Replicate request failed: ${lastError || 'rate limited'}`);
}

export async function generateReplicateThumbnailDirections(
  input: ThumbnailGenerationInput
): Promise<ThumbnailGenerationResponse> {
  const token = process.env.REPLICATE_API_TOKEN?.trim();
  const modelPath = getReplicateModelPath();

  if (!token) {
    throw new Error('REPLICATE_API_TOKEN is required for Replicate generation');
  }

  if (!modelPath || !modelPath.includes('/')) {
    throw new Error('REPLICATE_IMAGE_MODEL must be set as owner/model');
  }

  let prediction = await createReplicatePrediction(modelPath, token, input);

  for (let index = 0; index < REPLICATE_MAX_POLLS; index += 1) {
    const status = String(prediction.status || '');
    if (
      status === 'succeeded' ||
      status === 'failed' ||
      status === 'canceled'
    ) {
      break;
    }

    const urls = prediction.urls as Record<string, unknown> | undefined;
    const getUrl = String(urls?.get || '');
    if (!getUrl) break;
    await sleep(REPLICATE_POLL_DELAY_MS);
    prediction = await fetchReplicatePrediction(getUrl, token);
  }

  if (prediction.status !== 'succeeded') {
    throw new Error(`Replicate prediction ended as ${prediction.status}`);
  }

  const imageUrls = extractImageUrls(prediction.output);
  const urls = prediction.urls as Record<string, unknown> | undefined;
  const results = await mapReplicateOutputToVariants(imageUrls);

  return {
    jobId: String(prediction.id || `replicate-${Date.now()}`),
    status: 'completed',
    provider: {
      id: 'replicate',
      mode: 'live',
      model: modelPath,
      ...(prediction.id ? { predictionId: String(prediction.id) } : {}),
      ...(urls?.get ? { predictionUrl: String(urls.get) } : {}),
    },
    input,
    results,
  };
}

export async function generateThumbnailDirections(
  input: ThumbnailGenerationInput
): Promise<ThumbnailGenerationResponse> {
  if (
    input.generationMode === 'live' &&
    getGenerationProvider() === 'replicate'
  ) {
    return generateReplicateThumbnailDirections(input);
  }

  return generateMockThumbnailDirections(input);
}
