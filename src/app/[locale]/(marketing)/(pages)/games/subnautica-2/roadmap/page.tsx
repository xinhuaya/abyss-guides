import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getBaseUrl, getPathWithLocale, getUrlWithLocale } from '@/lib/urls';
import { Routes } from '@/routes';
import {
  AlertTriangleIcon,
  CalendarDaysIcon,
  CheckCircle2Icon,
  ClipboardListIcon,
  FileTextIcon,
  MessagesSquareIcon,
  RadioIcon,
  RadarIcon,
  RefreshCcwIcon,
  WrenchIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type TimelineRow = {
  date: string;
  update: string;
  type: string;
  impact: string;
};

type RoadmapCard = {
  title: string;
  body: string;
};

type RoadmapCopy = {
  metadata: {
    title: string;
    description: string;
  };
  eyebrow: string;
  title: string;
  description: string;
  checkedPrefix: string;
  cardKicker: string;
  quickLabel: string;
  quickAnswer: string;
  statusTitle: string;
  stats: Array<{
    value: string;
    label: string;
    note: string;
  }>;
  roadmapTitle: string;
  roadmapCards: RoadmapCard[];
  timelineTitle: string;
  timelineIntro: string;
  timelineHeaders: [string, string, string, string];
  timelineRows: TimelineRow[];
  impactTitle: string;
  impactRows: Array<[string, string, string]>;
  workflowTitle: string;
  workflow: RoadmapCard[];
  cautionTitle: string;
  cautionBody: string;
  faqTitle: string;
  faqs: Array<{
    title: string;
    body: string;
  }>;
  readNextTitle: string;
  readNext: Array<{
    href: Routes;
    label: string;
  }>;
  sourceTitle: string;
  sourceBody: string;
  sourceLinks: Array<{
    href: string;
    label: string;
  }>;
};

const PUBLISHED_AT = '2026-05-23';
const MODIFIED_AT = '2026-05-24';

const officialSources = [
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam Early Access page',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-1',
    label: 'Unknown Worlds Hotfix 1',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-2',
    label: 'Unknown Worlds Hotfix 2',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-community-letter-feedback',
    label: 'Unknown Worlds community feedback letter',
  },
];

