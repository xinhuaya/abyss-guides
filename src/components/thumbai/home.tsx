'use client';

import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { MAX_FILE_SIZE } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Routes } from '@/routes';
import { uploadPublicImageFromBrowser } from '@/storage/client';
import {
  type ThumbnailGenerationResponse,
  type ThumbnailVariant,
  thumbnailMockVariants,
} from '@/thumbnails/mock-results';
import {
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  Bot,
  ChevronDown,
  ImagePlus,
  Languages,
  Loader2,
  RotateCcw,
  Sparkles,
  WandSparkles,
  X,
} from 'lucide-react';
import { useMessages } from 'next-intl';
import type React from 'react';
import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

const formats = [
  { id: '16:9', label: '16:9 YouTube' },
  { id: '9:16', label: '9:16 Shorts' },
  { id: '1:1', label: '1:1 Social' },
];

const outputLanguages = [
  { id: 'en', label: 'EN' },
  { id: 'zh-CN', label: '\u7b80' },
  { id: 'zh-TW', label: '\u7e41' },
  { id: 'ja', label: 'JP' },
  { id: 'ko', label: 'KR' },
  { id: 'de', label: 'DE' },
  { id: 'fr', label: 'FR' },
  { id: 'it', label: 'IT' },
  { id: 'es', label: 'ES' },
  { id: 'pt', label: 'PT' },
  { id: 'hi', label: 'HI' },
  { id: 'id', label: 'ID' },
  { id: 'th', label: 'TH' },
  { id: 'vi', label: 'VI' },
  { id: 'fil', label: 'PH' },
];

const proofToneClasses = [
  'bg-[#ffcf56] text-[#5f3600]',
  'bg-[#12b886] text-white',
  'bg-[#3d6cff] text-white',
] as const;

type OptionKind = 'format' | 'language';
type HomeUploadKind = 'reference';
type UploadStatus = 'idle' | 'uploading' | 'uploaded' | 'failed';

type HomeAsset = {
  id: string;
  file: File;
  name: string;
  previewUrl: string;
  status: UploadStatus;
  url?: string;
  key?: string;
  error?: string;
};

type ThumbAIHomeCopy = {
  hero: {
    badge: string;
    title: string;
    description: string;
    proof: string[];
    ideaLabel: string;
    ideaPlaceholder: string;
    generate: string;
    generating: string;
    generationError: string;
    workbenchQuestion: string;
    workbenchLink: string;
    fallbackPrompt: string;
    useExample: string;
    resultEyebrow: string;
    scoreLabel: string;
  };
  uploads: Record<
    HomeUploadKind,
    {
      label: string;
      description: string;
      uploading: string;
      uploaded: string;
      failed: string;
      retry: string;
      remove: string;
    }
  > & {
    unsupported: string;
    tooLarge: string;
    referenceApplied: string;
  };
  variants: Record<string, string>;
  inspiration: {
    eyebrow: string;
    title: string;
    description: string;
    cards: { title: string; type: string; hook: string }[];
  };
  features: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
  };
};

