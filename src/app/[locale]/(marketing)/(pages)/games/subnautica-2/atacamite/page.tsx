import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getBaseUrl, getUrlWithLocale } from '@/lib/urls';
import { Routes } from '@/routes';
import {
  AlertTriangleIcon,
  CompassIcon,
  PickaxeIcon,
  RouteIcon,
  WrenchIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const PUBLISHED_AT = '2026-05-23';
const UPDATED_AT = '2026-05-29';

const zhRouteNotes = [
  {
    title: '从 Alien Ruins Research Base 开始找',
    body: '目前的路线信息把 Atacamite 指向 Alien Ruins 一带。用 Research Base 做参照点，后面重复跑线会轻松很多。',
  },
  {
    title: '先准备深层采矿',
    body: 'PC Gamer 把 Atacamite 放在比舒适前期区域更深的位置，靠近 Alien Ruins 深层路线。把 Tadpole Depth Module 准备好，再把它当成可刷路线。',
  },
  {
    title: '留意深绿色柱状晶体',
    body: 'Atacamite 节点外观比较好认。找到矿簇后，用 Sonic Resonator 处理，并把路线记下来，后面做 Mangalloy 会回来用。',
  },
  {
    title: '别只拿一块就走',
    body: 'Atacamite 会影响 Mangalloy Ingot、Metal Farm 规划和后续 power-plant 进度。路线安全的话，多带一些回来。',
  },
  {
    title: '和 Troilite 一起规划',
    body: 'Mangalloy 会让你同时考虑 Atacamite 和 Troilite。先找到 Atacamite 时，标好路线，再判断 Troilite 是否已经该排进下一趟远征。',
  },
];

const zhUseRows = [
  [
    'Mangalloy Ingot',
    'Atacamite 是当前 Mangalloy Ingot 制作链里的稀有输入之一。',
  ],
  [
    'Metal Farm 链条',
    'Metal Farm 需要 Mangalloy Ingot，因此 Atacamite 会间接卡住稀有金属生产。',
  ],
  [
    'Alien Power Plant',
    'PC Gamer 提到后续修复工作可能需要多个 Mangalloy Ingot，所以 Atacamite 值得提前囤一些。',
  ],
  [
    '路线记录',
    '它的位置比前期材料更深，比起一次性捡到，能不能重复找到更重要。',
  ],
];

const zhFieldNotes = [
  {
    title: '采矿前先标回家的路',
    body: '如果你下次找不到同一片矿簇，这次 Atacamite 就只是一次运气。放 beacon，或者把从 Research Base 出发的路线写下来。',
  },
  {
    title: '按正式采矿配置出门',
    body: '这不是路过捡矿。把它当成一次 Sonic Resonator 采矿：深度、电量、仓储和返程时间都要先想好。',
  },
  {
    title: '把 Atacamite 和 Troilite 放在同一个稀有材料箱',
    body: 'Mangalloy 的材料如果分散在不同柜子里，很容易被队友或自己误用。用一个清楚标记的 rare-metal 箱子会省很多麻烦。',
  },
];

const zhFaqs = [
  {
    title: 'Subnautica 2 的 Atacamite 在哪里找？',
    body: '当前路线信息指向较深的 Alien Ruins 区域。PC Gamer 描述的矿簇在 Alien Ruins Research Base 东北偏东方向，靠近外星居住结构和 quartz 节点。',
  },
  {
    title: '刷 Atacamite 前要准备什么？',
    body: '准备 Tadpole Depth Module、Sonic Resonator、氧气余量和标记路线的方法。把它当成深层采矿，不要当成短途游泳。',
  },
  {
    title: 'Atacamite 有什么用？',
    body: 'Atacamite 是 Mangalloy Ingot 的稀有输入之一，后面会接到 Metal Farm 和外星系统修复规划。',
  },
  {
    title: 'Atacamite 要多刷一点吗？',
    body: '路线安全的话，值得多带。Mangalloy 和 Metal Farm 规划通常不止用一块，重复跑深层路线会很花时间。',
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
      ? 'Subnautica 2 Atacamite 在哪里找 - Alien Ruins 路线'
      : 'Where to Find Atacamite in Subnautica 2 - Alien Ruins Route',
    description: isZh
      ? 'Subnautica 2 Atacamite 获取路线：Alien Ruins、Mangalloy Ingot、Metal Farm、深层采矿准备和 Early Access 补丁注意点。'
      : 'Find Atacamite in Subnautica 2 with Alien Ruins route notes, Mangalloy Ingot uses, Metal Farm planning, depth requirements, and Early Access caveats.',
    locale,
    pathname: Routes.Subnautica2Atacamite,
  });
}

