import Container from '@/components/layout/container';
import { buttonVariants } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { getBaseUrl, getUrlWithLocale } from '@/lib/urls';
import { cn } from '@/lib/utils';
import { Routes } from '@/routes';
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  BookOpenIcon,
  BoxesIcon,
  CalendarDaysIcon,
  CompassIcon,
  Gamepad2Icon,
  MapIcon,
  MapPinIcon,
  MonitorPlayIcon,
  RadioIcon,
  SearchIcon,
  ShipWheelIcon,
  TimerResetIcon,
  UsersRoundIcon,
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
  titleLines?: string[];
  description: string;
  primaryCta: string;
  secondaryCta: string;
  latestTitle: string;
  latestHeading: string;
  latestDescription: string;
  latestLinks: HomeLink[];
  openLabel: string;
  platformTitle: string;
  platformHeading: string;
  platformDescription: string;
  platformLinks: HomeLink[];
  popularTitle: string;
  popularHeading: string;
  popularDescription: string;
  popularLinks: HomeLink[];
  coreTitle: string;
  coreDescription: string;
  coreLinks: HomeLink[];
  stats: Array<[string, string]>;
  disclaimerTitle: string;
  disclaimerBody: string;
};

type MissionLink = HomeLink & {
  meta: string;
};

type ResourcePill = {
  label: string;
  href: Routes;
  group: string;
};

const homeImageByRoute: Partial<Record<Routes, string>> = {
  [Routes.Subnautica2Beginner]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Hotfix2]: '/abyss/chibi-update-console.webp',
  [Routes.Subnautica2ReleaseDate]: '/abyss/chibi-platform-briefing.webp',
  [Routes.Subnautica2InteractiveMap]: '/abyss/chibi-map-exploration.webp',
  [Routes.Subnautica2CoopPlayerCount]: '/abyss/chibi-coop-signal.webp',
  [Routes.Subnautica2MultiplayerLagDesync]:
    '/abyss/chibi-multiplayer-lag-desync.webp',
  [Routes.Subnautica2SilverAfterHotfix2]: '/abyss/chibi-update-console.webp',
  [Routes.Subnautica2XboxGamePass]: '/abyss/chibi-platform-briefing.webp',
  [Routes.Subnautica2SystemRequirements]: '/abyss/chibi-platform-briefing.webp',
  [Routes.Subnautica2BlackScreenFreezing]:
    '/abyss/chibi-black-screen-freezing.webp',
  [Routes.Subnautica2BestSettingsLowFps]:
    '/abyss/chibi-best-settings-low-fps.webp',
  [Routes.Subnautica2EarlyAccessWorthIt]: '/abyss/chibi-platform-briefing.webp',
  [Routes.Subnautica2Crossplay]: '/abyss/chibi-coop-signal.webp',
  [Routes.Subnautica2Ps5ReleaseDate]: '/abyss/chibi-platform-briefing.webp',
  [Routes.Subnautica2OxygenDepth]: '/abyss/chibi-oxygen-depth.webp',
  [Routes.Subnautica2Scanner]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Resources]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2Vehicles]: '/abyss/chibi-vehicle-route.webp',
  [Routes.Subnautica2CreaturesLeviathans]: '/abyss/chibi-creature-risk.webp',
  [Routes.Subnautica2BaseLocationTierList]: '/abyss/chibi-base-location.webp',
  [Routes.Subnautica2MapSizeBiomes]: '/abyss/chibi-map-exploration.webp',
  [Routes.Subnautica2Crafting]: '/abyss/chibi-crafting-bench.webp',
  [Routes.Subnautica2Map]: '/abyss/chibi-map-exploration.webp',
  [Routes.Subnautica2Silver]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2Troilite]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2Atacamite]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2Mangalloy]: '/abyss/chibi-resource-scan.webp',
  [Routes.Subnautica2Tadpole]: '/abyss/chibi-vehicle-route.webp',
  [Routes.Subnautica2Hotfix3]: '/abyss/chibi-update-console.webp',
};

