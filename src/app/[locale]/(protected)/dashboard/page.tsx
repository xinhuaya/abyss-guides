import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LocaleLink } from '@/i18n/navigation';
import { Routes } from '@/routes';
import {
  ArrowRightIcon,
  ImageIcon,
  LanguagesIcon,
  SparklesIcon,
  WandSparklesIcon,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

const dashboardCopy = {
  en: {
    eyebrow: 'ThumbAI Studio',
    title: 'Your thumbnail workspace is ready',
    description:
      'Start with a title or hook, add an optional reference image, then generate click-ready directions for YouTube thumbnails.',
    primaryCta: 'Open Thumbnail Maker',
    secondaryCta: 'View pricing',
    statusTitle: 'Setup status',
    statusDescription: 'The core launch stack is connected.',
    nextTitle: 'What to do next',
    nextDescription:
      'Run one signed-in generation, review the output quality, then we can wire history and billing into the product flow.',
    stats: [
      ['Auth', 'Google login works'],
      ['Storage', 'R2 uploads ready'],
      ['Generation', 'Replicate configured'],
    ],
    steps: [
      'Generate a live thumbnail from the workbench',
      'Confirm generated images save to R2',
      'Replace mock dashboard data with real generation history',
    ],
    cards: [
      {
        title: 'Fast brief',
        description:
          'Use the lightweight homepage flow when users just want a quick thumbnail direction.',
      },
      {
        title: 'Pro workbench',
        description:
          'Use the full tool for URL, reference image, portrait, video, script, language, and format controls.',
      },
      {
        title: 'Global output',
        description:
          'Keep UI language separate from thumbnail text language so creators can target different markets.',
      },
    ],
  },
  zh: {
    eyebrow: 'ThumbAI 工作室',
    title: '你的封面工作台已经准备好了',
    description:
      '输入标题或视频钩子，可选添加参考图，然后生成适合 YouTube 点击的封面方向。',
    primaryCta: '打开封面生成器',
    secondaryCta: '查看价格',
    statusTitle: '配置状态',
    statusDescription: '核心上线链路已经接通。',
    nextTitle: '下一步做什么',
    nextDescription:
      '先跑一次登录后的真实生成，确认输出质量，然后继续接生成历史和付费流程。',
    stats: [
      ['登录', 'Google 登录已可用'],
      ['存储', 'R2 上传已就绪'],
      ['生成', 'Replicate 已配置'],
    ],
    steps: [
      '在工作台生成一次真实封面',
      '确认生成图片能保存到 R2',
      '把模板数据替换成真实生成历史',
    ],
    cards: [
      {
        title: '快速需求',
        description: '首页保留轻量流程，适合用户快速输入文案并得到封面方向。',
      },
      {
        title: '专业工作台',
        description:
          '完整工具承接链接、参考图、头像、视频、脚本、语言和尺寸控制。',
      },
      {
        title: '全球输出',
        description: '界面语言和封面文字语言分开，方便创作者面向不同市场。',
      },
    ],
  },
};

export default function DashboardPage() {
  const locale = useLocale();
  const t = useTranslations();
  const copy = locale.startsWith('zh') ? dashboardCopy.zh : dashboardCopy.en;

  const breadcrumbs = [
    {
      label: t('Dashboard.dashboard.title'),
      isCurrentPage: true,
    },
  ];

  const cardIcons = [SparklesIcon, WandSparklesIcon, LanguagesIcon];

  return (
    <>
      <DashboardHeader breadcrumbs={breadcrumbs} />

      <main className="flex flex-1 flex-col gap-5 p-4 lg:p-6">
        <section className="overflow-hidden rounded-3xl border bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.28),transparent_34%),linear-gradient(135deg,#fffaf0,#ffffff_54%,#f4fffb)] p-5 shadow-sm lg:p-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <Badge className="w-fit rounded-full bg-teal-100 px-3 py-1 text-teal-800 hover:bg-teal-100">
                <SparklesIcon className="size-3.5" />
                {copy.eyebrow}
              </Badge>
              <div className="space-y-3">
                <h1 className="text-balance font-black text-3xl tracking-tight md:text-5xl">
                  {copy.title}
                </h1>
                <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                  {copy.description}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild className="h-10 rounded-full px-4">
                <LocaleLink href={Routes.ThumbnailMaker}>
                  <WandSparklesIcon className="size-4" />
                  {copy.primaryCta}
                </LocaleLink>
              </Button>
              <Button
                asChild
                className="h-10 rounded-full px-4"
                variant="outline"
              >
                <LocaleLink href={Routes.Pricing}>
                  {copy.secondaryCta}
                </LocaleLink>
              </Button>
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>{copy.statusTitle}</CardTitle>
              <CardDescription>{copy.statusDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-3">
                {copy.stats.map(([label, value]) => (
                  <div
                    className="rounded-2xl border bg-background/70 p-4"
                    key={label}
                  >
                    <div className="text-muted-foreground text-xs uppercase">
                      {label}
                    </div>
                    <div className="mt-2 font-semibold">{value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>{copy.nextTitle}</CardTitle>
              <CardDescription>{copy.nextDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {copy.steps.map((step, index) => (
                  <div className="flex items-center gap-3" key={step}>
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-900 text-xs">
                      {index + 1}
                    </span>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {copy.cards.map((card, index) => {
            const Icon = cardIcons[index] || ImageIcon;
            return (
              <Card className="rounded-2xl" key={card.title}>
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-2xl bg-teal-100 text-teal-900">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                {index === 1 && (
                  <CardContent>
                    <Button asChild size="sm" variant="outline">
                      <LocaleLink href={Routes.ThumbnailMaker}>
                        {copy.primaryCta}
                        <ArrowRightIcon className="size-3.5" />
                      </LocaleLink>
                    </Button>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </section>
      </main>
    </>
  );
}
