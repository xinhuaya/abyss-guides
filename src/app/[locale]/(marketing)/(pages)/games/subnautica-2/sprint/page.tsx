import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { CompassIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type SprintCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-03';
const UPDATED_AT = '2026-06-03';

const sharedSources = [
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam Early Access page',
  },
  {
    href: 'https://www.xbox.com/en-US/games/store/subnautica-2/9pjpcb188svg',
    label: 'Official Xbox listing',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-3',
    label: 'Unknown Worlds Hotfix 3',
  },
  {
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const copyByLocale: Record<string, SprintCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Sprint Status - Run Key, Movement, and Roadmap Watch',
      description:
        'A current Subnautica 2 sprint guide covering run-key searches, movement comfort, roadmap checks, controller and keyboard assumptions, and what to do before sprint changes arrive.',
    },
    eyebrow: 'Subnautica 2 sprint status',
    title: 'Does Subnautica 2 Have Sprint? Read This Before Rebinding',
    description:
      'If movement feels slow, the first instinct is to hunt for a sprint key. This page separates current controls, roadmap watching, and practical route habits so you do not waste time rebinding keys that are not the problem.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'As of June 3, 2026, do not assume a full sprint system is available unless your current build shows a clear sprint binding or an Unknown Worlds update says it has shipped. If movement feels slow, check controller input, frame rate, route planning, oxygen upgrades, and vehicle access before changing every keybind.',
    fieldNotesTitle: 'Why sprint gets searched',
    fieldNotes: [
      {
        title: 'Base walking can feel heavy',
        body: 'Early bases, corridors, and repeated resource runs make players notice movement speed sooner than open-water travel.',
      },
      {
        title: 'Input problems can look like no sprint',
        body: 'A controller profile, Steam Input layout, frame-rate dip, or cloud stream delay can make movement feel wrong even when the actual issue is not a missing key.',
      },
      {
        title: 'Roadmap features need retesting',
        body: 'Movement changes can affect stamina, animation, controller layouts, and accessibility. Treat any future sprint patch as something to test, not just a faster button.',
      },
    ],
    routeChecklistTitle: 'Before you blame sprint',
    routeChecklist: [
      'Check keyboard and controller bindings in your current build.',
      'Test movement on a fresh save away from a busy base.',
      'Lower settings if frame pacing makes movement feel sticky.',
      'Use beacons, storage stops, and vehicle routes to reduce repeated walking.',
      'Re-check official roadmap and patch notes after major updates.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to handle slow movement now',
    routeSteps: [
      {
        title: 'Look for a real sprint binding',
        body: 'Start in the current controls menu. If there is no clear sprint or run binding, do not chase old posts or modded screenshots. Use the current build as the source of truth.',
      },
      {
        title: 'Separate speed from frame pacing',
        body: 'Low FPS can make turning, walking, and swimming feel sluggish. Before changing controls, test a lower graphics preset and check whether the input response improves.',
      },
      {
        title: 'Check controller layouts',
        body: 'Steam Input, Xbox controllers, handheld profiles, and cloud play can all change how movement feels. Test keyboard movement once if you suspect a controller profile is interfering.',
      },
      {
        title: 'Plan shorter loops',
        body: 'Until movement changes land, reduce backtracking. Place beacons, carry fewer junk items, keep one storage stop near the route, and unlock vehicle travel as soon as it fits your save.',
      },
      {
        title: 'Retest after roadmap updates',
        body: 'If sprint ships later in Early Access, test stamina feel, controller mapping, and base movement in a short save before rewriting your normal route.',
      },
    ],
    tableTitle: 'Sprint search answers',
    tableHeaders: ['Question', 'Current answer'],
    tableRows: [
      [
        'Is there a sprint key?',
        'Check the current controls menu. Do not rely on screenshots from older builds, mods, or wishlists.',
      ],
      [
        'Why does movement feel slow?',
        'It can be route length, frame pacing, controller input, base layout, or simply Early Access movement tuning.',
      ],
      [
        'Can I fix it with settings?',
        'Sometimes. Better frame pacing can make movement feel cleaner even if speed is unchanged.',
      ],
      [
        'Should I install a sprint mod?',
        'Avoid modding a serious save until you have backups and have checked whether the mod matches the current hotfix.',
      ],
      [
        'What helps today?',
        'Use beacons, shorter loops, storage staging, oxygen planning, and vehicle unlocks instead of repeated long walks.',
      ],
    ],
    visualTitle: 'Movement check card',
    visualItems: [
      {
        label: 'First check',
        value: 'Controls',
        note: 'Use the current build, not old screenshots.',
      },
      {
        label: 'Feel issue',
        value: 'FPS/input',
        note: 'Frame pacing can mimic heavy movement.',
      },
      {
        label: 'Route fix',
        value: 'Short loops',
        note: 'Beacons and vehicles matter more than one keybind.',
      },
    ],
    cautionTitle: 'Do not mod movement on your only save',
    cautionBody:
      'Sprint and movement mods can touch more than speed. In Early Access, a hotfix can break a modded setup or make old advice stale. If you test a mod, copy the save first and keep your main co-op world clean.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Does Subnautica 2 have a sprint button?',
        body: 'Check the current controls menu and official notes. If you do not see a clear sprint binding, treat sprint as not available in your build rather than searching for a hidden key.',
      },
      {
        title: 'Why does Subnautica 2 movement feel slow?',
        body: 'Common causes are long base routes, low FPS, controller profiles, cloud delay, too much backtracking, or movement tuning during Early Access.',
      },
      {
        title: 'Will sprint be added later?',
        body: 'Watch the Unknown Worlds roadmap and patch notes. Do not attach a specific date unless Unknown Worlds gives one.',
      },
      {
        title: 'What should I do instead of sprinting?',
        body: 'Use beacons, plan storage stops, improve oxygen, unlock vehicle travel, and avoid dragging every resource back to one far base.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2BestSettingsLowFps,
        label: 'Best Settings for Low FPS',
      },
      {
        href: Routes.Subnautica2ControllerNotWorking,
        label: 'Controller Not Working',
      },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      { href: Routes.Subnautica2Vehicles, label: 'Vehicles Guide' },
      { href: Routes.Subnautica2VoiceChat, label: 'Voice Chat Status' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against the Unknown Worlds Early Access roadmap, official Steam and Xbox pages, Hotfix 3, and the official gameplay trailer. Abyss Guides artwork is original fan-site artwork; the video is the official Subnautica embed.',
    cardKicker: 'Movement card',
    cardBody:
      'A current-status page for sprint searches, movement comfort, controller assumptions, route planning, and future roadmap checks.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Movement status guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'First check',
    cardStatusValue: 'Controls menu',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 有奔跑键吗？Sprint、移动速度和路线图说明',
      description:
        'Subnautica 2 sprint / 奔跑功能中文说明：当前按键检查、移动慢的原因、低 FPS、手柄输入、路线规划、模组风险和官方路线图观察。',
    },
    eyebrow: 'Subnautica 2 奔跑功能状态',
    title: 'Subnautica 2 有奔跑键吗？改键前先看这里',
    description:
      '如果移动感觉慢，很多玩家第一反应就是找 sprint 或 run 按键。这里把当前控制、路线图观察和实际跑图习惯分开讲，避免你把时间浪费在不存在的问题上。',
    quickLabel: '快速结论',
    quickAnswer:
      '截至 2026 年 6 月 3 日，除非你的当前版本里有明确的 sprint / run 绑定，或 Unknown Worlds 更新说明写出该功能已经上线，否则不要默认 Subnautica 2 已经有完整奔跑系统。移动慢时，先检查手柄输入、帧率、路线规划、氧气升级和载具解锁，再考虑改键或模组。',
    fieldNotesTitle: '为什么玩家会搜 sprint',
    fieldNotes: [
      {
        title: '基地里走路最容易感觉慢',
        body: '早期基地、走廊和重复搬材料会让玩家很快注意到移动速度，尤其是还没有稳定载具路线的时候。',
      },
      {
        title: '输入问题会伪装成没有奔跑',
        body: '手柄配置、Steam Input、帧率下降或云游戏延迟，都可能让移动感觉迟钝，但真正原因不一定是少了一个 sprint 键。',
      },
      {
        title: '路线图功能上线后也要重测',
        body: '移动改动会影响体力、动画、手柄布局和辅助功能。以后如果 sprint 上线，也要先测试，而不是只把它当成加速键。',
      },
    ],
    routeChecklistTitle: '怪奔跑前先检查',
    routeChecklist: [
      '检查当前版本的键鼠和手柄绑定。',
      '在新存档或远离大型基地的位置测试移动。',
      '如果帧率不稳，先降低画质看输入是否变顺。',
      '用信标、临时仓库和载具路线减少重复跑路。',
      '大更新后重新看官方路线图和补丁说明。',
    ],
    contentsLabel: '目录',
    routeTitle: '现在怎么处理移动慢',
    routeSteps: [
      {
        title: '先找真正的奔跑绑定',
        body: '从当前控制菜单开始看。如果没有清楚的 sprint 或 run 绑定，不要追旧帖、模组截图或传言。当前版本才是准确信息。',
      },
      {
        title: '区分速度和帧率手感',
        body: '低 FPS 会让转向、走路、游泳都感觉黏。改控制前，先试低一档画质，看输入响应是否改善。',
      },
      {
        title: '检查手柄布局',
        body: 'Steam Input、Xbox 手柄、掌机配置和云游戏都可能影响移动手感。如果怀疑是手柄问题，临时用键盘移动测试一次。',
      },
      {
        title: '把路线做短',
        body: '在移动系统变化前，减少来回跑。放信标、少带垃圾材料、在路线上放临时仓库，载具路线能开就尽早开。',
      },
      {
        title: '路线图更新后再测试',
        body: '如果 sprint 在抢先体验后续更新中上线，先用短存档测试体力、手柄映射和基地内移动，再改自己的长期路线。',
      },
    ],
    tableTitle: '奔跑相关搜索怎么回答',
    tableHeaders: ['问题', '当前答案'],
    tableRows: [
      [
        '有 sprint / 奔跑键吗？',
        '看当前控制菜单。不要依赖旧版本截图、模组截图或愿望清单。',
      ],
      [
        '为什么移动感觉慢？',
        '可能是路线太长、帧率不稳、手柄输入、基地布局，也可能是抢先体验阶段的移动调校。',
      ],
      [
        '改设置能解决吗？',
        '有时可以。帧率更稳后，移动手感会好一些，即使真实速度没有变。',
      ],
      [
        '能不能装 sprint 模组？',
        '如果是重要存档，先不要急着装。至少先备份，并确认模组适配当前热修版本。',
      ],
      [
        '现在最实用的办法是什么？',
        '用信标、短路线、临时仓库、氧气规划和载具解锁，减少重复长距离跑路。',
      ],
    ],
    visualTitle: '移动检查卡',
    visualItems: [
      {
        label: '第一步',
        value: '看控制',
        note: '以当前版本菜单为准。',
      },
      {
        label: '手感问题',
        value: '帧率/输入',
        note: '帧率不稳会像移动很沉。',
      },
      {
        label: '路线解法',
        value: '短循环',
        note: '信标和载具比一个键更重要。',
      },
    ],
    cautionTitle: '不要在唯一存档上乱改移动',
    cautionBody:
      '奔跑和移动模组可能不只改速度。抢先体验阶段，一个热修就可能让模组过期，甚至影响存档。要测试也先复制存档，主联机世界尽量保持干净。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 有奔跑按钮吗？',
        body: '看当前控制菜单和官方更新。如果没有明确 sprint 绑定，就先当成当前版本不可用，而不是找隐藏按键。',
      },
      {
        title: '为什么 Subnautica 2 移动慢？',
        body: '常见原因包括基地路线太长、低 FPS、手柄配置、云游戏延迟、重复跑图太多，或抢先体验阶段的移动调校。',
      },
      {
        title: '以后会加 sprint 吗？',
        body: '关注 Unknown Worlds 路线图和补丁说明。除非官方给出日期，否则不要写死上线时间。',
      },
      {
        title: '没有奔跑时应该怎么跑图？',
        body: '放信标，规划临时仓库，提升氧气，尽早使用载具，不要把所有材料都拖回一个很远的基地。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2BestSettingsLowFps, label: '低 FPS 最佳设置' },
      { href: Routes.Subnautica2ControllerNotWorking, label: '手柄没反应' },
      { href: Routes.Subnautica2OxygenDepth, label: '氧气和深度' },
      { href: Routes.Subnautica2Vehicles, label: '载具指南' },
      { href: Routes.Subnautica2VoiceChat, label: '语音聊天状态' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日检查 Unknown Worlds 抢先体验路线图、Steam 官方页、Xbox 官方页、Hotfix 3 和官方玩法预告。页面插图为 Abyss Guides 原创粉丝站配图；视频为官方 Subnautica 嵌入视频。',
    cardKicker: '移动状态卡',
    cardBody:
      '用于回答 sprint、奔跑键、移动手感、手柄假设、路线规划和后续路线图观察的当前状态页。',
    cardTypeLabel: '类型',
    cardTypeValue: '移动状态指南',
    cardVerifiedLabel: '已检查',
    cardStatusLabel: '第一步',
    cardStatusValue: '看控制菜单',
  },
};

function getCopy(locale: Locale): SprintCopy {
  return copyByLocale[locale] ?? copyByLocale.en;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getCopy(locale);

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Sprint,
  });
}

export default async function Subnautica2SprintPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
        checkedAt: UPDATED_AT,
      }}
      icon={CompassIcon}
      locale={locale}
      pathname={Routes.Subnautica2Sprint}
      sources={sharedSources}
    />
  );
}
