import type { ThumbnailVariant } from './types';

export type {
  ThumbnailGenerationAsset,
  ThumbnailGenerationInput,
  ThumbnailGenerationRequest,
  ThumbnailGenerationResponse,
  ThumbnailVariant,
} from './types';

export const thumbnailMockVariants = [
  {
    id: 'curiosity',
    headline: 'WHAT HAPPENED NEXT?',
    score: 94,
    gradient: 'from-[#64f0d2] via-[#ffcf56] to-[#20130d]',
  },
  {
    id: 'face',
    headline: 'I WAS WRONG',
    score: 91,
    gradient: 'from-[#ff8f70] via-[#5fe0d0] to-[#19110c]',
  },
  {
    id: 'bold',
    headline: 'DO THIS FIRST',
    score: 88,
    gradient: 'from-[#ffe66d] via-[#ff5b5b] to-[#110d0a]',
  },
] satisfies ThumbnailVariant[];