const routeNotes = [
  {
    title: 'Start from the Alien Ruins Research Base',
    body: 'Current reporting points to Atacamite around the Alien Ruins route. Use the Research Base as the landmark so the dive can be repeated.',
  },
  {
    title: 'Prepare for lower-depth mining',
    body: 'PC Gamer places Atacamite below the comfortable early-game layer, around deeper Alien Ruins areas, so bring the Tadpole Depth Module before treating this as a farming route.',
  },
  {
    title: 'Look for dark green column-like crystals',
    body: 'Atacamite nodes are visually distinct. Once you find a cluster, mine it with the Sonic Resonator and note the route for later Mangalloy crafting.',
  },
  {
    title: 'Do not leave with only one sample',
    body: 'Atacamite feeds Mangalloy Ingots, Metal Farm planning, and later power-plant progression, so gather a buffer when the route is safe.',
  },
  {
    title: 'Pair it with Troilite planning',
    body: 'Mangalloy asks you to think about Atacamite and Troilite together. If you find Atacamite first, mark the route and check whether the Troilite trip is already on your next dive list.',
  },
];

const useRows = [
  [
    'Mangalloy Ingots',
    'Atacamite is one of the rare inputs reported for Mangalloy Ingot crafting.',
  ],
  [
    'Metal Farm chain',
    'A Metal Farm requires a Mangalloy Ingot, so Atacamite indirectly gates rare-metal production.',
  ],
  [
    'Alien Power Plant',
    'PC Gamer reports that later repair work can require multiple Mangalloy Ingots, making Atacamite worth stockpiling.',
  ],
  [
    'Route mapping',
    'Because this sits deeper than early materials, a repeatable route matters more than a one-off find.',
  ],
];

const fieldNotes = [
  {
    title: 'Mark the way home before mining',
    body: 'The Atacamite cluster is not useful if you cannot repeat the dive. Drop a beacon or write the route from the Research Base before filling your inventory.',
  },
  {
    title: 'Bring a real mining loadout',
    body: 'This is not a swim-by pickup. Treat it like a Sonic Resonator trip with depth, power, storage, and return timing solved before you leave base.',
  },
  {
    title: 'Keep Atacamite and Troilite together in storage',
    body: 'Mangalloy planning gets messy when the two rare inputs live in different lockers. Put them in one marked rare-metal box and avoid surprise co-op spending.',
  },
];

const faqs = [
  {
    title: 'Where do you find Atacamite in Subnautica 2?',
    body: 'Current route reporting points toward lower-depth Alien Ruins areas. PC Gamer describes a cluster east-northeast of the Alien Ruins Research Base, near alien dwellings and quartz nodes.',
  },
  {
    title: 'What do you need before farming Atacamite?',
    body: 'Bring the Tadpole Depth Module, Sonic Resonator, oxygen margin, and a way to mark the route. Treat it as a deeper mining trip, not a quick swim.',
  },
  {
    title: 'What is Atacamite used for?',
    body: 'Atacamite is one of the rare inputs reported for Mangalloy Ingot crafting, which then connects to Metal Farms and later alien-system work.',
  },
  {
    title: 'Should you farm extra Atacamite?',
    body: 'Yes, if the route is safe. Mangalloy and Metal Farm planning can use more than a single sample, and returning to the same deep route repeatedly wastes time.',
  },
];

