import Container from '@/components/layout/container';
import { buttonVariants } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { Routes } from '@/routes';
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  BookOpenIcon,
  BoxesIcon,
  CompassIcon,
  MapIcon,
  RadioIcon,
  SearchIcon,
  StarIcon,
  TimerResetIcon,
  WrenchIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Locale } from 'next-intl';

type HomeLink = {
  title: string;
  description: string;
  href: Routes;
  icon?: LucideIcon;
  label?: string;
};

type HomeCopy = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  latestTitle: string;
  latestHeading: string;
  latestDescription: string;
  latestLinks: HomeLink[];
  openLabel: string;
  popularTitle: string;
  popularDescription: string;
  popularLinks: HomeLink[];
  coreTitle: string;
  coreDescription: string;
  coreLinks: HomeLink[];
  stats: Array<[string, string]>;
  disclaimerTitle: string;
  disclaimerBody: string;
};

const enCopy: HomeCopy = {
  eyebrow: 'Subnautica 2 guide hub',
  title: 'Routes, resources, and patch notes for the alien ocean.',
  description:
    'Abyss Guides is a practical Subnautica 2 guide hub. Start with a route, check the material chain, then jump to the newest Early Access changes before you waste another dive.',
  primaryCta: 'Open Subnautica 2 hub',
  secondaryCta: 'Find a resource',
  latestTitle: 'Latest checks',
  latestHeading: 'Patch-sensitive pages first',
  latestDescription:
    'Patch-sensitive pages stay close to the top because Early Access changes can move resources, recipes, and route priorities.',
  openLabel: 'Open',
  latestLinks: [
    {
      title: 'Hotfix 2 tracker',
      description:
        'Silver, oxygen, co-op, and early route notes after the latest checked hotfix.',
      href: Routes.Subnautica2Hotfix2,
      icon: TimerResetIcon,
      label: 'Latest',
    },
    {
      title: 'Silver after Hotfix 2',
      description:
        'A focused route for the material that blocks Scanner, Wiring Kit, and tank progress.',
      href: Routes.Subnautica2SilverAfterHotfix2,
      icon: AlertTriangleIcon,
      label: 'Updated',
    },
    {
      title: 'Troilite after Hotfix 2',
      description:
        'Deep-resource notes for players checking late crafting routes again.',
      href: Routes.Subnautica2TroiliteAfterHotfix2,
      icon: CompassIcon,
      label: 'Updated',
    },
  ],
  popularTitle: 'Popular right now',
  popularDescription:
    'These are the pages players are most likely to need in the first few sessions or while pushing into Alien Ruins.',
  popularLinks: [
    {
      title: 'Beginner route',
      description:
        'First-hour priorities, safe loops, scanning habits, and low-spoiler survival notes.',
      href: Routes.Subnautica2Beginner,
      icon: CompassIcon,
      label: 'Start here',
    },
    {
      title: 'Oxygen and depth',
      description:
        'When to dive deeper, when to turn back, and how to plan scan routes.',
      href: Routes.Subnautica2OxygenDepth,
      icon: RadioIcon,
      label: 'Survival',
    },
    {
      title: 'Scanner and Bioscanner',
      description:
        'Blueprint priority, Bioscanner route notes, and Biomod scan planning.',
      href: Routes.Subnautica2Scanner,
      icon: SearchIcon,
      label: 'Blueprints',
    },
    {
      title: 'Axum Vision',
      description:
        'Second Angel Comb, Bloom Nodes, Power Plant screens, and alien glyphs.',
      href: Routes.Subnautica2AxumVision,
      icon: StarIcon,
      label: 'Alien route',
    },
  ],
  coreTitle: 'Core guide sections',
  coreDescription:
    'The site is built around repeatable guide work: routes first, resources second, crafting and map planning after that.',
  coreLinks: [
    {
      title: 'Resources',
      description:
        'Material locations, farming notes, and page-by-page resource checks.',
      href: Routes.Subnautica2Resources,
      icon: BoxesIcon,
    },
    {
      title: 'Crafting',
      description:
        'Recipe chains, blueprint unlocks, and the base for future calculators.',
      href: Routes.Subnautica2Crafting,
      icon: WrenchIcon,
    },
    {
      title: 'Map and biomes',
      description:
        'Route-first map planning for base spots, risk zones, and resource loops.',
      href: Routes.Subnautica2Map,
      icon: MapIcon,
    },
  ],
  stats: [
    ['47', 'indexed Japanese pages'],
    ['Hotfix 2', 'latest tracked update'],
    ['8', 'search locales'],
  ],
  disclaimerTitle: 'Independent fan guide',
  disclaimerBody:
    'Abyss Guides is not an official Subnautica 2 site. We use original writing and original artwork, and we link source notes when Early Access information may change.',
};

