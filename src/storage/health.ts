import { websiteConfig } from '@/config/website';
import { storageConfig } from './config/storage-config';

type StorageVariableStatus = {
  name: string;
  configured: boolean;
  required: boolean;
};

const requiredVariables = [
  ['STORAGE_REGION', storageConfig.region],
  ['STORAGE_ENDPOINT', storageConfig.endpoint],
  ['STORAGE_ACCESS_KEY_ID', storageConfig.accessKeyId],
  ['STORAGE_SECRET_ACCESS_KEY', storageConfig.secretAccessKey],
  ['STORAGE_BUCKET_NAME', storageConfig.bucketName],
] as const;

const optionalVariables = [
  ['STORAGE_PUBLIC_URL', storageConfig.publicUrl],
] as const;

function toStatus(
  [name, value]: readonly [string, string | undefined],
  required: boolean
): StorageVariableStatus {
  return {
    name,
    configured: Boolean(value),
    required,
  };
}

export function getStorageHealth() {
  const required = requiredVariables.map((item) => toStatus(item, true));
  const optional = optionalVariables.map((item) => toStatus(item, false));
  const missingRequired = required
    .filter((item) => !item.configured)
    .map((item) => item.name);

  return {
    enabled: websiteConfig.storage.enable,
    provider: websiteConfig.storage.provider,
    ready: websiteConfig.storage.enable && missingRequired.length === 0,
    required,
    optional,
    missingRequired,
    notes: [
      'This endpoint only reports whether variables are present. It never returns secret values.',
      'For Cloudflare R2, STORAGE_REGION is commonly auto and STORAGE_ENDPOINT is the S3 API endpoint.',
      'STORAGE_PUBLIC_URL is optional but recommended for clean public asset URLs.',
    ],
  };
}
