import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { ScanLineIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type BloomBiofilmCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-29';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-bloom-biofilm/',
    label: 'PC Gamer Bloom Biofilm guide',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-angel-comb-bloom-cankers/',
    label: 'GamesRadar+ Bloom Cankers guide',
  },
  {
    href: 'https://games.gg/subnautica-2/guides/subnautica-2-how-to-clear-bloom-infestations/',
    label: 'GAMES.GG Bloom Infestations guide',
  },
  {
    href: 'https://allthings.how/subnautica-2-how-to-destroy-bloom-cankers-with-the-sonic-resonator/',
    label: 'All Things How Sonic Resonator and Bloom Cankers guide',
  },
];

const bloomBiofilmCopy: Record<string, BloomBiofilmCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Bloom Biofilm Guide - How to Remove Cankers With Sonic Resonator',
      description:
        'A practical Subnautica 2 Bloom Biofilm guide covering Sonic Resonator controls, Bloom Cankers, Angel Comb blockers, oxygen safety, Feedback Resonator timing, and common mistakes.',
    },
    eyebrow: 'Subnautica 2 infection blocker',
    title: 'Subnautica 2 Bloom Biofilm Guide',
    description:
      'Bloom Biofilm is the game telling you that a door, cave, or Angel Comb route is tool-gated. If brute force is doing nothing, stop poking it and bring the sound tool.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'PC Gamer says Bloom Biofilm is removed with the Sonic Resonator: equip it, hold the charge input until the reticle meter fills, then release while aiming at the obstruction. GamesRadar+ says Bloom Cankers around the first sick Angel Comb also need Sonic Resonator, while later Angel Combs require the Feedback Resonator upgrade. GAMES.GG describes Bloom Infestations as purple-rooted, hostile zones that must be cleared to unlock Adaptations, and All Things How notes that Bloom biofilm, cankers, sap, and parasites all respond to the Sonic Resonator instead of normal tools.',
    fieldNotesTitle: 'Field notes for Bloom clearing',
    fieldNotes: [
      {
        title: 'Charge before you panic',
        body: 'The tool needs a full charge before release. Half-clicking at a blockage makes the route feel broken when the problem is just timing.',
      },
      {
        title: 'Know when Sonic is not enough',
        body: 'Early Bloom Biofilm and Cankers use Sonic Resonator, but later routes can ask for Feedback Resonator. If a mature Angel Comb refuses to cooperate, check the upgrade chain.',
      },
      {
        title: 'Clear only with an exit plan',
        body: 'Bloom zones combine obstruction, hostile movement, and oxygen pressure. Mark the return line before staring at the purple roots.',
      },
    ],
    routeChecklistTitle: 'Before clearing Bloom Biofilm',
    routeChecklist: [
      'Bring Sonic Resonator and enough battery for repeated charged shots.',
      'Hold the charge until the reticle meter fills before releasing.',
      'Check whether the route needs Feedback Resonator instead.',
      'Set a return marker before clearing infection routes.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Bloom Biofilm removal plan',
    routeSteps: [
      {
        title: 'Confirm it is a Bloom blocker',
        body: 'Look for the infected film, white growths, purple roots, or a doorway that refuses normal interaction. If a cave mouth or ruin door is sealed by organic film, you are probably in Bloom territory.',
      },
      {
        title: 'Equip the Sonic Resonator, not the scanner',
        body: 'All Things How calls out the common mistake: the prompt can fail if you are holding the wrong tool. Put away the Scanner, knife, or other tool and equip the Sonic Resonator directly.',
      },
      {
        title: 'Charge, aim, then release',
        body: 'PC Gamer describes the core input clearly: hold the Sonic Resonator charge until the reticle meter fills, keep the aim on the obstruction, then release the blast.',
      },
      {
        title: 'Clear Cankers before blaming Angel Comb',
        body: 'GamesRadar+ says the first sick Angel Comb is healed by destroying Viral Cankers, with several found by following the Rockbore to juvenile Combs. If the center will not open, search the connected Bloom sites.',
      },
      {
        title: 'Upgrade later, but do not overthink the first route',
        body: 'GamesRadar+ notes later Angel Combs require Feedback Resonator. For the first Heat Tolerance route, Sonic Resonator is the tool to bring; save Feedback Resonator planning for later infected routes.',
      },
    ],
    tableTitle: 'Bloom Biofilm checklist',
    tableHeaders: ['Problem', 'Fix'],
    tableRows: [
      [
        'Biofilm blocks a doorway',
        'Charge and fire Sonic Resonator at the film.',
      ],
      [
        'No prompt appears',
        'Equip Sonic Resonator directly and aim closer at the growth.',
      ],
      [
        'Angel Comb stays closed',
        'Find connected Bloom Cankers or juvenile Comb sites.',
      ],
      [
        'Enemies interrupt the channel',
        'Bring flares, medical kits, and oxygen margin.',
      ],
      ['Later Angel Comb resists', 'Plan for Feedback Resonator upgrade.'],
    ],
    visualTitle: 'Clear order',
    visualItems: [
      {
        label: 'Tool',
        value: 'Sonic',
        note: 'Normal tools do not clear Bloom.',
      },
      {
        label: 'Target',
        value: 'Cankers',
        note: 'White growths and infected film first.',
      },
      {
        label: 'Unlock',
        value: 'Adaptation',
        note: 'Angel Comb opens after the Bloom route is clean.',
      },
    ],
    cautionTitle: 'Do not stand still with starter oxygen',
    cautionBody:
      'The Sonic Resonator takes a charged shot, and Bloom zones usually come with enemies or awkward cave angles. Bring more oxygen and a panic exit before treating the area like a quick scan stop.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you remove Bloom Biofilm in Subnautica 2?',
        body: 'Equip the Sonic Resonator, charge the shot until the reticle meter fills, aim at the Biofilm, and release the blast.',
      },
      {
        title: 'Why does Bloom Biofilm not react?',
        body: 'You may be holding the wrong tool, aiming at the surrounding rock, or standing too far from the infected mass. Equip Sonic Resonator directly and aim at the growth.',
      },
      {
        title: 'Are Bloom Biofilm and Bloom Cankers the same thing?',
        body: 'They are related Bloom blockers. PC Gamer focuses on Biofilm obstructions, while GamesRadar+ and All Things How discuss Cankers around Angel Comb routes. Sonic Resonator is the shared answer for the first route.',
      },
      {
        title: 'When do you need Feedback Resonator?',
        body: 'GamesRadar+ says later Angel Combs require Feedback Resonator. For the first sick Angel Comb and Heat Tolerance route, Sonic Resonator is the tool current guides emphasize.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance Guide' },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator Guide',
      },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2 Guide' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab and Biomods' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against PC Gamer, GamesRadar+, GAMES.GG, and All Things How. Early Access Bloom behavior can change, so the page separates current Sonic Resonator steps from later Feedback Resonator requirements.',
    cardKicker: 'Bloom blocker card',
    cardBody:
      'Sonic Resonator charge timing, Bloom Biofilm removal, Bloom Canker cleanup, Angel Comb blockers, Feedback Resonator timing, and oxygen safety.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Problem guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Bloom Biofilm 指南 - 用 Sonic Resonator 清理 Cankers',
      description:
        'Subnautica 2 中文 Bloom Biofilm 指南：整理 Sonic Resonator 操作、Bloom Cankers、Angel Comb 卡关、氧气安全、Feedback Resonator 时机和常见错误。',
    },
    eyebrow: 'Subnautica 2 感染阻挡物',
    title: 'Subnautica 2 Bloom Biofilm 指南',
    description:
      'Bloom Biofilm 通常表示某个门、洞口或 Angel Comb 路线被工具门槛卡住了。普通攻击没用时，别继续硬点，换成 Sonic Resonator。',
    quickLabel: '快速结论',
    quickAnswer:
      'PC Gamer 说 Bloom Biofilm 要用 Sonic Resonator 清理：装备工具，按住蓄力直到准星两侧能量条充满，然后瞄准阻挡物释放。GamesRadar+ 说第一处生病 Angel Comb 周围的 Bloom Cankers 也需要 Sonic Resonator，后续 Angel Combs 则会需要 Feedback Resonator 升级。GAMES.GG 把 Bloom Infestations 描述为紫色根系和敌对小鱼组成的危险区域，需要清掉才能解锁 Adaptations。All Things How 也提到 Bloom biofilm、cankers、sap 和 parasites 都不是普通工具能处理的，核心答案是 Sonic Resonator。',
    fieldNotesTitle: 'Bloom 清理笔记',
    fieldNotes: [
      {
        title: '先蓄满，再释放',
        body: '这个工具需要蓄满再打。半蓄力乱点会让路线看起来像坏了，其实只是操作时机不对。',
      },
      {
        title: '知道什么时候 Sonic 不够',
        body: '早期 Bloom Biofilm 和 Cankers 用 Sonic Resonator，但后续路线可能要 Feedback Resonator。成熟 Angel Comb 不配合时，先查升级链。',
      },
      {
        title: '清之前先想好怎么走',
        body: 'Bloom 区域同时有阻挡、敌对移动和氧气压力。盯着紫色根系前，先标回程线。',
      },
    ],
    routeChecklistTitle: '清 Bloom Biofilm 前',
    routeChecklist: [
      '带 Sonic Resonator，并确保电量够多次蓄力。',
      '蓄到准星能量条满，再瞄准释放。',
      '确认当前路线是不是已经需要 Feedback Resonator。',
      '清感染路线前先放回程标记。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Bloom Biofilm 清理规划',
    routeSteps: [
      {
        title: '先确认它确实是 Bloom 阻挡',
        body: '注意感染膜、白色肿块、紫色根系，或者完全不响应普通互动的洞口和遗迹门。如果有有机膜封住入口，大概率就是 Bloom 路线。',
      },
      {
        title: '拿 Sonic Resonator，不要拿 Scanner',
        body: 'All Things How 提到一个常见问题：手里拿错工具时，互动提示可能不会出现。把 Scanner、刀或其他工具收起来，直接装备 Sonic Resonator。',
      },
      {
        title: '蓄力、瞄准、释放',
        body: 'PC Gamer 的操作很明确：按住 Sonic Resonator 蓄力，等准星能量条充满，对准 Biofilm 或 Canker，再释放冲击。',
      },
      {
        title: 'Angel Comb 不开时先找 Cankers',
        body: 'GamesRadar+ 说第一处生病 Angel Comb 需要清掉 Viral Cankers，其中一些要沿着 Rockbore 找到 juvenile Combs。中央打不开时，先去找连接的小 Bloom 点。',
      },
      {
        title: '后面再考虑 Feedback Resonator',
        body: 'GamesRadar+ 提到后续 Angel Combs 会需要 Feedback Resonator。第一条 Heat Tolerance 路线先把 Sonic Resonator 用明白，后面的感染路线再规划升级。',
      },
    ],
    tableTitle: 'Bloom Biofilm 检查表',
    tableHeaders: ['问题', '处理方式'],
    tableRows: [
      ['Biofilm 封住门口', '用 Sonic Resonator 蓄力后打在膜上。'],
      ['没有互动提示', '直接装备 Sonic Resonator，靠近并瞄准感染肿块。'],
      ['Angel Comb 不打开', '继续找连接的 Bloom Cankers 或 juvenile Comb 点。'],
      ['蓄力时被打断', '带 flares、医疗包和更多氧气余量。'],
      ['后期 Angel Comb 清不动', '开始规划 Feedback Resonator 升级。'],
    ],
    visualTitle: '清理顺序',
    visualItems: [
      {
        label: '工具',
        value: 'Sonic',
        note: '普通工具不能清 Bloom。',
      },
      {
        label: '目标',
        value: 'Cankers',
        note: '先处理白色肿块和感染膜。',
      },
      {
        label: '解锁',
        value: 'Adaptation',
        note: 'Bloom 路线干净后 Angel Comb 才会推进。',
      },
    ],
    cautionTitle: '不要用开局氧气站着硬蓄力',
    cautionBody:
      'Sonic Resonator 需要蓄力，而 Bloom 区域通常还有敌对生物和别扭的洞穴角度。带足氧气和撤离手段，再把它当成清理任务。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Bloom Biofilm 怎么清？',
        body: '装备 Sonic Resonator，按住蓄力到准星能量条充满，瞄准 Biofilm 后释放。',
      },
      {
        title: '为什么 Bloom Biofilm 没反应？',
        body: '可能是拿错工具、瞄到了旁边岩石，或者离感染肿块太远。直接装备 Sonic Resonator，并对准白色或膜状感染部位。',
      },
      {
        title: 'Bloom Biofilm 和 Bloom Cankers 是一回事吗？',
        body: '它们是同一类 Bloom 阻挡物。PC Gamer 主要讲 Biofilm，GamesRadar+ 和 All Things How 讲 Angel Comb 周围的 Cankers；第一条路线的共同答案都是 Sonic Resonator。',
      },
      {
        title: '什么时候需要 Feedback Resonator？',
        body: 'GamesRadar+ 说后续 Angel Combs 会需要 Feedback Resonator。第一处生病 Angel Comb 和 Heat Tolerance 路线，当前攻略强调的是 Sonic Resonator。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb 指南' },
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance 指南' },
      { href: Routes.Subnautica2SonicResonator, label: 'Sonic Resonator 指南' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator 指南',
      },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气指南' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker 指南' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab 和 Biomods' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 PC Gamer、GamesRadar+、GAMES.GG 和 All Things How。抢先体验阶段 Bloom 机制可能变化，所以页面把当前 Sonic Resonator 操作和后续 Feedback Resonator 需求分开写。',
    cardKicker: 'Bloom 阻挡卡片',
    cardBody:
      'Sonic Resonator 蓄力时机、Bloom Biofilm 清理、Bloom Canker 顺序、Angel Comb 卡关、Feedback Resonator 时机和氧气安全。',
    cardTypeLabel: '类型',
    cardTypeValue: '问题解法',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = bloomBiofilmCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  bloomBiofilmCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Bloom Biofilm Guide',
      description:
        'Guide for Bloom Biofilm, Bloom Cankers, Sonic Resonator controls, Angel Comb blockers, Feedback Resonator timing, and oxygen safety.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = bloomBiofilmCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2BloomBiofilm,
  });
}

export default async function BloomBiofilmGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = bloomBiofilmCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={ScanLineIcon}
      locale={locale}
      pathname={Routes.Subnautica2BloomBiofilm}
      sources={sharedSources}
    />
  );
}