export default async function AtacamiteGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isZh = locale === 'zh';
  const activeRouteNotes = isZh ? zhRouteNotes : routeNotes;
  const activeUseRows = isZh ? zhUseRows : useRows;
  const activeFieldNotes = isZh ? zhFieldNotes : fieldNotes;
  const activeFaqs = isZh ? zhFaqs : faqs;
  const pageCopy = isZh
    ? {
        articleDescription:
          'Atacamite 路线笔记，覆盖 Alien Ruins、Mangalloy Ingot、Metal Farm 和深层采矿准备。',
        breadcrumbName: 'Subnautica 2 Atacamite 在哪里找',
        eyebrow: 'Alien Ruins 材料路线',
        title: 'Subnautica 2 Atacamite 在哪里找',
        description:
          'Atacamite 是一条更深的材料路线，因为它会进入 Mangalloy Ingot 制作链。这页用实用、可复跑的方式整理 Subnautica 2 Early Access 的采集规划。',
        quickLabel: '快速答案',
        quickAnswer:
          '拿到 Tadpole Depth Module 之后，再去较深的 Alien Ruins 路线找 Atacamite。PC Gamer 提到一个较强矿簇在 Alien Ruins Research Base 东北偏东方向，靠近外星居住结构和 quartz 节点。先把它留给 Mangalloy，不要一开始就当普通矿随便花。',
        routeTitle: '路线笔记',
        useTitle: '为什么 Atacamite 重要',
        useHeader: '用途',
        planningHeader: '规划建议',
        safeTitle: '安全刷矿规则',
        safeBody:
          '把 Atacamite 当成计划好的深层采矿，不要当成路过捡矿。如果你已经安全到达 Alien Ruins，就尽量带回足够几次 Mangalloy 制作的量，然后更新材料箱标记，避免后面误用。',
        fieldNotesTitle: '实用笔记',
        faqTitle: '常见问题',
        readNextTitle: '继续看',
        related: [
          ['Mangalloy Ingot 指南', Routes.Subnautica2Mangalloy],
          ['Troilite 获取路线', Routes.Subnautica2Troilite],
          ['Conduit Crystal 指南', Routes.Subnautica2ConduitCrystal],
          ['Karakorum Power Plant 路线', Routes.Subnautica2KarakorumPowerPlant],
          ['Metal Farm 指南', Routes.Subnautica2MetalFarm],
        ],
        sourceTitle: '来源说明',
        sourceBody:
          '2026 年 5 月 29 日复查：对照当前 Atacamite 路线报道、Mangalloy 规划和附近深层材料页。Subnautica 2 资源补丁后需要重查。',
        sourceLabel: 'PC Gamer Atacamite 指南',
        routeMindsetTitle: '路线心态',
        routeMindsetBody:
          'Atacamite 最值得记录的是地标、方向、深度和返程路。这四个信息比一句“这里有矿”更有用。',
      }
    : {
        articleDescription:
          'Atacamite route notes for Alien Ruins, Mangalloy Ingot, Metal Farm, and deep mining prep.',
        breadcrumbName: 'Where to Find Atacamite in Subnautica 2',
        eyebrow: 'Alien Ruins material route',
        title: 'Where to Find Atacamite in Subnautica 2',
        description:
          'Atacamite is a deeper-route resource that matters because it feeds Mangalloy Ingots. This guide keeps the route practical and patch-aware for Subnautica 2 Early Access.',
        quickLabel: 'Quick answer',
        quickAnswer:
          'Look for Atacamite around lower-depth Alien Ruins routes after you have the Tadpole Depth Module. PC Gamer reports a strong cluster east-northeast of the Alien Ruins Research Base, near alien dwellings and quartz nodes. Save it for Mangalloy before you treat it like spare mineral stock.',
        routeTitle: 'Route notes',
        useTitle: 'Why Atacamite matters',
        useHeader: 'Use',
        planningHeader: 'Planning note',
        safeTitle: 'Safe farming rule',
        safeBody:
          'Treat Atacamite as a planned mining trip, not a casual pickup. If you have already reached the Alien Ruins safely, gather enough for several Mangalloy crafts before leaving, then update your resource storage so you do not accidentally spend all of it.',
        fieldNotesTitle: 'Field notes',
        faqTitle: 'FAQ',
        readNextTitle: 'Read next',
        related: [
          ['Mangalloy Ingot Guide', Routes.Subnautica2Mangalloy],
          ['Troilite Location', Routes.Subnautica2Troilite],
          ['Conduit Crystal Guide', Routes.Subnautica2ConduitCrystal],
          [
            'Karakorum Power Plant Route',
            Routes.Subnautica2KarakorumPowerPlant,
          ],
          ['Metal Farm Guide', Routes.Subnautica2MetalFarm],
        ],
        sourceTitle: 'Source note',
        sourceBody:
          'Checked May 29, 2026 against current Atacamite route reporting, Mangalloy planning notes, and nearby deep-route material pages. Recheck after Subnautica 2 resource patches.',
        sourceLabel: 'PC Gamer Atacamite guide',
        routeMindsetTitle: 'Route mindset',
        routeMindsetBody:
          'Atacamite is worth documenting by landmark, bearing, depth, and return path. Those four notes are more useful than a vague resource label.',
      };
  const baseUrl = getBaseUrl().replace(/\/$/, '');
  const pageUrl = getUrlWithLocale(Routes.Subnautica2Atacamite, locale).replace(
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(64,224,208,.18),transparent_34%),radial-gradient(circle_at_18%_80%,rgba(240,139,79,.12),transparent_30%),linear-gradient(180deg,rgba(3,19,20,.16),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <PickaxeIcon className="size-4" />
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
                {pageCopy.routeTitle}
              </h2>
              <div className="mt-5 grid gap-4">
                {activeRouteNotes.map((note) => (
                  <section
                    key={note.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <CompassIcon className="size-4" />
                      <h3 className="font-semibold">{note.title}</h3>
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{note.body}</p>
                  </section>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {pageCopy.useTitle}
              </h2>
              <div className="mt-5 overflow-hidden border border-cyan-200/12">
                <table className="w-full border-collapse bg-[#071f23] text-left text-sm">
                  <thead className="bg-[#0b2d33] text-[#dff8f0]">
                    <tr>
                      <th className="p-4 font-semibold">
                        {pageCopy.useHeader}
                      </th>
                      <th className="p-4 font-semibold">
                        {pageCopy.planningHeader}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeUseRows.map(([use, note]) => (
                      <tr key={use} className="border-t border-cyan-200/10">
                        <td className="p-4 align-top font-medium text-[#78ead7]">
                          {use}
                        </td>
                        <td className="p-4 leading-6 text-[#abc8c3]">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#082226] p-6">
              <div className="flex items-center gap-3">
                <AlertTriangleIcon className="size-6 text-[#f08b4f]" />
                <h2 className="text-3xl font-semibold text-[#effffb]">
                  {pageCopy.safeTitle}
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                {pageCopy.safeBody}
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
                href="https://www.pcgamer.com/games/survival-crafting/subnautica-2-atacamite-location/"
                rel="noreferrer"
                target="_blank"
              >
                {pageCopy.sourceLabel}
              </a>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <RouteIcon className="mb-4 size-6 text-[#f08b4f]" />
              <h2 className="text-lg font-semibold text-[#effffb]">
                {pageCopy.routeMindsetTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                {pageCopy.routeMindsetBody}
              </p>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