const roadmapCopy: Record<string, RoadmapCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Roadmap and Updates - Early Access Tracker',
      description:
        'Track Subnautica 2 Early Access updates, hotfixes, roadmap plans, co-op changes, future biomes, creatures, tools, vehicles, and story additions.',
    },
    eyebrow: 'Subnautica 2 update log',
    title: 'Subnautica 2 Roadmap and Updates',
    description:
      'A practical patch tracker for players who want to know what changed, what is planned, and which guides need another look after an Early Access update.',
    checkedPrefix: 'Checked',
    cardKicker: 'EA transmission',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Unknown Worlds is treating Subnautica 2 as a long Early Access build. The official plan mixes hotfixes, smaller improvement updates, co-op-focused work, and larger expansions that add more biomes, creatures, resources, craftables, features, vehicles, story, and systems.',
    statusTitle: 'Current tracker status',
    stats: [
      {
        value: 'Hotfix 2',
        label: 'Latest official patch tracked',
        note: 'Released May 22, 2026.',
      },
      {
        value: '2-3 yrs',
        label: 'Steam Early Access target',
        note: 'Listed by Unknown Worlds on Steam.',
      },
      {
        value: '5',
        label: 'Official sources checked',
        note: 'Steam, roadmap, two hotfixes, and feedback letter.',
      },
    ],
    roadmapTitle: 'What the official roadmap says',
    roadmapCards: [
      {
        title: 'Hotfixes and balance passes',
        body: 'Expect fixes for crashes, multiplayer disconnects, resource pain points, settings clarity, and small balance issues. These are the updates most likely to change guide details fast.',
      },
      {
        title: 'First improvement update',
        body: 'The first planned improvement update is meant to smooth the opening Early Access experience with quality-of-life fixes and smaller adjustments.',
      },
      {
        title: 'Co-op-focused update',
        body: 'A later focused update is aimed at co-op. That means multiplayer routing, callouts, shared exploration, and connection behavior all need close watching.',
      },
      {
        title: 'Bigger content expansions',
        body: 'Unknown Worlds says larger drops can add more biomes, creatures, resources, craftables, tools, vehicles, story, systems, and quality-of-life changes.',
      },
    ],
    timelineTitle: 'Early Access update timeline',
    timelineIntro:
      'These are official milestones we can safely track without guessing at unannounced dates.',
    timelineHeaders: ['Date', 'Update', 'Type', 'Player impact'],
    timelineRows: [
      {
        date: 'May 14, 2026',
        update: 'Early Access launch',
        type: 'Launch',
        impact:
          'Players can start the first public Early Access build and begin reporting balance, crash, resource, and co-op issues.',
      },
      {
        date: 'May 15, 2026',
        update: 'Early Access roadmap',
        type: 'Roadmap',
        impact:
          'Unknown Worlds outlines hotfixes, improvement updates, co-op work, and larger expansions across Early Access.',
      },
      {
        date: 'May 19, 2026',
        update: 'Hotfix 1',
        type: 'Hotfix',
        impact:
          'First launch-week fix pass. Good pages to recheck: beginner route, co-op setup, and basic progression notes.',
      },
      {
        date: 'May 20, 2026',
        update: 'Community feedback letter',
        type: 'Feedback',
        impact:
          'The team responds to early player feedback around creature pressure, Silver scarcity, and co-op communication.',
      },
      {
        date: 'May 22, 2026',
        update: 'Hotfix 2',
        type: 'Hotfix',
        impact:
          'Adds more early Silver areas and fixes several crash, oxygen, multiplayer, performance, and UI issues.',
      },
    ],
    impactTitle: 'Which guide pages should change after a patch?',
    impactRows: [
      [
        'Resource balance',
        'Silver, Copper, rare materials, drops, recipe costs',
        'Update resources, Silver, Copper, crafting, and beginner route pages first.',
      ],
      [
        'Co-op behavior',
        'Disconnects, joining, communication, shared exploration',
        'Update the co-op guide and any route pages that rely on team callouts.',
      ],
      [
        'Map and survival tuning',
        'Biomes, creature pressure, oxygen, safe routes',
        'Update map, base-building, air tank, and best-base-location pages.',
      ],
      [
        'New content drops',
        'Tools, vehicles, story, systems, craftables',
        'Create new pages only after the content is live and the route has been checked.',
      ],
    ],
    workflowTitle: 'Abyss Guides update workflow',
    workflow: [
      {
        title: 'Read the official note first',
        body: 'Do not rewrite a guide from social posts alone. Start with the Unknown Worlds note, then compare it with one real in-game check.',
      },
      {
        title: 'Mark exact recipe and route claims',
        body: 'Counts, locations, and distances are the fragile parts. They should only be called verified when checked in the current build.',
      },
      {
        title: 'Update internal links',
        body: 'A patch often changes more than one page. Link the update to the resource, crafting, co-op, map, or beginner guide that players need next.',
      },
      {
        title: 'Keep future plans conditional',
        body: 'Roadmap items are plans, not promises. If there is no official date, the page should say planned, expected, or future.',
      },
    ],
    cautionTitle: 'Do not treat the roadmap like a release calendar',
    cautionBody:
      'Unknown Worlds says the roadmap can change during Early Access. For SEO and trust, this page should separate live patch facts from future plans instead of pretending every feature has a fixed date.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'When is the next Subnautica 2 update?',
        body: 'No exact next update date is listed on the official roadmap as of this check. The roadmap confirms hotfixes, smaller improvement updates, a co-op-focused update, and larger expansions.',
      },
      {
        title: 'Will Subnautica 2 add more biomes and creatures?',
        body: 'Yes. The official roadmap and Steam Early Access page both mention more biomes, creatures, resources, craftables, features, and story content during Early Access.',
      },
      {
        title: 'Did Hotfix 2 change resource routes?',
        body: 'Yes. Hotfix 2 added more Silver resource areas in the early-game region, so older Silver routes should be rechecked.',
      },
      {
        title: 'How often should guide pages be updated?',
        body: 'Patch-sensitive pages should be checked after every hotfix or roadmap post. Stable evergreen pages can wait unless a patch changes resources, recipes, co-op, map behavior, or survival tuning.',
      },
    ],
    readNextTitle: 'Read next',
    readNext: [
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2Map, label: 'Map and Biomes' },
    ],
    sourceTitle: 'Source note',
    sourceBody:
      'Checked against official Unknown Worlds and Steam sources. We avoid adding dates or features that have not been announced.',
    sourceLinks: officialSources,
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 更新路线图 - 抢先体验补丁追踪',
      description:
        '追踪 Subnautica 2 抢先体验更新、Hotfix、路线图、联机改动、未来生态区、生物、工具、载具和剧情内容。',
    },
    eyebrow: 'Subnautica 2 更新记录',
    title: 'Subnautica 2 路线图与更新追踪',
    description:
      '这页专门给想看版本变化的玩家用：哪些内容已经更新，哪些只是官方计划，以及补丁后哪些攻略需要重新核对。',
    checkedPrefix: '核对时间',
    cardKicker: '抢先体验信号',
    quickLabel: '快速结论',
    quickAnswer:
      'Unknown Worlds 正在用较长的抢先体验周期打磨 Subnautica 2。官方计划包括 Hotfix、小型体验改进、偏联机的更新，以及更大的内容扩展，后续会继续加入生态区、生物、资源、可制作物、功能、载具、剧情和系统。',
    statusTitle: '当前追踪状态',
    stats: [
      {
        value: 'Hotfix 2',
        label: '已追踪的最新官方补丁',
        note: '发布于 2026 年 5 月 22 日。',
      },
      {
        value: '2-3 年',
        label: 'Steam 抢先体验预估',
        note: '由 Unknown Worlds 在 Steam 页面列出。',
      },
      {
        value: '5',
        label: '已核对官方来源',
        note: 'Steam、路线图、两次 Hotfix 和社区反馈信。',
      },
    ],
    roadmapTitle: '官方路线图说了什么',
    roadmapCards: [
      {
        title: 'Hotfix 与平衡调整',
        body: '主要关注崩溃、联机断开、资源卡点、设置说明和小型平衡问题。这类更新最容易影响攻略里的具体路线。',
      },
      {
        title: '第一次体验改进更新',
        body: '官方把第一次改进更新定位为优化抢先体验开局手感，重点是生活质量修复和小调整。',
      },
      {
        title: '偏联机的更新',
        body: '后续会有一次偏 co-op 的更新。联机路线、报点、共享探索和连接稳定性都需要重点观察。',
      },
      {
        title: '更大的内容扩展',
        body: 'Unknown Worlds 提到更大更新可能加入更多生态区、生物、资源、可制作物、工具、载具、剧情、系统和体验改进。',
      },
    ],
    timelineTitle: '抢先体验早期更新时间线',
    timelineIntro: '这里只记录官方已经公开的信息，不提前猜未公布的日期。',
    timelineHeaders: ['日期', '更新', '类型', '对玩家的影响'],
    timelineRows: [
      {
        date: '2026 年 5 月 14 日',
        update: '抢先体验上线',
        type: '上线',
        impact:
          '玩家开始进入首个公开抢先体验版本，并反馈平衡、崩溃、资源和联机问题。',
      },
      {
        date: '2026 年 5 月 15 日',
        update: '抢先体验路线图',
        type: '路线图',
        impact:
          '官方说明了 Hotfix、改进更新、联机方向和后续大型扩展的大致安排。',
      },
      {
        date: '2026 年 5 月 19 日',
        update: 'Hotfix 1',
        type: '补丁',
        impact: '首周第一轮修复。需要复查新手路线、联机设置和基础进度说明。',
      },
      {
        date: '2026 年 5 月 20 日',
        update: '社区反馈信',
        type: '反馈',
        impact: '官方回应了早期玩家对生物压迫感、银资源稀缺和联机沟通的反馈。',
      },
      {
        date: '2026 年 5 月 22 日',
        update: 'Hotfix 2',
        type: '补丁',
        impact:
          '增加前期银资源区域，并修复崩溃、氧气、联机、性能和界面提示问题。',
      },
    ],
    impactTitle: '补丁后优先更新哪些攻略？',
    impactRows: [
      [
        '资源平衡',
        '银、铜、稀有材料、掉落、配方成本',
        '优先更新资源、银、铜、制作和新手路线页面。',
      ],
      [
        '联机行为',
        '断开、加入、沟通、共享探索',
        '优先更新联机攻略，以及依赖队友报点的路线页面。',
      ],
      [
        '地图与生存调整',
        '生态区、生物压力、氧气、安全路线',
        '优先更新地图、基地、气瓶和最佳基地位置页面。',
      ],
      [
        '新内容更新',
        '工具、载具、剧情、系统、可制作物',
        '等内容正式上线并实测后，再创建新的单页攻略。',
      ],
    ],
    workflowTitle: 'Abyss Guides 更新流程',
    workflow: [
      {
        title: '先看官方说明',
        body: '不要只靠社交媒体改攻略。先读 Unknown Worlds 官方说明，再用一次真实游戏检查确认。',
      },
      {
        title: '标记具体配方和路线',
        body: '数量、地点和距离最容易变。只有当前版本实测过，才写成已核对。',
      },
      {
        title: '补上内部链接',
        body: '一个补丁通常会影响多篇文章。更新时要把资源、制作、联机、地图或新手攻略串起来。',
      },
      {
        title: '未来计划要保守写',
        body: '路线图是计划，不是承诺。没有官方日期时，只能写计划中、预计或未来。',
      },
    ],
    cautionTitle: '不要把路线图当成发售日历',
    cautionBody:
      'Unknown Worlds 明确表示路线图可能随着抢先体验调整。为了 SEO 和信任度，这页会把已上线补丁事实和未来计划分开写。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 下一次更新是什么时候？',
        body: '截至本次核对，官方路线图没有给出下一次更新的具体日期。已确认会有 Hotfix、小型改进更新、偏联机更新和更大的内容扩展。',
      },
      {
        title: 'Subnautica 2 会加入更多生态区和生物吗？',
        body: '会。官方路线图和 Steam 抢先体验页面都提到，抢先体验期间会加入更多生态区、生物、资源、可制作物、功能和剧情内容。',
      },
      {
        title: 'Hotfix 2 改了资源路线吗？',
        body: '改了。Hotfix 2 增加了前期区域的银资源点，所以较早的银路线需要重新核对。',
      },
      {
        title: '攻略应该多久更新一次？',
        body: '资源、配方、联机、地图和生存调整相关页面，每次 Hotfix 或官方路线图更新后都应该复查。稳定内容可以稍晚处理。',
      },
    ],
    readNextTitle: '继续阅读',
    readNext: [
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 更新内容' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Silver, label: '银位置' },
      { href: Routes.Subnautica2Coop, label: '联机指南' },
      { href: Routes.Subnautica2Map, label: '地图与生态区' },
    ],
    sourceTitle: '来源说明',
    sourceBody:
      '已核对 Unknown Worlds 和 Steam 官方来源。没有官方公布的日期或功能，不会写成确定内容。',
    sourceLinks: officialSources,
  },
  ru: {
    metadata: {
      title: 'Subnautica 2: дорожная карта и обновления Early Access',
      description:
        'Отслеживайте обновления Subnautica 2 Early Access, хотфиксы, планы, кооператив, новые биомы, существ, инструменты, транспорт и сюжет.',
    },
    eyebrow: 'Журнал обновлений Subnautica 2',
    title: 'Дорожная карта и обновления Subnautica 2',
    description:
      'Короткий трекер для игроков: что уже изменилось, что официально запланировано и какие гайды стоит перепроверить после патча.',
    checkedPrefix: 'Проверено',
    cardKicker: 'Сигнал EA',
    quickLabel: 'Коротко',
    quickAnswer:
      'Unknown Worlds ведет Subnautica 2 как долгий Early Access. В плане есть хотфиксы, небольшие улучшения, кооперативное обновление и крупные расширения с новыми биомами, существами, ресурсами, предметами, функциями, транспортом, сюжетом и системами.',
    statusTitle: 'Статус трекера',
    stats: [
      {
        value: 'Hotfix 2',
        label: 'Последний официальный патч',
        note: 'Вышел 22 мая 2026 года.',
      },
      {
        value: '2-3 года',
        label: 'План Early Access в Steam',
        note: 'Указан Unknown Worlds на странице Steam.',
      },
      {
        value: '5',
        label: 'Проверено официальных источников',
        note: 'Steam, roadmap, два хотфикса и письмо команде.',
      },
    ],
    roadmapTitle: 'Что говорит официальный roadmap',
    roadmapCards: [
      {
        title: 'Хотфиксы и баланс',
        body: 'В первую очередь это краши, разрывы соединения, дефицит ресурсов, ясность настроек и мелкая балансировка.',
      },
      {
        title: 'Первое обновление улучшений',
        body: 'Первый такой апдейт должен сгладить старт Early Access: меньше раздражающих мелочей, больше удобства.',
      },
      {
        title: 'Обновление для кооператива',
        body: 'Отдельный фокус будет на co-op. Поэтому маршруты, метки, совместное исследование и стабильность подключения нужно проверять.',
      },
      {
        title: 'Крупные расширения',
        body: 'В больших обновлениях обещаны новые биомы, существа, ресурсы, craftables, инструменты, транспорт, сюжет, системы и QoL.',
      },
    ],
    timelineTitle: 'Ранняя временная линия Early Access',
    timelineIntro:
      'Здесь только официальные вехи, без угадывания неанонсированных дат.',
    timelineHeaders: ['Дата', 'Обновление', 'Тип', 'Влияние на игроков'],
    timelineRows: [
      {
        date: '14 мая 2026',
        update: 'Запуск Early Access',
        type: 'Запуск',
        impact:
          'Игроки получили первый публичный билд и начали отправлять фидбек по балансу, крашам, ресурсам и co-op.',
      },
      {
        date: '15 мая 2026',
        update: 'Roadmap Early Access',
        type: 'Roadmap',
        impact:
          'Команда описала хотфиксы, улучшения, работу над кооперативом и будущие крупные расширения.',
      },
      {
        date: '19 мая 2026',
        update: 'Hotfix 1',
        type: 'Хотфикс',
        impact:
          'Первый патч стартовой недели. Стоит перепроверить стартовый маршрут, co-op и базовый прогресс.',
      },
      {
        date: '20 мая 2026',
        update: 'Письмо о фидбеке',
        type: 'Фидбек',
        impact:
          'Команда ответила на ранние отзывы о давлении существ, нехватке Silver и коммуникации в co-op.',
      },
      {
        date: '22 мая 2026',
        update: 'Hotfix 2',
        type: 'Хотфикс',
        impact:
          'Добавлены ранние зоны Silver, исправлены краши, кислород, co-op, производительность и UI-подсказки.',
      },
    ],
    impactTitle: 'Какие гайды менять после патча?',
    impactRows: [
      [
        'Баланс ресурсов',
        'Silver, Copper, редкие материалы, дроп, стоимость рецептов',
        'Сначала обновлять ресурсы, Silver, Copper, crafting и beginner route.',
      ],
      [
        'Co-op',
        'Отключения, вход, коммуникация, совместное исследование',
        'Обновлять co-op guide и маршруты, где важны командные callouts.',
      ],
      [
        'Карта и выживание',
        'Биомы, существа, кислород, безопасные пути',
        'Обновлять map, base building, air tank и best base locations.',
      ],
      [
        'Новый контент',
        'Инструменты, транспорт, сюжет, системы, craftables',
        'Создавать новые страницы только после релиза контента и проверки маршрута.',
      ],
    ],
    workflowTitle: 'Как обновлять Abyss Guides',
    workflow: [
      {
        title: 'Сначала официальный пост',
        body: 'Не переписываем гайд только по соцсетям. Берем заметку Unknown Worlds и сверяем с игрой.',
      },
      {
        title: 'Отмечаем точные данные',
        body: 'Числа, точки и расстояния самые хрупкие. Они считаются проверенными только для текущего билда.',
      },
      {
        title: 'Обновляем внутренние ссылки',
        body: 'Патч редко касается одной страницы. Нужно связывать ресурсы, crafting, co-op, карту и стартовый гайд.',
      },
      {
        title: 'Планы пишем осторожно',
        body: 'Roadmap не гарантия. Без официальной даты пишем planned, expected или future.',
      },
    ],
    cautionTitle: 'Roadmap не календарь релизов',
    cautionBody:
      'Unknown Worlds предупреждает, что roadmap может меняться в Early Access. Поэтому мы отделяем факты уже вышедших патчей от будущих планов.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Когда следующее обновление Subnautica 2?',
        body: 'На момент проверки официальной даты следующего обновления нет. Подтверждены хотфиксы, улучшения, co-op update и крупные расширения.',
      },
      {
        title: 'Будут ли новые биомы и существа?',
        body: 'Да. Roadmap и Steam Early Access page говорят о новых биомах, существах, ресурсах, craftables, features и story content.',
      },
      {
        title: 'Hotfix 2 меняет маршруты ресурсов?',
        body: 'Да. Hotfix 2 добавил больше зон Silver в ранней области, поэтому старые маршруты Silver нужно проверить.',
      },
      {
        title: 'Как часто обновлять гайды?',
        body: 'Страницы про ресурсы, рецепты, co-op, карту и выживание стоит проверять после каждого хотфикса или официального roadmap-поста.',
      },
    ],
    readNextTitle: 'Дальше',
    readNext: [
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2Map, label: 'Map and Biomes' },
    ],
    sourceTitle: 'Источники',
    sourceBody:
      'Проверено по официальным источникам Unknown Worlds и Steam. Неподтвержденные даты и функции не выдаем за факт.',
    sourceLinks: officialSources,
  },
  de: {
    metadata: {
      title: 'Subnautica 2 Roadmap und Updates - Early-Access-Tracker',
      description:
        'Verfolge Subnautica 2 Early Access Updates, Hotfixes, Roadmap, Koop-Anderungen, neue Biome, Kreaturen, Werkzeuge, Fahrzeuge und Story.',
    },
    eyebrow: 'Subnautica 2 Update-Log',
    title: 'Subnautica 2 Roadmap und Updates',
    description:
      'Ein Patch-Tracker fuer Spieler: was schon geaendert wurde, was offiziell geplant ist und welche Guides nach einem Update neu geprueft werden sollten.',
    checkedPrefix: 'Geprueft',
    cardKicker: 'EA-Signal',
    quickLabel: 'Kurzfassung',
    quickAnswer:
      'Unknown Worlds plant Subnautica 2 als laengere Early-Access-Phase. Der offizielle Plan umfasst Hotfixes, kleinere Verbesserungen, ein Koop-fokussiertes Update und groessere Erweiterungen mit Biomen, Kreaturen, Ressourcen, Craftables, Features, Fahrzeugen, Story und Systemen.',
    statusTitle: 'Aktueller Tracker-Status',
    stats: [
      {
        value: 'Hotfix 2',
        label: 'Letzter offizieller Patch',
        note: 'Veroeffentlicht am 22. Mai 2026.',
      },
      {
        value: '2-3 Jahre',
        label: 'Steam Early-Access-Ziel',
        note: 'Von Unknown Worlds auf Steam genannt.',
      },
      {
        value: '5',
        label: 'Offizielle Quellen geprueft',
        note: 'Steam, Roadmap, zwei Hotfixes und Feedback-Brief.',
      },
    ],
    roadmapTitle: 'Was die offizielle Roadmap sagt',
    roadmapCards: [
      {
        title: 'Hotfixes und Balance',
        body: 'Erwarte Fixes fuer Abstuerze, Multiplayer-Disconnects, Ressourcen-Engpaesse, Einstellungen und kleinere Balance-Probleme.',
      },
      {
        title: 'Erstes Verbesserungs-Update',
        body: 'Das erste Improvement Update soll den Start in Early Access glatter machen: QoL, kleinere Anpassungen, weniger Reibung.',
      },
      {
        title: 'Koop-fokussiertes Update',
        body: 'Ein spaeteres Update soll sich auf co-op konzentrieren. Routen, Callouts, gemeinsames Erkunden und Verbindungsprobleme bleiben wichtig.',
      },
      {
        title: 'Groessere Erweiterungen',
        body: 'Groessere Drops koennen Biome, Kreaturen, Ressourcen, Craftables, Tools, Fahrzeuge, Story, Systeme und QoL bringen.',
      },
    ],
    timelineTitle: 'Early-Access-Zeitleiste',
    timelineIntro:
      'Hier stehen nur offizielle Meilensteine, keine geratenen Termine.',
    timelineHeaders: ['Datum', 'Update', 'Typ', 'Auswirkung'],
    timelineRows: [
      {
        date: '14. Mai 2026',
        update: 'Early-Access-Start',
        type: 'Launch',
        impact:
          'Spieler starten den ersten oeffentlichen Build und melden Balance-, Crash-, Ressourcen- und Koop-Probleme.',
      },
      {
        date: '15. Mai 2026',
        update: 'Early-Access-Roadmap',
        type: 'Roadmap',
        impact:
          'Unknown Worlds beschreibt Hotfixes, Verbesserungen, Koop-Arbeit und groessere Erweiterungen.',
      },
      {
        date: '19. Mai 2026',
        update: 'Hotfix 1',
        type: 'Hotfix',
        impact:
          'Erster Fix der Startwoche. Beginner Route, co-op setup und Progression neu pruefen.',
      },
      {
        date: '20. Mai 2026',
        update: 'Community-Feedback-Brief',
        type: 'Feedback',
        impact:
          'Das Team reagiert auf Feedback zu Kreaturendruck, Silver-Knappheit und Koop-Kommunikation.',
      },
      {
        date: '22. Mai 2026',
        update: 'Hotfix 2',
        type: 'Hotfix',
        impact:
          'Mehr fruehe Silver-Bereiche plus Fixes fuer Crashes, Sauerstoff, Multiplayer, Performance und UI.',
      },
    ],
    impactTitle: 'Welche Guides brauchen nach Patches ein Update?',
    impactRows: [
      [
        'Ressourcen-Balance',
        'Silver, Copper, rare materials, drops, recipe costs',
        'Zuerst Resources, Silver, Copper, Crafting und Beginner Route aktualisieren.',
      ],
      [
        'Koop-Verhalten',
        'Disconnects, join flow, communication, shared exploration',
        'Co-op Guide und alle Routen mit Team-Callouts aktualisieren.',
      ],
      [
        'Karte und Survival',
        'Biome, creature pressure, oxygen, safe routes',
        'Map, Base Building, Air Tank und Best Base Locations pruefen.',
      ],
      [
        'Neue Inhalte',
        'Tools, vehicles, story, systems, craftables',
        'Neue Seiten erst nach Live-Release und eigener Routenpruefung erstellen.',
      ],
    ],
    workflowTitle: 'Abyss Guides Update-Ablauf',
    workflow: [
      {
        title: 'Erst die offizielle Notiz lesen',
        body: 'Guides nicht nur aus Social Posts umschreiben. Unknown Worlds lesen, dann im Spiel gegenpruefen.',
      },
      {
        title: 'Exakte Claims markieren',
        body: 'Zahlen, Orte und Distanzen sind empfindlich. Sie gelten nur im aktuellen Build als verifiziert.',
      },
      {
        title: 'Interne Links aktualisieren',
        body: 'Ein Patch betrifft oft mehrere Seiten. Ressourcen, Crafting, co-op, map und beginner guide verbinden.',
      },
      {
        title: 'Zukunft vorsichtig formulieren',
        body: 'Roadmap ist Plan, kein Versprechen. Ohne offizielles Datum bleibt es geplant, erwartet oder zukuenftig.',
      },
    ],
    cautionTitle: 'Roadmap ist kein Release-Kalender',
    cautionBody:
      'Unknown Worlds sagt, dass die Roadmap in Early Access angepasst werden kann. Deshalb trennen wir Live-Patch-Fakten von Zukunftsplaenen.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Wann kommt das naechste Subnautica 2 Update?',
        body: 'Zum Pruefzeitpunkt gibt es kein offizielles Datum. Bestaetigt sind Hotfixes, Verbesserungen, ein co-op update und groessere Erweiterungen.',
      },
      {
        title: 'Kommen mehr Biome und Kreaturen?',
        body: 'Ja. Roadmap und Steam Early Access page nennen weitere Biome, Kreaturen, Ressourcen, craftables, features und story content.',
      },
      {
        title: 'Aendert Hotfix 2 Ressourcenrouten?',
        body: 'Ja. Hotfix 2 fuegt mehr Silver-Bereiche im fruehen Gebiet hinzu. Aeltere Silver-Routen muessen neu geprueft werden.',
      },
      {
        title: 'Wie oft sollten Guides aktualisiert werden?',
        body: 'Patch-sensitive Seiten zu Ressourcen, Rezepten, co-op, map und survival sollten nach jedem Hotfix oder offiziellen Roadmap-Post geprueft werden.',
      },
    ],
    readNextTitle: 'Weiterlesen',
    readNext: [
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2Map, label: 'Map and Biomes' },
    ],
    sourceTitle: 'Quellen',
    sourceBody:
      'Geprueft mit offiziellen Quellen von Unknown Worlds und Steam. Nicht angekuendigte Termine oder Features werden nicht als Fakt dargestellt.',
    sourceLinks: officialSources,
  },
  fr: {
    metadata: {
      title: 'Subnautica 2 Roadmap et mises a jour - suivi Early Access',
      description:
        'Suivez les mises a jour Subnautica 2 Early Access, hotfixes, roadmap, co-op, futurs biomes, creatures, outils, vehicules et histoire.',
    },
    eyebrow: 'Journal des updates Subnautica 2',
    title: 'Roadmap et mises a jour de Subnautica 2',
    description:
      'Un suivi clair pour savoir ce qui a change, ce qui est seulement prevu, et quels guides doivent etre verifies apres un patch.',
    checkedPrefix: 'Verifie le',
    cardKicker: 'Signal EA',
    quickLabel: 'Reponse rapide',
    quickAnswer:
      'Unknown Worlds traite Subnautica 2 comme un Early Access long. Le plan officiel combine hotfixes, petites ameliorations, update centree sur la co-op, et extensions plus larges avec biomes, creatures, ressources, craftables, features, vehicules, histoire et systemes.',
    statusTitle: 'Etat du tracker',
    stats: [
      {
        value: 'Hotfix 2',
        label: 'Dernier patch officiel suivi',
        note: 'Publie le 22 mai 2026.',
      },
      {
        value: '2-3 ans',
        label: 'Cible Early Access sur Steam',
        note: 'Indiquee par Unknown Worlds.',
      },
      {
        value: '5',
        label: 'Sources officielles verifiees',
        note: 'Steam, roadmap, deux hotfixes et lettre de feedback.',
      },
    ],
    roadmapTitle: 'Ce que dit la roadmap officielle',
    roadmapCards: [
      {
        title: 'Hotfixes et equilibre',
        body: 'Les corrections visent surtout crashes, deconnexions multiplayer, rarete de ressources, clarte des options et petits problemes de balance.',
      },
      {
        title: 'Premiere update d amelioration',
        body: 'La premiere update doit rendre le debut de l Early Access plus agreable avec des corrections QoL et des ajustements courts.',
      },
      {
        title: 'Update centree sur la co-op',
        body: 'Une update sera tournee vers la co-op. Routes, callouts, exploration partagee et connexions devront etre revus.',
      },
      {
        title: 'Extensions plus larges',
        body: 'Les gros updates peuvent ajouter biomes, creatures, ressources, craftables, outils, vehicules, histoire, systemes et QoL.',
      },
    ],
    timelineTitle: 'Timeline Early Access',
    timelineIntro: 'Seulement des jalons officiels, pas de dates inventees.',
    timelineHeaders: ['Date', 'Update', 'Type', 'Impact joueur'],
    timelineRows: [
      {
        date: '14 mai 2026',
        update: 'Lancement Early Access',
        type: 'Launch',
        impact:
          'Les joueurs commencent le premier build public et signalent bugs, crashs, ressources et soucis co-op.',
      },
      {
        date: '15 mai 2026',
        update: 'Roadmap Early Access',
        type: 'Roadmap',
        impact:
          'Unknown Worlds presente hotfixes, updates d amelioration, travail co-op et grandes extensions.',
      },
      {
        date: '19 mai 2026',
        update: 'Hotfix 1',
        type: 'Hotfix',
        impact:
          'Premier passage de corrections. A verifier: beginner route, co-op setup et progression de base.',
      },
      {
        date: '20 mai 2026',
        update: 'Lettre sur le feedback',
        type: 'Feedback',
        impact:
          'L equipe repond aux retours sur les creatures, la rarete de Silver et la communication co-op.',
      },
      {
        date: '22 mai 2026',
        update: 'Hotfix 2',
        type: 'Hotfix',
        impact:
          'Ajoute plus de zones Silver au debut et corrige crashs, oxygene, multiplayer, performance et UI.',
      },
    ],
    impactTitle: 'Quels guides changer apres un patch ?',
    impactRows: [
      [
        'Equilibre des ressources',
        'Silver, Copper, rare materials, drops, recipe costs',
        'Mettre a jour resources, Silver, Copper, crafting et beginner route.',
      ],
      [
        'Comportement co-op',
        'Disconnects, join flow, communication, exploration partagee',
        'Mettre a jour co-op guide et les routes avec callouts d equipe.',
      ],
      [
        'Carte et survie',
        'Biomes, creature pressure, oxygene, safe routes',
        'Verifier map, base building, air tank et best base locations.',
      ],
      [
        'Nouveau contenu',
        'Tools, vehicles, story, systems, craftables',
        'Creer une page seulement quand le contenu est live et teste.',
      ],
    ],
    workflowTitle: 'Methode de mise a jour Abyss Guides',
    workflow: [
      {
        title: 'Lire d abord l officiel',
        body: 'Ne pas reecrire un guide depuis des posts sociaux seuls. Lire Unknown Worlds, puis verifier en jeu.',
      },
      {
        title: 'Marquer les claims precis',
        body: 'Nombres, lieux et distances changent vite. Ils ne sont verifies que pour le build actuel.',
      },
      {
        title: 'Mettre les liens internes a jour',
        body: 'Un patch touche souvent plusieurs pages. Relier resources, crafting, co-op, map et beginner guide.',
      },
      {
        title: 'Rester prudent sur le futur',
        body: 'La roadmap est un plan. Sans date officielle, ecrire planned, expected ou future.',
      },
    ],
    cautionTitle: 'La roadmap n est pas un calendrier',
    cautionBody:
      'Unknown Worlds indique que la roadmap peut changer pendant l Early Access. On separe donc faits deja live et plans futurs.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Quand arrive la prochaine update de Subnautica 2 ?',
        body: 'Aucune date officielle precise au moment de cette verification. Les hotfixes, updates d amelioration, update co-op et extensions sont confirmes.',
      },
      {
        title: 'Y aura-t-il plus de biomes et creatures ?',
        body: 'Oui. Roadmap et page Steam Early Access mentionnent plus de biomes, creatures, ressources, craftables, features et story content.',
      },
      {
        title: 'Hotfix 2 change-t-il les routes de ressources ?',
        body: 'Oui. Hotfix 2 ajoute plus de zones Silver au debut, donc les anciennes routes Silver doivent etre reverifiees.',
      },
      {
        title: 'A quelle frequence mettre les guides a jour ?',
        body: 'Les pages sensibles aux patchs doivent etre verifiees apres chaque hotfix ou post officiel de roadmap.',
      },
    ],
    readNextTitle: 'Lire ensuite',
    readNext: [
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2Map, label: 'Map and Biomes' },
    ],
    sourceTitle: 'Sources',
    sourceBody:
      'Verifie avec les sources officielles Unknown Worlds et Steam. Les dates et features non annoncees ne sont pas presentees comme des faits.',
    sourceLinks: officialSources,
  },
  'pt-BR': {
    metadata: {
      title: 'Subnautica 2 Roadmap e atualizacoes - tracker Early Access',
      description:
        'Acompanhe updates de Subnautica 2 Early Access, hotfixes, roadmap, co-op, biomas futuros, criaturas, ferramentas, veiculos e historia.',
    },
    eyebrow: 'Registro de updates de Subnautica 2',
    title: 'Roadmap e atualizacoes de Subnautica 2',
    description:
      'Um tracker direto para saber o que mudou, o que e plano oficial e quais guias precisam de nova checagem depois de um patch.',
    checkedPrefix: 'Verificado em',
    cardKicker: 'Sinal EA',
    quickLabel: 'Resposta rapida',
    quickAnswer:
      'Unknown Worlds esta tratando Subnautica 2 como um Early Access longo. O plano oficial mistura hotfixes, melhorias menores, um update focado em co-op e expansoes maiores com biomas, criaturas, recursos, craftables, features, veiculos, historia e sistemas.',
    statusTitle: 'Status do tracker',
    stats: [
      {
        value: 'Hotfix 2',
        label: 'Patch oficial mais recente',
        note: 'Lancado em 22 de maio de 2026.',
      },
      {
        value: '2-3 anos',
        label: 'Meta de Early Access no Steam',
        note: 'Listada pela Unknown Worlds.',
      },
      {
        value: '5',
        label: 'Fontes oficiais checadas',
        note: 'Steam, roadmap, dois hotfixes e carta de feedback.',
      },
    ],
    roadmapTitle: 'O que o roadmap oficial diz',
    roadmapCards: [
      {
        title: 'Hotfixes e balanceamento',
        body: 'Espere correcoes de crashes, desconexoes multiplayer, gargalos de recurso, clareza de opcoes e pequenos problemas de balanceamento.',
      },
      {
        title: 'Primeiro update de melhorias',
        body: 'O primeiro improvement update deve deixar o comeco do Early Access mais suave, com QoL e ajustes menores.',
      },
      {
        title: 'Update focado em co-op',
        body: 'Um update posterior sera focado em co-op. Rotas, callouts, exploracao em grupo e conexao precisam ser acompanhados.',
      },
      {
        title: 'Expansoes maiores',
        body: 'Drops maiores podem adicionar biomas, criaturas, recursos, craftables, ferramentas, veiculos, historia, sistemas e QoL.',
      },
    ],
    timelineTitle: 'Linha do tempo Early Access',
    timelineIntro:
      'Apenas marcos oficiais, sem adivinhar datas nao anunciadas.',
    timelineHeaders: ['Data', 'Update', 'Tipo', 'Impacto para jogadores'],
    timelineRows: [
      {
        date: '14 de maio de 2026',
        update: 'Lancamento Early Access',
        type: 'Lancamento',
        impact:
          'Jogadores entram no primeiro build publico e reportam balanceamento, crashes, recursos e problemas de co-op.',
      },
      {
        date: '15 de maio de 2026',
        update: 'Roadmap Early Access',
        type: 'Roadmap',
        impact:
          'Unknown Worlds apresenta hotfixes, updates de melhoria, trabalho de co-op e expansoes maiores.',
      },
      {
        date: '19 de maio de 2026',
        update: 'Hotfix 1',
        type: 'Hotfix',
        impact:
          'Primeira rodada de correcoes. Rechecar beginner route, co-op setup e progressao basica.',
      },
      {
        date: '20 de maio de 2026',
        update: 'Carta de feedback',
        type: 'Feedback',
        impact:
          'A equipe responde a feedback sobre pressao de criaturas, falta de Silver e comunicacao no co-op.',
      },
      {
        date: '22 de maio de 2026',
        update: 'Hotfix 2',
        type: 'Hotfix',
        impact:
          'Adiciona mais areas de Silver no inicio e corrige crashes, oxigenio, multiplayer, performance e UI.',
      },
    ],
    impactTitle: 'Quais guias mudam depois de patch?',
    impactRows: [
      [
        'Balanceamento de recursos',
        'Silver, Copper, rare materials, drops, recipe costs',
        'Atualizar resources, Silver, Copper, crafting e beginner route primeiro.',
      ],
      [
        'Comportamento co-op',
        'Disconnects, join flow, communication, shared exploration',
        'Atualizar co-op guide e rotas que dependem de callouts.',
      ],
      [
        'Mapa e sobrevivencia',
        'Biomes, creature pressure, oxygen, safe routes',
        'Checar map, base building, air tank e best base locations.',
      ],
      [
        'Conteudo novo',
        'Tools, vehicles, story, systems, craftables',
        'Criar paginas novas so depois do conteudo estar live e testado.',
      ],
    ],
    workflowTitle: 'Fluxo de atualizacao do Abyss Guides',
    workflow: [
      {
        title: 'Ler a nota oficial primeiro',
        body: 'Nao reescrever guia so por post social. Ler Unknown Worlds e depois checar no jogo.',
      },
      {
        title: 'Marcar claims exatos',
        body: 'Numeros, locais e distancias mudam rapido. So ficam verificados no build atual.',
      },
      {
        title: 'Atualizar links internos',
        body: 'Um patch costuma afetar varias paginas. Ligar resources, crafting, co-op, map e beginner guide.',
      },
      {
        title: 'Escrever planos com cuidado',
        body: 'Roadmap e plano, nao promessa. Sem data oficial, usar planned, expected ou future.',
      },
    ],
    cautionTitle: 'Roadmap nao e calendario de lancamento',
    cautionBody:
      'Unknown Worlds diz que a roadmap pode mudar durante o Early Access. Por isso separamos fatos de patch ja live de planos futuros.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Quando sai o proximo update de Subnautica 2?',
        body: 'No momento da checagem, nao ha data oficial exata. Hotfixes, updates de melhoria, update de co-op e expansoes maiores estao confirmados.',
      },
      {
        title: 'Vai ter mais biomas e criaturas?',
        body: 'Sim. A roadmap e a pagina Steam Early Access mencionam mais biomas, criaturas, recursos, craftables, features e story content.',
      },
      {
        title: 'Hotfix 2 muda rotas de recursos?',
        body: 'Sim. Hotfix 2 adicionou mais areas de Silver no comeco, entao rotas antigas de Silver precisam ser rechecadas.',
      },
      {
        title: 'Com que frequencia atualizar guias?',
        body: 'Paginas sensiveis a patch devem ser checadas depois de cada hotfix ou post oficial de roadmap.',
      },
    ],
    readNextTitle: 'Ler depois',
    readNext: [
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2Map, label: 'Map and Biomes' },
    ],
    sourceTitle: 'Fontes',
    sourceBody:
      'Checado com fontes oficiais da Unknown Worlds e Steam. Datas ou features sem anuncio nao sao tratadas como fato.',
    sourceLinks: officialSources,
  },
  'es-419': {
    metadata: {
      title: 'Subnautica 2 Roadmap y actualizaciones - tracker Early Access',
      description:
        'Sigue updates de Subnautica 2 Early Access, hotfixes, roadmap, co-op, biomas futuros, criaturas, herramientas, vehiculos e historia.',
    },
    eyebrow: 'Registro de updates de Subnautica 2',
    title: 'Roadmap y actualizaciones de Subnautica 2',
    description:
      'Un tracker directo para saber que cambio, que es plan oficial y que guias conviene revisar despues de un patch.',
    checkedPrefix: 'Verificado el',
    cardKicker: 'Senal EA',
    quickLabel: 'Respuesta rapida',
    quickAnswer:
      'Unknown Worlds esta tratando Subnautica 2 como un Early Access largo. El plan oficial combina hotfixes, mejoras pequenas, un update centrado en co-op y expansiones grandes con biomas, criaturas, recursos, craftables, features, vehiculos, historia y sistemas.',
    statusTitle: 'Estado del tracker',
    stats: [
      {
        value: 'Hotfix 2',
        label: 'Ultimo patch oficial seguido',
        note: 'Publicado el 22 de mayo de 2026.',
      },
      {
        value: '2-3 anos',
        label: 'Meta Early Access en Steam',
        note: 'Listada por Unknown Worlds.',
      },
      {
        value: '5',
        label: 'Fuentes oficiales revisadas',
        note: 'Steam, roadmap, dos hotfixes y carta de feedback.',
      },
    ],
    roadmapTitle: 'Que dice el roadmap oficial',
    roadmapCards: [
      {
        title: 'Hotfixes y balance',
        body: 'Espera fixes para crashes, desconexiones multiplayer, escasez de recursos, claridad de ajustes y pequenos problemas de balance.',
      },
      {
        title: 'Primer update de mejoras',
        body: 'El primer improvement update busca suavizar el comienzo del Early Access con QoL y ajustes pequenos.',
      },
      {
        title: 'Update centrado en co-op',
        body: 'Un update posterior se enfocara en co-op. Rutas, callouts, exploracion compartida y conexion necesitan seguimiento.',
      },
      {
        title: 'Expansiones grandes',
        body: 'Los drops grandes pueden sumar biomas, criaturas, recursos, craftables, herramientas, vehiculos, historia, sistemas y QoL.',
      },
    ],
    timelineTitle: 'Linea de tiempo Early Access',
    timelineIntro: 'Solo hitos oficiales, sin adivinar fechas no anunciadas.',
    timelineHeaders: ['Fecha', 'Update', 'Tipo', 'Impacto para jugadores'],
    timelineRows: [
      {
        date: '14 de mayo de 2026',
        update: 'Lanzamiento Early Access',
        type: 'Lanzamiento',
        impact:
          'Los jugadores entran al primer build publico y reportan balance, crashes, recursos y problemas co-op.',
      },
      {
        date: '15 de mayo de 2026',
        update: 'Roadmap Early Access',
        type: 'Roadmap',
        impact:
          'Unknown Worlds describe hotfixes, updates de mejora, trabajo de co-op y expansiones grandes.',
      },
      {
        date: '19 de mayo de 2026',
        update: 'Hotfix 1',
        type: 'Hotfix',
        impact:
          'Primera ronda de fixes. Revisar beginner route, co-op setup y progresion basica.',
      },
      {
        date: '20 de mayo de 2026',
        update: 'Carta de feedback',
        type: 'Feedback',
        impact:
          'El equipo responde a feedback sobre presion de criaturas, escasez de Silver y comunicacion co-op.',
      },
      {
        date: '22 de mayo de 2026',
        update: 'Hotfix 2',
        type: 'Hotfix',
        impact:
          'Agrega mas zonas tempranas de Silver y corrige crashes, oxigeno, multiplayer, performance y UI.',
      },
    ],
    impactTitle: 'Que guias cambian despues de un patch?',
    impactRows: [
      [
        'Balance de recursos',
        'Silver, Copper, rare materials, drops, recipe costs',
        'Actualizar resources, Silver, Copper, crafting y beginner route primero.',
      ],
      [
        'Comportamiento co-op',
        'Disconnects, join flow, communication, shared exploration',
        'Actualizar co-op guide y rutas que dependen de callouts.',
      ],
      [
        'Mapa y supervivencia',
        'Biomes, creature pressure, oxygen, safe routes',
        'Revisar map, base building, air tank y best base locations.',
      ],
      [
        'Contenido nuevo',
        'Tools, vehicles, story, systems, craftables',
        'Crear paginas nuevas solo cuando el contenido este live y probado.',
      ],
    ],
    workflowTitle: 'Flujo de actualizacion de Abyss Guides',
    workflow: [
      {
        title: 'Leer primero la nota oficial',
        body: 'No reescribir guias solo por posts sociales. Leer Unknown Worlds y comprobar en el juego.',
      },
      {
        title: 'Marcar claims exactos',
        body: 'Numeros, lugares y distancias son fragiles. Solo cuentan como verificados para el build actual.',
      },
      {
        title: 'Actualizar enlaces internos',
        body: 'Un patch suele tocar varias paginas. Conectar resources, crafting, co-op, map y beginner guide.',
      },
      {
        title: 'Escribir el futuro con cuidado',
        body: 'Roadmap es plan, no promesa. Sin fecha oficial, usar planned, expected o future.',
      },
    ],
    cautionTitle: 'Roadmap no es calendario de lanzamiento',
    cautionBody:
      'Unknown Worlds dice que el roadmap puede cambiar durante Early Access. Por eso separamos hechos ya live de planes futuros.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Cuando sale el proximo update de Subnautica 2?',
        body: 'Al momento de revisar, no hay fecha oficial exacta. Estan confirmados hotfixes, updates de mejora, update co-op y expansiones grandes.',
      },
      {
        title: 'Habra mas biomas y criaturas?',
        body: 'Si. El roadmap y la pagina Steam Early Access mencionan mas biomas, criaturas, recursos, craftables, features y story content.',
      },
      {
        title: 'Hotfix 2 cambia rutas de recursos?',
        body: 'Si. Hotfix 2 agrego mas areas de Silver al comienzo, asi que las rutas antiguas de Silver deben revisarse.',
      },
      {
        title: 'Cada cuanto actualizar guias?',
        body: 'Las paginas sensibles a patch deben revisarse despues de cada hotfix o post oficial de roadmap.',
      },
    ],
    readNextTitle: 'Leer despues',
    readNext: [
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2Map, label: 'Map and Biomes' },
    ],
    sourceTitle: 'Fuentes',
    sourceBody:
      'Revisado con fuentes oficiales de Unknown Worlds y Steam. Fechas o features sin anuncio no se tratan como hechos.',
    sourceLinks: officialSources,
  },
  ko: {
    metadata: {
      title: 'Subnautica 2 로드맵과 업데이트 - Early Access 트래커',
      description:
        'Subnautica 2 Early Access 업데이트, 핫픽스, 로드맵, 협동 플레이, 향후 바이옴, 생물, 도구, 차량, 스토리를 추적합니다.',
    },
    eyebrow: 'Subnautica 2 업데이트 로그',
    title: 'Subnautica 2 로드맵과 업데이트',
    description:
      '무엇이 바뀌었는지, 무엇이 공식 계획인지, 패치 후 어떤 가이드를 다시 확인해야 하는지 정리한 트래커입니다.',
    checkedPrefix: '확인일',
    cardKicker: 'EA 신호',
    quickLabel: '빠른 답변',
    quickAnswer:
      'Unknown Worlds는 Subnautica 2를 긴 Early Access로 운영하고 있습니다. 공식 계획에는 hotfix, 작은 개선 업데이트, co-op 중심 업데이트, 그리고 더 많은 바이옴, 생물, 자원, 제작물, 기능, 차량, 스토리, 시스템을 넣는 큰 확장이 포함됩니다.',
    statusTitle: '현재 트래커 상태',
    stats: [
      {
        value: 'Hotfix 2',
        label: '추적한 최신 공식 패치',
        note: '2026년 5월 22일 공개.',
      },
      {
        value: '2-3년',
        label: 'Steam Early Access 목표',
        note: 'Unknown Worlds가 Steam에 표시.',
      },
      {
        value: '5',
        label: '확인한 공식 출처',
        note: 'Steam, roadmap, hotfix 2개, feedback letter.',
      },
    ],
    roadmapTitle: '공식 로드맵 내용',
    roadmapCards: [
      {
        title: 'Hotfix와 밸런스 조정',
        body: '크래시, 멀티플레이 연결 끊김, 자원 병목, 설정 설명, 작은 밸런스 문제가 우선 대상입니다.',
      },
      {
        title: '첫 개선 업데이트',
        body: '첫 improvement update는 Early Access 초반 경험을 더 매끄럽게 만드는 QoL과 작은 조정에 가깝습니다.',
      },
      {
        title: 'Co-op 중심 업데이트',
        body: '나중에 co-op 중심 업데이트가 있습니다. 루트, 콜아웃, 공동 탐험, 연결 안정성을 계속 확인해야 합니다.',
      },
      {
        title: '큰 콘텐츠 확장',
        body: '큰 업데이트는 바이옴, 생물, 자원, 제작물, 도구, 차량, 스토리, 시스템, QoL을 추가할 수 있습니다.',
      },
    ],
    timelineTitle: 'Early Access 초기 타임라인',
    timelineIntro:
      '공식으로 공개된 일정만 기록하고, 발표되지 않은 날짜는 추측하지 않습니다.',
    timelineHeaders: ['날짜', '업데이트', '유형', '플레이어 영향'],
    timelineRows: [
      {
        date: '2026년 5월 14일',
        update: 'Early Access 출시',
        type: '출시',
        impact:
          '첫 공개 빌드가 열리고 밸런스, 크래시, 자원, co-op 문제 피드백이 시작됩니다.',
      },
      {
        date: '2026년 5월 15일',
        update: 'Early Access 로드맵',
        type: '로드맵',
        impact:
          'Unknown Worlds가 hotfix, 개선 업데이트, co-op 작업, 큰 확장 계획을 설명합니다.',
      },
      {
        date: '2026년 5월 19일',
        update: 'Hotfix 1',
        type: '핫픽스',
        impact:
          '출시 첫 주 첫 수정입니다. beginner route, co-op setup, 기본 진행을 다시 확인합니다.',
      },
      {
        date: '2026년 5월 20일',
        update: '커뮤니티 피드백 레터',
        type: '피드백',
        impact:
          '생물 압박, Silver 부족, co-op 커뮤니케이션에 대한 초기 피드백에 답합니다.',
      },
      {
        date: '2026년 5월 22일',
        update: 'Hotfix 2',
        type: '핫픽스',
        impact:
          '초반 Silver 지역을 늘리고 크래시, 산소, 멀티플레이, 성능, UI 문제를 수정합니다.',
      },
    ],
    impactTitle: '패치 후 어떤 가이드를 바꿔야 하나요?',
    impactRows: [
      [
        '자원 밸런스',
        'Silver, Copper, rare materials, drops, recipe costs',
        'resources, Silver, Copper, crafting, beginner route를 먼저 업데이트합니다.',
      ],
      [
        'Co-op 동작',
        'Disconnects, join flow, communication, shared exploration',
        'co-op guide와 팀 콜아웃이 필요한 루트를 업데이트합니다.',
      ],
      [
        '맵과 생존',
        'Biomes, creature pressure, oxygen, safe routes',
        'map, base building, air tank, best base locations를 확인합니다.',
      ],
      [
        '새 콘텐츠',
        'Tools, vehicles, story, systems, craftables',
        '콘텐츠가 실제로 적용되고 루트를 확인한 뒤 새 페이지를 만듭니다.',
      ],
    ],
    workflowTitle: 'Abyss Guides 업데이트 방식',
    workflow: [
      {
        title: '공식 노트부터 읽기',
        body: '소셜 글만 보고 가이드를 고치지 않습니다. Unknown Worlds 공지를 읽고 게임에서 확인합니다.',
      },
      {
        title: '정확한 주장 표시',
        body: '숫자, 위치, 거리는 쉽게 바뀝니다. 현재 빌드에서 확인한 것만 verified로 둡니다.',
      },
      {
        title: '내부 링크 업데이트',
        body: '패치는 여러 페이지에 영향을 줍니다. resources, crafting, co-op, map, beginner guide를 연결합니다.',
      },
      {
        title: '미래 계획은 조심스럽게 쓰기',
        body: '로드맵은 계획입니다. 공식 날짜가 없으면 planned, expected, future로 표현합니다.',
      },
    ],
    cautionTitle: '로드맵은 출시 달력이 아닙니다',
    cautionBody:
      'Unknown Worlds는 Early Access 중 로드맵이 바뀔 수 있다고 말합니다. 그래서 이 페이지는 실제 패치 사실과 미래 계획을 분리합니다.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 다음 업데이트는 언제인가요?',
        body: '이번 확인 기준으로 공식 날짜는 없습니다. hotfix, 개선 업데이트, co-op 업데이트, 큰 확장은 확인되어 있습니다.',
      },
      {
        title: '바이옴과 생물이 더 추가되나요?',
        body: '네. roadmap과 Steam Early Access page 모두 더 많은 바이옴, 생물, 자원, craftables, features, story content를 언급합니다.',
      },
      {
        title: 'Hotfix 2가 자원 루트를 바꿨나요?',
        body: '네. Hotfix 2는 초반 지역에 Silver 구역을 더 추가했습니다. 이전 Silver 루트는 다시 확인해야 합니다.',
      },
      {
        title: '가이드는 얼마나 자주 업데이트해야 하나요?',
        body: '자원, 레시피, co-op, 맵, 생존 관련 페이지는 hotfix나 공식 roadmap 글 이후 확인하는 것이 좋습니다.',
      },
    ],
    readNextTitle: '다음 읽기',
    readNext: [
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2Map, label: 'Map and Biomes' },
    ],
    sourceTitle: '출처',
    sourceBody:
      'Unknown Worlds와 Steam 공식 출처를 확인했습니다. 발표되지 않은 날짜나 기능은 사실처럼 쓰지 않습니다.',
    sourceLinks: officialSources,
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 ロードマップと更新 - Early Access トラッカー',
      description:
        'Subnautica 2 Early Access の更新、Hotfix、ロードマップ、協力プレイ、今後のバイオーム、生物、道具、乗り物、ストーリーを追跡します。',
    },
    eyebrow: 'Subnautica 2 更新ログ',
    title: 'Subnautica 2 ロードマップと更新',
    description:
      '何が変わったのか、何が公式予定なのか、パッチ後にどの攻略を確認すべきかをまとめるトラッカーです。',
    checkedPrefix: '確認日',
    cardKicker: 'EA 信号',
    quickLabel: '要点',
    quickAnswer:
      'Unknown Worlds は Subnautica 2 を長めの Early Access として運用しています。公式計画には hotfix、小さな改善、co-op 向け更新、そしてバイオーム、生物、資源、作成物、機能、乗り物、物語、システムを増やす大きな拡張が含まれます。',
    statusTitle: '現在のトラッカー状態',
    stats: [
      {
        value: 'Hotfix 2',
        label: '追跡済みの最新公式パッチ',
        note: '2026年5月22日公開。',
      },
      {
        value: '2-3年',
        label: 'Steam Early Access の目安',
        note: 'Unknown Worlds が Steam に記載。',
      },
      {
        value: '5',
        label: '確認済み公式ソース',
        note: 'Steam、roadmap、hotfix 2件、feedback letter。',
      },
    ],
    roadmapTitle: '公式ロードマップの内容',
    roadmapCards: [
      {
        title: 'Hotfix とバランス調整',
        body: 'クラッシュ、マルチプレイ切断、資源不足、設定説明、小さなバランス問題が主な対象です。',
      },
      {
        title: '最初の改善アップデート',
        body: '最初の improvement update は Early Access 序盤を遊びやすくする QoL と小調整が中心です。',
      },
      {
        title: 'Co-op 中心の更新',
        body: '後の更新では co-op が焦点になります。ルート、合図、共同探索、接続安定性を確認します。',
      },
      {
        title: '大きなコンテンツ拡張',
        body: '大きな更新ではバイオーム、生物、資源、作成物、道具、乗り物、物語、システム、QoL が追加される可能性があります。',
      },
    ],
    timelineTitle: 'Early Access 初期タイムライン',
    timelineIntro:
      '公式に出ている節目だけを記録し、未発表の日付は推測しません。',
    timelineHeaders: ['日付', '更新', '種類', 'プレイヤーへの影響'],
    timelineRows: [
      {
        date: '2026年5月14日',
        update: 'Early Access 開始',
        type: '開始',
        impact:
          '最初の公開ビルドが始まり、バランス、クラッシュ、資源、co-op の報告が集まります。',
      },
      {
        date: '2026年5月15日',
        update: 'Early Access ロードマップ',
        type: 'ロードマップ',
        impact:
          'Unknown Worlds が hotfix、改善更新、co-op 作業、大きな拡張予定を説明しました。',
      },
      {
        date: '2026年5月19日',
        update: 'Hotfix 1',
        type: 'Hotfix',
        impact:
          '初週の最初の修正です。beginner route、co-op setup、基本進行を確認します。',
      },
      {
        date: '2026年5月20日',
        update: 'コミュニティフィードバック',
        type: 'フィードバック',
        impact:
          '生物の圧力、Silver 不足、co-op コミュニケーションに関する初期反応への返答です。',
      },
      {
        date: '2026年5月22日',
        update: 'Hotfix 2',
        type: 'Hotfix',
        impact:
          '序盤の Silver エリア追加、クラッシュ、酸素、マルチプレイ、性能、UI 問題の修正が含まれます。',
      },
    ],
    impactTitle: 'パッチ後に直すべき攻略',
    impactRows: [
      [
        '資源バランス',
        'Silver, Copper, rare materials, drops, recipe costs',
        'resources、Silver、Copper、crafting、beginner route を先に更新します。',
      ],
      [
        'Co-op 挙動',
        'Disconnects, join flow, communication, shared exploration',
        'co-op guide とチーム合図が必要なルートを更新します。',
      ],
      [
        'マップとサバイバル',
        'Biomes, creature pressure, oxygen, safe routes',
        'map、base building、air tank、best base locations を確認します。',
      ],
      [
        '新コンテンツ',
        'Tools, vehicles, story, systems, craftables',
        'コンテンツが実装され、ルート確認後に新ページを作ります。',
      ],
    ],
    workflowTitle: 'Abyss Guides の更新手順',
    workflow: [
      {
        title: 'まず公式ノートを読む',
        body: 'SNS だけで攻略を書き換えません。Unknown Worlds の告知を読み、ゲーム内で確認します。',
      },
      {
        title: '正確な主張を分ける',
        body: '数、場所、距離は変わりやすい部分です。現在のビルドで確認したものだけ verified にします。',
      },
      {
        title: '内部リンクを更新する',
        body: '1つのパッチは複数ページに影響します。resources、crafting、co-op、map、beginner guide をつなげます。',
      },
      {
        title: '未来予定は控えめに書く',
        body: 'ロードマップは計画です。公式日付がない場合は planned、expected、future として扱います。',
      },
    ],
    cautionTitle: 'ロードマップは発売カレンダーではありません',
    cautionBody:
      'Unknown Worlds は Early Access 中にロードマップが変わる可能性を示しています。このページでは公開済みパッチの事実と未来予定を分けます。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 の次の更新日は？',
        body: '今回の確認時点では公式の具体日付はありません。Hotfix、改善更新、co-op 更新、大きな拡張は確認されています。',
      },
      {
        title: 'バイオームや生物は増えますか？',
        body: 'はい。roadmap と Steam Early Access page は、追加のバイオーム、生物、資源、craftables、features、story content に触れています。',
      },
      {
        title: 'Hotfix 2 は資源ルートを変えましたか？',
        body: 'はい。Hotfix 2 は序盤地域の Silver エリアを増やしたため、古い Silver ルートは再確認が必要です。',
      },
      {
        title: '攻略はどれくらい更新すべき？',
        body: '資源、レシピ、co-op、マップ、サバイバル系ページは、hotfix や公式 roadmap 投稿後に確認するのが安全です。',
      },
    ],
    readNextTitle: '次に読む',
    readNext: [
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2Map, label: 'Map and Biomes' },
    ],
    sourceTitle: 'ソース',
    sourceBody:
      'Unknown Worlds と Steam の公式情報を確認しています。未発表の日付や機能を事実として扱いません。',
    sourceLinks: officialSources,
  },
};

