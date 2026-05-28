'use client';

import { Button } from '@/components/ui/button';
import { useLocaleRouter } from '@/i18n/navigation';
import { authClient } from '@/lib/auth-client';
import { cn } from '@/lib/utils';
import { Routes } from '@/routes';
import type {
  ThumbnailGenerationAsset,
  ThumbnailGenerationResponse,
} from '@/thumbnails/mock-results';
import {
  ArrowRight,
  BadgeCheck,
  BadgeDollarSign,
  Clapperboard,
  Download,
  ExternalLink,
  Clock3,
  FileText,
  ImagePlus,
  Languages,
  LayoutTemplate,
  Link2,
  Loader2,
  MonitorPlay,
  RotateCcw,
  Sparkles,
  Trash2,
  Upload,
  UserRoundPlus,
  WandSparkles,
  XCircle,
} from 'lucide-react';
import { useMessages } from 'next-intl';
import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

const formats = [
  { id: '16:9', label: '16:9 YouTube' },
  { id: '9:16', label: '9:16 Shorts' },
  { id: '1:1', label: '1:1 Social' },
];

const languages = [
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

const strategyIds = [
  'curiosity',
  'face',
  'boldText',
  'beforeAfter',
  'proof',
] as const;

const layoutIds = [
  'bigFace',
  'split',
  'cleanText',
  'productShot',
  'timeline',
] as const;

type WorkbenchResult = {
  id: 'hook' | 'face' | 'text';
  score: number;
  headline: string;
  gradient: string;
  imageUrl?: string;
};

const resultCards: WorkbenchResult[] = [
  {
    id: 'hook',
    score: 94,
    headline: 'WHAT HAPPENED NEXT?',
    gradient: 'from-[#64f0d2] via-[#ffcf56] to-[#20130d]',
  },
  {
    id: 'face',
    score: 91,
    headline: 'I WAS WRONG',
    gradient: 'from-[#ff8f70] via-[#5fe0d0] to-[#19110c]',
  },
  {
    id: 'text',
    score: 88,
    headline: 'DO THIS FIRST',
    gradient: 'from-[#ffe66d] via-[#ff5b5b] to-[#110d0a]',
  },
];

type UploadKind = 'reference' | 'portrait' | 'video' | 'script';
type WorkbenchMode = 'simple' | 'pro';
type JobStatus = 'queued' | 'generating' | 'completed' | 'failed';

type AssetFile = {
  name: string;
  size: string;
  type: 'image' | 'video' | 'script' | 'file';
  mimeType?: string;
  previewUrl?: string;
  summary?: string;
};

type GenerationJob = {
  id: string;
  persistedId?: string;
  createdAt: number;
  status: JobStatus;
  idea: string;
  url: string;
  format: string;
  language: string;
  mode: WorkbenchMode;
  strategy: (typeof strategyIds)[number];
  layout: (typeof layoutIds)[number];
  assetsCount: number;
  assets: ThumbnailGenerationAsset[];
  results: WorkbenchResult[];
  providerMode?: 'mock' | 'live';
  providerName?: string;
  model?: string;
  predictionId?: string | null;
  errorMessage?: string;
};

type PersistedGeneration = {
  id: string;
  createdAt: string;
  prompt: string;
  sourceUrl: string | null;
  format: string;
  outputLanguage: string;
  strategy: string | null;
  layout: string | null;
  assetsCount: number;
  providerId: string;
  providerMode: 'mock' | 'live';
  model: string;
  predictionId: string | null;
  results: ThumbnailGenerationResponse['results'];
};

type CreditState = {
  balance: number | null;
  cost: number;
  loading: boolean;
  error: string | null;
};

type ThumbAIWorkbenchCopy = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    generate: string;
    generating: string;
    ideaLabel: string;
    ideaPlaceholder: string;
    fallbackPrompt: string;
    useExample: string;
    urlLabel: string;
    urlPlaceholder: string;
    outputLabel: string;
    strategyLabel: string;
    layoutLabel: string;
    assetsTitle: string;
    assetsDescription: string;
    selected: string;
    empty: string;
    mockNotice: string;
  };
  uploads: Record<
    UploadKind,
    {
      title: string;
      description: string;
      cta: string;
    }
  >;
  assetActions: {
    remove: string;
    ready: string;
    reading: string;
  };
  mode: {
    simple: string;
    pro: string;
    simpleTitle: string;
    simpleDescription: string;
    proTitle: string;
    proDescription: string;
    proCta: string;
  };
  strategies: Record<(typeof strategyIds)[number], string>;
  layouts: Record<(typeof layoutIds)[number], string>;
  results: {
    title: string;
    liveTitle: string;
    description: string;
    liveDescription: string;
    download: string;
    exportCover: string;
    openImage: string;
    score: string;
    variants: Record<WorkbenchResult['id'], string>;
    checks: string[];
  };
  history: {
    title: string;
    description: string;
    empty: string;
    clear: string;
    retry: string;
    active: string;
    created: string;
    assets: string;
    details: string;
    prompt: string;
    source: string;
    provider: string;
    model: string;
    strategy: string;
    layout: string;
    delete: string;
    deleting: string;
    error: string;
    status: Record<JobStatus, string>;
  };
  authGate: {
    eyebrow: string;
    signedOutTitle: string;
    signedOutDescription: string;
    signedInTitle: string;
    signedInDescription: string;
    signInCta: string;
    checking: string;
  };
  credits: {
    eyebrow: string;
    loading: string;
    readyTitle: string;
    readyDescription: string;
    balance: string;
    cost: string;
    insufficientTitle: string;
    insufficientDescription: string;
    addCredits: string;
    viewPricing: string;
    unavailable: string;
  };
  side: {
    title: string;
    items: string[];
  };
};