const enCopy: HomeCopy = {
  eyebrow: 'Subnautica 2 guide hub',
  title: 'Start routes, live notes, and quick answers for Subnautica 2.',
  titleLines: [
    'Start routes, live notes,',
    'and quick answers for Subnautica 2.',
  ],
  description:
    'Abyss Guides puts the pages players actually search for at the front: what to do first, what changed in the latest hotfix, where to find key materials, and which platform details are confirmed.',
  primaryCta: 'Start the beginner route',
  secondaryCta: 'Find a resource',
  latestTitle: 'Homepage focus',
  latestHeading: 'The nine pages players need first',
  latestDescription:
    'This front page is built around search intent, not filler. New players need a route, returning players need update notes, and undecided players need platform answers before they buy or install.',
  openLabel: 'Open',
  latestLinks: [
    {
      title: 'Beginner route',
      description:
        'First-hour priorities, safe loops, scanning habits, and low-spoiler survival notes.',
      href: Routes.Subnautica2Beginner,
      icon: CompassIcon,
      label: 'Start here',
    },
    {
      title: 'Hotfix 3 tracker',
      description:
        'DLSS 4.5, Tadpole parking, creature behavior, base costs, and co-op notes after the latest checked hotfix.',
      href: Routes.Subnautica2Hotfix3,
      icon: TimerResetIcon,
      label: 'Latest',
    },
    {
      title: 'Release date and platforms',
      description:
        'Early Access date, Steam, Xbox, Game Pass, PS5 searches, and what is confirmed.',
      href: Routes.Subnautica2ReleaseDate,
      icon: CalendarDaysIcon,
      label: 'Platforms',
    },
    {
      title: 'Best settings for low FPS',
      description:
        'A careful settings order for low FPS, stutter, frame caps, DLSS, handheld heat, and co-op load.',
      href: Routes.Subnautica2BestSettingsLowFps,
      icon: MonitorPlayIcon,
      label: 'Settings',
    },
    {
      title: 'Black screen and freezing',
      description:
        'A practical checklist for black screens, frozen loads, stutter, DLSS retesting, files, saves, co-op, and handheld heat.',
      href: Routes.Subnautica2BlackScreenFreezing,
      icon: MonitorPlayIcon,
      label: 'Fix',
    },
    {
      title: 'Interactive map',
      description:
        'Map-size questions, confirmed map details, and how to plan routes before full tools arrive.',
      href: Routes.Subnautica2InteractiveMap,
      icon: MapIcon,
      label: 'Map',
    },
    {
      title: 'Co-op player count',
      description:
        'How many players can join, what crossplay means, and what local co-op searches get wrong.',
      href: Routes.Subnautica2CoopPlayerCount,
      icon: UsersRoundIcon,
      label: 'Co-op',
    },
    {
      title: 'Multiplayer lag and desync',
      description:
        'A co-op sync checklist for rubberbanding, delayed interactions, host load, rejoin positions, and busy bases.',
      href: Routes.Subnautica2MultiplayerLagDesync,
      icon: RadioIcon,
      label: 'Co-op',
    },
    {
      title: 'Silver after Hotfix 2',
      description:
        'A focused route for the material that blocks Scanner, Wiring Kit, and tank progress.',
      href: Routes.Subnautica2SilverAfterHotfix2,
      icon: AlertTriangleIcon,
      label: 'Updated',
    },
  ],
  platformTitle: 'Platform answers',
  platformHeading: 'Buying, installing, or waiting?',
  platformDescription:
    'These pages answer the searches that happen before a player starts a save. They keep confirmed facts separate from platform guesses, which matters while Subnautica 2 is still in Early Access.',
  platformLinks: [
    {
      title: 'Release date status',
      description:
        'Early Access date, full-release wording, Steam, Xbox, Game Pass, and what changed after launch.',
      href: Routes.Subnautica2ReleaseDate,
      icon: CalendarDaysIcon,
      label: 'Status',
    },
    {
      title: 'Xbox Game Pass',
      description:
        'Where to check Game Pass, PC Game Pass, Cloud wording, device support, and co-op before installing.',
      href: Routes.Subnautica2XboxGamePass,
      icon: MonitorPlayIcon,
      label: 'Xbox',
    },
    {
      title: 'System requirements',
      description:
        'Minimum and recommended PC specs, RAM, GPU, storage, and Early Access performance caution.',
      href: Routes.Subnautica2SystemRequirements,
      icon: MonitorPlayIcon,
      label: 'PC',
    },
    {
      title: 'Is Early Access worth it?',
      description:
        'A buy-or-wait guide for players comparing patches, co-op, Game Pass, and waiting for 1.0.',
      href: Routes.Subnautica2EarlyAccessWorthIt,
      icon: TimerResetIcon,
      label: 'Buy?',
    },
    {
      title: 'Crossplay',
      description:
        'Steam, Xbox, Game Pass, co-op invites, and the checks to run before starting a group save.',
      href: Routes.Subnautica2Crossplay,
      icon: UsersRoundIcon,
      label: 'Co-op',
    },
    {
      title: 'PS5 release date',
      description:
        'A cautious PlayStation watch page that says what is confirmed, what is not, and which sources matter.',
      href: Routes.Subnautica2Ps5ReleaseDate,
      icon: Gamepad2Icon,
      label: 'PS5',
    },
  ],
  popularTitle: 'In-game routes',
  popularHeading: 'After the first click, these keep players moving',
  popularDescription:
    'These are not homepage decoration. They are the pages players come back to while scanning, diving deeper, and building their first reliable kit.',
  popularLinks: [
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
      title: 'Resources index',
      description:
        'Material locations, farming notes, and page-by-page resource checks.',
      href: Routes.Subnautica2Resources,
      icon: BoxesIcon,
      label: 'Materials',
    },
    {
      title: 'Vehicles',
      description:
        'Tadpole notes, docking checks, creature behavior, and future vehicle watch items.',
      href: Routes.Subnautica2Vehicles,
      icon: ShipWheelIcon,
      label: 'Routes',
    },
    {
      title: 'Creatures and leviathans',
      description:
        'Hammerhead behavior, route risk, and careful leviathan watch notes without fake lists.',
      href: Routes.Subnautica2CreaturesLeviathans,
      icon: AlertTriangleIcon,
      label: 'Risk',
    },
    {
      title: 'Base location tiers',
      description:
        'Rank base spots by return path, resources, Tadpole approach, and creature trouble.',
      href: Routes.Subnautica2BaseLocationTierList,
      icon: MapPinIcon,
      label: 'Bases',
    },
    {
      title: 'Map size and biomes',
      description:
        'A route-first map-size page that avoids fake numbers and focuses on useful biome planning.',
      href: Routes.Subnautica2MapSizeBiomes,
      icon: MapIcon,
      label: 'Map',
    },
    {
      title: 'Crafting chains',
      description:
        'Recipe chains, blueprint unlocks, and the base for future calculators.',
      href: Routes.Subnautica2Crafting,
      icon: WrenchIcon,
      label: 'Recipes',
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
    ['9', 'homepage entry points'],
    ['Hotfix 3', 'latest tracked update'],
    ['8', 'search locales'],
  ],
  disclaimerTitle: 'Independent fan guide',
  disclaimerBody:
    'Abyss Guides is not an official Subnautica 2 site. We use original writing and original artwork, and we link source notes when Early Access information may change.',
};

