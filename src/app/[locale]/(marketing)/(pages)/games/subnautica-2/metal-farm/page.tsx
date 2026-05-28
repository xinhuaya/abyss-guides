import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getBaseUrl, getUrlWithLocale } from '@/lib/urls';
import { Routes } from '@/routes';
import {
  AlertTriangleIcon,
  BatteryChargingIcon,
  FactoryIcon,
  RadarIcon,
  ScanLineIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const PUBLISHED_AT = '2026-05-24';
const UPDATED_AT = '2026-05-29';

const zhUnlockSteps = [
  {
    title: '先到 Alien Ruins 路线',
    body: '当前报道把 Metal Farm 扫描点放在 Alien Ruins Research Base 东北方向的深层绿色水池区域。出发前准备 Tadpole Depth Module。',
  },
  {
    title: '扫描多个 Metal Farm',
    body: 'PC Gamer 报道称需要三次扫描才能解锁蓝图。贴近地形、慢慢推进，活着离开比一次跑完更重要。',
  },
  {
    title: '顺手拿建造材料',
    body: '同一条路线也可能拿到 Troilite 和 Axum Bacterial Culture，它们都和 Metal Farm 建造有关。',
  },
  {
    title: '建在已有电力附近',
    body: 'Metal Farm 看起来需要稳定电力支持，所以第一台最好放在电力网络附近，而不是离基地太远。',
  },
  {
    title: '建造前先选第一种金属',
    body: 'Troilite 通常是最好的第一候选，因为它会和 Mangalloy、Entangled Power Cell 抢材料。不要空手站在机器前才开始想。',
  },
];

const zhBuildRows = [
  [
    'Mangalloy Ingot',
    '当前报道把它列为建造材料之一，连接 Troilite、Atacamite 和 Titanium Ingot 规划。',
  ],
  [
    'Axum Bacterial Culture',
    '当前报道把它列为建造材料之一，来源也和这条后期路线有关。',
  ],
  ['电力支持', '具体消耗可能会变，先多准备电力，再把它当成稳定生产设备。'],
  ['Sonic Resonator', '计时完成后，需要用它打碎产出的矿石节点。'],
];

const zhWorkflow = [
  '打开 Metal Farm 储存格。',
  '放入你想复制的金属，早期最值得测试的通常是 Troilite。',
  '等待生产计时。',
  '用 Sonic Resonator 打碎产出的矿石节点。',
  '电力和储存稳定后再重复。',
];

const zhFieldNotes = [
  {
    title: '第一台建在你能随手照看的地方',
    body: 'Metal Farm 不只是机器，它会改变你的电力和储存习惯。第一台放近一点，生产、电力或背包不舒服时你能马上发现。',
  },
  {
    title: '复制瓶颈材料，不复制舒服材料',
    body: 'Titanium 看起来永远有用，但第一批生产循环应该给会卡多个配方的稀有输入。Troilite 通常是更干净的第一轮测试。',
  },
  {
    title: '保留一份干净样本',
    body: '实验前，把一块 Troilite 或 Atacamite 原样放在标记好的柜子里。这个小备份能避免很多后期路线白跑。',
  },
];

const zhFaqs = [
  {
    title: 'Subnautica 2 怎么解锁 Metal Farm？',
    body: '当前 PC Gamer 报道把 Metal Farm 扫描点放在 Alien Ruins Research Base 东北方向的深层绿色水池区域，并称三次扫描可解锁蓝图。',
  },
  {
    title: 'Metal Farm 建造需要什么？',
    body: '当前报道把建造链和 Mangalloy Ingot、Axum Bacterial Culture 联系在一起。Early Access 配方会变，花稀有材料前先确认建造菜单。',
  },
  {
    title: 'Metal Farm 第一种复制什么最好？',
    body: 'Troilite 是最强的第一候选，因为它稀有，而且会和 Mangalloy、Entangled Power Cell 制作竞争。',
  },
  {
    title: 'Metal Farm 需要电力吗？',
    body: '需要。第一台最好建在稳定电力旁边，别让生产循环把整个基地拖没电。',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const isZh = locale === 'zh';

  return constructMetadata({
    title: isZh
      ? 'Subnautica 2 Metal Farm 指南 - 扫描位置、建造材料和用法'
      : 'Subnautica 2 Metal Farm Guide - Scan Location, Build Cost, and Use',
    description: isZh
      ? 'Subnautica 2 Metal Farm 解锁和使用攻略：扫描位置、建造材料、电力规划、Troilite 复制和安全注意点。'
      : 'Unlock and use Metal Farms in Subnautica 2 with scan location notes, build cost, power planning, Troilite duplication, and safety warnings.',
    locale,
    pathname: Routes.Subnautica2MetalFarm,
  });
}

const unlockSteps = [
  {
    title: 'Reach the Alien Ruins route',
    body: 'Current reporting places Metal Farm scans in the deep green-pool area northeast of the Alien Ruins Research Base. Bring the Tadpole Depth Module.',
  },
  {
    title: 'Scan multiple Metal Farms',
    body: 'PC Gamer reports that three scans unlock the blueprint. Stay low, move deliberately, and prioritize leaving alive over finishing the scan route in one attempt.',
  },
  {
    title: 'Grab required materials while there',
    body: 'The same route can provide Troilite and Axum Bacterial Culture, both reported as relevant to Metal Farm construction.',
  },
  {
    title: 'Build near existing power',
    body: 'Metal Farms appear to need serious power support, so place the first one near linked power infrastructure instead of far from your base network.',
  },
  {
    title: 'Pick the first metal before you build',
    body: 'Troilite is usually the best first candidate because it competes with Mangalloy and Entangled Power Cell planning. Do not arrive at the machine with no input ready.',
  },
];

const buildRows = [
  [
    'Mangalloy Ingot',
    'Reported as a required build material. It connects Troilite, Atacamite, and Titanium Ingot planning.',
  ],
  [
    'Axum Bacterial Culture',
    'Reported as a required build material gathered from the same late-route region.',
  ],
  [
    'Power support',
    'Exact consumption may be unclear, so overbuild power before relying on the farm.',
  ],
  [
    'Sonic Resonator',
    'Needed to break the produced ore node after the timer completes.',
  ],
];

const workflow = [
  'Open the Metal Farm storage.',
  'Insert the metal you want duplicated, with Troilite as the highest-value early candidate.',
  'Wait for the production timer.',
  'Break the produced node with the Sonic Resonator.',
  'Repeat once power and storage are stable.',
];

const fieldNotes = [
  {
    title: 'Build the first farm where you can babysit it',
    body: 'A Metal Farm is not just a machine, it is a power and storage habit. Put the first one close enough that you notice when production, power, or inventory gets awkward.',
  },
  {
    title: 'Duplicate bottlenecks, not comfort materials',
    body: 'Titanium feels useful, but the first production cycles should go into rare inputs that block several recipes. Troilite is usually the cleaner first test.',
  },
  {
    title: 'Keep one clean input sample',
    body: 'Before experimenting, leave one Troilite or Atacamite untouched in a marked locker. That small reserve prevents a lot of bad late-route decisions.',
  },
];

const faqs = [
  {
    title: 'How do you unlock Metal Farm in Subnautica 2?',
    body: 'Current PC Gamer reporting places Metal Farm scans in the deep green-pool area northeast of the Alien Ruins Research Base and says three scans unlock the blueprint.',
  },
  {
    title: 'What does Metal Farm cost to build?',
    body: 'Current reporting ties the build chain to Mangalloy Ingot and Axum Bacterial Culture. Because Early Access recipes can change, confirm the build menu before spending rare materials.',
  },
  {
    title: 'What should you duplicate first with Metal Farm?',
    body: 'Troilite is the strongest first candidate because it is rare and competes with Mangalloy and Entangled Power Cell crafting.',
  },
  {
    title: 'Do Metal Farms need power?',
    body: 'Yes. Build the first farm near stable power support so the production loop does not starve the rest of your base.',
  },
];

export default async function MetalFarmGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isZh = locale === 'zh';
  const activeUnlockSteps = isZh ? zhUnlockSteps : unlockSteps;
  const activeBuildRows = isZh ? zhBuildRows : buildRows;
  const activeWorkflow = isZh ? zhWorkflow : workflow;
  const activeFieldNotes = isZh ? zhFieldNotes : fieldNotes;
  const activeFaqs = isZh ? zhFaqs : faqs;
  const pageCopy = isZh
    ? {
        articleDescription:
          'Metal Farm 扫描、建造、电力和生产说明，覆盖 Troilite、Mangalloy Ingot、Axum Bacterial Culture 和 Sonic Resonator。',
        breadcrumbName: 'Subnautica 2 Metal Farm 指南',
        eyebrow: '稀有金属生产系统',
        title: 'Subnautica 2 Metal Farm 指南',
        description:
          'Metal Farm 能把稀有材料从瓶颈变成可重复生产流程，但前提是你安全解锁、正确供电，并选对第一种复制金属。',
        quickLabel: '快速答案',
        quickAnswer:
          '在 Alien Ruins Research Base 东北方向的深层绿色水池区域扫描 Metal Farm，然后用 Mangalloy Ingot 和 Axum Bacterial Culture 建造。供电后放入 Troilite 这类金属，计时结束后打碎产出的矿石节点。第一轮循环优先复制会卡多个配方的稀有材料，不要浪费在普通矿上。',
        unlockTitle: '怎么解锁 Metal Farm',
        requirementsTitle: '建造材料和支持条件',
        requirementHeader: '需求',
        planningHeader: '规划建议',
        workflowTitle: '生产流程',
        warningTitle: '安全提醒',
        warningBody:
          '报道中的扫描路线很深，也有掠食者和大型威胁。带维修、治疗和足够氧气余量；路线变糟时，放弃扫描比硬撑更好。',
        fieldNotesTitle: '实用笔记',
        faqTitle: '常见问题',
        readNextTitle: '继续看',
        related: [
          ['Conduit Crystal 指南', Routes.Subnautica2ConduitCrystal],
          ['Sonic Resonator 指南', Routes.Subnautica2SonicResonator],
          ['Feedback Resonator 指南', Routes.Subnautica2FeedbackResonator],
          ['Mangalloy Ingot 指南', Routes.Subnautica2Mangalloy],
          ['Troilite 获取路线', Routes.Subnautica2Troilite],
          ['Mineralized Clinker 指南', Routes.Subnautica2MineralizedClinker],
          ['Troilite 卡进度修复', Routes.Subnautica2TroiliteSoftlock],
          ['Atacamite 获取路线', Routes.Subnautica2Atacamite],
          ['Entangled Power Cell 指南', Routes.Subnautica2EntangledPowerCell],
          ['Karakorum Power Plant 路线', Routes.Subnautica2KarakorumPowerPlant],
        ],
        sourceTitle: '来源说明',
        sourceBody:
          '2026 年 5 月 29 日复查：对照当前 PC Gamer Metal Farm 报道、Troilite 路线笔记和 Entangled Power Cell 材料资料。蓝图和材料需求在补丁后需要重新核对。',
        sourceLabel: 'PC Gamer Metal Farm 指南',
        basePlanningTitle: '基地规划',
        basePlanningBody:
          '第一台建在电力旁边。会拖垮基地供电的稀有材料机器，不算真正的生产计划。',
        firstMetalTitle: '第一种金属',
        firstMetalBody:
          'Troilite 是最强的第一候选，因为它稀有、影响进度，也会进入 Mangalloy 制作链。',
      }
    : {
        articleDescription:
          'Metal Farm scan, build, power, and production notes for Troilite, Mangalloy Ingot, Axum Bacterial Culture, and Sonic Resonator.',
        breadcrumbName: 'Subnautica 2 Metal Farm Guide',
        eyebrow: 'Rare-metal production system',
        title: 'Subnautica 2 Metal Farm Guide',
        description:
          'Metal Farms are the kind of system that can turn rare materials from a bottleneck into a repeatable production loop, but only if you unlock and power them safely.',
        quickLabel: 'Quick answer',
        quickAnswer:
          'Scan Metal Farms in the deep green-pool area northeast of the Alien Ruins Research Base, then build one with a Mangalloy Ingot and Axum Bacterial Culture. Once powered, insert a metal such as Troilite and break the produced node after the timer completes. Save the first successful loop for materials that block multiple recipes, not common ore.',
        unlockTitle: 'How to unlock the Metal Farm',
        requirementsTitle: 'Build requirements and support',
        requirementHeader: 'Requirement',
        planningHeader: 'Planning note',
        workflowTitle: 'Production workflow',
        warningTitle: 'Safety warning',
        warningBody:
          'The reported scan route is deep and dangerous, with predators and a major threat nearby. Bring repairs, healing, and enough oxygen margin to abandon the scan if the route goes bad.',
        fieldNotesTitle: 'Field notes',
        faqTitle: 'FAQ',
        readNextTitle: 'Read next',
        related: [
          ['Conduit Crystal Guide', Routes.Subnautica2ConduitCrystal],
          ['Sonic Resonator Guide', Routes.Subnautica2SonicResonator],
          ['Feedback Resonator Guide', Routes.Subnautica2FeedbackResonator],
          ['Mangalloy Ingot Guide', Routes.Subnautica2Mangalloy],
          ['Troilite Location', Routes.Subnautica2Troilite],
          ['Mineralized Clinker Guide', Routes.Subnautica2MineralizedClinker],
          ['Troilite Softlock Fix', Routes.Subnautica2TroiliteSoftlock],
          ['Atacamite Location', Routes.Subnautica2Atacamite],
          ['Entangled Power Cell Guide', Routes.Subnautica2EntangledPowerCell],
          [
            'Karakorum Power Plant Route',
            Routes.Subnautica2KarakorumPowerPlant,
          ],
        ],
        sourceTitle: 'Source note',
        sourceBody:
          'Checked May 29, 2026 against current PC Gamer Metal Farm reporting, Troilite route notes, and Entangled Power Cell material data. Recheck blueprint and ingredient requirements after patches.',
        sourceLabel: 'PC Gamer Metal Farm guide',
        basePlanningTitle: 'Base planning',
        basePlanningBody:
          'Build the first farm near power. A rare-material machine that starves your base is not a production plan.',
        firstMetalTitle: 'Best first metal',
        firstMetalBody:
          'Troilite is the strongest first candidate because it is rare, progression-relevant, and used in Mangalloy crafting.',
      };
  const baseUrl = getBaseUrl().replace(/\/$/, '');
  const pageUrl = getUrlWithLocale(Routes.Subnautica2MetalFarm, locale).replace(
    /\/$/,
    ''
  );
  const hubUrl = getUrlWithLocale(Routes.Subnautica2, locale).replace(
    /\/$/,
    ''
  );
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: pageCopy.title,
      description: pageCopy.articleDescription,
      url: pageUrl,
      datePublished: PUBLISHED_AT,
      dateModified: UPDATED_AT,
      inLanguage: locale,
      author: {
        '@type': 'Organization',
        name: 'Abyss Guides',
        url: baseUrl,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Abyss Guides',
        url: baseUrl,
      },
      mainEntityOfPage: pageUrl,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Abyss Guides',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Subnautica 2',
          item: hubUrl,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: pageCopy.breadcrumbName,
          item: pageUrl,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: activeFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.title,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.body,
        },
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-[#031314] text-[#dff8f0]">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <section className="relative overflow-hidden border-b border-cyan-200/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(106,240,224,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(106,240,224,.15) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(64,224,208,.18),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(240,139,79,.13),transparent_30%),linear-gradient(180deg,rgba(3,19,20,.16),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <FactoryIcon className="size-4" />
              {pageCopy.eyebrow}
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#e8fff9] md:text-6xl">
              {pageCopy.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
              {pageCopy.description}
            </p>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="space-y-8">
            <section className="border border-cyan-200/15 bg-[#082226] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
                {pageCopy.quickLabel}
              </p>
              <p className="mt-4 text-lg leading-8 text-[#d7eee8]">
                {pageCopy.quickAnswer}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {pageCopy.unlockTitle}
              </h2>
              <div className="mt-5 grid gap-4">
                {activeUnlockSteps.map((step) => (
                  <section
                    key={step.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <ScanLineIcon className="size-4" />
                      <h3 className="font-semibold">{step.title}</h3>
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{step.body}</p>
                  </section>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {pageCopy.requirementsTitle}
              </h2>
              <div className="mt-5 overflow-hidden border border-cyan-200/12">
                <table className="w-full border-collapse bg-[#071f23] text-left text-sm">
                  <thead className="bg-[#0b2d33] text-[#dff8f0]">
                    <tr>
                      <th className="p-4 font-semibold">
                        {pageCopy.requirementHeader}
                      </th>
                      <th className="p-4 font-semibold">
                        {pageCopy.planningHeader}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeBuildRows.map(([item, note]) => (
                      <tr key={item} className="border-t border-cyan-200/10">
                        <td className="p-4 align-top font-medium text-[#78ead7]">
                          {item}
                        </td>
                        <td className="p-4 leading-6 text-[#abc8c3]">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {pageCopy.workflowTitle}
              </h2>
              <ol className="mt-5 grid gap-3">
                {activeWorkflow.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-3 border border-cyan-200/12 bg-[#071f23] p-4 text-sm leading-6 text-[#d1e8e2]"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center border border-cyan-200/20 text-[#78ead7]">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="border border-cyan-200/12 bg-[#082226] p-6">
              <div className="flex items-center gap-3">
                <AlertTriangleIcon className="size-6 text-[#f08b4f]" />
                <h2 className="text-3xl font-semibold text-[#effffb]">
                  {pageCopy.warningTitle}
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                {pageCopy.warningBody}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {pageCopy.fieldNotesTitle}
              </h2>
              <div className="mt-5 grid gap-4">
                {activeFieldNotes.map((note) => (
                  <section
                    key={note.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <h3 className="font-semibold text-[#78ead7]">
                      {note.title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{note.body}</p>
                  </section>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {pageCopy.faqTitle}
              </h2>
              <div className="mt-5 grid gap-4">
                {activeFaqs.map((faq) => (
                  <section
                    key={faq.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <h3 className="font-semibold text-[#78ead7]">
                      {faq.title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{faq.body}</p>
                  </section>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                {pageCopy.readNextTitle}
              </h2>
              <div className="mt-4 grid gap-3 text-sm">
                {pageCopy.related.map(([label, href]) => (
                  <LocaleLink
                    className="text-[#78ead7] hover:underline"
                    href={href}
                    key={href}
                  >
                    {label}
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                {pageCopy.sourceTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                {pageCopy.sourceBody}
              </p>
              <a
                className="mt-4 inline-flex text-sm text-[#78ead7] hover:underline"
                href="https://www.pcgamer.com/games/survival-crafting/subnautica-2-metal-farm-scan-locations/"
                rel="noreferrer"
                target="_blank"
              >
                {pageCopy.sourceLabel}
              </a>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <BatteryChargingIcon className="mb-4 size-6 text-[#f08b4f]" />
              <h2 className="text-lg font-semibold text-[#effffb]">
                {pageCopy.basePlanningTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                {pageCopy.basePlanningBody}
              </p>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <RadarIcon className="mb-4 size-6 text-[#f08b4f]" />
              <h2 className="text-lg font-semibold text-[#effffb]">
                {pageCopy.firstMetalTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                {pageCopy.firstMetalBody}
              </p>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
