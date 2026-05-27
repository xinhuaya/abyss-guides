import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { FactoryIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type PowerPlantObservatoryCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-27';
const UPDATED_AT = '2026-05-27';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-power-plant-observatory/',
    label: 'PC Gamer Power Plant and Observatory guide',
  },
  {
    href: 'https://subnautica2.guide/wikis/karakorum-power-plant',
    label: 'Subnautica 2 Guide Karakorum Power Plant wiki',
  },
  {
    href: 'https://gamingpromax.com/subnautica-2-fix-power-plant-open-observatory/',
    label: 'Gaming ProMax Power Plant repair walkthrough',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-conduit-crystals/',
    label: 'GamesRadar Conduit Crystal location guide',
  },
];

const powerPlantObservatoryCopy: Record<string, PowerPlantObservatoryCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Power Plant Observatory Guide - Repair Turbine and Open the Door',
      description:
        'A practical Subnautica 2 Power Plant Observatory guide covering Axum Vision, Bioscanner, Tadpole Depth Module, turbine repair materials, Habitat Builder repair, control rooms, and Observatory access.',
    },
    eyebrow: 'Subnautica 2 story route',
    title: 'Subnautica 2 Power Plant Observatory Guide',
    description:
      'The Observatory door is not opened by one magic button. You need the right alien adaptation, a scanned turbine, a very expensive repair job, and the patience to finish the control-room steps without treating the whole trip like a loot run.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'To open the Observatory, current guides say you must clear the Alien Ruins Angel Comb for Axum Vision, scan the damaged turbine with the Bioscanner, repair it with the Habitat Builder, then restart the Power Plant from the generator controls. PC Gamer and Subnautica 2 Guide list the repair cost as 10 Titanium Ingots, 10 Mangalloy Ingots, and 10 Strontium. PC Gamer breaks the raw processing burden down to 60 Titanium, 20 Celestine, 10 Atacamite, and 10 Troilite, so bring a haul plan before you leave base.',
    contentsLabel: 'Contents',
    routeTitle: 'Power Plant repair route',
    routeSteps: [
      {
        title: 'Clear Angel Comb before touching the turbine',
        body: 'PC Gamer starts the route by clearing the Angel Comb in the Alien Ruins and getting Axum Vision. Subnautica 2 Guide also says Axum Vision is required before you can work with the Axum consoles. If you skip this, the rest of the route stalls.',
      },
      {
        title: 'Bring depth, oxygen, and the right tools',
        body: 'This is not an early swim. Current guides call out Tadpole Depth Module, Bioscanner, Habitat Builder, and a stable oxygen setup. A Beacon at the Power Plant and another near the exit saves a lot of second-guessing.',
      },
      {
        title: 'Scan the damaged turbine',
        body: 'The damaged turbine sits on the large circular structure above the Angel Comb. PC Gamer notes that you scan the broken turbine first; Subnautica 2 Guide says the damaged section must be scanned with a Bioscanner before repair.',
      },
      {
        title: 'Prepare the repair materials as one haul',
        body: 'The repair is heavy: 10 Titanium Ingots, 10 Mangalloy Ingots, and 10 Strontium. PC Gamer turns that into 60 Titanium, 20 Celestine, 10 Atacamite, and 10 Troilite after processing. If your storage is messy, this step will punish you.',
      },
      {
        title: 'Repair with the Habitat Builder, not the Repair Tool',
        body: 'This part is easy to misread. Subnautica 2 Guide and Gaming ProMax describe the turbine repair as a Habitat Builder construction job. Treat it like building a facility section, then move to the control rooms.',
      },
      {
        title: 'Restart the generator controls',
        body: 'Subnautica 2 Guide describes Lower and Upper Generator Control rooms around the Root Canyon and Power Plant wall. PC Gamer says to interact with the alien consoles, dials, and sliders until the controls turn green, then activate the central console.',
      },
      {
        title: 'Open the Observatory after power returns',
        body: 'Once the turbine is repaired and the Power Plant is running, the surrounding facility powers up and the Observatory door opens. If the door still refuses you, assume one control-room step or language/adaptation requirement is unfinished.',
      },
    ],
    tableTitle: 'Repair material checklist',
    tableHeaders: ['Need', 'Planning note'],
    tableRows: [
      ['Axum Vision', 'Get it from the Angel Comb route before console work.'],
      ['Bioscanner', 'Used to scan the broken turbine and reveal repair.'],
      ['Habitat Builder', 'The tool used to build the turbine repair.'],
      [
        'Tadpole Depth Module',
        'Needed for a sane trip into the Power Plant region.',
      ],
      ['10 Titanium Ingots', 'Part of the turbine repair cost.'],
      [
        '10 Mangalloy Ingots',
        'Requires Titanium Ingots, Atacamite, and Troilite.',
      ],
      [
        '10 Strontium',
        'Processed from Celestine according to current repair math.',
      ],
      [
        'Cargo space',
        'PC Gamer suggests a haul setup or roughly 30 open slots.',
      ],
    ],
    visualTitle: 'Observatory unlock card',
    visualItems: [
      {
        label: 'Adapt',
        value: 'Axum',
        note: 'Clear Angel Comb and use Axum Vision for consoles.',
      },
      {
        label: 'Repair',
        value: '30',
        note: '10 Titanium Ingots, 10 Mangalloy Ingots, 10 Strontium.',
      },
      {
        label: 'Open',
        value: 'Door',
        note: 'Generator controls power the Observatory path.',
      },
    ],
    cautionTitle: 'The material bill is the real gate',
    cautionBody:
      'Do not arrive with half the ingots and good intentions. Stage the materials at base or in a forward locker, keep at least one Troilite protected for Metal Farm planning, and only make the final run when the full repair cost is packed.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you open the Observatory in Subnautica 2?',
        body: 'Clear the Angel Comb for Axum Vision, scan the damaged turbine with the Bioscanner, repair it with the Habitat Builder, complete the generator controls, and return after the Power Plant powers up.',
      },
      {
        title: 'What materials repair the Power Plant turbine?',
        body: 'Current PC Gamer and Subnautica 2 Guide data lists 10 Titanium Ingots, 10 Mangalloy Ingots, and 10 Strontium.',
      },
      {
        title: 'Do you use the Repair Tool on the turbine?',
        body: 'No. The current walkthroughs describe this as a Habitat Builder repair/build action after scanning the damaged turbine section.',
      },
      {
        title: 'Why is the Observatory door still closed?',
        body: 'Most likely a prerequisite is missing: Axum Vision, alien-language progress, the Bioscanner turbine scan, one generator-control interaction, or the final central console activation.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2KarakorumPowerPlant,
        label: 'Karakorum Power Plant Route',
      },
      { href: Routes.Subnautica2AxumVision, label: 'Axum Vision Guide' },
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator Guide',
      },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner and Biomods',
      },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module Guide',
      },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2TitaniumIngot, label: 'Titanium Ingot Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot Guide' },
      { href: Routes.Subnautica2Strontium, label: 'Strontium Guide' },
      { href: Routes.Subnautica2Celestine, label: 'Celestine Guide' },
      { href: Routes.Subnautica2Atacamite, label: 'Atacamite Guide' },
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location Guide' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against PC Gamer, Subnautica 2 Guide, Gaming ProMax, and GamesRadar. Subnautica 2 is in Early Access, so repair costs, console steps, language requirements, and Observatory behavior should be rechecked after patches.',
    cardKicker: 'Repair route card',
    cardBody:
      'Axum Vision, Bioscanner scan, Habitat Builder repair, 10 Titanium Ingots, 10 Mangalloy Ingots, 10 Strontium, generator controls, and Observatory access.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Story objective guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Power Plant Observatory 指南 - 修复 turbine 并打开门',
      description:
        'Subnautica 2 中文 Power Plant Observatory 指南：Axum Vision、Bioscanner、Tadpole Depth Module、turbine 修复材料、Habitat Builder、控制室和 Observatory 开门流程。',
    },
    eyebrow: 'Subnautica 2 剧情路线',
    title: 'Subnautica 2 Power Plant Observatory 指南',
    description:
      'Observatory 的门不是按一个按钮就开。你需要 Axum Vision、Bioscanner 扫描、很贵的一次 turbine 修复，还要把控制室步骤做完。最好按任务路线来，不要顺手把它做成采矿乱跑。',
    quickLabel: '快速结论',
    quickAnswer:
      '要打开 Observatory，当前攻略的流程是：先清掉 Alien Ruins 的 Angel Comb，拿到 Axum Vision；用 Bioscanner 扫描损坏的 turbine；用 Habitat Builder 修复；再通过 generator controls 重启 Power Plant。PC Gamer 和 Subnautica 2 Guide 都列出修复成本：10 Titanium Ingots、10 Mangalloy Ingots、10 Strontium。PC Gamer 把原材料压力拆成 60 Titanium、20 Celestine、10 Atacamite、10 Troilite，所以出发前一定要有运输计划。',
    contentsLabel: '目录',
    routeTitle: 'Power Plant 修复路线',
    routeSteps: [
      {
        title: '先清 Angel Comb，再碰 turbine',
        body: 'PC Gamer 把第一步写成清理 Alien Ruins 的 Angel Comb 并拿到 Axum Vision。Subnautica 2 Guide 也写到 Axum Vision 是操作 Axum 控制台的前置条件。跳过这一步，后面会卡住。',
      },
      {
        title: '带深度、氧气和正确工具',
        body: '这不是前期开局游泳路线。当前攻略都提到 Tadpole Depth Module、Bioscanner、Habitat Builder 和稳定氧气准备。Power Plant 放一个 Beacon，出口再放一个，会少迷路很多。',
      },
      {
        title: '扫描损坏的 turbine',
        body: '损坏的 turbine 在 Angel Comb 上方的大型圆形结构附近。PC Gamer 写到要先扫描破损 turbine；Subnautica 2 Guide 则说明 damaged section 需要用 Bioscanner 扫描后才能修。',
      },
      {
        title: '把修复材料当成一次运输任务',
        body: '修复很贵：10 Titanium Ingots、10 Mangalloy Ingots、10 Strontium。按 PC Gamer 的拆法，处理后要准备 60 Titanium、20 Celestine、10 Atacamite、10 Troilite。仓库乱的话，这一步会非常折磨。',
      },
      {
        title: '用 Habitat Builder，不是 Repair Tool',
        body: '这点很容易看错。Subnautica 2 Guide 和 Gaming ProMax 都把 turbine 修复描述成 Habitat Builder 的建造/修复动作。把它当成建一段设施，然后再去控制室。',
      },
      {
        title: '重启 generator controls',
        body: 'Subnautica 2 Guide 写到 Lower 和 Upper Generator Control 分布在 Root Canyon 与 Power Plant 墙体附近。PC Gamer 则说明要把外星控制台、旋钮和滑块调到绿色，再启动中央控制台。',
      },
      {
        title: 'Power Plant 供电后再进 Observatory',
        body: '当 turbine 修好并且 Power Plant 运转后，附近设施会恢复供电，Observatory 门才会打开。如果门还不开，通常是控制室、语言/适应能力、扫描或中央控制台其中一步没完成。',
      },
    ],
    tableTitle: '修复材料检查表',
    tableHeaders: ['需要什么', '规划备注'],
    tableRows: [
      ['Axum Vision', '先走 Angel Comb 路线，之后才能处理控制台。'],
      ['Bioscanner', '扫描损坏 turbine，并触发修复需求。'],
      ['Habitat Builder', '真正用来完成 turbine 修复的工具。'],
      ['Tadpole Depth Module', '没有深度模块，这条路线会很别扭。'],
      ['10 Titanium Ingots', 'turbine 修复成本之一。'],
      ['10 Mangalloy Ingots', '需要 Titanium Ingots、Atacamite 和 Troilite。'],
      ['10 Strontium', '按当前材料拆解，来自 Celestine 加工链。'],
      ['运输空间', 'PC Gamer 建议用运输配置，或留出大约 30 格空间。'],
    ],
    visualTitle: 'Observatory 解锁卡',
    visualItems: [
      {
        label: '适应',
        value: 'Axum',
        note: '清 Angel Comb，用 Axum Vision 处理控制台。',
      },
      {
        label: '修复',
        value: '30',
        note: '10 Titanium Ingots、10 Mangalloy Ingots、10 Strontium。',
      },
      {
        label: '开门',
        value: 'Door',
        note: 'generator controls 会恢复 Observatory 路线供电。',
      },
    ],
    cautionTitle: '真正的门槛是材料账单',
    cautionBody:
      '别带着一半材料和一腔热情就出门。先在基地或前哨箱子里把材料凑齐，至少留一块 Troilite 给 Metal Farm 规划，确认完整成本都带上后再跑最终修复。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Observatory 怎么打开？',
        body: '先清 Angel Comb 拿 Axum Vision，用 Bioscanner 扫 damaged turbine，用 Habitat Builder 修复，完成 generator controls，再等 Power Plant 供电恢复后返回 Observatory。',
      },
      {
        title: 'Power Plant turbine 修复需要什么材料？',
        body: '当前 PC Gamer 和 Subnautica 2 Guide 数据列出 10 Titanium Ingots、10 Mangalloy Ingots、10 Strontium。',
      },
      {
        title: '修 turbine 是用 Repair Tool 吗？',
        body: '不是。当前攻略把这一步写成 Habitat Builder 的修复/建造动作，需要先用 Bioscanner 扫描 damaged turbine section。',
      },
      {
        title: 'Observatory 门为什么还是不开？',
        body: '大概率还有前置没完成：Axum Vision、外星语言进度、Bioscanner turbine 扫描、某个 generator control 交互，或者最终 central console 激活。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      {
        href: Routes.Subnautica2KarakorumPowerPlant,
        label: 'Karakorum Power Plant 路线',
      },
      { href: Routes.Subnautica2AxumVision, label: 'Axum Vision 指南' },
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb 指南' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator 指南',
      },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner 和 Biomods',
      },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module 指南',
      },
      { href: Routes.Subnautica2HabitatBuilder, label: 'Habitat Builder 指南' },
      { href: Routes.Subnautica2TitaniumIngot, label: 'Titanium Ingot 指南' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot 指南' },
      { href: Routes.Subnautica2Strontium, label: 'Strontium 指南' },
      { href: Routes.Subnautica2Celestine, label: 'Celestine 指南' },
      { href: Routes.Subnautica2Atacamite, label: 'Atacamite 指南' },
      { href: Routes.Subnautica2Troilite, label: 'Troilite 位置指南' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm 指南' },
      { href: Routes.Subnautica2ConduitCrystal, label: 'Conduit Crystal 指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 27 日核对 PC Gamer、Subnautica 2 Guide、Gaming ProMax 和 GamesRadar。Subnautica 2 仍处于抢先体验阶段，修复成本、控制室步骤、语言条件和 Observatory 行为都可能随补丁变化。',
    cardKicker: '修复路线卡',
    cardBody:
      'Axum Vision、Bioscanner 扫描、Habitat Builder 修复、10 Titanium Ingots、10 Mangalloy Ingots、10 Strontium、generator controls 和 Observatory。',
    cardTypeLabel: '类型',
    cardTypeValue: '剧情目标指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = powerPlantObservatoryCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  powerPlantObservatoryCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Power Plant Observatory Guide',
      description:
        'Guide for opening the Observatory in Subnautica 2, including Axum Vision, Bioscanner, Tadpole Depth Module, turbine repair materials, Habitat Builder repair, and generator controls.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = powerPlantObservatoryCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2PowerPlantObservatory,
  });
}

export default async function PowerPlantObservatoryGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = powerPlantObservatoryCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={FactoryIcon}
      locale={locale}
      pathname={Routes.Subnautica2PowerPlantObservatory}
      sources={sharedSources}
    />
  );
}
