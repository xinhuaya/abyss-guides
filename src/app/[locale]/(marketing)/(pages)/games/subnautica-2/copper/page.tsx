import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { ZapIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type CopperCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const sharedSources = [
  {
    href: 'https://games.gg/subnautica-2/guides/subnautica-2-where-to-find-copper/',
    label: 'Games.gg Copper guide',
  },
  {
    href: 'https://mobalytics.gg/news/guides/subnautica-2-how-to-get-copper',
    label: 'Mobalytics Copper guide',
  },
];

const copperCopy: Record<string, CopperCopy> = {
  en: {
    metadata: {
      title: 'Where to Find Copper in Subnautica 2 - Early Battery Route',
      description:
        'Find Copper in Subnautica 2 with Lifepod cave routes, early battery priorities, crafting uses, FAQ, and Early Access caveats.',
    },
    eyebrow: 'Subnautica 2 electronics route',
    title: 'Where to Find Copper in Subnautica 2',
    description:
      'Copper is the material that quietly decides how fast your first real tools arrive. Keep the route short, spend the first pieces carefully, and come back with better oxygen before trying to clear every cave.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Start with the cave systems below and near the Lifepod. Games.gg points to Copper almost directly below the Lifepod and another early cave roughly 50 meters east. Mobalytics also describes a Colonists Bunker cave route around 200 meters southeast of the Lifepod, so use the pod as the anchor and expand outward only when your oxygen allows it.',
    contentsLabel: 'Contents',
    routeTitle: 'Early Copper route',
    routeSteps: [
      {
        title: 'Check below the Lifepod first',
        body: 'Dive under the Lifepod and inspect the nearby cave pockets before wandering off. It is the fastest loop to repeat and the easiest route to explain in co-op.',
      },
      {
        title: 'Sweep the east cave next',
        body: 'If the first cave is dry, move to the nearby cave pocket east of the Lifepod. Keep the loop short enough that you return with oxygen instead of gambling on one more corner.',
      },
      {
        title: 'Try the bunker cave when ready',
        body: 'Mobalytics reports a Colonists Bunker cave route around 200 meters southeast of the Lifepod. Save that for a slightly safer run, especially if you are still on low oxygen.',
      },
      {
        title: 'Spend Copper on tools first',
        body: 'Copper is common enough to feel safe, then suddenly every battery and electronics step wants it. Prioritize the Scanner and early tool chain before optional craft.',
      },
    ],
    tableTitle: 'What Copper is used for',
    tableHeaders: ['Use', 'Why it matters'],
    tableRows: [
      [
        'Basic Battery',
        'Copper starts the battery chain, which feeds several early tools.',
      ],
      [
        'Scanner access',
        'The Scanner turns exploration into blueprints, so this is the first Copper spend that really pays back.',
      ],
      [
        'Electronics',
        'Wiring and small electronics keep pulling from your Copper stash after the first rush.',
      ],
      [
        'Base setup',
        'Save a few pieces before building too freely; Early Access recipes can still move around.',
      ],
    ],
    cautionTitle: 'Do not spend the first Copper blindly',
    cautionBody:
      'The early game makes Copper feel disposable. It is not. Make the battery and Scanner route first, then build a stockpile for wiring, base utility, and recipes that may shift during Early Access.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where is the best early Copper spot?',
        body: 'Start below and near the Lifepod. The closest caves are quick to reset and safer than chasing a far landmark on your first dive.',
      },
      {
        title: 'What should I craft first with Copper?',
        body: 'Prioritize Basic Batteries and the Scanner path before spending Copper on optional gear.',
      },
      {
        title: 'Should I farm Copper and Silver together?',
        body: 'Yes, but only after you have enough oxygen. Copper starts near the Lifepod; Silver usually asks for a more deliberate cave route toward Old Habitat.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 23, 2026 against current Copper route reporting. Early Access resource density and recipes can change.',
    cardKicker: 'Abyss field card',
    cardBody:
      'Short loops, cave checks, battery priorities, and patch-aware spending.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Resource guide',
    cardVerifiedLabel: 'Verified',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 铜在哪里找 - 前期电池路线和用途',
      description:
        'Subnautica 2 铜矿中文攻略，整理 Lifepod 附近洞穴路线、前期电池用途、Scanner 优先级、FAQ 和抢先体验注意点。',
    },
    eyebrow: 'Subnautica 2 电子材料路线',
    title: 'Subnautica 2 铜在哪里找',
    description:
      '铜看起来很普通，但它会决定你多快拿到第一批真正有用的工具。前期路线越短越好，第一批铜也别乱花。',
    quickLabel: '快速答案',
    quickAnswer:
      '先找 Lifepod 下方和附近的洞穴。Games.gg 提到，Lifepod 正下方就有早期铜点，东侧大约 50 米还有一个洞穴点；Mobalytics 还提到 Lifepod 东南约 200 米的 Colonists Bunker cave 路线。前期先把 Lifepod 当锚点，不要氧气不够还硬跑远路。',
    contentsLabel: '目录',
    routeTitle: '前期找铜路线',
    routeSteps: [
      {
        title: '先查 Lifepod 下方',
        body: '从 Lifepod 下潜，先看附近洞穴和洞壁。这个循环最短，失败了也容易回头，不会把第一次采集变成氧气压力测试。',
      },
      {
        title: '再扫东侧洞穴',
        body: '如果出生点下方没拿够，就往 Lifepod 东侧的近距离洞穴补一圈。路线要短，宁可多跑一次，也不要赌最后一个转角。',
      },
      {
        title: '氧气够了再去 bunker cave',
        body: 'Mobalytics 提到东南约 200 米的 Colonists Bunker cave 路线。这个点可以跑，但不适合刚开局、氧气还很紧的时候硬冲。',
      },
      {
        title: '先把铜花在工具链上',
        body: '铜会进入电池和电子制作链。优先把 Scanner 相关路线处理掉，再考虑一些可有可无的装备。',
      },
    ],
    tableTitle: '铜的主要用途',
    tableHeaders: ['用途', '为什么重要'],
    tableRows: [
      ['Basic Battery', '铜会进入早期电池链，很多工具都绕不开它。'],
      [
        'Scanner',
        'Scanner 能把探索变成蓝图进度，这是第一批铜最值得优先投的地方。',
      ],
      [
        '电子元件',
        '第一波工具做完后，接下来的 wiring 和小型电子链还会继续吃铜。',
      ],
      [
        '基地搭建',
        '别一有铜就花光，基地和抢先体验阶段变化的配方也可能继续需要它。',
      ],
    ],
    cautionTitle: '第一批铜不要乱花',
    cautionBody:
      '铜前期看着不稀有，但卡起来很烦。先把电池和 Scanner 路线打通，再留一点给 wiring、基地功能和后续可能变化的配方。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: '前期最适合哪里找铜？',
        body: '先从 Lifepod 下方和附近洞穴开始。这些点回程短，比开局就追远处地标更安全。',
      },
      {
        title: '第一批铜先做什么？',
        body: '优先做 Basic Battery 和 Scanner 相关路线，不要先花在可选装备上。',
      },
      {
        title: '铜和银可以一起刷吗？',
        body: '可以，但最好等氧气宽裕一点。铜更靠近 Lifepod；银通常要往 Old Habitat 附近洞穴跑。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Silver, label: '银位置' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 23 日核对当前铜路线报道。抢先体验阶段的资源密度和配方可能变化。',
    cardKicker: 'Abyss 路线卡',
    cardBody: '短循环、洞穴检查、电池优先级，以及抢先体验阶段的花费提醒。',
    cardTypeLabel: '类型',
    cardTypeValue: '资源攻略',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ru: {
    metadata: {
      title: 'Где найти Copper в Subnautica 2 - ранний маршрут и батареи',
      description:
        'Русский гайд по Copper в Subnautica 2: пещеры у Lifepod, батареи, Scanner, FAQ и заметки Early Access.',
    },
    eyebrow: 'Маршрут электроники Subnautica 2',
    title: 'Где найти Copper в Subnautica 2',
    description:
      'Copper кажется обычным ресурсом, пока первые инструменты не начинают требовать батареи. Держите маршрут коротким и не тратьте первые куски без плана.',
    quickLabel: 'Короткий ответ',
    quickAnswer:
      'Начните с пещер под Lifepod и рядом с ним. Games.gg указывает Copper почти под Lifepod и еще одну раннюю пещеру примерно в 50 метрах восточнее. Mobalytics также описывает Colonists Bunker cave примерно в 200 метрах к юго-востоку от Lifepod.',
    contentsLabel: 'Содержание',
    routeTitle: 'Ранний маршрут за Copper',
    routeSteps: [
      {
        title: 'Сначала проверьте под Lifepod',
        body: 'Нырните под Lifepod и осмотрите ближайшие карманы пещер. Это самый короткий и понятный круг для первых вылазок.',
      },
      {
        title: 'Затем пройдите восточную пещеру',
        body: 'Если рядом с Lifepod не хватило Copper, проверьте близкую пещеру восточнее. Возвращайтесь до того, как кислород станет проблемой.',
      },
      {
        title: 'Bunker cave оставьте на более уверенный заплыв',
        body: 'Маршрут к Colonists Bunker cave юго-восточнее Lifepod лучше делать, когда есть запас кислорода.',
      },
      {
        title: 'Тратьте Copper сначала на инструменты',
        body: 'Copper нужен для батарей и электроники. Сначала продвиньте Scanner и ранние инструменты, потом уже делайте необязательные вещи.',
      },
    ],
    tableTitle: 'Для чего нужен Copper',
    tableHeaders: ['Применение', 'Почему важно'],
    tableRows: [
      [
        'Basic Battery',
        'Copper запускает цепочку батарей для ранних инструментов.',
      ],
      [
        'Scanner',
        'Scanner превращает находки в чертежи, поэтому быстро окупает первый Copper.',
      ],
      [
        'Электроника',
        'Проводка и мелкая электроника продолжают забирать Copper после старта.',
      ],
      ['База', 'Оставьте запас: рецепты Early Access еще могут меняться.'],
    ],
    cautionTitle: 'Не тратьте первый Copper вслепую',
    cautionBody:
      'В начале Copper выглядит расходником, но это ловушка. Сначала батарея и Scanner, потом запас под проводку, базу и рецепты, которые могут измениться.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Где искать Copper в самом начале?',
        body: 'Под Lifepod и в ближайших пещерах. Эти места быстрее и безопаснее дальних ориентиров.',
      },
      {
        title: 'Что делать первым из Copper?',
        body: 'Basic Battery и путь к Scanner. Не отдавайте первый Copper необязательному крафту.',
      },
      {
        title: 'Можно ли фармить Copper и Silver вместе?',
        body: 'Да, но лучше после улучшения кислорода. Copper ближе к Lifepod, а Silver обычно просит маршрут к Old Habitat.',
      },
    ],
    readNextTitle: 'Дальше',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Где найти Silver' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank и кислород' },
      { href: Routes.Subnautica2Resources, label: 'Ресурсы' },
      { href: Routes.Subnautica2Crafting, label: 'Крафт' },
    ],
    sourcesTitle: 'Источники',
    sourceBody:
      'Проверено 23 мая 2026 по текущим маршрутам Copper. Early Access может менять плотность ресурсов и рецепты.',
    cardKicker: 'Abyss field card',
    cardBody:
      'Короткие круги, пещеры, батареи и осторожные траты в Early Access.',
    cardTypeLabel: 'Тип',
    cardTypeValue: 'Ресурсный гайд',
    cardVerifiedLabel: 'Проверено',
    cardStatusLabel: 'Статус',
    cardStatusValue: 'Early Access',
  },
  de: {
    metadata: {
      title: 'Subnautica 2 Copper finden - frühe Batterie-Route',
      description:
        'Deutscher Guide zu Copper in Subnautica 2 mit Lifepod-Höhlen, Batterie-Prioritäten, Scanner, FAQ und Early-Access-Hinweisen.',
    },
    eyebrow: 'Subnautica 2 Elektronikroute',
    title: 'Wo du Copper in Subnautica 2 findest',
    description:
      'Copper wirkt am Anfang harmlos, bis Batterien und Elektronik gleichzeitig danach fragen. Halte die ersten Runden kurz und gib die ersten Stücke nicht planlos aus.',
    quickLabel: 'Kurzantwort',
    quickAnswer:
      'Starte mit den Höhlen unter und nahe dem Lifepod. Games.gg nennt Copper fast direkt unter dem Lifepod und eine weitere frühe Höhle etwa 50 Meter östlich. Mobalytics beschreibt außerdem eine Colonists-Bunker-Höhle rund 200 Meter südöstlich des Lifepods.',
    contentsLabel: 'Inhalt',
    routeTitle: 'Frühe Copper-Route',
    routeSteps: [
      {
        title: 'Zuerst unter dem Lifepod prüfen',
        body: 'Tauche unter den Lifepod und kontrolliere die nahen Höhlen. Das ist der kürzeste Kreis und im Koop leicht zu erklären.',
      },
      {
        title: 'Danach die östliche Höhle nehmen',
        body: 'Wenn der erste Spot mager ist, prüfe die nahe Höhle östlich des Lifepods. Bleib nah genug, um mit Sauerstoff zurückzukommen.',
      },
      {
        title: 'Bunker-Höhle erst mit Luftreserve',
        body: 'Die Colonists-Bunker-Höhle südöstlich des Lifepods ist ein guter nächster Schritt, aber nicht die beste Panikroute mit niedrigem O2.',
      },
      {
        title: 'Copper zuerst in Werkzeuge stecken',
        body: 'Copper geht in Batterien und Elektronik. Scanner und frühe Tools kommen vor optionalem Crafting.',
      },
    ],
    tableTitle: 'Wofür Copper gebraucht wird',
    tableHeaders: ['Nutzen', 'Warum es wichtig ist'],
    tableRows: [
      [
        'Basic Battery',
        'Copper startet die Batteriekette für frühe Werkzeuge.',
      ],
      [
        'Scanner',
        'Der Scanner verwandelt Erkundung in Blaupausen und zahlt sich schnell aus.',
      ],
      [
        'Elektronik',
        'Wiring und kleine Elektronik ziehen weiter Copper aus deinem Vorrat.',
      ],
      [
        'Basisbau',
        'Leg ein paar Stücke zurück; Early-Access-Rezepte können sich ändern.',
      ],
    ],
    cautionTitle: 'Erstes Copper nicht blind ausgeben',
    cautionBody:
      'Copper fühlt sich früh gewöhnlich an. Genau deshalb ist es leicht, die ersten Stücke falsch auszugeben. Batterie und Scanner zuerst, Vorrat danach.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Wo finde ich Copper ganz am Anfang?',
        body: 'Unter dem Lifepod und in den nahen Höhlen. Diese Runden sind schneller und sicherer als entfernte Marker.',
      },
      {
        title: 'Was sollte ich zuerst mit Copper bauen?',
        body: 'Basic Battery und den Scanner-Pfad. Optionales Gear kann warten.',
      },
      {
        title: 'Kann ich Copper und Silver zusammen farmen?',
        body: 'Ja, aber besser mit mehr Sauerstoff. Copper liegt näher am Lifepod, Silver eher auf der Route Richtung Old Habitat.',
      },
    ],
    readNextTitle: 'Weiterlesen',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Silver finden' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank und O2' },
      { href: Routes.Subnautica2Resources, label: 'Ressourcen' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting' },
    ],
    sourcesTitle: 'Quellenhinweis',
    sourceBody:
      'Geprüft am 23. Mai 2026 mit aktuellen Copper-Routen. Resource-Dichte und Rezepte können sich in Early Access ändern.',
    cardKicker: 'Abyss field card',
    cardBody:
      'Kurze Loops, Höhlenchecks, Batterien und vorsichtige Early-Access-Ausgaben.',
    cardTypeLabel: 'Typ',
    cardTypeValue: 'Ressourcen-Guide',
    cardVerifiedLabel: 'Geprüft',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  fr: {
    metadata: {
      title: 'Où trouver Copper dans Subnautica 2 - route batterie de début',
      description:
        'Guide français pour trouver Copper dans Subnautica 2 : grottes du Lifepod, batteries, Scanner, FAQ et notes Early Access.',
    },
    eyebrow: 'Route électronique Subnautica 2',
    title: 'Où trouver Copper dans Subnautica 2',
    description:
      'Copper a l’air banal au départ, puis les batteries et l’électronique le réclament partout. Gardez les premières boucles courtes et dépensez-le avec un plan.',
    quickLabel: 'Réponse rapide',
    quickAnswer:
      'Commencez par les grottes sous et près du Lifepod. Games.gg signale du Copper presque sous le Lifepod et une autre grotte environ 50 mètres à l’est. Mobalytics mentionne aussi une route vers Colonists Bunker cave à environ 200 mètres au sud-est du Lifepod.',
    contentsLabel: 'Sommaire',
    routeTitle: 'Route Copper de début',
    routeSteps: [
      {
        title: 'Vérifiez sous le Lifepod',
        body: 'Plongez sous le Lifepod et inspectez les poches de grotte proches. C’est la boucle la plus simple à répéter.',
      },
      {
        title: 'Passez ensuite à la grotte est',
        body: 'Si le premier spot ne suffit pas, vérifiez la grotte proche à l’est du Lifepod. Gardez assez d’oxygène pour rentrer sans panique.',
      },
      {
        title: 'Gardez la bunker cave pour un run plus sûr',
        body: 'La route Colonists Bunker cave au sud-est devient plus intéressante quand vous avez un peu plus d’air.',
      },
      {
        title: 'Utilisez Copper pour les outils d’abord',
        body: 'Copper sert aux batteries et à l’électronique. Le Scanner et les premiers outils passent avant le craft optionnel.',
      },
    ],
    tableTitle: 'À quoi sert Copper',
    tableHeaders: ['Usage', 'Pourquoi c’est important'],
    tableRows: [
      [
        'Basic Battery',
        'Copper lance la chaîne de batteries des premiers outils.',
      ],
      [
        'Scanner',
        'Le Scanner transforme les trouvailles en plans, donc il rembourse vite le Copper investi.',
      ],
      [
        'Électronique',
        'Wiring et petits composants continuent de puiser dans votre stock.',
      ],
      [
        'Base',
        'Gardez quelques pièces; les recettes Early Access peuvent bouger.',
      ],
    ],
    cautionTitle: 'Ne dépensez pas le premier Copper au hasard',
    cautionBody:
      'Le jeu vous donne l’impression que Copper est jetable. Mauvais réflexe. Batterie et Scanner d’abord, puis un stock pour wiring, base et recettes qui peuvent changer.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Quel est le meilleur spot Copper au début ?',
        body: 'Sous le Lifepod et dans les grottes proches. Ces boucles sont plus sûres que les repères éloignés.',
      },
      {
        title: 'Que fabriquer en premier avec Copper ?',
        body: 'Basic Battery et le chemin vers le Scanner. Le reste peut attendre.',
      },
      {
        title: 'Peut-on farmer Copper et Silver ensemble ?',
        body: 'Oui, mais mieux vaut plus d’oxygène. Copper est près du Lifepod; Silver demande plutôt une route vers Old Habitat.',
      },
    ],
    readNextTitle: 'À lire ensuite',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Trouver Silver' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank et O2' },
      { href: Routes.Subnautica2Resources, label: 'Ressources' },
      { href: Routes.Subnautica2Crafting, label: 'Craft' },
    ],
    sourcesTitle: 'Sources',
    sourceBody:
      'Vérifié le 23 mai 2026 avec les routes Copper actuelles. Densité de ressources et recettes peuvent changer en Early Access.',
    cardKicker: 'Abyss field card',
    cardBody:
      'Boucles courtes, grottes, batteries et dépenses prudentes en Early Access.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Guide ressource',
    cardVerifiedLabel: 'Vérifié',
    cardStatusLabel: 'Statut',
    cardStatusValue: 'Early Access',
  },
  'pt-BR': {
    metadata: {
      title: 'Onde encontrar Copper em Subnautica 2 - rota inicial de bateria',
      description:
        'Guia em português do Brasil para Copper em Subnautica 2, com cavernas do Lifepod, baterias, Scanner, FAQ e nota de Early Access.',
    },
    eyebrow: 'Rota de eletrônica de Subnautica 2',
    title: 'Onde encontrar Copper em Subnautica 2',
    description:
      'Copper parece comum no começo, até baterias e eletrônicos pedirem mais do que você guardou. Faça rotas curtas e gaste as primeiras peças com cuidado.',
    quickLabel: 'Resposta rápida',
    quickAnswer:
      'Comece pelas cavernas abaixo e perto do Lifepod. Games.gg aponta Copper quase embaixo do Lifepod e outra caverna inicial cerca de 50 metros a leste. A Mobalytics também descreve uma rota para Colonists Bunker cave a cerca de 200 metros ao sudeste do Lifepod.',
    contentsLabel: 'Conteúdo',
    routeTitle: 'Rota inicial de Copper',
    routeSteps: [
      {
        title: 'Confira abaixo do Lifepod',
        body: 'Mergulhe abaixo do Lifepod e cheque as cavernas próximas. É a volta mais curta e fácil de repetir.',
      },
      {
        title: 'Passe pela caverna a leste',
        body: 'Se o primeiro ponto vier fraco, vá para a caverna próxima a leste. Volte antes de transformar a busca em sufoco de oxigênio.',
      },
      {
        title: 'Deixe a bunker cave para uma ida mais segura',
        body: 'A rota da Colonists Bunker cave ao sudeste é melhor quando você já tem um pouco mais de margem de oxigênio.',
      },
      {
        title: 'Use Copper em ferramentas primeiro',
        body: 'Copper entra em baterias e eletrônicos. Scanner e ferramentas iniciais vêm antes de craft opcional.',
      },
    ],
    tableTitle: 'Para que serve Copper',
    tableHeaders: ['Uso', 'Por que importa'],
    tableRows: [
      [
        'Basic Battery',
        'Copper começa a cadeia de baterias para ferramentas iniciais.',
      ],
      [
        'Scanner',
        'O Scanner transforma exploração em projetos, então vale muito o primeiro gasto.',
      ],
      [
        'Eletrônica',
        'Fiação e componentes pequenos continuam consumindo Copper depois do começo.',
      ],
      [
        'Base',
        'Guarde algumas peças; receitas de Early Access ainda podem mudar.',
      ],
    ],
    cautionTitle: 'Não gaste o primeiro Copper sem pensar',
    cautionBody:
      'O começo faz Copper parecer descartável. Não é. Faça bateria e Scanner primeiro, depois monte estoque para fiação, base e receitas futuras.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Qual é o melhor ponto inicial de Copper?',
        body: 'Abaixo do Lifepod e nas cavernas próximas. Essas voltas são rápidas e mais seguras.',
      },
      {
        title: 'O que fazer primeiro com Copper?',
        body: 'Basic Battery e caminho do Scanner. Equipamento opcional pode esperar.',
      },
      {
        title: 'Dá para farmar Copper e Silver juntos?',
        body: 'Sim, mas melhor com mais oxigênio. Copper fica perto do Lifepod; Silver costuma pedir rota para Old Habitat.',
      },
    ],
    readNextTitle: 'Leia a seguir',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Onde encontrar Silver' },
      { href: Routes.Subnautica2AirTank, label: 'Tanque de ar e O2' },
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2Crafting, label: 'Fabricação' },
    ],
    sourcesTitle: 'Fontes',
    sourceBody:
      'Verificado em 23 de maio de 2026 com rotas atuais de Copper. Densidade de recursos e receitas podem mudar no Early Access.',
    cardKicker: 'Abyss field card',
    cardBody:
      'Voltas curtas, cavernas, baterias e gastos cuidadosos no Early Access.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Guia de recurso',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  'es-419': {
    metadata: {
      title: 'Dónde encontrar Copper en Subnautica 2 - ruta inicial de batería',
      description:
        'Guía en español latino para Copper en Subnautica 2: cuevas del Lifepod, baterías, Scanner, FAQ y nota de Early Access.',
    },
    eyebrow: 'Ruta de electrónica de Subnautica 2',
    title: 'Dónde encontrar Copper en Subnautica 2',
    description:
      'Copper parece común al inicio, hasta que baterías y electrónica empiezan a pedirlo todo el tiempo. Mantén rutas cortas y gasta las primeras piezas con cabeza.',
    quickLabel: 'Respuesta rápida',
    quickAnswer:
      'Empieza por las cuevas debajo y cerca del Lifepod. Games.gg apunta a Copper casi debajo del Lifepod y otra cueva temprana a unos 50 metros al este. Mobalytics también describe una ruta hacia Colonists Bunker cave a unos 200 metros al sureste del Lifepod.',
    contentsLabel: 'Contenido',
    routeTitle: 'Ruta inicial de Copper',
    routeSteps: [
      {
        title: 'Revisa debajo del Lifepod',
        body: 'Baja bajo el Lifepod y revisa las cuevas cercanas. Es la vuelta más corta y la más fácil de repetir.',
      },
      {
        title: 'Sigue con la cueva del este',
        body: 'Si el primer punto no alcanza, ve a la cueva cercana al este. Vuelve antes de convertirlo en una carrera contra el oxígeno.',
      },
      {
        title: 'Deja la bunker cave para una ruta más segura',
        body: 'La ruta de Colonists Bunker cave al sureste funciona mejor cuando ya tienes más margen de oxígeno.',
      },
      {
        title: 'Gasta Copper en herramientas primero',
        body: 'Copper entra en baterías y electrónica. Scanner y herramientas iniciales van antes que el craft opcional.',
      },
    ],
    tableTitle: 'Para qué sirve Copper',
    tableHeaders: ['Uso', 'Por qué importa'],
    tableRows: [
      [
        'Basic Battery',
        'Copper inicia la cadena de baterías para herramientas tempranas.',
      ],
      [
        'Scanner',
        'El Scanner convierte exploración en planos, así que paga rápido el primer gasto.',
      ],
      [
        'Electrónica',
        'Cableado y componentes pequeños siguen consumiendo Copper después del arranque.',
      ],
      [
        'Base',
        'Guarda algunas piezas; las recetas de Early Access todavía pueden cambiar.',
      ],
    ],
    cautionTitle: 'No gastes el primer Copper a ciegas',
    cautionBody:
      'El inicio hace que Copper parezca desechable. No lo es. Batería y Scanner primero; stock para cableado, base y recetas después.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '¿Cuál es el mejor punto inicial de Copper?',
        body: 'Debajo del Lifepod y en las cuevas cercanas. Son rutas rápidas y más seguras.',
      },
      {
        title: '¿Qué hago primero con Copper?',
        body: 'Basic Battery y el camino al Scanner. El equipo opcional puede esperar.',
      },
      {
        title: '¿Puedo farmear Copper y Silver juntos?',
        body: 'Sí, pero mejor con más oxígeno. Copper está cerca del Lifepod; Silver suele pedir la ruta hacia Old Habitat.',
      },
    ],
    readNextTitle: 'Leer después',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Dónde encontrar Silver' },
      { href: Routes.Subnautica2AirTank, label: 'Tanque de aire y O2' },
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2Crafting, label: 'Fabricación' },
    ],
    sourcesTitle: 'Fuentes',
    sourceBody:
      'Verificado el 23 de mayo de 2026 con rutas actuales de Copper. La densidad de recursos y recetas puede cambiar en Early Access.',
    cardKicker: 'Abyss field card',
    cardBody:
      'Vueltas cortas, cuevas, baterías y gastos prudentes en Early Access.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Guía de recurso',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Estado',
    cardStatusValue: 'Early Access',
  },
  ko: {
    metadata: {
      title: 'Subnautica 2 Copper 위치 - 초반 배터리 루트',
      description:
        'Subnautica 2 Copper 한국어 공략입니다. Lifepod 주변 동굴, 배터리, Scanner 우선순위, FAQ, Early Access 주의점을 정리합니다.',
    },
    eyebrow: 'Subnautica 2 전자 재료 루트',
    title: 'Subnautica 2 Copper 위치',
    description:
      'Copper는 평범해 보이지만 초반 도구 속도를 결정합니다. 처음에는 짧은 루트만 돌고, 첫 Copper를 아무 데나 쓰지 마세요.',
    quickLabel: '빠른 답',
    quickAnswer:
      'Lifepod 아래와 주변 동굴부터 확인하세요. Games.gg는 Lifepod 거의 아래쪽과 동쪽 약 50m의 초기 동굴을 언급합니다. Mobalytics는 Lifepod 남동쪽 약 200m의 Colonists Bunker cave 루트도 설명합니다.',
    contentsLabel: '목차',
    routeTitle: '초반 Copper 루트',
    routeSteps: [
      {
        title: 'Lifepod 아래부터 확인',
        body: 'Lifepod 아래로 내려가 가까운 동굴을 먼저 훑으세요. 가장 짧고 반복하기 쉬운 루트입니다.',
      },
      {
        title: '다음은 동쪽 동굴',
        body: '첫 동굴에서 부족하면 Lifepod 동쪽의 가까운 동굴을 확인하세요. 산소가 빠듯해지기 전에 돌아오는 것이 좋습니다.',
      },
      {
        title: 'bunker cave는 산소 여유가 생긴 뒤',
        body: '남동쪽 Colonists Bunker cave 루트는 산소 여유가 조금 생긴 뒤 가는 편이 안전합니다.',
      },
      {
        title: 'Copper는 도구부터',
        body: 'Copper는 배터리와 전자 제작에 들어갑니다. Scanner와 초반 도구가 선택 제작보다 먼저입니다.',
      },
    ],
    tableTitle: 'Copper 사용처',
    tableHeaders: ['사용처', '중요한 이유'],
    tableRows: [
      ['Basic Battery', 'Copper는 초반 도구용 배터리 제작의 시작입니다.'],
      [
        'Scanner',
        'Scanner는 탐사를 설계도로 바꾸므로 첫 Copper 투자 가치가 큽니다.',
      ],
      ['전자 부품', '초반 이후에도 wiring과 작은 전자 제작에 계속 필요합니다.'],
      ['기지', 'Early Access 레시피는 바뀔 수 있으니 몇 개는 남겨두세요.'],
    ],
    cautionTitle: '첫 Copper를 막 쓰지 마세요',
    cautionBody:
      '초반에는 Copper가 흔해 보입니다. 그래도 배터리와 Scanner를 먼저 챙기고, wiring과 기지용 재고를 남겨두는 편이 안전합니다.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '초반 Copper는 어디서 찾나요?',
        body: 'Lifepod 아래와 주변 동굴부터 보세요. 멀리 가는 것보다 빠르고 안전합니다.',
      },
      {
        title: 'Copper로 먼저 무엇을 만들까요?',
        body: 'Basic Battery와 Scanner 루트를 우선하세요. 선택 장비는 나중에 만들어도 됩니다.',
      },
      {
        title: 'Copper와 Silver를 같이 파밍해도 되나요?',
        body: '가능하지만 산소 여유가 생긴 뒤가 좋습니다. Copper는 Lifepod 근처, Silver는 Old Habitat 방향 동굴 루트에 가깝습니다.',
      },
    ],
    readNextTitle: '다음 글',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Silver 위치' },
      { href: Routes.Subnautica2AirTank, label: '공기 탱크와 산소' },
      { href: Routes.Subnautica2Resources, label: '자원 가이드' },
      { href: Routes.Subnautica2Crafting, label: '제작 가이드' },
    ],
    sourcesTitle: '출처 메모',
    sourceBody:
      '2026년 5월 23일 현재 Copper 루트 보도를 기준으로 확인했습니다. Early Access에서는 자원 밀도와 레시피가 바뀔 수 있습니다.',
    cardKicker: 'Abyss field card',
    cardBody: '짧은 루트, 동굴 확인, 배터리 우선순위, Early Access 소비 주의.',
    cardTypeLabel: '유형',
    cardTypeValue: '자원 공략',
    cardVerifiedLabel: '확인',
    cardStatusLabel: '상태',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 Copper の場所 - 序盤バッテリールート',
      description:
        'Subnautica 2 の Copper 日本語攻略。Lifepod 近くの洞窟、Battery、Scanner 優先度、FAQ、Early Access の注意点を整理します。',
    },
    eyebrow: 'Subnautica 2 電子素材ルート',
    title: 'Subnautica 2 の Copper はどこで見つかる？',
    description:
      'Copper は普通の素材に見えますが、序盤ツールの速度をかなり左右します。最初は短いルートを回し、使い道も絞りましょう。',
    quickLabel: '要点',
    quickAnswer:
      'まず Lifepod の下と周辺の洞窟を探します。Games.gg は Lifepod のほぼ真下と、東へ約50mの初期洞窟を紹介しています。Mobalytics は Lifepod 南東約200mの Colonists Bunker cave ルートにも触れています。',
    contentsLabel: '目次',
    routeTitle: '序盤の Copper ルート',
    routeSteps: [
      {
        title: 'Lifepod の下を先に見る',
        body: 'Lifepod の下へ潜り、近くの洞窟を確認します。短く繰り返せるので、最初の探索に向いています。',
      },
      {
        title: '次に東側の洞窟へ',
        body: '足りない場合は Lifepod 東側の近い洞窟を見ます。酸素がきつくなる前に戻れる距離で回しましょう。',
      },
      {
        title: 'bunker cave は酸素に余裕が出てから',
        body: '南東の Colonists Bunker cave ルートは、少し余裕ができてから行くほうが安全です。',
      },
      {
        title: 'Copper はまずツールへ',
        body: 'Copper は Battery と電子クラフトに使います。Scanner と序盤ツールを優先し、任意装備は後回しで大丈夫です。',
      },
    ],
    tableTitle: 'Copper の使い道',
    tableHeaders: ['使い道', '重要な理由'],
    tableRows: [
      ['Basic Battery', 'Copper は序盤ツール用 Battery の起点になります。'],
      [
        'Scanner',
        'Scanner は探索を設計図に変えるため、最初の Copper 投資として強いです。',
      ],
      ['電子部品', '序盤後も wiring や小型電子部品で使い続けます。'],
      [
        '基地',
        'Early Access のレシピは変わる可能性があるため、少し残しておくと安心です。',
      ],
    ],
    cautionTitle: '最初の Copper を雑に使わない',
    cautionBody:
      '序盤は Copper が余りそうに見えますが、Battery と Scanner を先に進めたほうが楽です。wiring や基地用にも少し残しましょう。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '序盤 Copper はどこで探す？',
        body: 'Lifepod の下と周辺洞窟から見てください。遠い目印を追うより安全です。',
      },
      {
        title: 'Copper で最初に作るものは？',
        body: 'Basic Battery と Scanner ルートを優先します。任意装備は後でも問題ありません。',
      },
      {
        title: 'Copper と Silver を一緒に集められる？',
        body: 'できますが、酸素に余裕が出てからがおすすめです。Copper は Lifepod 近く、Silver は Old Habitat 方面の洞窟寄りです。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Silver の場所' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank と酸素' },
      { href: Routes.Subnautica2Resources, label: '資源ガイド' },
      { href: Routes.Subnautica2Crafting, label: 'クラフトガイド' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年5月23日に現在の Copper ルート記事を確認。Early Access では資源密度やレシピが変わる可能性があります。',
    cardKicker: 'Abyss field card',
    cardBody: '短い周回、洞窟確認、Battery 優先度、Early Access の消費注意。',
    cardTypeLabel: '種類',
    cardTypeValue: '資源ガイド',
    cardVerifiedLabel: '確認',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

function getCopy(locale: Locale): CopperCopy {
  return copperCopy[locale] ?? copperCopy.en;
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
    pathname: Routes.Subnautica2Copper,
  });
}

export default async function CopperGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={copy}
      icon={ZapIcon}
      locale={locale}
      pathname={Routes.Subnautica2Copper}
      sources={sharedSources}
    />
  );
}
