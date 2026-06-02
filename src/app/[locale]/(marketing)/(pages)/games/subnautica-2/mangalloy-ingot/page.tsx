import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { createAbyssImageObject } from '@/lib/abyss-media-schema';
import { constructMetadata } from '@/lib/metadata';
import { getBaseUrl, getUrlWithLocale } from '@/lib/urls';
import { Routes } from '@/routes';
import {
  AlertTriangleIcon,
  BoxesIcon,
  FactoryIcon,
  LinkIcon,
  WrenchIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const PUBLISHED_AT = '2026-05-24';
const UPDATED_AT = '2026-05-29';
const GUIDE_IMAGE = '/abyss/chibi-resource-scan.webp';

const zhRecipeRows = [
  ['Troilite', '后期稀有金属。至少留一块给 Metal Farm 复制规划。'],
  ['Atacamite', 'Alien Ruins 路线材料，会进入 Mangalloy 链条和后续进度规划。'],
  [
    'Titanium Ingot',
    '加工后的基础金属输入。开始高级制作前，先确认 Titanium 库存够用。',
  ],
];

const zhUses = [
  {
    title: '建造 Metal Farm',
    body: 'PC Gamer 报道称 Metal Farm 需要一个 Mangalloy Ingot 和 Axum Bacterial Culture，因此这个锭会卡住稀有金属生产。',
  },
  {
    title: '修复后续外星系统',
    body: '当前路线报道把多个 Mangalloy Ingot 和 Alien Power Plant 修复联系在一起，所以不要把它当成可有可无的材料。',
  },
  {
    title: '保护 Entangled Power Cell 材料',
    body: 'Troilite 也出现在 Entangled Power Cell 配方中。除非下一步电力配方已经安排好，否则不要把全部 Troilite 都吃进 Mangalloy。',
  },
  {
    title: '串联资源页面',
    body: 'Mangalloy 是很好的中转页：它能把 Troilite、Atacamite、制作系统和生产系统攻略连起来。',
  },
];

const zhRules = [
  '没想清楚 raw Troilite 是否要先给 Metal Farm 前，不要急着做 Mangalloy。',
  '如果 Entangled Power Cell 已经解锁或快解锁，额外留一块 Troilite。',
  '稀有金属单独放一个标记清楚的箱子，避免联机队友误用进度材料。',
  '每次 Early Access 制作配方补丁后，重新核对材料数量。',
  '把 Mangalloy 当成链条，不要当成单个物品：先拿原料，再做基础锭，最后合成。',
];

const zhFieldNotes = [
  {
    title: '打开 Fabricator 前先做决定',
    body: 'Mangalloy 看起来像一个顺手升级，但真正要决定的是 raw Troilite 是否该先作为 Metal Farm 的种子。别等配方界面诱惑你时才想。',
  },
  {
    title: '第一块锭也是路线收据',
    body: '做出第一个 Mangalloy 后，记下它的稀有材料来自哪里。下一次修复或建造会轻松很多。',
  },
  {
    title: '联机仓储越直白越好',
    body: '稀有金属柜子名字要朴素清楚。基地再漂亮，也挡不住队友把唯一的 Troilite 做错配方。',
  },
];

const zhFaqs = [
  {
    title: 'Subnautica 2 怎么做 Mangalloy Ingot？',
    body: '当前报道把 Mangalloy Ingot 描述为由 Troilite、Atacamite 和 Titanium Ingot 制作的加工材料。花稀有材料前，先看一眼游戏内配方。',
  },
  {
    title: 'Mangalloy Ingot 有什么用？',
    body: 'Mangalloy 会卡住 Metal Farm 建造，也和后续外星系统修复规划有关。',
  },
  {
    title: '第一块 Troilite 要拿去做 Mangalloy 吗？',
    body: '通常不要马上做。先留一块给 Metal Farm 复制规划，如果 Entangled Power Cell 是下一条电力路线，再多留一块。',
  },
  {
    title: '为什么 Mangalloy 要单独放材料箱？',
    body: '它的输入材料会和稀有金属生产、电力制作重叠。清楚标记可以减少联机误用和深层路线白跑。',
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
      ? 'Subnautica 2 Mangalloy Ingot 怎么做 - 稀有材料链'
      : 'How to Make Mangalloy Ingots in Subnautica 2 - Recipe Chain',
    description: isZh
      ? 'Subnautica 2 Mangalloy Ingot 制作攻略：Troilite、Atacamite、Titanium Ingot、Metal Farm 和稀有材料规划。'
      : 'A Subnautica 2 Mangalloy Ingot guide covering Troilite, Atacamite, Titanium Ingots, Metal Farms, and rare-material planning.',
    locale,
    pathname: Routes.Subnautica2Mangalloy,
  });
}

