export type ThumbnailVariant = {
  id: 'curiosity' | 'face' | 'bold';
  headline: string;
  score: number;
  gradient: string;
  imageUrl?: string;
  temporaryImageUrl?: string;
  storageKey?: string;
};

export type ThumbnailFormat = '16:9' | '9:16' | '1:1';

export type ThumbnailGenerationSource = 'home' | 'workbench';

export type ThumbnailGenerationMode = 'preview' | 'live';

export type ThumbnailGenerationAssetKind =
  | 'reference'
  | 'portrait'
  | 'video'
  | 'script';

export type ThumbnailGenerationAsset = {
  kind: ThumbnailGenerationAssetKind;
  source: 'upload' | 'local';
  url?: string;
  key?: string;
  name?: string;
  mimeType?: string;
};

export type ThumbnailGenerationRequest = {
  prompt: string;
  format: string;
  generationMode?: ThumbnailGenerationMode;
  language?: string;
  outputLanguage?: string;
  strategy?: string;
  layout?: string;
  source?: ThumbnailGenerationSource;
  sourceUrl?: string;
  assets?: ThumbnailGenerationAsset[];
  assetsCount?: number;
  referenceImageUrl?: string;
  referenceImageKey?: string;
  hasReferenceImage?: boolean;
};

export type ThumbnailGenerationInput = {
  prompt: string;
  format: ThumbnailFormat;
  generationMode: ThumbnailGenerationMode;
  outputLanguage: string;
  source: ThumbnailGenerationSource;
  strategy?: string;
  layout?: string;
  sourceUrl?: string;
  assets: ThumbnailGenerationAsset[];
  assetsCount: number;
  hasReferenceImage: boolean;
};

export type ThumbnailGenerationProvider = {
  id: 'mock' | 'replicate';
  mode: 'mock' | 'live';
  model: string;
  predictionId?: string;
  predictionUrl?: string;
};

export type ThumbnailGenerationResponse = {
  jobId: string;
  status: 'completed';
  provider: ThumbnailGenerationProvider;
  input: ThumbnailGenerationInput;
  results: ThumbnailVariant[];
};