const zhCopy: HomeCopy = {
  eyebrow: 'Subnautica 2 攻略中心',
  title: '给深海玩家看的路线、资源和补丁笔记。',
  description:
    'Abyss Guides 不是模板站。它的核心就是 Subnautica 2 攻略资料库：先找路线，再查材料链，最后看最新补丁有没有改动。',
  primaryCta: '进入攻略中心',
  secondaryCta: '查资源',
  latestTitle: '最新核对',
  latestHeading: '把补丁相关内容放在最前面',
  latestDescription:
    '抢先体验阶段变化很快，所以补丁相关页面要放在首页。资源位置、配方和路线优先级都可能跟着变。',
  openLabel: '打开',
  latestLinks: [
    {
      title: 'Hotfix 2 追踪',
      description: '银、氧气、联机和开局路线的最新核对笔记。',
      href: Routes.Subnautica2Hotfix2,
      icon: TimerResetIcon,
      label: '最新',
    },
    {
      title: 'Hotfix 2 后的 Silver',
      description: 'Scanner、Wiring Kit、气瓶进度最容易卡在这里。',
      href: Routes.Subnautica2SilverAfterHotfix2,
      icon: AlertTriangleIcon,
      label: '已更新',
    },
    {
      title: 'Hotfix 2 后的 Troilite',
      description: '后期制作和深层资源路线复查，避免按旧攻略白跑。',
      href: Routes.Subnautica2TroiliteAfterHotfix2,
      icon: CompassIcon,
      label: '已更新',
    },
  ],
  popularTitle: '热门内容',
  popularDescription:
    '这些页面更适合放首页：新玩家会查，推进 Alien Ruins 的玩家也会反复回来用。',
  popularLinks: [
    {
      title: '新手路线',
      description: '开局优先级、安全循环、扫描习惯和低剧透生存建议。',
      href: Routes.Subnautica2Beginner,
      icon: CompassIcon,
      label: '先看',
    },
    {
      title: '氧气和深度',
      description: '什么时候继续下潜，什么时候回头，扫描路线怎么留氧气。',
      href: Routes.Subnautica2OxygenDepth,
      icon: RadioIcon,
      label: '生存',
    },
    {
      title: 'Scanner 和 Bioscanner',
      description: '蓝图扫描顺序、Bioscanner 位置和 Biomod 扫描规划。',
      href: Routes.Subnautica2Scanner,
      icon: SearchIcon,
      label: '蓝图',
    },
    {
      title: 'Axum Vision',
      description:
        '第二个 Angel Comb、Bloom Nodes、Power Plant 屏幕和外星 glyph。',
      href: Routes.Subnautica2AxumVision,
      icon: StarIcon,
      label: '外星路线',
    },
  ],
  coreTitle: '核心栏目',
  coreDescription:
    '首页只保留真正有用的入口：路线、资源、制作、地图。不相关的 SaaS 模板入口不要抢位置。',
  coreLinks: [
    {
      title: '资源',
      description: '材料位置、采集思路和单项资源页。',
      href: Routes.Subnautica2Resources,
      icon: BoxesIcon,
    },
    {
      title: '制作',
      description: '配方链、蓝图解锁，以及后续制作计算器的数据基础。',
      href: Routes.Subnautica2Crafting,
      icon: WrenchIcon,
    },
    {
      title: '地图和生态区',
      description: '建家点、危险区域、资源循环和路线规划。',
      href: Routes.Subnautica2Map,
      icon: MapIcon,
    },
  ],
  stats: [
    ['47', '日语可索引页'],
    ['Hotfix 2', '最新追踪'],
    ['8', '搜索语言'],
  ],
  disclaimerTitle: '独立玩家攻略站',
  disclaimerBody:
    'Abyss Guides 不是 Subnautica 2 官方网站。我们使用原创文字和原创视觉图，涉及抢先体验变化的内容会保留来源说明。',
};