const recipeRows = [
  [
    'Troilite',
    'Rare late-route metal. Save at least one sample for Metal Farm duplication planning.',
  ],
  [
    'Atacamite',
    'Alien Ruins material used in the Mangalloy chain and later progression planning.',
  ],
  [
    'Titanium Ingot',
    'Processed basic metal input. Keep enough Titanium stock before starting advanced crafting.',
  ],
];

const uses = [
  {
    title: 'Build Metal Farms',
    body: 'PC Gamer reports that a Metal Farm costs one Mangalloy Ingot plus Axum Bacterial Culture, making this ingot a gate for rare-metal production.',
  },
  {
    title: 'Repair later alien systems',
    body: 'Current reporting ties multiple Mangalloy Ingots to Alien Power Plant repair, so it is risky to treat the material as optional.',
  },
  {
    title: 'Protect Entangled Power Cell materials',
    body: 'Troilite also appears in the Entangled Power Cell recipe, so Mangalloy should not eat your whole Troilite stock unless the next power craft is already covered.',
  },
  {
    title: 'Connect resource pages',
    body: 'Mangalloy is a useful hub page because it links players from Troilite and Atacamite into crafting and production-system guides.',
  },
];

const rules = [
  'Do not craft Mangalloy until you know whether you need the raw Troilite for a Metal Farm.',
  'Hold one extra Troilite if Entangled Power Cell is already unlocked or close.',
  'Keep a separate storage label for rare metals so co-op teammates do not spend progression materials by accident.',
  'Verify recipe counts again after every Early Access crafting patch.',
  'Treat Mangalloy as a chain, not a single item: gather raw inputs, process basic ingots, then craft.',
];

const fieldNotes = [
  {
    title: 'Make the decision before opening the Fabricator',
    body: 'Mangalloy feels like an obvious upgrade craft, but the real choice is whether raw Troilite should seed a Metal Farm first. Decide that before the recipe screen tempts you.',
  },
  {
    title: 'One ingot is a route receipt',
    body: 'When you finish the first Mangalloy, write down where its rare inputs came from. The next repair or build step will be easier if the route is already repeatable.',
  },
  {
    title: 'Keep co-op storage boring',
    body: 'Rare-metal lockers should be plainly named. A beautiful base does not help if a teammate turns the only Troilite into the wrong craft.',
  },
];

const faqs = [
  {
    title: 'How do you make Mangalloy Ingot in Subnautica 2?',
    body: 'Current reporting describes Mangalloy Ingot as a processed material made from Troilite, Atacamite, and Titanium Ingot. Check your in-game recipe before spending rare materials.',
  },
  {
    title: 'What is Mangalloy Ingot used for?',
    body: 'Mangalloy gates Metal Farm construction and later alien-system repair planning in current public guides.',
  },
  {
    title: 'Should you spend your first Troilite on Mangalloy?',
    body: 'Usually not immediately. Save one Troilite for Metal Farm duplication planning, and save another if Entangled Power Cell is part of your next power route.',
  },
  {
    title: 'Why does Mangalloy need a separate storage box?',
    body: 'Its inputs overlap with rare-metal production and power crafting. Keeping them labeled prevents accidental co-op spending and wasted deep-route dives.',
  },
];