const zhCopy: HomeCopy = {
  eyebrow: 'Subnautica 2 攻略中心',
  title: 'Subnautica 2 攻略入口：先看路线和更新。',
  titleLines: ['Subnautica 2 攻略入口', '先看路线和更新'],
  description:
    'Abyss Guides 首页只放玩家真正会搜、会点、会反复用的内容：开局怎么走，最新补丁改了什么，关键材料去哪找，平台和发售问题哪些已经确认。',
  primaryCta: '先看新手路线',
  secondaryCta: '查资源',
  latestTitle: '首页核心入口',
  latestHeading: '先展示这 9 个页面',
  latestDescription:
    '这个首页不是用来堆内容的。新玩家要路线，老玩家要更新，准备入坑的人要平台和发售答案，这些内容必须先出现。',
  openLabel: '打开',
  latestLinks: [
    {
      title: '新手路线',
      description: '开局优先级、安全循环、扫描习惯和低剧透生存建议。',
      href: Routes.Subnautica2Beginner,
      icon: CompassIcon,
      label: '先看',
    },
    {
      title: 'Hotfix 3 追踪',
      description: 'DLSS 4.5、Tadpole 停放、怪物行为、基地成本和联机笔记。',
      href: Routes.Subnautica2Hotfix3,
      icon: TimerResetIcon,
      label: '最新',
    },
    {
      title: '发售时间和平台',
      description:
        '抢先体验日期、Steam、Xbox、Game Pass、PS5 搜索和已确认信息。',
      href: Routes.Subnautica2ReleaseDate,
      icon: CalendarDaysIcon,
      label: '平台',
    },
    {
      title: '低 FPS 和最佳设置',
      description:
        '按顺序处理掉帧、卡顿、锁帧、DLSS、掌机发热和联机负载，不乱套所谓万能预设。',
      href: Routes.Subnautica2BestSettingsLowFps,
      icon: MonitorPlayIcon,
      label: '设置',
    },
    {
      title: '黑屏和卡死排查',
      description:
        '面向黑屏、读档卡死、掉帧、DLSS 复测、文件、存档、联机和掌机发热的排查页。',
      href: Routes.Subnautica2BlackScreenFreezing,
      icon: MonitorPlayIcon,
      label: '修复',
    },
    {
      title: '互动地图',
      description: '地图大小、已确认地图信息，以及完整工具出来前怎么规划路线。',
      href: Routes.Subnautica2InteractiveMap,
      icon: MapIcon,
      label: '地图',
    },
    {
      title: '联机人数',
      description: '最多几人联机、跨平台怎么理解，本地双人搜索为什么容易误解。',
      href: Routes.Subnautica2CoopPlayerCount,
      icon: UsersRoundIcon,
      label: '联机',
    },
    {
      title: '联机延迟和不同步',
      description:
        '处理橡皮筋、交互慢半拍、房主负载、重进位置和大型基地附近卡顿。',
      href: Routes.Subnautica2MultiplayerLagDesync,
      icon: RadioIcon,
      label: '联机',
    },
    {
      title: 'Hotfix 2 后的 Silver',
      description: 'Scanner、Wiring Kit、气瓶进度最容易卡在这里。',
      href: Routes.Subnautica2SilverAfterHotfix2,
      icon: AlertTriangleIcon,
      label: '已更新',
    },
  ],
  platformTitle: '平台和发售',
  platformHeading: '购买前、安装前、等主机版前，先看这里',
  platformDescription:
    '这一层放的是玩家开存档之前就会搜的问题。能确认的写清楚，不能确认的不编日期，这对抢先体验游戏很重要。',
  platformLinks: [
    {
      title: '发售状态',
      description:
        '抢先体验日期、正式版说法、Steam、Xbox、Game Pass 和上线后变化。',
      href: Routes.Subnautica2ReleaseDate,
      icon: CalendarDaysIcon,
      label: '状态',
    },
    {
      title: 'Xbox Game Pass',
      description:
        '安装前先看 Game Pass、PC Game Pass、Cloud、设备支持和联机信息。',
      href: Routes.Subnautica2XboxGamePass,
      icon: MonitorPlayIcon,
      label: 'Xbox',
    },
    {
      title: '配置要求',
      description:
        '最低配置、推荐配置、内存、显卡、硬盘空间和抢先体验性能风险。',
      href: Routes.Subnautica2SystemRequirements,
      icon: MonitorPlayIcon,
      label: 'PC',
    },
    {
      title: '抢先体验值不值得买',
      description: '比较补丁、联机、Game Pass 和等正式版，适合买前决策。',
      href: Routes.Subnautica2EarlyAccessWorthIt,
      icon: TimerResetIcon,
      label: '购买',
    },
    {
      title: '跨平台联机',
      description: 'Steam、Xbox、Game Pass、好友邀请和开多人存档前的核对项。',
      href: Routes.Subnautica2Crossplay,
      icon: UsersRoundIcon,
      label: '联机',
    },
    {
      title: 'PS5 发售日',
      description:
        'PlayStation 观察页：已确认的写清楚，未确认的不当成真实日期。',
      href: Routes.Subnautica2Ps5ReleaseDate,
      icon: Gamepad2Icon,
      label: 'PS5',
    },
  ],
  popularTitle: '进游戏后常用',
  popularHeading: '开局、扫描、氧气、资源，先把这些做顺',
  popularDescription:
    '这几个入口负责把玩家留住：他们打开一篇之后，能继续查下一步，而不是看完就走。',
  popularLinks: [
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
      title: '资源索引',
      description: '材料位置、采集思路和单项资源页，适合一边玩一边查。',
      href: Routes.Subnautica2Resources,
      icon: BoxesIcon,
      label: '材料',
    },
    {
      title: '载具',
      description: 'Tadpole、停靠、载具路线、生物行为和未来载具观察。',
      href: Routes.Subnautica2Vehicles,
      icon: ShipWheelIcon,
      label: '路线',
    },
    {
      title: '生物和利维坦',
      description: 'Hammerhead 行为、路线风险和谨慎的利维坦观察页。',
      href: Routes.Subnautica2CreaturesLeviathans,
      icon: AlertTriangleIcon,
      label: '风险',
    },
    {
      title: '基地位置梯度',
      description: '按回程、资源、Tadpole 靠近和生物风险给基地分层。',
      href: Routes.Subnautica2BaseLocationTierList,
      icon: MapPinIcon,
      label: '基地',
    },
    {
      title: '地图大小和生态区',
      description: '不编精确面积，先整理路线、生态区、资源循环和建家规划。',
      href: Routes.Subnautica2MapSizeBiomes,
      icon: MapIcon,
      label: '地图',
    },
    {
      title: '制作链',
      description: '配方链、蓝图解锁，以及后续制作计算器的数据基础。',
      href: Routes.Subnautica2Crafting,
      icon: WrenchIcon,
      label: '配方',
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
    ['9', '首页核心入口'],
    ['Hotfix 3', '最新追踪'],
    ['8', '搜索语言'],
  ],
  disclaimerTitle: '独立玩家攻略站',
  disclaimerBody:
    'Abyss Guides 不是 Subnautica 2 官方网站。我们使用原创文字和原创视觉图，涉及抢先体验变化的内容会保留来源说明。',
};