const jaCopy: HomeCopy = {
  eyebrow: 'Subnautica 2攻略ハブ',
  title: '深海探索のルート、素材、アップデートメモ。',
  description:
    'Abyss GuidesはSubnautica 2の実用攻略ハブです。まずルートを決め、素材チェーンを確認し、Early Accessの変更点を見てから潜ります。',
  primaryCta: '攻略ハブを開く',
  secondaryCta: '資源を探す',
  latestTitle: '最新チェック',
  latestHeading: 'パッチに関係するページを先に',
  latestDescription:
    'Early Accessでは資源、レシピ、進行ルートが変わることがあります。パッチに関係するページを上に置いています。',
  openLabel: '開く',
  latestLinks: [
    {
      title: 'Hotfix 2まとめ',
      description: 'Silver、酸素、協力プレイ、序盤ルートの確認メモ。',
      href: Routes.Subnautica2Hotfix2,
      icon: TimerResetIcon,
      label: '最新',
    },
    {
      title: 'Hotfix 2後のSilver',
      description: 'Scanner、Wiring Kit、酸素タンクで詰まりやすい素材。',
      href: Routes.Subnautica2SilverAfterHotfix2,
      icon: AlertTriangleIcon,
      label: '更新',
    },
    {
      title: 'Hotfix 2後のTroilite',
      description: '深部資源と後半クラフトを再確認するページ。',
      href: Routes.Subnautica2TroiliteAfterHotfix2,
      icon: CompassIcon,
      label: '更新',
    },
  ],
  popularTitle: 'よく使う攻略',
  popularDescription:
    '序盤の迷いどころとAlien Ruins方面の重要ルートを先に置いています。',
  popularLinks: [
    {
      title: '初心者ルート',
      description:
        '最初の優先度、安全な周回、スキャン習慣、低ネタバレの生存メモ。',
      href: Routes.Subnautica2Beginner,
      icon: CompassIcon,
      label: '最初に読む',
    },
    {
      title: '酸素と深度',
      description: '深く潜る判断、引き返すタイミング、スキャン時の酸素計画。',
      href: Routes.Subnautica2OxygenDepth,
      icon: RadioIcon,
      label: '生存',
    },
    {
      title: 'スキャナー',
      description: '設計図の優先度、Bioscannerルート、Biomodスキャン。',
      href: Routes.Subnautica2Scanner,
      icon: SearchIcon,
      label: '設計図',
    },
    {
      title: 'Axum Vision',
      description: '2つ目のAngel Comb、Bloom Node、Power Plant画面。',
      href: Routes.Subnautica2AxumVision,
      icon: StarIcon,
      label: 'Alien',
    },
  ],
  coreTitle: '中心コンテンツ',
  coreDescription:
    'ルート、資源、クラフト、マップ。この4つを中心に、余計なテンプレート要素を減らしています。',
  coreLinks: [
    {
      title: '資源',
      description: '素材の場所、採集メモ、個別資源ページ。',
      href: Routes.Subnautica2Resources,
      icon: BoxesIcon,
    },
    {
      title: 'クラフト',
      description: 'レシピチェーン、設計図、将来の計算ツール用データ。',
      href: Routes.Subnautica2Crafting,
      icon: WrenchIcon,
    },
    {
      title: 'マップとバイオーム',
      description: '拠点候補、危険エリア、資源ルート、探索計画。',
      href: Routes.Subnautica2Map,
      icon: MapIcon,
    },
  ],
  stats: [
    ['47', '日本語インデックス対象'],
    ['Hotfix 2', '追跡中'],
    ['8', '検索ロケール'],
  ],
  disclaimerTitle: '独立ファンガイド',
  disclaimerBody:
    'Abyss GuidesはSubnautica 2公式サイトではありません。文章とビジュアルは独自制作で、Early Access情報には確認日とソースメモを残します。',
};

function getHomeCopy(locale?: Locale): HomeCopy {
  if (locale === 'zh') {
    return zhCopy;
  }

  if (locale === 'ja') {
    return jaCopy;
  }

  return enCopy;
}