function getCopy(locale: Locale): RoadmapCopy {
  return roadmapCopy[locale] ?? roadmapCopy.en;
}

function formatGuideDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00.000Z`));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = getCopy(locale);

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Updates,
  });
}

export default async function RoadmapGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);
  const checkedDate = formatGuideDate(MODIFIED_AT, locale);
  const baseUrl = getBaseUrl().replace(/\/$/, '');
  const pageUrl = getUrlWithLocale(Routes.Subnautica2Updates, locale).replace(
    /\/$/,
    ''
  );
  const hubUrl = `${baseUrl}${getPathWithLocale(Routes.Subnautica2, locale)}`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: copy.title,
      description: copy.metadata.description,
      url: pageUrl,
      datePublished: PUBLISHED_AT,
      dateModified: MODIFIED_AT,
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
          name: copy.title,
          item: pageUrl,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: copy.faqs.map((faq) => ({
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
          className="absolute inset-0 bg-cover bg-right opacity-40"
          style={{
            backgroundImage: "url('/abyss/chibi-deep-sea-hero.webp')",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(106,240,224,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(106,240,224,.15) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,12,18,.97)_0%,rgba(3,19,20,.9)_46%,rgba(3,19,20,.58)_72%,rgba(1,9,12,.78)_100%),radial-gradient(circle_at_18%_82%,rgba(240,139,79,.14),transparent_30%),linear-gradient(180deg,rgba(3,19,20,.12),rgba(1,9,12,.97))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
                <RadioIcon className="size-4" />
                {copy.eyebrow}
              </div>
              <h1 className="text-balance text-4xl font-semibold leading-tight text-[#e8fff9] md:text-6xl">
                {copy.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
                {copy.description}
              </p>
            </div>

            <aside className="border border-cyan-200/20 bg-[#041d22]/88 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-cyan-200/15 pb-3 text-xs uppercase tracking-[0.18em] text-[#9fe6d4]">
                <span>{copy.cardKicker}</span>
                <span>EA</span>
              </div>
              <div className="relative mt-5 aspect-square overflow-hidden border border-cyan-200/12 bg-[#021012]">
                <div className="absolute left-1/2 top-1/2 size-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20" />
                <div className="absolute left-1/2 top-1/2 size-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20" />
                <div className="absolute left-1/2 top-1/2 size-[28%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20" />
                <div className="absolute left-[52%] top-1/2 h-px w-[42%] bg-[#f0b34f]" />
                <span className="absolute left-[26%] top-[30%] size-2 bg-[#f0b34f]" />
                <span className="absolute left-[66%] top-[44%] size-2 bg-[#78ead7]" />
                <span className="absolute left-[38%] top-[67%] size-2 bg-[#ff816a]" />
                <RadarIcon className="absolute bottom-4 right-4 size-5 text-[#78ead7]" />
              </div>
              <div className="mt-5 grid gap-2 text-sm text-[#d1e8e2]">
                <div className="flex items-center justify-between border border-cyan-200/10 bg-cyan-300/5 px-3 py-2">
                  <span>{copy.checkedPrefix}</span>
                  <time className="text-[#f08b4f]" dateTime={MODIFIED_AT}>
                    {checkedDate}
                  </time>
                </div>
                <div className="flex items-center justify-between border border-cyan-200/10 bg-cyan-300/5 px-3 py-2">
                  <span>Article</span>
                  <span className="text-[#78ead7]">FAQ + Timeline</span>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="space-y-8">
            <section className="border border-cyan-200/15 bg-[#082226] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
                {copy.quickLabel}
              </p>
              <p className="mt-4 text-lg leading-8 text-[#d7eee8]">
                {copy.quickAnswer}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {copy.statusTitle}
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {copy.stats.map((stat) => (
                  <section
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                    key={stat.label}
                  >
                    <p className="text-3xl font-semibold text-[#78ead7]">
                      {stat.value}
                    </p>
                    <h3 className="mt-3 font-semibold text-[#effffb]">
                      {stat.label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#abc8c3]">
                      {stat.note}
                    </p>
                  </section>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {copy.roadmapTitle}
              </h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {copy.roadmapCards.map((item, index) => {
                  const icons = [
                    WrenchIcon,
                    CheckCircle2Icon,
                    MessagesSquareIcon,
                    CalendarDaysIcon,
                  ];
                  const Icon = icons[index] ?? FileTextIcon;

                  return (
                    <section
                      key={item.title}
                      className="border border-cyan-200/12 bg-[#071f23] p-5"
                    >
                      <Icon className="mb-5 size-6 text-[#78ead7]" />
                      <h3 className="text-xl font-semibold text-[#effffb]">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-7 text-[#abc8c3]">
                        {item.body}
                      </p>
                    </section>
                  );
                })}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {copy.timelineTitle}
              </h2>
              <p className="mt-3 leading-7 text-[#abc8c3]">
                {copy.timelineIntro}
              </p>
              <div className="mt-5 overflow-x-auto border border-cyan-200/12">
                <table className="w-full min-w-[760px] border-collapse bg-[#071f23] text-left text-sm">
                  <thead className="bg-[#0b2d33] text-[#dff8f0]">
                    <tr>
                      {copy.timelineHeaders.map((header) => (
                        <th className="p-4 font-semibold" key={header}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {copy.timelineRows.map((row) => (
                      <tr
                        className="border-t border-cyan-200/10"
                        key={`${row.date}-${row.update}`}
                      >
                        <td className="p-4 align-top font-medium text-[#78ead7]">
                          {row.date}
                        </td>
                        <td className="p-4 align-top text-[#d1e8e2]">
                          {row.update}
                        </td>
                        <td className="p-4 align-top text-[#f0b34f]">
                          {row.type}
                        </td>
                        <td className="p-4 leading-6 text-[#abc8c3]">
                          {row.impact}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {copy.impactTitle}
              </h2>
              <div className="mt-5 grid gap-4">
                {copy.impactRows.map(([topic, trigger, action]) => (
                  <section
                    className="grid gap-3 border border-cyan-200/12 bg-[#071f23] p-5 md:grid-cols-[180px_minmax(0,1fr)_minmax(0,1.1fr)]"
                    key={topic}
                  >
                    <h3 className="font-semibold text-[#effffb]">{topic}</h3>
                    <p className="text-sm leading-6 text-[#78ead7]">
                      {trigger}
                    </p>
                    <p className="text-sm leading-6 text-[#abc8c3]">{action}</p>
                  </section>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {copy.workflowTitle}
              </h2>
              <div className="mt-5 grid gap-4">
                {copy.workflow.map((item) => (
                  <section
                    key={item.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <RefreshCcwIcon className="size-4" />
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
                  {copy.cautionTitle}
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                {copy.cautionBody}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {copy.faqTitle}
              </h2>
              <div className="mt-5 grid gap-4">
                {copy.faqs.map((faq) => (
                  <section
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                    key={faq.title}
                  >
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <ClipboardListIcon className="size-4" />
                      <h3 className="font-semibold">{faq.title}</h3>
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{faq.body}</p>
                  </section>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="overflow-hidden border border-cyan-200/12 bg-[#071f23]">
              <div
                aria-hidden="true"
                className="h-40 bg-cover bg-right"
                style={{
                  backgroundImage: "url('/abyss/chibi-deep-sea-hero.webp')",
                }}
              />
              <div className="border-t border-cyan-200/12 p-5">
                <h2 className="text-lg font-semibold text-[#effffb]">
                  {copy.readNextTitle}
                </h2>
                <div className="mt-4 grid gap-3 text-sm">
                  {copy.readNext.map((item) => (
                    <LocaleLink
                      className="text-[#78ead7] hover:underline"
                      href={item.href}
                      key={item.href}
                    >
                      {item.label}
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                {copy.sourceTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                {copy.sourceBody}
              </p>
              <div className="mt-4 grid gap-2 text-sm">
                {copy.sourceLinks.map((source) => (
                  <a
                    className="text-[#78ead7] hover:underline"
                    href={source.href}
                    key={source.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {source.label}
                  </a>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