const jaCopy: HomeCopy = {
  eyebrow: 'Subnautica 2攻略ハブ',
  title: 'Subnautica 2攻略: ルートと更新を先に。',
  titleLines: ['Subnautica 2攻略', 'ルートと更新を先に'],
  description:
    'Abyss Guidesのトップは、プレイヤーが実際に探すページを先に出します。序盤ルート、最新Hotfix、重要素材、発売日と対応機種をすぐ確認できます。',
  primaryCta: '初心者ルートを見る',
  secondaryCta: '資源を探す',
  latestTitle: 'トップの中心',
  latestHeading: '最初に必要な6ページ',
  latestDescription:
    '新規プレイヤーはルートを探し、戻ってくる人は更新を確認します。購入前の人は対応機種と発売情報を見ます。だから、この6つを前に出します。',
  openLabel: '開く',
  latestLinks: [
    {
      title: '初心者ルート',
      description:
        '最初の優先度、安全な周回、スキャン習慣、低ネタバレの生存メモ。',
      href: Routes.Subnautica2Beginner,
      icon: CompassIcon,
      label: '最初に読む',
    },
    {
      title: 'Hotfix 3まとめ',
      description:
        'DLSS 4.5、Tadpole、クリーチャー、拠点コスト、co-opの確認メモ。',
      href: Routes.Subnautica2Hotfix3,
      icon: TimerResetIcon,
      label: '最新',
    },
    {
      title: '発売日とプラットフォーム',
      description: 'Early Access日、Steam、Xbox、Game Pass、PS5検索を整理。',
      href: Routes.Subnautica2ReleaseDate,
      icon: CalendarDaysIcon,
      label: '対応機種',
    },
    {
      title: 'インタラクティブマップ',
      description:
        'マップサイズ、確認済みの地形情報、正式なツール前のルート計画。',
      href: Routes.Subnautica2InteractiveMap,
      icon: MapIcon,
      label: 'マップ',
    },
    {
      title: '協力プレイ人数',
      description:
        '最大人数、クロスプレイの考え方、ローカル協力プレイ検索の注意点。',
      href: Routes.Subnautica2CoopPlayerCount,
      icon: UsersRoundIcon,
      label: '協力',
    },
    {
      title: 'Hotfix 2後のSilver',
      description: 'Scanner、Wiring Kit、酸素タンクで詰まりやすい素材。',
      href: Routes.Subnautica2SilverAfterHotfix2,
      icon: AlertTriangleIcon,
      label: '更新',
    },
  ],
  platformTitle: 'プラットフォームと発売情報',
  platformHeading: '購入前、インストール前、コンソール待ちの前に',
  platformDescription:
    'ここには、セーブを始める前に検索される疑問をまとめます。確認できることははっきり書き、未確認の日付は作りません。',
  platformLinks: [
    {
      title: '発売状況',
      description:
        'Early Access日、正式版の扱い、Steam、Xbox、Game Pass、発売後の変化。',
      href: Routes.Subnautica2ReleaseDate,
      icon: CalendarDaysIcon,
      label: '状況',
    },
    {
      title: 'Xbox Game Pass',
      description:
        'Game Pass、PC Game Pass、Cloud、対応デバイス、co-op情報を確認します。',
      href: Routes.Subnautica2XboxGamePass,
      icon: MonitorPlayIcon,
      label: 'Xbox',
    },
    {
      title: '必要スペック',
      description:
        '最低・推奨PCスペック、RAM、GPU、容量、Early Accessの性能注意点。',
      href: Routes.Subnautica2SystemRequirements,
      icon: MonitorPlayIcon,
      label: 'PC',
    },
    {
      title: 'Early Accessは買い？',
      description: 'パッチ、co-op、Game Pass、1.0待ちを比べる購入判断ページ。',
      href: Routes.Subnautica2EarlyAccessWorthIt,
      icon: TimerResetIcon,
      label: '購入',
    },
    {
      title: 'クロスプレイ',
      description:
        'Steam、Xbox、Game Pass、招待、協力プレイ前の確認をまとめます。',
      href: Routes.Subnautica2Crossplay,
      icon: UsersRoundIcon,
      label: '協力',
    },
    {
      title: 'PS5発売日',
      description:
        'PlayStation向けの確認ページ。未確認の日付を事実として扱いません。',
      href: Routes.Subnautica2Ps5ReleaseDate,
      icon: Gamepad2Icon,
      label: 'PS5',
    },
  ],
  popularTitle: 'ゲーム中に使うページ',
  popularHeading: '酸素、スキャン、資源、クラフトを迷わない',
  popularDescription:
    'トップの次に見るページです。ひとつ読んだあと、次の行動にそのまま進める構成にしています。',
  popularLinks: [
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
      title: '資源インデックス',
      description: '素材の場所、採集メモ、個別資源ページへすぐ移動できます。',
      href: Routes.Subnautica2Resources,
      icon: BoxesIcon,
      label: '素材',
    },
    {
      title: '乗り物',
      description:
        'Tadpole、ドッキング、生物挙動、今後の乗り物更新を追います。',
      href: Routes.Subnautica2Vehicles,
      icon: ShipWheelIcon,
      label: 'ルート',
    },
    {
      title: '生物とリヴァイアサン',
      description: 'Hammerhead挙動、危険ルート、慎重なリヴァイアサン観察メモ。',
      href: Routes.Subnautica2CreaturesLeviathans,
      icon: AlertTriangleIcon,
      label: '危険',
    },
    {
      title: '拠点候補ランク',
      description: '帰り道、素材、Tadpole接近、生物リスクで拠点を評価します。',
      href: Routes.Subnautica2BaseLocationTierList,
      icon: MapPinIcon,
      label: '拠点',
    },
    {
      title: 'マップサイズとバイオーム',
      description: '正確な数字より、ルート、資源ループ、拠点候補を優先します。',
      href: Routes.Subnautica2MapSizeBiomes,
      icon: MapIcon,
      label: 'マップ',
    },
    {
      title: 'クラフトチェーン',
      description: 'レシピチェーン、設計図、将来の計算ツール用データ。',
      href: Routes.Subnautica2Crafting,
      icon: WrenchIcon,
      label: 'レシピ',
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
    ['6', 'トップ入口'],
    ['Hotfix 3', '追跡中'],
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

function getMissionBoardCopy(locale?: Locale) {
  if (locale === 'zh') {
    return {
      eyebrow: '热门搜索作战板',
      title: '先解决玩家现在最容易卡住的 4 件事',
      description:
        '首页不只展示栏目，也要像一张路线板：新手先走哪条路、补丁改了什么、关键材料怎么找、买前要确认什么。',
      routeLabel: '今日优先路线',
      resourceLabel: '资源速查',
      sourceLabel: '来源口径',
      sourceBody:
        '补丁、平台和路线页面会优先引用 Unknown Worlds、Steam、Xbox、官方视频和当前攻略来源；不确定的内容不会写成确定日期。',
      missions: [
        {
          title: 'Hotfix 3 后先看什么',
          description:
            '快速确认 DLSS、Tadpole 停放、怪物风险、基地成本和联机重连变化。',
          href: Routes.Subnautica2Hotfix3,
          icon: TimerResetIcon,
          label: 'Latest',
          meta: 'patch notes',
        },
        {
          title: 'Silver 卡进度',
          description:
            'Scanner、Wiring Kit、Air Tank 相关进度很容易被 Silver 卡住。',
          href: Routes.Subnautica2Silver,
          icon: AlertTriangleIcon,
          label: 'Material',
          meta: 'high intent',
        },
        {
          title: 'Tadpole 和载具路线',
          description: '把探索范围、停靠、深度模块和基地位置放在一起规划。',
          href: Routes.Subnautica2Tadpole,
          icon: ShipWheelIcon,
          label: 'Vehicle',
          meta: 'route planning',
        },
        {
          title: '买前确认平台',
          description:
            'Steam、Xbox、Game Pass、PS5、配置要求和抢先体验状态先看清。',
          href: Routes.Subnautica2ReleaseDate,
          icon: CalendarDaysIcon,
          label: 'Platform',
          meta: 'buy or wait',
        },
      ] satisfies MissionLink[],
      resourcePills: [
        { label: 'Silver', href: Routes.Subnautica2Silver, group: 'early' },
        { label: 'Troilite', href: Routes.Subnautica2Troilite, group: 'rare' },
        {
          label: 'Atacamite',
          href: Routes.Subnautica2Atacamite,
          group: 'deep',
        },
        {
          label: 'Mangalloy',
          href: Routes.Subnautica2Mangalloy,
          group: 'craft',
        },
        {
          label: 'Oxygen Depth',
          href: Routes.Subnautica2OxygenDepth,
          group: 'survival',
        },
        { label: 'Tadpole', href: Routes.Subnautica2Tadpole, group: 'vehicle' },
      ] satisfies ResourcePill[],
    };
  }

  if (locale === 'ja') {
    return {
      eyebrow: '人気検索ボード',
      title: '今つまずきやすい4つを先に置く',
      description:
        'トップは飾りではなく、ルート表として使えるようにします。序盤、パッチ、重要素材、購入前の確認を前面に出します。',
      routeLabel: '今日の優先ルート',
      resourceLabel: '素材クイックチェック',
      sourceLabel: 'ソース方針',
      sourceBody:
        'パッチ、対応機種、ルート情報はUnknown Worlds、Steam、Xbox、公式動画、現在の攻略ソースを優先します。不確かな内容は確定日として書きません。',
      missions: [
        {
          title: 'Hotfix 3後の確認',
          description:
            'DLSS、Tadpole、クリーチャー、拠点コスト、co-op再参加を確認します。',
          href: Routes.Subnautica2Hotfix3,
          icon: TimerResetIcon,
          label: 'Latest',
          meta: 'patch notes',
        },
        {
          title: 'Silverで止まった時',
          description:
            'Scanner、Wiring Kit、Air Tankの進行でSilverが詰まりやすいです。',
          href: Routes.Subnautica2Silver,
          icon: AlertTriangleIcon,
          label: 'Material',
          meta: 'high intent',
        },
        {
          title: 'Tadpoleと乗り物ルート',
          description:
            '探索範囲、ドック、深度モジュール、拠点候補をまとめて考えます。',
          href: Routes.Subnautica2Tadpole,
          icon: ShipWheelIcon,
          label: 'Vehicle',
          meta: 'route planning',
        },
        {
          title: '購入前の対応機種確認',
          description:
            'Steam、Xbox、Game Pass、PS5、必要スペック、Early Access状況を整理します。',
          href: Routes.Subnautica2ReleaseDate,
          icon: CalendarDaysIcon,
          label: 'Platform',
          meta: 'buy or wait',
        },
      ] satisfies MissionLink[],
      resourcePills: [
        { label: 'Silver', href: Routes.Subnautica2Silver, group: 'early' },
        { label: 'Troilite', href: Routes.Subnautica2Troilite, group: 'rare' },
        {
          label: 'Atacamite',
          href: Routes.Subnautica2Atacamite,
          group: 'deep',
        },
        {
          label: 'Mangalloy',
          href: Routes.Subnautica2Mangalloy,
          group: 'craft',
        },
        {
          label: 'Oxygen Depth',
          href: Routes.Subnautica2OxygenDepth,
          group: 'survival',
        },
        { label: 'Tadpole', href: Routes.Subnautica2Tadpole, group: 'vehicle' },
      ] satisfies ResourcePill[],
    };
  }

  return {
    eyebrow: 'Popular search board',
    title: 'Put the four highest-friction player jobs up front',
    description:
      'The homepage should work like a route board: what changed, where to go first, which material blocks progress, and what to check before buying or installing.',
    routeLabel: 'Today route priority',
    resourceLabel: 'Resource quick check',
    sourceLabel: 'Source standard',
    sourceBody:
      'Patch, platform, and route pages prioritize Unknown Worlds, Steam, Xbox, official video, and current guide reporting. Unconfirmed items stay clearly marked.',
    missions: [
      {
        title: 'What changed after Hotfix 3',
        description:
          'Check DLSS, Tadpole parking, creature risk, base costs, and co-op rejoin notes before following an older guide.',
        href: Routes.Subnautica2Hotfix3,
        icon: TimerResetIcon,
        label: 'Latest',
        meta: 'patch notes',
      },
      {
        title: 'Silver progress blocker',
        description:
          'Scanner, Wiring Kit, and Air Tank progress commonly bottleneck around Silver.',
        href: Routes.Subnautica2Silver,
        icon: AlertTriangleIcon,
        label: 'Material',
        meta: 'high intent',
      },
      {
        title: 'Tadpole route planning',
        description:
          'Plan exploration range, docking, depth modules, and base placement together.',
        href: Routes.Subnautica2Tadpole,
        icon: ShipWheelIcon,
        label: 'Vehicle',
        meta: 'route planning',
      },
      {
        title: 'Platform check before buying',
        description:
          'Steam, Xbox, Game Pass, PS5, PC specs, and Early Access status in one path.',
        href: Routes.Subnautica2ReleaseDate,
        icon: CalendarDaysIcon,
        label: 'Platform',
        meta: 'buy or wait',
      },
    ] satisfies MissionLink[],
    resourcePills: [
      { label: 'Silver', href: Routes.Subnautica2Silver, group: 'early' },
      { label: 'Troilite', href: Routes.Subnautica2Troilite, group: 'rare' },
      { label: 'Atacamite', href: Routes.Subnautica2Atacamite, group: 'deep' },
      { label: 'Mangalloy', href: Routes.Subnautica2Mangalloy, group: 'craft' },
      {
        label: 'Oxygen Depth',
        href: Routes.Subnautica2OxygenDepth,
        group: 'survival',
      },
      { label: 'Tadpole', href: Routes.Subnautica2Tadpole, group: 'vehicle' },
    ] satisfies ResourcePill[],
  };
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
  const image =
    homeImageByRoute[item.href] ?? '/abyss/chibi-deep-sea-hero.webp';

  return (
    <LocaleLink
      href={item.href}
      className={cn(
        'group block min-w-0 overflow-hidden border border-cyan-200/12 bg-[#08252a]/92 transition hover:-translate-y-0.5 hover:border-cyan-200/45 hover:bg-[#0a3036]'
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          'bg-cover bg-center opacity-90 transition duration-300 group-hover:scale-[1.03]',
          compact ? 'h-24' : 'h-32'
        )}
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(3,19,20,.08),rgba(3,19,20,.68)),url('${image}')`,
        }}
      />
      <div className={cn('min-w-0', compact ? 'p-4' : 'p-5')}>
        <div className="flex min-h-8 min-w-0 items-start justify-between gap-3">
          <Icon className="size-5 shrink-0 text-[#78ead7]" />
          {item.label ? (
            <span className="min-w-0 max-w-[8rem] break-words border border-[#f08b4f]/35 bg-[#f08b4f]/10 px-2 py-1 text-right text-xs font-semibold text-[#ffc4a1]">
              {item.label}
            </span>
          ) : null}
        </div>
        <h3 className="mt-5 break-words text-lg font-semibold text-[#f0fffb]">
          {item.title}
        </h3>
        <p className="mt-3 break-words text-sm leading-6 text-[#a8c6c0]">
          {item.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#78ead7]">
          {openLabel}
          <ArrowRightIcon className="size-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </LocaleLink>
  );
}

function MissionBoard({ locale }: { locale?: Locale }) {
  const board = getMissionBoardCopy(locale);

  return (
    <section className="relative overflow-hidden border-b border-cyan-200/10 bg-[#04181c]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
        style={{
          backgroundImage: "url('/abyss/chibi-resource-scan.webp')",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,24,28,.82),rgba(3,19,20,.98)),radial-gradient(circle_at_88%_12%,rgba(120,234,215,.14),transparent_30%),radial-gradient(circle_at_12%_88%,rgba(240,139,79,.12),transparent_28%)]"
      />
      <Container className="relative px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch">
          <section className="border border-cyan-200/14 bg-[#061f24]/88 p-5 md:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
                  {board.eyebrow}
                </p>
                <h2 className="mt-3 max-w-2xl break-words text-3xl font-semibold leading-tight text-[#f0fffb] md:text-4xl">
                  {board.title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#abc8c3] md:text-base">
                  {board.description}
                </p>
              </div>
              <div className="shrink-0 border border-cyan-200/12 bg-cyan-300/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.16em] text-[#78ead7]">
                  {board.routeLabel}
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#effffb]">4</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {board.missions.map((mission) => {
                const Icon = mission.icon ?? CompassIcon;

                return (
                  <LocaleLink
                    className="group min-w-0 border border-cyan-200/12 bg-[#08252a]/82 p-4 transition hover:-translate-y-0.5 hover:border-cyan-200/40 hover:bg-[#0a3036]"
                    href={mission.href}
                    key={mission.href}
                  >
                    <div className="flex min-w-0 items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-2">
                        <Icon className="size-5 shrink-0 text-[#78ead7]" />
                        <span className="min-w-0 break-words text-xs uppercase tracking-[0.14em] text-[#8fb8b1]">
                          {mission.meta}
                        </span>
                      </div>
                      <span className="shrink-0 border border-[#f08b4f]/35 bg-[#f08b4f]/10 px-2 py-1 text-xs font-semibold text-[#ffc4a1]">
                        {mission.label}
                      </span>
                    </div>
                    <h3 className="mt-4 break-words text-lg font-semibold text-[#f0fffb]">
                      {mission.title}
                    </h3>
                    <p className="mt-2 break-words text-sm leading-6 text-[#a8c6c0]">
                      {mission.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#78ead7]">
                      {mission.label}
                      <ArrowRightIcon className="size-4 transition group-hover:translate-x-1" />
                    </span>
                  </LocaleLink>
                );
              })}
            </div>
          </section>

          <aside className="grid gap-4 md:grid-cols-[minmax(0,1fr)_260px] lg:grid-cols-1 xl:grid-cols-[minmax(0,1fr)_280px]">
            <section className="border border-cyan-200/14 bg-[#082226]/92 p-5">
              <div className="flex items-center gap-2 text-[#78ead7]">
                <BoxesIcon className="size-5" />
                <h2 className="text-lg font-semibold text-[#effffb]">
                  {board.resourceLabel}
                </h2>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2">
                {board.resourcePills.map((pill) => (
                  <LocaleLink
                    className="group min-w-0 border border-cyan-200/12 bg-[#031314]/70 px-3 py-3 transition hover:border-cyan-200/40 hover:bg-cyan-300/10"
                    href={pill.href}
                    key={pill.href}
                  >
                    <span className="block break-words text-sm font-semibold text-[#effffb]">
                      {pill.label}
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.12em] text-[#f08b4f]">
                      {pill.group}
                    </span>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="border border-cyan-200/14 bg-[#082226]/92 p-5">
              <div className="flex items-center gap-2 text-[#f08b4f]">
                <BookOpenIcon className="size-5" />
                <h2 className="text-lg font-semibold text-[#effffb]">
                  {board.sourceLabel}
                </h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#abc8c3]">
                {board.sourceBody}
              </p>
            </section>
          </aside>
        </div>
      </Container>
    </section>
  );
}

export function AbyssHome({ locale }: { locale?: Locale }) {
  const copy = getHomeCopy(locale);
  const board = getMissionBoardCopy(locale);
  const baseUrl = getBaseUrl().replace(/\/$/, '');
  const pageUrl = getUrlWithLocale(Routes.Root, locale).replace(/\/$/, '');
  const listLinks = [
    ...board.missions,
    ...copy.latestLinks,
    ...copy.popularLinks.slice(0, 4),
  ].filter(
    (item, index, links) =>
      links.findIndex((candidate) => candidate.href === item.href) === index
  );
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: copy.title,
      description: copy.description,
      url: pageUrl || baseUrl,
      image: `${baseUrl}/abyss/chibi-deep-sea-hero.webp`,
      inLanguage: locale ?? 'en',
      mainEntity: {
        '@id': `${pageUrl || baseUrl}#homepage-guide-list`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': `${pageUrl || baseUrl}#homepage-guide-list`,
      name: board.title,
      itemListElement: listLinks.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: getUrlWithLocale(item.href, locale).replace(/\/$/, ''),
        name: item.title,
        description: item.description,
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-[#031314] text-[#dff8f0] dark:bg-[#031314] dark:text-[#dff8f0]">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
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
            <h1
              className="max-w-5xl break-words font-semibold text-3xl leading-[1.08] tracking-normal text-[#e8fff9] sm:text-5xl md:text-7xl"
              style={{ overflowWrap: 'anywhere' }}
            >
              {(copy.titleLines ?? [copy.title]).map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#a9c9c3]">
              {copy.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LocaleLink
                href={Routes.Subnautica2Beginner}
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

            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-2 sm:grid-cols-3">
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

      <MissionBoard locale={locale} />

      <section className="border-b border-cyan-200/10 bg-[#071f23]">
        <Container className="px-4 py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bf6f45]">
              {copy.latestTitle}
            </p>
            <h2 className="mt-3 break-words text-3xl font-semibold md:text-4xl">
              {copy.latestHeading}
            </h2>
            <p className="mt-4 text-[#abc8c3]">{copy.latestDescription}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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

      <section className="border-b border-cyan-200/10 bg-[#04181c]">
        <Container className="px-4 py-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
                {copy.platformTitle}
              </p>
              <h2 className="mt-3 break-words text-3xl font-semibold md:text-4xl">
                {copy.platformHeading}
              </h2>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                {copy.platformDescription}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {copy.platformLinks.map((item) => (
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

      <section className="border-b border-cyan-200/10 bg-[#031314]">
        <Container className="px-4 py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#78ead7]">
              {copy.popularTitle}
            </p>
            <h2 className="mt-3 break-words text-3xl font-semibold md:text-4xl">
              {copy.popularHeading}
            </h2>
            <p className="mt-4 text-[#abc8c3]">{copy.popularDescription}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <BookOpenIcon className="mb-5 size-8 text-[#f08b4f]" />
              <h2 className="break-words text-3xl font-semibold">
                {copy.coreTitle}
              </h2>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                {copy.coreDescription}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