function LinkCard({
  item,
  openLabel,
  compact = false,
}: {
  item: HomeLink;
  openLabel: string;
  compact?: boolean;
}) {
  const Icon = item.icon ?? BookOpenIcon;

  return (
    <LocaleLink
      href={item.href}
      className={cn(
        'group block border border-cyan-200/12 bg-[#08252a]/92 p-5 transition hover:-translate-y-0.5 hover:border-cyan-200/45 hover:bg-[#0a3036]',
        compact && 'p-4'
      )}
    >
      <div className="flex min-h-8 items-center justify-between gap-3">
        <Icon className="size-5 shrink-0 text-[#78ead7]" />
        {item.label ? (
          <span className="shrink-0 border border-[#f08b4f]/35 bg-[#f08b4f]/10 px-2 py-1 text-xs font-semibold text-[#ffc4a1]">
            {item.label}
          </span>
        ) : null}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-[#f0fffb]">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#a8c6c0]">
        {item.description}
      </p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#78ead7]">
        {openLabel}
        <ArrowRightIcon className="size-4 transition group-hover:translate-x-1" />
      </span>
    </LocaleLink>
  );
}

export function AbyssHome({ locale }: { locale?: Locale }) {
  const copy = getHomeCopy(locale);

  return (
    <main className="min-h-screen bg-[#031314] text-[#dff8f0] dark:bg-[#031314] dark:text-[#dff8f0]">
      <section className="relative overflow-hidden border-b border-cyan-200/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center md:bg-right"
          style={{
            backgroundImage: "url('/abyss/chibi-deep-sea-hero.webp')",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,12,18,.98)_0%,rgba(2,20,27,.9)_39%,rgba(2,20,27,.42)_69%,rgba(1,12,18,.18)_100%),linear-gradient(180deg,rgba(3,19,20,.08),rgba(1,9,12,.96))]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(106, 240, 224, .16) 1px, transparent 1px), linear-gradient(90deg, rgba(106, 240, 224, .16) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        <Container className="relative px-4 py-16 md:py-24">
          <div className="max-w-[820px]">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <RadioIcon className="size-4" />
              {copy.eyebrow}
            </div>
            <h1 className="max-w-5xl text-balance font-semibold text-5xl leading-[1.02] tracking-normal text-[#e8fff9] md:text-7xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#a9c9c3]">
              {copy.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LocaleLink
                href={Routes.Subnautica2}
                className={cn(buttonVariants({ size: 'lg' }), 'rounded-md')}
              >
                {copy.primaryCta}
              </LocaleLink>
              <LocaleLink
                href={Routes.Subnautica2Resources}
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'rounded-md border-cyan-200/25 bg-cyan-100/5 text-cyan-50 hover:bg-cyan-100/10'
                )}
              >
                {copy.secondaryCta}
              </LocaleLink>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-2">
              {copy.stats.map(([value, label]) => (
                <div
                  className="border border-cyan-200/14 bg-[#020d12]/70 p-3"
                  key={label}
                >
                  <div className="text-xl font-semibold text-[#e8fff9]">
                    {value}
                  </div>
                  <div className="mt-1 text-xs leading-4 text-[#9fbdb6]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-cyan-200/10 bg-[#071f23]">
        <Container className="px-4 py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bf6f45]">
              {copy.latestTitle}
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              {copy.latestHeading}
            </h2>
            <p className="mt-4 text-[#abc8c3]">{copy.latestDescription}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.latestLinks.map((item) => (
              <LinkCard
                item={item}
                key={item.href}
                openLabel={copy.openLabel}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-cyan-200/10 bg-[#031314]">
        <Container className="px-4 py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#78ead7]">
              {copy.popularTitle}
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              {copy.popularTitle}
            </h2>
            <p className="mt-4 text-[#abc8c3]">{copy.popularDescription}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {copy.popularLinks.map((item) => (
              <LinkCard
                compact
                item={item}
                key={item.href}
                openLabel={copy.openLabel}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-cyan-200/10 bg-[#071f23]">
        <Container className="px-4 py-14">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <BookOpenIcon className="mb-5 size-8 text-[#f08b4f]" />
              <h2 className="text-3xl font-semibold">{copy.coreTitle}</h2>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                {copy.coreDescription}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {copy.coreLinks.map((item) => (
                <LinkCard
                  compact
                  item={item}
                  key={item.href}
                  openLabel={copy.openLabel}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#031314]">
        <Container className="px-4 py-12">
          <div className="max-w-3xl border-l border-[#f08b4f]/40 pl-5">
            <h2 className="text-2xl font-semibold">{copy.disclaimerTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-[#b5c9c4]">
              {copy.disclaimerBody}
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