export default async function MangalloyGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isZh = locale === 'zh';
  const activeRecipeRows = isZh ? zhRecipeRows : recipeRows;
  const activeUses = isZh ? zhUses : uses;
  const activeRules = isZh ? zhRules : rules;
  const activeFieldNotes = isZh ? zhFieldNotes : fieldNotes;
  const activeFaqs = isZh ? zhFaqs : faqs;
  const pageCopy = isZh
    ? {
        articleDescription:
          'Mangalloy Ingot 制作链说明，覆盖 Troilite、Atacamite、Titanium Ingot、Metal Farm 和 Entangled Power Cell 规划。',
        breadcrumbName: 'Subnautica 2 Mangalloy Ingot 怎么做',
        eyebrow: '高级制作链',
        title: 'Subnautica 2 Mangalloy Ingot 怎么做',
        description:
          'Mangalloy Ingot 位于稀有材料链的中间：Troilite、Atacamite、Titanium 加工、Metal Farm 和后续外星系统修复都会碰到它。',
        quickLabel: '快速答案',
        quickAnswer:
          '当前报道把 Mangalloy Ingot 列为由 Troilite、Atacamite 和 Titanium Ingot 制作的加工材料。它最大的早期价值是卡住 Metal Farm 建造和后续 power-plant 进度。确认 Metal Farm 和 Entangled Power Cell 需求前，不要把 Troilite 随手花掉。',
        recipeTitle: 'Mangalloy 制作链',
        inputHeader: '输入材料',
        whyHeader: '为什么重要',
        unlocksTitle: 'Mangalloy 解锁什么',
        warningTitle: '别烧掉第一块 Troilite',
        warningBody:
          '最大的错误，是在能复制稀有金属前制作过头。如果你只有一块 Troilite，先决定它是不是该成为 Metal Farm 的种子，再考虑把它做成 Mangalloy。',
        checklistTitle: '安全制作清单',
        fieldNotesTitle: '实用笔记',
        faqTitle: '常见问题',
        readNextTitle: '继续看',
        related: [
          ['Troilite 获取路线', Routes.Subnautica2Troilite],
          ['Mineralized Clinker 指南', Routes.Subnautica2MineralizedClinker],
          ['Troilite 卡进度修复', Routes.Subnautica2TroiliteSoftlock],
          ['Atacamite 获取路线', Routes.Subnautica2Atacamite],
          ['Metal Farm 指南', Routes.Subnautica2MetalFarm],
          ['Entangled Power Cell 指南', Routes.Subnautica2EntangledPowerCell],
          ['Karakorum Power Plant 路线', Routes.Subnautica2KarakorumPowerPlant],
        ],
        sourceTitle: '来源说明',
        sourceBody:
          '2026 年 5 月 29 日复查：对照 PC Gamer 关于 Metal Farm 和 Atacamite 的报道，以及 Entangled Power Cell 配方资料。配方数据会随补丁变化。',
        sourceLabels: [
          'PC Gamer Metal Farm 指南',
          'PC Gamer Atacamite 指南',
          'Subnautica2.gg Entangled Power Cell',
        ],
        storageTitle: '仓储心态',
        storageBody:
          '把 Mangalloy 输入材料放进专门的稀有材料箱。这个小习惯能避免大部分联机制作误用。',
      }
    : {
        articleDescription:
          'Mangalloy Ingot recipe chain notes for Troilite, Atacamite, Titanium Ingot, Metal Farm, and Entangled Power Cell planning.',
        breadcrumbName: 'How to Make Mangalloy Ingots in Subnautica 2',
        eyebrow: 'Advanced crafting chain',
        title: 'How to Make Mangalloy Ingots in Subnautica 2',
        description:
          'Mangalloy Ingots sit at the center of a rare-material chain: Troilite, Atacamite, Titanium processing, Metal Farms, and later alien-system repairs.',
        quickLabel: 'Quick answer',
        quickAnswer:
          'Current reporting lists Mangalloy Ingot as a processed material made from Troilite, Atacamite, and a Titanium Ingot. Its biggest early value is that it gates Metal Farm construction and later power-plant progression. Do not spend the Troilite side of the recipe until Metal Farm and Entangled Power Cell needs are clear.',
        recipeTitle: 'Mangalloy recipe chain',
        inputHeader: 'Input',
        whyHeader: 'Why it matters',
        unlocksTitle: 'What Mangalloy unlocks',
        warningTitle: 'Do not burn your first Troilite',
        warningBody:
          'The main mistake is crafting too aggressively before you can duplicate rare metals. If you have only one Troilite, decide whether it should seed a Metal Farm before turning it into Mangalloy.',
        checklistTitle: 'Safe crafting checklist',
        fieldNotesTitle: 'Field notes',
        faqTitle: 'FAQ',
        readNextTitle: 'Read next',
        related: [
          ['Troilite Location', Routes.Subnautica2Troilite],
          ['Mineralized Clinker Guide', Routes.Subnautica2MineralizedClinker],
          ['Troilite Softlock Fix', Routes.Subnautica2TroiliteSoftlock],
          ['Atacamite Location', Routes.Subnautica2Atacamite],
          ['Metal Farm Guide', Routes.Subnautica2MetalFarm],
          ['Entangled Power Cell Guide', Routes.Subnautica2EntangledPowerCell],
          [
            'Karakorum Power Plant Route',
            Routes.Subnautica2KarakorumPowerPlant,
          ],
        ],
        sourceTitle: 'Source note',
        sourceBody:
          'Checked May 29, 2026 against current PC Gamer reporting on Metal Farms and Atacamite, plus Entangled Power Cell recipe data. Recipe data is patch-sensitive.',
        sourceLabels: [
          'PC Gamer Metal Farm guide',
          'PC Gamer Atacamite guide',
          'Subnautica2.gg Entangled Power Cell',
        ],
        storageTitle: 'Storage mindset',
        storageBody:
          'Put Mangalloy inputs in a dedicated rare-material locker. This one habit prevents most co-op crafting mistakes.',
      };
  const baseUrl = getBaseUrl().replace(/\/$/, '');
  const pageUrl = getUrlWithLocale(Routes.Subnautica2Mangalloy, locale).replace(
    /\/$/,
    ''
  );
  const guideImageUrl = `${baseUrl}${GUIDE_IMAGE}`;
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
      image: {
        '@id': `${pageUrl}#primaryimage`,
      },
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
    createAbyssImageObject({
      caption: `${pageCopy.title} crafting artwork`,
      imageUrl: guideImageUrl,
      locale,
      pageUrl,
    }),
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(64,224,208,.18),transparent_34%),radial-gradient(circle_at_18%_78%,rgba(240,139,79,.12),transparent_30%),linear-gradient(180deg,rgba(3,19,20,.16),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <WrenchIcon className="size-4" />
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
                {pageCopy.recipeTitle}
              </h2>
              <div className="mt-5 overflow-hidden border border-cyan-200/12">
                <table className="w-full border-collapse bg-[#071f23] text-left text-sm">
                  <thead className="bg-[#0b2d33] text-[#dff8f0]">
                    <tr>
                      <th className="p-4 font-semibold">
                        {pageCopy.inputHeader}
                      </th>
                      <th className="p-4 font-semibold">
                        {pageCopy.whyHeader}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeRecipeRows.map(([input, note]) => (
                      <tr key={input} className="border-t border-cyan-200/10">
                        <td className="p-4 align-top font-medium text-[#78ead7]">
                          {input}
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
                {pageCopy.unlocksTitle}
              </h2>
              <div className="mt-5 grid gap-4">
                {activeUses.map((item) => (
                  <section
                    key={item.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <LinkIcon className="size-4" />
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{item.body}</p>
                  </section>
                ))}
              </div>
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
                {pageCopy.checklistTitle}
              </h2>
              <ul className="mt-5 grid gap-3">
                {activeRules.map((rule) => (
                  <li
                    key={rule}
                    className="border-l-2 border-[#f08b4f] bg-[#071f23] px-4 py-3 text-sm leading-6 text-[#d1e8e2]"
                  >
                    {rule}
                  </li>
                ))}
              </ul>
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
              <div className="mt-4 grid gap-2 text-sm">
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://www.pcgamer.com/games/survival-crafting/subnautica-2-metal-farm-scan-locations/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {pageCopy.sourceLabels[0]}
                </a>
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://www.pcgamer.com/games/survival-crafting/subnautica-2-atacamite-location/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {pageCopy.sourceLabels[1]}
                </a>
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://subnautica2.gg/blueprints/entangled-power-cell"
                  rel="noreferrer"
                  target="_blank"
                >
                  {pageCopy.sourceLabels[2]}
                </a>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <BoxesIcon className="mb-4 size-6 text-[#f08b4f]" />
              <h2 className="text-lg font-semibold text-[#effffb]">
                {pageCopy.storageTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                {pageCopy.storageBody}
              </p>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