export function ThumbAIWorkbench() {
  const router = useLocaleRouter();
  const { data: session, isPending: sessionPending } = authClient.useSession();
  const messages = useMessages() as unknown as {
    GuideWorkbench: { copy: ThumbAIWorkbenchCopy };
  };
  const copy = messages.GuideWorkbench.copy;
  const [idea, setIdea] = useState('');
  const [url, setUrl] = useState('');
  const [format, setFormat] = useState(formats[0].id);
  const [language, setLanguage] = useState(languages[0].id);
  const [mode, setMode] = useState<WorkbenchMode>('simple');
  const [strategy, setStrategy] =
    useState<(typeof strategyIds)[number]>('curiosity');
  const [layout, setLayout] = useState<(typeof layoutIds)[number]>('bigFace');
  const previewUrls = useRef<string[]>([]);
  const historyLoaded = useRef(false);
  const [mounted, setMounted] = useState(false);
  const [files, setFiles] = useState<Record<UploadKind, AssetFile | null>>({
    reference: null,
    portrait: null,
    video: null,
    script: null,
  });
  const jobTimers = useRef<number[]>([]);
  const [jobs, setJobs] = useState<GenerationJob[]>([]);
  const [activeJobId, setActiveJobId] = useState<string | null>(null);
  const [deletingJobId, setDeletingJobId] = useState<string | null>(null);
  const [credits, setCredits] = useState<CreditState>({
    balance: null,
    cost: 1,
    loading: false,
    error: null,
  });

  const canGenerate = Boolean(
    idea.trim() || url.trim() || copy.hero.fallbackPrompt
  );
  const selectedLanguage =
    languages.find((item) => item.id === language)?.label ?? languages[0].label;
  const selectedAssets = useMemo(
    () => Object.values(files).filter(Boolean).length,
    [files]
  );
  const activeJob = useMemo(
    () => jobs.find((job) => job.id === activeJobId) ?? jobs[0],
    [activeJobId, jobs]
  );
  const activeResults: WorkbenchResult[] =
    activeJob?.results.length === resultCards.length
      ? activeJob.results
      : resultCards;
  const activeJobIsRunning =
    activeJob?.status === 'queued' || activeJob?.status === 'generating';
  const activeJobIsLive = activeJob?.providerMode === 'live';
  const isCheckingAuth = !mounted || sessionPending;
  const isSignedIn = mounted && Boolean(session?.user);
  const hasEnoughCredits =
    credits.balance === null || credits.balance >= credits.cost;
  const shouldBlockForCredits =
    isSignedIn && !credits.loading && !hasEnoughCredits;
  const loginPath = `${Routes.Login}?callbackUrl=${encodeURIComponent(
    Routes.ThumbnailMaker
  )}`;

  async function refreshCredits() {
    if (!isSignedIn) return;
    setCredits((current) => ({ ...current, loading: true, error: null }));

    try {
      const response = await fetch('/api/thumbnails/credits');
      if (!response.ok) {
        throw new Error(copy.credits.unavailable);
      }

      const data = (await response.json()) as {
        balance?: number;
        cost?: number;
      };

      setCredits({
        balance: data.balance ?? 0,
        cost: data.cost ?? 1,
        loading: false,
        error: null,
      });
    } catch (error) {
      setCredits((current) => ({
        ...current,
        loading: false,
        error:
          error instanceof Error ? error.message : copy.credits.unavailable,
      }));
    }
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isSignedIn) {
      setCredits({
        balance: null,
        cost: 1,
        loading: false,
        error: null,
      });
      return;
    }

    void refreshCredits();
  }, [isSignedIn]);

  useEffect(() => {
    return () => {
      for (const timer of jobTimers.current) window.clearTimeout(timer);
      for (const previewUrl of previewUrls.current) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, []);

  function formatBytes(bytes: number) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  }

  function onFileChange(
    kind: UploadKind,
    event: ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];
    if (!file) return;

    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');
    const isReadableScript =
      file.type.startsWith('text/') ||
      file.name.endsWith('.md') ||
      file.name.endsWith('.txt');
    const previewUrl =
      isImage || isVideo ? URL.createObjectURL(file) : undefined;

    if (previewUrl) previewUrls.current.push(previewUrl);

    const nextAsset: AssetFile = {
      name: file.name,
      size: formatBytes(file.size),
      ...(file.type ? { mimeType: file.type } : {}),
      type: isImage
        ? 'image'
        : isVideo
          ? 'video'
          : isReadableScript
            ? 'script'
            : 'file',
      previewUrl,
      summary: isReadableScript ? copy.assetActions.reading : undefined,
    };

    setFiles((current) => ({ ...current, [kind]: nextAsset }));
    event.target.value = '';

    if (isReadableScript) {
      const reader = new FileReader();
      reader.onload = () => {
        const text = String(reader.result ?? '').trim();
        setFiles((current) => ({
          ...current,
          [kind]: {
            ...nextAsset,
            summary: text ? text.slice(0, 360) : copy.assetActions.ready,
          },
        }));
      };
      reader.readAsText(file);
    }
  }

  function removeFile(kind: UploadKind) {
    const asset = files[kind];
    if (asset?.previewUrl) URL.revokeObjectURL(asset.previewUrl);
    setFiles((current) => ({ ...current, [kind]: null }));
  }

  function makeJobId() {
    return `job-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  }

  function mapApiResults(
    results: ThumbnailGenerationResponse['results']
  ): WorkbenchResult[] {
    return resultCards.map((card, index) => {
      const apiResult = results[index];
      return {
        ...card,
        score: apiResult?.score ?? card.score,
        headline: apiResult?.headline ?? card.headline,
        gradient: apiResult?.gradient ?? card.gradient,
        ...(apiResult?.imageUrl ? { imageUrl: apiResult.imageUrl } : {}),
      };
    });
  }

  function mapPersistedJob(job: PersistedGeneration): GenerationJob {
    const persistedStrategy = strategyIds.find((item) => item === job.strategy);
    const persistedLayout = layoutIds.find((item) => item === job.layout);

    return {
      id: job.id,
      persistedId: job.id,
      createdAt: new Date(job.createdAt).getTime(),
      status: 'completed',
      idea: job.prompt,
      url: job.sourceUrl ?? '',
      format: job.format,
      language: job.outputLanguage,
      mode: 'simple',
      strategy: persistedStrategy ?? 'curiosity',
      layout: persistedLayout ?? 'bigFace',
      assetsCount: job.assetsCount,
      assets: [],
      results: mapApiResults(job.results),
      providerMode: job.providerMode,
      providerName: job.providerId,
      model: job.model,
      predictionId: job.predictionId,
    };
  }

  useEffect(() => {
    if (!(mounted && isSignedIn) || historyLoaded.current) return;
    historyLoaded.current = true;

    async function loadHistory() {
      try {
        const response = await fetch('/api/thumbnails/history');
        if (!response.ok) return;

        const data = (await response.json()) as {
          generations?: PersistedGeneration[];
        };
        const persistedJobs = (data.generations ?? []).map(mapPersistedJob);

        if (persistedJobs.length === 0) return;

        setJobs((current) => {
          const currentIds = new Set(current.map((job) => job.id));
          return [
            ...current,
            ...persistedJobs.filter((job) => !currentIds.has(job.id)),
          ]
            .sort((a, b) => b.createdAt - a.createdAt)
            .slice(0, 20);
        });
        setActiveJobId((current) => current ?? persistedJobs[0]?.id ?? null);
      } catch (error) {
        console.error('Failed to load thumbnail history:', error);
      }
    }

    void loadHistory();
  }, [isSignedIn, mounted]);

  function collectJobAssets(): ThumbnailGenerationAsset[] {
    return Object.entries(files).flatMap(([kind, file]) => {
      if (!file) return [];
      return [
        {
          kind: kind as ThumbnailGenerationAsset['kind'],
          source: 'local' as const,
          name: file.name,
          ...(file.mimeType ? { mimeType: file.mimeType } : {}),
        },
      ];
    });
  }

  async function runJob(job: GenerationJob) {
    const toGenerating = window.setTimeout(() => {
      setJobs((current) =>
        current.map((currentJob) =>
          currentJob.id === job.id
            ? { ...currentJob, status: 'generating' }
            : currentJob
        )
      );
    }, 350);
    jobTimers.current.push(toGenerating);

    try {
      const response = await fetch('/api/thumbnails/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: job.idea || job.url,
          format: job.format,
          generationMode: 'live',
          outputLanguage: job.language,
          source: 'workbench',
          sourceUrl: job.url,
          strategy: job.strategy,
          layout: job.layout,
          assetsCount: job.assetsCount,
          assets: job.assets,
          hasReferenceImage: job.assets.some(
            (asset) => asset.kind === 'reference'
          ),
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error || copy.history.error);
      }

      const data = (await response.json()) as ThumbnailGenerationResponse & {
        generationId?: string;
      };
      setJobs((current) =>
        current.map((currentJob) =>
          currentJob.id === job.id
            ? {
                ...currentJob,
                ...(data.generationId
                  ? { persistedId: data.generationId }
                  : {}),
                status: 'completed',
                results: mapApiResults(data.results),
                providerMode: data.provider.mode,
                providerName: data.provider.id,
                model: data.provider.model,
                predictionId: data.provider.predictionId,
                errorMessage: undefined,
              }
            : currentJob
        )
      );
      void refreshCredits();
    } catch (error) {
      void refreshCredits();
      setJobs((current) =>
        current.map((currentJob) =>
          currentJob.id === job.id
            ? {
                ...currentJob,
                status: 'failed',
                results: [],
                errorMessage:
                  error instanceof Error ? error.message : copy.history.error,
              }
            : currentJob
        )
      );
    }
  }

  function createJob() {
    const jobAssets = collectJobAssets();
    const job: GenerationJob = {
      id: makeJobId(),
      createdAt: Date.now(),
      status: 'queued',
      idea: idea.trim() || copy.hero.fallbackPrompt,
      url: url.trim(),
      format,
      language: selectedLanguage,
      mode,
      strategy,
      layout,
      assetsCount: jobAssets.length,
      assets: jobAssets,
      results: [],
    };

    setJobs((current) => [job, ...current].slice(0, 12));
    setActiveJobId(job.id);
    void runJob(job);
  }

  function retryJob(jobId: string) {
    const job = jobs.find((item) => item.id === jobId);
    if (!job) return;
    const nextJob: GenerationJob = {
      ...job,
      persistedId: undefined,
      status: 'queued' as const,
      results: [],
      errorMessage: undefined,
    };

    setJobs((current) =>
      current.map((job) => (job.id === jobId ? nextJob : job))
    );
    setActiveJobId(jobId);
    void runJob(nextJob);
  }

  function clearHistory() {
    setJobs([]);
    setActiveJobId(null);
  }

  async function deleteJob(jobId: string) {
    const job = jobs.find((item) => item.id === jobId);
    if (!job) return;

    const persistentId = job.persistedId;
    setDeletingJobId(jobId);

    try {
      if (persistentId) {
        const response = await fetch(
          `/api/thumbnails/history/${persistentId}`,
          {
            method: 'DELETE',
          }
        );

        if (!response.ok) {
          throw new Error(copy.history.error);
        }
      }

      const nextJobs = jobs.filter((item) => item.id !== jobId);
      setJobs(nextJobs);
      if (activeJobId === jobId) {
        setActiveJobId(nextJobs[0]?.id ?? null);
      }
    } catch (error) {
      console.error('Failed to delete thumbnail history:', error);
    } finally {
      setDeletingJobId(null);
    }
  }

  function generate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isSignedIn) {
      router.push(loginPath);
      return;
    }
    if (shouldBlockForCredits) {
      router.push(Routes.SettingsCredits);
      return;
    }
    createJob();
  }

  function formatJobTime(createdAt: number) {
    return new Intl.DateTimeFormat(undefined, {
      hour: '2-digit',
      minute: '2-digit',
    }).format(createdAt);
  }

  function getDownloadHref(card: WorkbenchResult, index: number) {
    if (!(card.imageUrl && activeJob)) return '';
    const name = `thumbai-${activeJob.id}-${index + 1}.png`;
    return `/api/thumbnails/download?url=${encodeURIComponent(
      card.imageUrl
    )}&name=${encodeURIComponent(name)}`;
  }

  function getExportHref(card: WorkbenchResult, index: number) {
    if (!(card.imageUrl && activeJob)) return '';
    const name = `thumbai-cover-${activeJob.id}-${index + 1}.png`;
    const badge = `${activeJob.strategy} · ${activeJob.layout}`;
    return `/api/thumbnails/export?url=${encodeURIComponent(
      card.imageUrl
    )}&headline=${encodeURIComponent(card.headline)}&badge=${encodeURIComponent(
      badge
    )}&format=${encodeURIComponent(activeJob.format)}&name=${encodeURIComponent(
      name
    )}`;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8ea] text-[#241b13] dark:bg-[#140f0b] dark:text-[#fff8ea]">
      <section className="relative isolate px-4 py-10 sm:px-6 lg:py-14">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(36,27,19,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(36,27,19,0.045)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute right-[8%] top-16 -z-10 h-24 w-24 rotate-12 rounded-[28px] border-2 border-[#7de4d3]/60 bg-[#ddfff7]/70" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#241b13]/10 bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-[#25756c] shadow-sm">
                <MonitorPlay className="h-3.5 w-3.5" />
                {copy.hero.eyebrow}
              </p>
              <h1 className="mt-4 text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
                {copy.hero.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base font-bold leading-7 text-[#6d5a48] dark:text-[#d6c8b6]">
                {copy.hero.description}
              </p>
            </div>
            <div className="rounded-[18px] border border-[#241b13]/10 bg-white/82 p-4 shadow-sm dark:border-white/10 dark:bg-white/8">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-[#8d6a2c]">
                {copy.hero.mockNotice}
              </p>
              <p className="mt-2 text-sm font-bold text-[#6d5a48] dark:text-[#d6c8b6]">
                {selectedAssets > 0
                  ? `${copy.hero.selected}: ${selectedAssets}`
                  : copy.hero.empty}
              </p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
            <form
              onSubmit={generate}
              className="rounded-[24px] border border-[#241b13]/10 bg-white/90 p-4 shadow-[0_28px_90px_rgba(96,65,28,0.16)] backdrop-blur dark:border-white/10 dark:bg-[#201812]/92"
            >
              <div className="mb-4 rounded-[20px] border border-[#241b13]/10 bg-[#fffdf7] p-2 dark:border-white/10 dark:bg-[#17110d]">
                <div className="grid gap-2 sm:grid-cols-2">
                  {(['simple', 'pro'] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setMode(item)}
                      className={cn(
                        'rounded-[16px] px-4 py-3 text-left transition',
                        mode === item
                          ? 'bg-[#dff9f4] text-[#115b52] shadow-sm'
                          : 'bg-white text-[#6d5a48] hover:bg-[#fff0bd] dark:bg-white/8 dark:text-[#d6c8b6]'
                      )}
                    >
                      <span className="block text-sm font-black">
                        {item === 'simple' ? copy.mode.simple : copy.mode.pro}
                      </span>
                      <span className="mt-1 block text-xs font-bold leading-5">
                        {item === 'simple'
                          ? copy.mode.simpleDescription
                          : copy.mode.proDescription}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div
                className={cn(
                  'mb-4 flex flex-col gap-3 rounded-[18px] border p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between',
                  isCheckingAuth
                    ? 'border-[#241b13]/10 bg-white text-[#6d5a48] dark:border-white/10 dark:bg-white/8 dark:text-[#d6c8b6]'
                    : isSignedIn
                      ? 'border-[#7de4d3]/50 bg-[#e7fff9] text-[#154a45] dark:border-[#7de4d3]/30 dark:bg-[#10302c] dark:text-[#dff9f4]'
                      : 'border-[#ffcf56]/60 bg-[#fff4ce] text-[#5f3600] dark:border-[#ffcf56]/35 dark:bg-[#392815] dark:text-[#fff0bd]'
                )}
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-white/78 shadow-sm dark:bg-white/10">
                    {isCheckingAuth ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : isSignedIn ? (
                      <BadgeCheck className="h-4 w-4" />
                    ) : (
                      <UserRoundPlus className="h-4 w-4" />
                    )}
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] opacity-75">
                      {copy.authGate.eyebrow}
                    </p>
                    <h2 className="mt-1 text-base font-black">
                      {isCheckingAuth
                        ? copy.authGate.checking
                        : isSignedIn
                          ? copy.authGate.signedInTitle
                          : copy.authGate.signedOutTitle}
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm font-bold leading-6 opacity-80">
                      {isSignedIn
                        ? copy.authGate.signedInDescription
                        : copy.authGate.signedOutDescription}
                    </p>
                  </div>
                </div>
                {!isSignedIn && !isCheckingAuth && (
                  <Button
                    type="button"
                    onClick={() => router.push(loginPath)}
                    className="rounded-full bg-[#241b13] px-5 text-white hover:bg-[#3a2a1b]"
                  >
                    <UserRoundPlus className="h-4 w-4" />
                    {copy.authGate.signInCta}
                  </Button>
                )}
              </div>

              {isSignedIn && (
                <div
                  className={cn(
                    'mb-4 rounded-[18px] border p-4 shadow-sm',
                    shouldBlockForCredits
                      ? 'border-[#d45d3d]/25 bg-[#fff1eb] text-[#7a3d27] dark:border-[#ff8f70]/30 dark:bg-[#2a1510] dark:text-[#ffd6c8]'
                      : 'border-[#241b13]/10 bg-[#fffdf7] text-[#6d5a48] dark:border-white/10 dark:bg-white/8 dark:text-[#d6c8b6]'
                  )}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-3">
                      <span
                        className={cn(
                          'flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] shadow-sm',
                          shouldBlockForCredits
                            ? 'bg-white text-[#c7432a]'
                            : 'bg-[#dff9f4] text-[#115b52]'
                        )}
                      >
                        {credits.loading ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                          <BadgeDollarSign className="h-5 w-5" />
                        )}
                      </span>
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8d6a2c]">
                          {copy.credits.eyebrow}
                        </p>
                        <h2 className="mt-1 text-base font-black text-[#241b13] dark:text-[#fff8ea]">
                          {credits.loading
                            ? copy.credits.loading
                            : shouldBlockForCredits
                              ? copy.credits.insufficientTitle
                              : copy.credits.readyTitle}
                        </h2>
                        <p className="mt-1 max-w-2xl text-sm font-bold leading-6 opacity-80">
                          {shouldBlockForCredits
                            ? copy.credits.insufficientDescription
                            : copy.credits.readyDescription}
                        </p>
                        {credits.error && (
                          <p className="mt-2 text-xs font-black text-[#c7432a]">
                            {credits.error}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 sm:items-end">
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-white px-3 py-1.5 text-xs font-black text-[#241b13] shadow-sm dark:bg-white/10 dark:text-[#fff8ea]">
                          {copy.credits.balance}: {credits.balance ?? '--'}
                        </span>
                        <span className="rounded-full bg-white px-3 py-1.5 text-xs font-black text-[#241b13] shadow-sm dark:bg-white/10 dark:text-[#fff8ea]">
                          {copy.credits.cost}: {credits.cost}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => router.push(Routes.SettingsCredits)}
                          className="h-9 rounded-full bg-white px-3 text-xs font-black"
                        >
                          {copy.credits.addCredits}
                        </Button>
                        <Button
                          type="button"
                          onClick={() => router.push(Routes.Pricing)}
                          className="h-9 rounded-full bg-[#241b13] px-3 text-xs font-black text-white hover:bg-[#3a2a1b]"
                        >
                          {copy.credits.viewPricing}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[18px] border border-[#241b13]/10 bg-[#fffdf7] p-4 dark:border-white/10 dark:bg-[#17110d]">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <label
                      htmlFor="workbench-idea"
                      className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#8d6a2c]"
                    >
                      <Sparkles className="h-4 w-4" />
                      {copy.hero.ideaLabel}
                    </label>
                    <button
                      type="button"
                      onClick={() => setIdea(copy.hero.fallbackPrompt)}
                      className="inline-flex h-8 items-center gap-1.5 rounded-full bg-[#f6eddf] px-3 text-xs font-black text-[#7a6756] transition hover:bg-[#fff0bd] dark:bg-white/10 dark:text-[#fff8ea]"
                    >
                      <WandSparkles className="h-3.5 w-3.5" />
                      {copy.hero.useExample}
                    </button>
                  </div>
                  <textarea
                    id="workbench-idea"
                    value={idea}
                    onChange={(event) => setIdea(event.target.value)}
                    placeholder={copy.hero.ideaPlaceholder}
                    className="min-h-44 w-full resize-none bg-transparent text-xl font-black outline-none placeholder:text-[#b9a996] dark:text-[#fff8ea] dark:placeholder:text-[#8c7a68]"
                  />
                </div>

                <div className="grid gap-3">
                  <label className="rounded-[18px] border border-[#241b13]/10 bg-[#fffdf7] p-4 dark:border-white/10 dark:bg-[#17110d]">
                    <span className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#8d6a2c]">
                      <Link2 className="h-4 w-4" />
                      {copy.hero.urlLabel}
                    </span>
                    <input
                      value={url}
                      onChange={(event) => setUrl(event.target.value)}
                      placeholder={copy.hero.urlPlaceholder}
                      className="h-11 w-full rounded-full border border-[#241b13]/10 bg-white px-4 text-sm font-bold outline-none placeholder:text-[#b9a996] dark:border-white/10 dark:bg-white/8"
                    />
                  </label>

                  <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                    <SelectPill
                      icon={<Clapperboard className="h-4 w-4" />}
                      label={copy.hero.outputLabel}
                      value={format}
                      options={formats}
                      onChange={setFormat}
                    />
                    <SelectPill
                      icon={<Languages className="h-4 w-4" />}
                      label={copy.hero.outputLabel}
                      value={language}
                      options={languages}
                      onChange={setLanguage}
                    />
                    <Button
                      type="submit"
                      disabled={isCheckingAuth || (isSignedIn && !canGenerate)}
                      className="h-full min-h-16 rounded-[18px] bg-[#241b13] text-base font-black text-white shadow-[0_16px_34px_rgba(36,27,19,0.22)] hover:bg-[#3a2a1b] disabled:bg-[#d8cab8] disabled:text-[#8b7b69]"
                    >
                      {isCheckingAuth || activeJobIsRunning ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : isSignedIn ? (
                        <WandSparkles className="h-4 w-4" />
                      ) : (
                        <UserRoundPlus className="h-4 w-4" />
                      )}
                      {isCheckingAuth
                        ? copy.authGate.checking
                        : !isSignedIn
                          ? copy.authGate.signInCta
                          : shouldBlockForCredits
                            ? copy.credits.addCredits
                            : activeJobIsRunning
                              ? copy.hero.generating
                              : copy.hero.generate}
                    </Button>
                  </div>
                </div>
              </div>

              {mode === 'pro' ? (
                <>
                  <div className="mt-4 rounded-[20px] border border-[#241b13]/10 bg-[#241b13] p-4 text-white shadow-sm">
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-[#ffcf56]">
                      {copy.mode.pro}
                    </p>
                    <h2 className="mt-2 text-xl font-black">
                      {copy.mode.proTitle}
                    </h2>
                    <p className="mt-2 max-w-3xl text-sm font-bold leading-6 text-[#f3e6d2]">
                      {copy.mode.proDescription}
                    </p>
                  </div>

                  <div className="mt-4 grid gap-4 xl:grid-cols-2">
                    <OptionGrid
                      icon={<WandSparkles className="h-4 w-4" />}
                      title={copy.hero.strategyLabel}
                      options={strategyIds.map((id) => ({
                        id,
                        label: copy.strategies[id],
                      }))}
                      value={strategy}
                      onChange={(value) =>
                        setStrategy(value as (typeof strategyIds)[number])
                      }
                    />
                    <OptionGrid
                      icon={<LayoutTemplate className="h-4 w-4" />}
                      title={copy.hero.layoutLabel}
                      options={layoutIds.map((id) => ({
                        id,
                        label: copy.layouts[id],
                      }))}
                      value={layout}
                      onChange={(value) =>
                        setLayout(value as (typeof layoutIds)[number])
                      }
                    />
                  </div>

                  <div className="mt-4 rounded-[20px] border border-[#241b13]/10 bg-[#fffdf7] p-4 dark:border-white/10 dark:bg-[#17110d]">
                    <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                      <div>
                        <h2 className="text-xl font-black">
                          {copy.hero.assetsTitle}
                        </h2>
                        <p className="mt-1 text-sm font-bold text-[#6d5a48] dark:text-[#d6c8b6]">
                          {copy.hero.assetsDescription}
                        </p>
                      </div>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      <UploadTile
                        icon={<ImagePlus className="h-5 w-5" />}
                        asset={files.reference}
                        copy={copy.uploads.reference}
                        actions={copy.assetActions}
                        accept="image/*"
                        onChange={(event) => onFileChange('reference', event)}
                        onRemove={() => removeFile('reference')}
                      />
                      <UploadTile
                        icon={<UserRoundPlus className="h-5 w-5" />}
                        asset={files.portrait}
                        copy={copy.uploads.portrait}
                        actions={copy.assetActions}
                        accept="image/*"
                        onChange={(event) => onFileChange('portrait', event)}
                        onRemove={() => removeFile('portrait')}
                      />
                      <UploadTile
                        icon={<MonitorPlay className="h-5 w-5" />}
                        asset={files.video}
                        copy={copy.uploads.video}
                        actions={copy.assetActions}
                        accept="video/*"
                        onChange={(event) => onFileChange('video', event)}
                        onRemove={() => removeFile('video')}
                      />
                      <UploadTile
                        icon={<FileText className="h-5 w-5" />}
                        asset={files.script}
                        copy={copy.uploads.script}
                        actions={copy.assetActions}
                        accept=".txt,.md,.doc,.docx,.pdf"
                        onChange={(event) => onFileChange('script', event)}
                        onRemove={() => removeFile('script')}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="mt-4 rounded-[20px] border border-[#241b13]/10 bg-[#fff3d6] p-4 dark:border-white/10 dark:bg-white/8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.12em] text-[#8d6a2c]">
                        {copy.mode.simple}
                      </p>
                      <h2 className="mt-2 text-xl font-black">
                        {copy.mode.simpleTitle}
                      </h2>
                      <p className="mt-2 max-w-2xl text-sm font-bold leading-6 text-[#6d5a48] dark:text-[#d6c8b6]">
                        {copy.mode.simpleDescription}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setMode('pro')}
                      className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-[#241b13] px-4 text-sm font-black text-white shadow-sm transition hover:bg-[#3a2a1b] dark:bg-[#fff8ea] dark:text-[#241b13]"
                    >
                      {copy.mode.proCta}
                    </button>
                  </div>
                </div>
              )}
            </form>

            <aside className="rounded-[24px] border border-[#241b13]/10 bg-[#241b13] p-5 text-white shadow-[0_24px_80px_rgba(36,27,19,0.22)]">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ffcf56]">
                ThumbAI
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight">
                {copy.side.title}
              </h2>
              <div className="mt-5 space-y-3">
                {copy.side.items.map((item) => (
                  <div key={item} className="flex gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#7de4d3]" />
                    <p className="text-sm font-bold leading-6 text-[#f3e6d2]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <section className="mt-5 grid gap-5 lg:grid-cols-[1fr_360px]">
            <div className="rounded-[24px] border border-[#241b13]/10 bg-white/86 p-4 shadow-sm dark:border-white/10 dark:bg-white/8">
              <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                <div>
                  <h2 className="text-2xl font-black">
                    {activeJobIsLive
                      ? copy.results.liveTitle
                      : copy.results.title}
                  </h2>
                  <p className="mt-1 text-sm font-bold text-[#6d5a48] dark:text-[#d6c8b6]">
                    {activeJob
                      ? activeJob.idea || activeJob.url
                      : copy.results.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeJob?.providerName && (
                    <span className="rounded-full bg-[#fff0bd] px-3 py-1.5 text-xs font-black uppercase text-[#6b4200]">
                      {activeJob.providerName}
                    </span>
                  )}
                  {activeJob && (
                    <StatusBadge
                      label={copy.history.status[activeJob.status]}
                      status={activeJob.status}
                    />
                  )}
                  <span className="rounded-full bg-[#dff9f4] px-3 py-1.5 text-xs font-black text-[#115b52]">
                    {(activeJob?.format ?? format) || format} &middot;{' '}
                    {activeJob?.language ?? selectedLanguage}
                  </span>
                </div>
              </div>

              {activeJob && (
                <div className="mb-4 grid gap-2 rounded-[18px] border border-[#241b13]/10 bg-[#fffdf7] p-3 text-xs font-black text-[#6d5a48] dark:border-white/10 dark:bg-white/8 dark:text-[#d6c8b6] sm:grid-cols-2 xl:grid-cols-4">
                  <DetailChip
                    label={copy.history.strategy}
                    value={copy.strategies[activeJob.strategy]}
                  />
                  <DetailChip
                    label={copy.history.layout}
                    value={copy.layouts[activeJob.layout]}
                  />
                  <DetailChip
                    label={copy.history.provider}
                    value={activeJob.providerName ?? 'ThumbAI'}
                  />
                  <DetailChip
                    label={copy.history.model}
                    value={activeJob.model ?? activeJob.providerMode ?? 'mock'}
                  />
                </div>
              )}

              {activeJob?.status === 'failed' ? (
                <div className="rounded-[20px] border border-[#d45d3d]/20 bg-[#fff1eb] p-5 dark:border-[#ff8f70]/30 dark:bg-[#2a1510]">
                  <div className="flex items-start gap-3">
                    <XCircle className="mt-1 h-6 w-6 shrink-0 text-[#c7432a]" />
                    <div>
                      <h3 className="text-xl font-black">
                        {copy.history.status.failed}
                      </h3>
                      <p className="mt-2 text-sm font-bold leading-6 text-[#7a3d27] dark:text-[#ffd6c8]">
                        {activeJob.errorMessage ?? copy.history.error}
                      </p>
                      <button
                        type="button"
                        onClick={() => retryJob(activeJob.id)}
                        className="mt-4 inline-flex h-10 items-center gap-2 rounded-full bg-[#241b13] px-4 text-sm font-black text-white"
                      >
                        <RotateCcw className="h-4 w-4" />
                        {copy.history.retry}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid gap-4 lg:grid-cols-3">
                  {activeResults.map((card, index) => (
                    <div
                      key={card.id}
                      className={cn(
                        'overflow-hidden rounded-[18px] border border-[#241b13]/10 bg-white p-2 shadow-sm transition dark:border-white/10 dark:bg-white/8',
                        activeJob?.status === 'completed'
                          ? 'translate-y-0 opacity-100'
                          : activeJobIsRunning
                            ? 'translate-y-1 opacity-55'
                            : 'translate-y-1 opacity-70'
                      )}
                    >
                      <div className="relative aspect-video overflow-hidden rounded-[14px] bg-[#241b13]">
                        {card.imageUrl ? (
                          <img
                            alt={card.headline}
                            className="absolute inset-0 h-full w-full object-cover"
                            src={card.imageUrl}
                          />
                        ) : (
                          <div
                            className={cn(
                              'absolute inset-0 bg-gradient-to-br opacity-90',
                              card.gradient
                            )}
                          />
                        )}
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,27,19,0.86),rgba(36,27,19,0.08),rgba(36,27,19,0.35))]" />
                        {activeJobIsRunning && (
                          <div className="absolute inset-0 flex items-center justify-center bg-[#241b13]/45 backdrop-blur-[2px]">
                            <Loader2 className="h-8 w-8 animate-spin text-white" />
                          </div>
                        )}
                        <div className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#fff0bd] text-lg font-black text-[#241b13]">
                          {index + 1}
                        </div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="mb-2 w-fit rounded-full bg-white px-2 py-1 text-[10px] font-black uppercase text-[#241b13]">
                            {activeJob?.strategy ?? strategy} &middot;{' '}
                            {activeJob?.layout ?? layout}
                          </p>
                          <h3 className="text-2xl font-black leading-none text-white [text-shadow:0_3px_0_#000]">
                            {card.headline}
                          </h3>
                        </div>
                      </div>
                      <div className="px-1 pt-3">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-black">
                            {copy.results.variants[card.id]}
                          </p>
                          <span className="rounded-full bg-[#fff0bd] px-2 py-1 text-xs font-black text-[#6b4200]">
                            {copy.results.score} {card.score}
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {copy.results.checks.map((check) => (
                            <span
                              key={check}
                              className="rounded-full bg-[#f6eddf] px-2 py-1 text-[11px] font-black text-[#7a6756] dark:bg-white/10 dark:text-[#d6c8b6]"
                            >
                              {check}
                            </span>
                          ))}
                        </div>
                        {card.imageUrl && activeJob?.status === 'completed' && (
                          <div className="mt-3 grid gap-2">
                            <a
                              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-[#241b13] px-3 text-xs font-black text-white transition hover:bg-[#3a2a1b] dark:bg-[#fff8ea] dark:text-[#241b13]"
                              href={getExportHref(card, index)}
                            >
                              <Download className="h-3.5 w-3.5" />
                              {copy.results.exportCover}
                            </a>
                            <div className="grid grid-cols-2 gap-2">
                              <a
                                className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-[#241b13]/10 bg-[#fffdf7] px-3 text-xs font-black text-[#241b13] transition hover:bg-[#f6eddf] dark:border-white/10 dark:bg-white/10 dark:text-[#fff8ea]"
                                href={getDownloadHref(card, index)}
                              >
                                <Download className="h-3.5 w-3.5" />
                                {copy.results.download}
                              </a>
                              <a
                                className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-[#241b13]/10 bg-[#fffdf7] px-3 text-xs font-black text-[#241b13] transition hover:bg-[#f6eddf] dark:border-white/10 dark:bg-white/10 dark:text-[#fff8ea]"
                                href={card.imageUrl}
                                rel="noreferrer"
                                target="_blank"
                              >
                                <ExternalLink className="h-3.5 w-3.5" />
                                {copy.results.openImage}
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <aside className="rounded-[24px] border border-[#241b13]/10 bg-white/86 p-4 shadow-sm dark:border-white/10 dark:bg-white/8">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-black">{copy.history.title}</h2>
                  <p className="mt-1 text-xs font-bold leading-5 text-[#6d5a48] dark:text-[#d6c8b6]">
                    {copy.history.description}
                  </p>
                </div>
                {jobs.length > 0 && (
                  <button
                    type="button"
                    onClick={clearHistory}
                    className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-[#f6eddf] px-3 text-xs font-black text-[#7a3d27] transition hover:bg-[#ffe0d0] dark:bg-white/10 dark:text-[#ffd6c8]"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    {copy.history.clear}
                  </button>
                )}
              </div>

              {jobs.length === 0 ? (
                <div className="rounded-[18px] border border-dashed border-[#241b13]/15 bg-[#fffdf7] p-5 text-center text-sm font-bold text-[#7a6756] dark:border-white/15 dark:bg-white/8 dark:text-[#d6c8b6]">
                  {copy.history.empty}
                </div>
              ) : (
                <div className="space-y-2">
                  {jobs.map((job) => (
                    <div
                      key={job.id}
                      onClick={() => setActiveJobId(job.id)}
                      className={cn(
                        'w-full cursor-pointer rounded-[18px] border p-3 text-left transition',
                        job.id === activeJob?.id
                          ? 'border-[#2fb8a8] bg-[#dff9f4] shadow-sm'
                          : 'border-[#241b13]/10 bg-[#fffdf7] hover:bg-[#fff0bd] dark:border-white/10 dark:bg-white/8'
                      )}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="line-clamp-2 text-sm font-black">
                          {job.idea || job.url}
                        </p>
                        <div className="flex shrink-0 items-center gap-1">
                          <StatusBadge
                            label={copy.history.status[job.status]}
                            status={job.status}
                          />
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              void deleteJob(job.id);
                            }}
                            disabled={deletingJobId === job.id}
                            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/75 text-[#7a3d27] transition hover:bg-[#ffe0d0] disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white/10 dark:text-[#ffd6c8]"
                            title={copy.history.delete}
                          >
                            {deletingJobId === job.id ? (
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />
                            ) : (
                              <Trash2 className="h-3.5 w-3.5" />
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] font-black text-[#7a6756]">
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2 py-1">
                          <Clock3 className="h-3 w-3" />
                          {copy.history.created} {formatJobTime(job.createdAt)}
                        </span>
                        <span className="rounded-full bg-white/70 px-2 py-1">
                          {job.format} &middot; {job.language}
                        </span>
                        <span className="rounded-full bg-white/70 px-2 py-1">
                          {copy.history.assets}: {job.assetsCount}
                        </span>
                      </div>
                      {job.status === 'failed' && (
                        <div className="mt-3 flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-[#9d3a24]">
                            {job.errorMessage ?? copy.history.error}
                          </span>
                          <span
                            onClick={(event) => {
                              event.stopPropagation();
                              retryJob(job.id);
                            }}
                            className="inline-flex h-8 items-center gap-1 rounded-full bg-[#241b13] px-3 text-xs font-black text-white"
                          >
                            <RotateCcw className="h-3.5 w-3.5" />
                            {copy.history.retry}
                          </span>
                        </div>
                      )}
                      {job.id === activeJob?.id && (
                        <div className="mt-3 rounded-[14px] border border-[#2fb8a8]/25 bg-white/75 p-3 dark:border-white/10 dark:bg-white/8">
                          <div className="mb-2 flex items-center justify-between gap-2">
                            <p className="text-[11px] font-black uppercase tracking-[0.1em] text-[#115b52]">
                              {copy.history.active}
                            </p>
                            <p className="text-[11px] font-black uppercase tracking-[0.1em] text-[#8d6a2c]">
                              {copy.history.details}
                            </p>
                          </div>
                          <div className="space-y-2 text-xs font-bold leading-5 text-[#6d5a48] dark:text-[#d6c8b6]">
                            <HistoryDetail
                              label={copy.history.prompt}
                              value={job.idea || job.url}
                            />
                            {job.url && (
                              <HistoryDetail
                                label={copy.history.source}
                                value={job.url}
                              />
                            )}
                            <HistoryDetail
                              label={copy.history.strategy}
                              value={copy.strategies[job.strategy]}
                            />
                            <HistoryDetail
                              label={copy.history.layout}
                              value={copy.layouts[job.layout]}
                            />
                            <HistoryDetail
                              label={copy.history.provider}
                              value={job.providerName ?? 'ThumbAI'}
                            />
                            <HistoryDetail
                              label={copy.history.model}
                              value={job.model ?? job.providerMode ?? 'mock'}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </aside>
          </section>
        </div>
      </section>
    </main>
  );
}

function DetailChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-[14px] bg-white/75 px-3 py-2 dark:bg-white/8">
      <p className="text-[10px] uppercase tracking-[0.12em] text-[#8d6a2c]">
        {label}
      </p>
      <p className="mt-1 truncate text-[#241b13] dark:text-[#fff8ea]">
        {value}
      </p>
    </div>
  );
}

function HistoryDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[78px_1fr]">
      <span className="text-[11px] font-black uppercase tracking-[0.1em] text-[#8d6a2c]">
        {label}
      </span>
      <span className="min-w-0 break-words">{value}</span>
    </div>
  );
}

function SelectPill({
  icon,
  label,
  value,
  options,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  options: { id: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="rounded-[18px] border border-[#241b13]/10 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/8">
      <span className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#8d6a2c]">
        {icon}
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 w-full rounded-full border border-[#241b13]/10 bg-[#fffdf7] px-3 text-sm font-black outline-none dark:border-white/10 dark:bg-[#17110d]"
      >
        {options.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function OptionGrid({
  icon,
  title,
  options,
  value,
  onChange,
}: {
  icon: React.ReactNode;
  title: string;
  options: { id: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="rounded-[20px] border border-[#241b13]/10 bg-[#fffdf7] p-4 dark:border-white/10 dark:bg-[#17110d]">
      <h2 className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#8d6a2c]">
        {icon}
        {title}
      </h2>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            className={cn(
              'min-h-11 rounded-[14px] px-3 py-2 text-left text-sm font-black leading-tight transition',
              value === item.id
                ? 'bg-[#dff9f4] text-[#115b52] shadow-sm'
                : 'bg-white text-[#6d5a48] hover:bg-[#fff0bd] dark:bg-white/8 dark:text-[#d6c8b6]'
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function StatusBadge({ label, status }: { label: string; status: JobStatus }) {
  return (
    <span
      className={cn(
        'inline-flex h-7 shrink-0 items-center gap-1.5 rounded-full px-2.5 text-[11px] font-black',
        status === 'queued' && 'bg-[#fff0bd] text-[#7b4b00]',
        status === 'generating' && 'bg-[#dff9f4] text-[#115b52]',
        status === 'completed' && 'bg-[#d9f7d7] text-[#245b1f]',
        status === 'failed' && 'bg-[#ffe0d0] text-[#9d3a24]'
      )}
    >
      {status === 'generating' ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      ) : status === 'failed' ? (
        <XCircle className="h-3.5 w-3.5" />
      ) : status === 'completed' ? (
        <BadgeCheck className="h-3.5 w-3.5" />
      ) : (
        <Clock3 className="h-3.5 w-3.5" />
      )}
      {label}
    </span>
  );
}

function UploadTile({
  icon,
  copy,
  asset,
  actions,
  accept,
  onChange,
  onRemove,
}: {
  icon: React.ReactNode;
  copy: { title: string; description: string; cta: string };
  asset: AssetFile | null;
  actions: { remove: string; ready: string; reading: string };
  accept: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
}) {
  return (
    <div className="rounded-[18px] border border-dashed border-[#241b13]/20 bg-white p-3 transition hover:-translate-y-0.5 hover:border-[#2fb8a8] hover:bg-[#f5fffc] dark:border-white/15 dark:bg-white/8">
      <label className="group block cursor-pointer">
        <input
          type="file"
          accept={accept}
          className="sr-only"
          onChange={onChange}
        />
        <span className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#dff9f4] text-[#115b52]">
            {asset ? <BadgeCheck className="h-5 w-5" /> : icon}
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-black">{copy.title}</span>
            <span className="mt-1 block text-xs font-bold leading-5 text-[#6d5a48] dark:text-[#d6c8b6]">
              {asset ? `${asset.name} · ${asset.size}` : copy.description}
            </span>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-black text-[#247d73]">
              <Upload className="h-3.5 w-3.5" />
              {copy.cta}
            </span>
          </span>
        </span>
      </label>

      {asset && (
        <div className="mt-3 overflow-hidden rounded-[14px] border border-[#241b13]/10 bg-[#fffdf7] dark:border-white/10 dark:bg-[#17110d]">
          {asset.type === 'image' && asset.previewUrl && (
            <img
              src={asset.previewUrl}
              alt={asset.name}
              className="aspect-video w-full object-cover"
            />
          )}
          {asset.type === 'video' && asset.previewUrl && (
            <video
              src={asset.previewUrl}
              className="aspect-video w-full object-cover"
              muted
              controls
            />
          )}
          {asset.type === 'script' && (
            <pre className="max-h-28 whitespace-pre-wrap p-3 text-xs font-bold leading-5 text-[#6d5a48] dark:text-[#d6c8b6]">
              {asset.summary || actions.ready}
            </pre>
          )}
          {asset.type === 'file' && (
            <div className="flex items-center gap-3 p-3 text-xs font-bold text-[#6d5a48] dark:text-[#d6c8b6]">
              <FileText className="h-4 w-4 text-[#247d73]" />
              {actions.ready}
            </div>
          )}
          <div className="flex items-center justify-between gap-3 border-[#241b13]/10 border-t px-3 py-2 dark:border-white/10">
            <span className="truncate text-xs font-black text-[#247d73]">
              {asset.name}
            </span>
            <button
              type="button"
              onClick={onRemove}
              className="rounded-full bg-[#f6eddf] px-3 py-1 text-xs font-black text-[#7a3d27] transition hover:bg-[#ffe0d0] dark:bg-white/10 dark:text-[#ffd6c8]"
            >
              {actions.remove}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
