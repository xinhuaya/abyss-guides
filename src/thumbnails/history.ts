import 'server-only';

import { thumbnailGeneration } from '@/db/app.schema';
import { getDb } from '@/db/index';
import { and, desc, eq } from 'drizzle-orm';
import { randomUUID } from 'node:crypto';
import type {
  ThumbnailGenerationInput,
  ThumbnailGenerationProvider,
  ThumbnailVariant,
} from './types';

type SaveThumbnailGenerationInput = {
  userId: string;
  provider: ThumbnailGenerationProvider;
  input: ThumbnailGenerationInput;
  results: ThumbnailVariant[];
};

export type PersistedThumbnailGeneration = {
  id: string;
  createdAt: Date;
  prompt: string;
  sourceUrl: string | null;
  format: string;
  outputLanguage: string;
  strategy: string | null;
  layout: string | null;
  assetsCount: number;
  providerId: string;
  providerMode: string;
  model: string;
  predictionId: string | null;
  results: ThumbnailVariant[];
};

export async function saveThumbnailGeneration({
  userId,
  provider,
  input,
  results,
}: SaveThumbnailGenerationInput) {
  const db = await getDb();
  const id = randomUUID();

  await db.insert(thumbnailGeneration).values({
    id,
    userId,
    prompt: input.prompt,
    sourceUrl: input.sourceUrl || null,
    format: input.format,
    outputLanguage: input.outputLanguage,
    strategy: input.strategy || null,
    layout: input.layout || null,
    assetsCount: input.assetsCount,
    providerId: provider.id,
    providerMode: provider.mode,
    model: provider.model,
    predictionId: provider.predictionId || null,
    results,
  });

  return id;
}

export async function listThumbnailGenerations(userId: string, limit = 20) {
  const db = await getDb();
  const rows = await db
    .select()
    .from(thumbnailGeneration)
    .where(eq(thumbnailGeneration.userId, userId))
    .orderBy(desc(thumbnailGeneration.createdAt))
    .limit(limit);

  return rows.map((row) => ({
    id: row.id,
    createdAt: row.createdAt,
    prompt: row.prompt,
    sourceUrl: row.sourceUrl,
    format: row.format,
    outputLanguage: row.outputLanguage,
    strategy: row.strategy,
    layout: row.layout,
    assetsCount: row.assetsCount,
    providerId: row.providerId,
    providerMode: row.providerMode,
    model: row.model,
    predictionId: row.predictionId,
    results: row.results as ThumbnailVariant[],
  })) satisfies PersistedThumbnailGeneration[];
}

export async function deleteThumbnailGeneration(userId: string, id: string) {
  const db = await getDb();

  const deletedRows = await db
    .delete(thumbnailGeneration)
    .where(
      and(
        eq(thumbnailGeneration.id, id),
        eq(thumbnailGeneration.userId, userId)
      )
    )
    .returning({ id: thumbnailGeneration.id });

  return deletedRows.length > 0;
}