export function ThumbAIHome() {
  const messages = useMessages() as unknown as {
    GuideHome: { copy: ThumbAIHomeCopy };
  };
  const copy = messages.GuideHome.copy;
  const [title, setTitle] = useState('');
  const [format, setFormat] = useState(formats[0].id);
  const [outputLanguage, setOutputLanguage] = useState(outputLanguages[0].id);
  const [openOption, setOpenOption] = useState<OptionKind | null>(null);
  const [state, setState] = useState<'idle' | 'generating' | 'done'>('idle');
  const [generationError, setGenerationError] = useState('');
  const [resultVariants, setResultVariants] = useState<ThumbnailVariant[]>(
    thumbnailMockVariants
  );
  const [assets, setAssets] = useState<
    Record<HomeUploadKind, HomeAsset | null>
  >({
    reference: null,
  });
  const previewUrls = useRef<string[]>([]);

  const prompt = title.trim() || copy.hero.fallbackPrompt;
  const selectedFormat =
    formats.find((item) => item.id === format) ?? formats[0];
  const outputLanguageLabel =
    outputLanguages.find((item) => item.id === outputLanguage)?.label ??
    outputLanguages[0].label;
  const activeAssetNotes = assets.reference
    ? [copy.uploads.referenceApplied]
    : [];

  useEffect(() => {
    return () => {
      for (const previewUrl of previewUrls.current) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, []);

  async function generate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOpenOption(null);
    setGenerationError('');
    setState('generating');

    try {
      const response = await fetch('/api/thumbnails/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          format,
          generationMode: 'preview',
          outputLanguage,
          hasReferenceImage: Boolean(assets.reference),
          referenceImageUrl: assets.reference?.url,
          referenceImageKey: assets.reference?.key,
          assets: assets.reference
            ? [
                {
                  kind: 'reference',
                  source: 'upload',
                  url: assets.reference.url,
                  key: assets.reference.key,
                  name: assets.reference.name,
                  mimeType: assets.reference.file.type,
                },
              ]
            : [],
        }),
      });

      if (!response.ok) {
        throw new Error(copy.hero.generationError);
      }

      const data = (await response.json()) as ThumbnailGenerationResponse;
      setResultVariants(data.results);
      setState('done');
    } catch (error) {
      setGenerationError(
        error instanceof Error ? error.message : copy.hero.generationError
      );
      setState('idle');
    }
  }

  function removeAsset(kind: HomeUploadKind) {
    setAssets((current) => {
      const asset = current[kind];
      if (asset?.previewUrl) URL.revokeObjectURL(asset.previewUrl);
      return { ...current, [kind]: null };
    });
  }

  function setAssetError(kind: HomeUploadKind, file: File, message: string) {
    const previewUrl = URL.createObjectURL(file);
    previewUrls.current.push(previewUrl);
    setAssets((current) => {
      const previous = current[kind];
      if (previous?.previewUrl) URL.revokeObjectURL(previous.previewUrl);
      return {
        ...current,
        [kind]: {
          id: `${Date.now()}-${file.name}`,
          file,
          name: file.name,
          previewUrl,
          status: 'failed',
          error: message,
        },
      };
    });
  }

  async function uploadAsset(kind: HomeUploadKind, asset: HomeAsset) {
    try {
      const result = await uploadPublicImageFromBrowser(asset.file);
      setAssets((current) => {
        if (current[kind]?.id !== asset.id) return current;
        return {
          ...current,
          [kind]: {
            ...current[kind],
            status: 'uploaded',
            url: result.url,
            key: result.key,
            error: undefined,
          } as HomeAsset,
        };
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : copy.uploads[kind].failed;
      setAssets((current) => {
        if (current[kind]?.id !== asset.id) return current;
        return {
          ...current,
          [kind]: {
            ...current[kind],
            status: 'failed',
            error: message,
          } as HomeAsset,
        };
      });
    }
  }

  function onAssetChange(
    kind: HomeUploadKind,
    event: ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setAssetError(kind, file, copy.uploads.unsupported);
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setAssetError(kind, file, copy.uploads.tooLarge);
      return;
    }

    const asset: HomeAsset = {
      id: `${Date.now()}-${file.name}`,
      file,
      name: file.name,
      previewUrl: URL.createObjectURL(file),
      status: 'uploading',
    };
    previewUrls.current.push(asset.previewUrl);

    setAssets((current) => {
      const previous = current[kind];
      if (previous?.previewUrl) URL.revokeObjectURL(previous.previewUrl);
      return { ...current, [kind]: asset };
    });
    void uploadAsset(kind, asset);
  }

  return (
    <main className="overflow-hidden bg-[#fff8ea] text-[#241b13] dark:bg-[#140f0b] dark:text-[#fff8ea]">
      <section
        id="thumbnail-maker"
        className="relative isolate px-4 pb-16 pt-12 sm:px-6 lg:pb-24"
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(36,27,19,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(36,27,19,0.045)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(rgba(255,248,234,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,248,234,0.05)_1px,transparent_1px)]" />
        <div className="absolute left-[8%] top-20 -z-10 h-24 w-24 rotate-12 rounded-[18px] border-2 border-[#7de4d3]/50 bg-[#ddfff7]/80 dark:bg-[#12352f]" />
        <div className="absolute right-[7%] top-28 -z-10 h-16 w-16 -rotate-12 rounded-full border-2 border-[#ffcf56]/70 bg-[#fff0bd] dark:bg-[#533f12]" />
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#241b13]/10 bg-white/80 px-3 py-2 text-xs font-black tracking-[0.08em] text-[#7b5a21] shadow-sm dark:border-white/10 dark:bg-white/8 dark:text-[#ffd36b]">
            <Bot className="h-4 w-4 text-[#2fb8a8]" />
            {copy.hero.badge}
          </div>

          <h1 className="max-w-4xl text-6xl font-black leading-none sm:text-7xl lg:text-8xl">
            {copy.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base font-bold leading-7 text-[#6d5a48] sm:text-lg dark:text-[#d6c8b6]">
            {copy.hero.description}
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {copy.hero.proof.map((item, index) => (
              <span
                key={`${index}-${item}`}
                className={cn(
                  'rounded-full border border-white/40 px-3 py-1.5 text-xs font-black shadow-sm',
                  proofToneClasses[index % proofToneClasses.length]
                )}
              >
                {item}
              </span>
            ))}
          </div>

          <form
            onSubmit={generate}
            className="relative z-30 mt-9 w-full rounded-[20px] border border-[#241b13]/10 bg-white/88 p-3 text-left shadow-[0_28px_90px_rgba(96,65,28,0.18)] backdrop-blur sm:p-4 dark:border-white/10 dark:bg-[#201812]/92 dark:shadow-black/30"
          >
            <div className="rounded-[16px] border border-[#241b13]/10 bg-[#fffdf7] p-3 dark:border-white/10 dark:bg-[#17110d]">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <label
                  htmlFor="thumbai-video-idea"
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#8d6a2c] dark:text-[#ffd36b]"
                >
                  <Sparkles className="h-4 w-4" />
                  {copy.hero.ideaLabel}
                </label>
                <button
                  type="button"
                  onClick={() => setTitle(copy.hero.fallbackPrompt)}
                  className="inline-flex h-8 items-center gap-1.5 rounded-full bg-[#f6eddf] px-3 text-xs font-black text-[#7a6756] transition hover:bg-[#fff0bd] dark:bg-white/10 dark:text-[#fff8ea]"
                >
                  <WandSparkles className="h-3.5 w-3.5" />
                  {copy.hero.useExample}
                </button>
              </div>
              <textarea
                id="thumbai-video-idea"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder={copy.hero.ideaPlaceholder}
                className="min-h-24 w-full resize-none bg-transparent text-lg font-black text-[#241b13] outline-none placeholder:text-[#b9a996] dark:text-[#fff8ea] dark:placeholder:text-[#8c7a68]"
              />

              <div className="relative z-40 mt-4 flex flex-col gap-3 border-[#241b13]/10 border-t pt-3 dark:border-white/10 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  <HomeAssetButton
                    asset={assets.reference}
                    copy={copy.uploads.reference}
                    icon={<ImagePlus className="h-4 w-4" />}
                    onChange={(event) => onAssetChange('reference', event)}
                    onRemove={() => removeAsset('reference')}
                    onRetry={() => {
                      const asset = assets.reference;
                      if (!asset) return;
                      const nextAsset = {
                        ...asset,
                        status: 'uploading' as const,
                        error: undefined,
                      };
                      setAssets((current) => ({
                        ...current,
                        reference: nextAsset,
                      }));
                      void uploadAsset('reference', nextAsset);
                    }}
                  />

                  <OptionMenu
                    icon={<Languages className="h-3.5 w-3.5 text-[#2fb8a8]" />}
                    label={selectedFormat.label}
                    open={openOption === 'format'}
                    onToggle={() =>
                      setOpenOption(openOption === 'format' ? null : 'format')
                    }
                  >
                    {formats.map((item) => (
                      <MenuButton
                        key={item.id}
                        active={item.id === format}
                        onClick={() => {
                          setFormat(item.id);
                          setOpenOption(null);
                        }}
                      >
                        {item.label}
                      </MenuButton>
                    ))}
                  </OptionMenu>

                  <OptionMenu
                    emphasis
                    icon={<Languages className="h-3.5 w-3.5 text-[#ff5a42]" />}
                    label={outputLanguageLabel}
                    open={openOption === 'language'}
                    wide
                    onToggle={() =>
                      setOpenOption(
                        openOption === 'language' ? null : 'language'
                      )
                    }
                  >
                    {outputLanguages.map((item) => (
                      <MenuButton
                        key={item.id}
                        active={item.id === outputLanguage}
                        onClick={() => {
                          setOutputLanguage(item.id);
                          setOpenOption(null);
                        }}
                      >
                        {item.label}
                      </MenuButton>
                    ))}
                  </OptionMenu>
                </div>

                <Button
                  type="submit"
                  disabled={state === 'generating'}
                  className="h-11 rounded-full bg-[#241b13] px-6 text-sm font-black text-white shadow-[0_12px_28px_rgba(36,27,19,0.22)] hover:bg-[#3a2a1b] disabled:bg-[#d8cab8] disabled:text-[#8b7b69] dark:bg-[#fff8ea] dark:text-[#241b13] dark:hover:bg-[#ffe8a8]"
                >
                  {state === 'generating' ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <WandSparkles className="h-4 w-4" />
                  )}
                  {state === 'generating'
                    ? copy.hero.generating
                    : copy.hero.generate}
                </Button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-[14px] bg-[#f6eddf] px-3 py-2 text-xs font-bold text-[#7a6756] dark:bg-white/8 dark:text-[#d6c8b6]">
              <span>{copy.hero.workbenchQuestion}</span>
              <LocaleLink
                href={Routes.ThumbnailMaker}
                className="inline-flex items-center gap-1 font-black text-[#247d73] dark:text-[#7de4d3]"
              >
                {copy.hero.workbenchLink}
                <ArrowRight className="h-3.5 w-3.5" />
              </LocaleLink>
            </div>
            {generationError && (
              <p className="mt-3 rounded-[14px] border border-[#ff8f70]/40 bg-[#fff4ef] px-3 py-2 text-xs font-black text-[#9a3d26]">
                {generationError}
              </p>
            )}
          </form>

          <div className="relative z-0 mt-8 grid w-full gap-3 md:grid-cols-3">
            {resultVariants.map((variant, index) => (
              <div
                key={variant.id}
                className={cn(
                  'overflow-hidden rounded-[18px] border border-[#241b13]/10 bg-white/72 p-2 shadow-[0_14px_38px_rgba(96,65,28,0.12)] transition dark:border-white/10 dark:bg-white/8',
                  state === 'done'
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-2 opacity-75'
                )}
              >
                <div className="relative aspect-video overflow-hidden rounded-[14px] bg-[#241b13]">
                  {variant.imageUrl ? (
                    <img
                      alt={variant.headline}
                      className="absolute inset-0 h-full w-full object-cover"
                      src={variant.imageUrl}
                    />
                  ) : (
                    <div
                      className={cn(
                        'absolute inset-0 bg-gradient-to-br opacity-90',
                        variant.gradient
                      )}
                    />
                  )}
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,27,19,0.86),rgba(36,27,19,0.08),rgba(36,27,19,0.35))]" />
                  <div className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[#fff0bd] text-lg font-black text-[#241b13]">
                    {index + 1}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="mb-2 w-fit rounded-full bg-white px-2 py-1 text-[10px] font-black uppercase text-[#241b13]">
                      {format} · {outputLanguageLabel}
                    </p>
                    {activeAssetNotes.length > 0 && (
                      <p className="mb-2 w-fit max-w-full rounded-full bg-[#dff9f4] px-2 py-1 text-[10px] font-black text-[#115b52]">
                        {activeAssetNotes.join(' · ')}
                      </p>
                    )}
                    <h3 className="text-2xl font-black leading-none text-white [text-shadow:0_3px_0_#000]">
                      {variant.headline}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 px-1 pt-3">
                  <div>
                    <p className="text-sm font-black text-[#241b13] dark:text-[#fff8ea]">
                      {copy.variants[variant.id]}
                    </p>
                    <p className="mt-1 max-w-44 truncate text-xs font-bold text-[#806d5c] dark:text-[#c6b5a2]">
                      {prompt}
                    </p>
                  </div>
                  <span className="rounded-full bg-[#dff9f4] px-2 py-1 text-xs font-black text-[#115b52]">
                    {copy.hero.scoreLabel} {variant.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inspiration" className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#2b7f75] dark:text-[#7de4d3]">
            {copy.inspiration.eyebrow}
          </p>
          <div className="mt-3 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
              {copy.inspiration.title}
            </h2>
            <p className="max-w-md text-sm font-bold leading-6 text-[#6d5a48] dark:text-[#d6c8b6]">
              {copy.inspiration.description}
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {copy.inspiration.cards.map((card, index) => (
              <div
                key={card.hook}
                className="group overflow-hidden rounded-[18px] border border-[#241b13]/10 bg-white p-2 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/8"
              >
                <div
                  className={cn(
                    'relative aspect-video overflow-hidden rounded-[14px] bg-gradient-to-br',
                    resultVariants[index % resultVariants.length].gradient
                  )}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_24%,rgba(255,255,255,0.75),transparent_16%),linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.06))]" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-[10px] font-black uppercase text-[#fff0bd]">
                      {card.type}
                    </p>
                    <h3 className="mt-1 text-2xl font-black leading-none text-white [text-shadow:0_3px_0_#000]">
                      {card.hook}
                    </h3>
                  </div>
                </div>
                <p className="px-1 pt-3 text-sm font-black">{card.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="px-4 pb-20 pt-6 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-black uppercase tracking-[0.16em] text-[#a46d12] dark:text-[#ffd36b]">
            {copy.features.eyebrow}
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-4xl font-black leading-tight sm:text-5xl">
            {copy.features.title}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {copy.features.items.map((item) => (
              <div
                key={item.title}
                className="rounded-[18px] border border-[#241b13]/10 bg-white/82 p-5 shadow-sm dark:border-white/10 dark:bg-white/8"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#dff9f4] text-[#115b52] dark:bg-[#12352f] dark:text-[#7de4d3]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm font-bold leading-6 text-[#6d5a48] dark:text-[#d6c8b6]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function HomeAssetButton({
  asset,
  copy,
  icon,
  onChange,
  onRemove,
  onRetry,
}: {
  asset: HomeAsset | null;
  copy: ThumbAIHomeCopy['uploads'][HomeUploadKind];
  icon: React.ReactNode;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
  onRetry: () => void;
}) {
  const isUploading = asset?.status === 'uploading';
  const isUploaded = asset?.status === 'uploaded';
  const isFailed = asset?.status === 'failed';

  return (
    <div
      className={cn(
        'min-h-11 rounded-full border border-[#241b13]/10 bg-white/70 py-1.5 pr-3 pl-1.5 transition dark:border-white/10 dark:bg-white/8',
        isUploaded && 'border-[#2fb8a8]/40 bg-[#edfffb]',
        isFailed && 'border-[#ff8f70]/50 bg-[#fff4ef]'
      )}
    >
      <div className="flex items-center gap-3">
        <label className="group flex min-w-0 flex-1 cursor-pointer items-center gap-3">
          <input
            accept="image/jpeg,image/png,image/webp"
            className="sr-only"
            type="file"
            onChange={onChange}
          />
          <span
            className={cn(
              'flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border border-dashed border-[#2fb8a8]/45 bg-[#dff9f4] text-[#115b52] ring-1 ring-[#2fb8a8]/20 transition group-hover:scale-[1.03]',
              isFailed && 'bg-[#ffe1d6] text-[#a33d22]',
              isUploaded && 'bg-[#c8fff3] text-[#0e6d62]'
            )}
          >
            {asset?.previewUrl ? (
              <img
                alt=""
                className="h-full w-full object-cover"
                src={asset.previewUrl}
              />
            ) : (
              icon
            )}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-black text-[#4d3b2d] dark:text-[#fff8ea]">
              {asset ? asset.name : copy.label}
            </span>
            <span className="mt-0.5 flex items-center gap-1.5 text-xs font-bold text-[#806d5c] dark:text-[#c6b5a2]">
              {isUploading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
              {isUploaded && <BadgeCheck className="h-3.5 w-3.5" />}
              {isFailed && <AlertCircle className="h-3.5 w-3.5" />}
              {isUploading
                ? copy.uploading
                : isUploaded
                  ? copy.uploaded
                  : isFailed
                    ? asset?.error || copy.failed
                    : copy.description}
            </span>
          </span>
        </label>

        {asset && (
          <div className="flex shrink-0 items-center gap-1">
            {isFailed && (
              <button
                type="button"
                onClick={onRetry}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff0bd] text-[#6c4a12] transition hover:bg-[#ffdc6f]"
                title={copy.retry}
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
            )}
            <button
              type="button"
              onClick={onRemove}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f6eddf] text-[#7a6756] transition hover:bg-[#eadac8] dark:bg-white/8 dark:text-[#d6c8b6] dark:hover:bg-white/14"
              title={copy.remove}
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function OptionMenu({
  icon,
  label,
  emphasis,
  open,
  roomy,
  wide,
  children,
  onToggle,
}: {
  icon: React.ReactNode;
  label: string;
  emphasis?: boolean;
  open: boolean;
  roomy?: boolean;
  wide?: boolean;
  children: React.ReactNode;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          'inline-flex h-11 max-w-full items-center gap-2 rounded-full border px-3 text-xs font-black shadow-sm transition dark:border-white/10 dark:bg-white/8 dark:text-[#f1dfca] dark:hover:bg-white/14',
          emphasis
            ? 'border-[#ff8f70]/55 bg-[#fff0e8] text-[#8f341f] ring-2 ring-[#ffcf56]/45 hover:bg-[#ffe1d4]'
            : 'border-[#241b13]/10 bg-white text-[#6d5a48] hover:bg-[#fff0bd]'
        )}
      >
        {icon}
        <span className="whitespace-nowrap">{label}</span>
        <ChevronDown className="h-3.5 w-3.5 opacity-60" />
      </button>
      {open && (
        <div
          className={cn(
            'absolute top-11 z-[90] grid gap-1 rounded-[14px] border border-[#241b13]/10 bg-white p-2 shadow-2xl shadow-[#60411c]/15 dark:border-white/10 dark:bg-[#17110d]',
            roomy
              ? 'right-0 w-[19rem] grid-cols-2'
              : wide
                ? 'left-0 w-64 grid-cols-3'
                : 'left-0 w-44 grid-cols-1'
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function MenuButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'min-h-11 rounded-[10px] px-3 py-2 text-left text-sm font-black leading-tight',
        active
          ? 'bg-[#dff9f4] text-[#115b52] dark:bg-[#12352f] dark:text-[#7de4d3]'
          : 'text-[#6d5a48] hover:bg-[#fff0bd] dark:text-[#d6c8b6] dark:hover:bg-white/10'
      )}
    >
      {children}
    </button>
  );
}
