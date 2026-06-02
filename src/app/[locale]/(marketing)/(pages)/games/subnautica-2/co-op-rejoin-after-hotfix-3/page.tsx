import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { RadioTowerIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type CoopRejoinCopy = ResourceGuideCopy & {
  metadata: { title: string; description: string };
};

const PUBLISHED_AT = '2026-06-02';
const UPDATED_AT = '2026-06-02';

const sharedSources = [
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-3',
    label: 'Unknown Worlds Hotfix 3',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-2',
    label: 'Unknown Worlds Hotfix 2',
  },
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam page',
  },
  {
    href: 'https://www.xbox.com/en-US/games/store/subnautica-2/9pjpcb188svg',
    label: 'Official Xbox store listing',
  },
  {
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const copyByLocale: Record<string, CoopRejoinCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Co-op Rejoin After Hotfix 3 - Position and Base Checklist',
      description:
        'What to check when Subnautica 2 co-op players rejoin after Hotfix 3, including client position fixes, base distance, fresh invites, test saves, and safe return calls.',
    },
    eyebrow: 'Subnautica 2 co-op rejoin',
    title: 'Co-op Rejoin After Hotfix 3',
    description:
      'Hotfix 3 fixed a specific multiplayer rejoin problem, but the right move is still to test calmly. This is the checklist I would use before blaming the save.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Hotfix 3 says it fixes clients sometimes loading into a previous location when rejoining a multiplayer session, including cases where that position was far from the base. After updating, have every player restart, recreate the session, send a fresh invite, and load a short test save before touching the main save. On the first rejoin, call out position, oxygen, distance to base, and vehicle location before anyone swims off.',
    fieldNotesTitle: 'Why this deserved its own page',
    fieldNotes: [
      {
        title: 'The bug was specific',
        body: 'This is not a vague co-op fix. Unknown Worlds named a client rejoin position problem, which makes it worth separating from the general multiplayer checklist.',
      },
      {
        title: 'Base distance is the scary part',
        body: 'Loading far from base is not just annoying. It can strand a player without oxygen, tools, or a clear route back to the group.',
      },
      {
        title: 'Fresh invite beats stale invite',
        body: 'After a hotfix, stop reusing an old invite chain. Restart the host session and create a clean join attempt.',
      },
    ],
    routeChecklistTitle: 'Post-Hotfix 3 rejoin checklist',
    routeChecklist: [
      'Update Subnautica 2 on every player device.',
      'Have the host restart the session and send a fresh invite.',
      'Test one short save before risking the main co-op save.',
      'On load, call out position, oxygen, base distance, and vehicle location.',
      'Do not split the team until every client confirms the correct position.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'A safer rejoin routine',
    routeSteps: [
      {
        title: 'Start with a clean session',
        body: 'Have the host close the game, reopen it, and create a fresh session. If a friend was joining through an old invite, replace it.',
      },
      {
        title: 'Use a test save first',
        body: 'A short test save tells you whether the fix is working on your install and platform setup. It is faster than arguing over the main save.',
      },
      {
        title: 'Call the load position out loud',
        body: 'When a client loads in, they should say where they are, how much oxygen they have, and whether the base or vehicle is visible. Do this before anyone starts gathering.',
      },
      {
        title: 'Check vehicle and beacon positions',
        body: 'If the player rejoined correctly but the group is scattered, use Beacons, Tadpole location, and base route names to regroup before continuing.',
      },
      {
        title: 'Record repeat failures',
        body: 'If the same client still loads far from base, write down platform, host, save, build version, and whether a fresh invite was used. That is the useful bug-report version.',
      },
    ],
    tableTitle: 'Rejoin symptom table',
    tableHeaders: ['Symptom', 'Best next check'],
    tableRows: [
      [
        'Client loads into an old location',
        'Confirm every player updated to Hotfix 3, then retest with a fresh invite.',
      ],
      [
        'Client appears far from base',
        'Stop the team, call out oxygen, and route back using Beacons or vehicle position.',
      ],
      [
        'Invite fails before loading',
        'Use the general multiplayer checklist: same build, platform service, fresh host session.',
      ],
      [
        'Only one save has the issue',
        'Test a short save so you can separate save-specific trouble from session trouble.',
      ],
      [
        'Co-op feels fixed but messy',
        'Name routes, lockers, and vehicles before the group splits again.',
      ],
    ],
    visualTitle: 'Rejoin sync card',
    visualItems: [
      {
        label: 'Patch',
        value: 'Hotfix 3',
        note: 'Client rejoin position fix.',
      },
      {
        label: 'First test',
        value: 'Short save',
        note: 'Protect the main co-op file.',
      },
      {
        label: 'Callout',
        value: 'O2 + base',
        note: 'Say oxygen and distance before moving.',
      },
    ],
    cautionTitle: 'Do not let everyone swim off immediately',
    cautionBody:
      'The first minute after a rejoin is where a fixed bug can still turn into a player-made mess. Confirm positions, oxygen, and the vehicle before the team goes back to four different errands.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What co-op rejoin issue did Hotfix 3 fix?',
        body: 'Unknown Worlds says Hotfix 3 fixes clients sometimes loading into a previous location when rejoining a multiplayer session, including positions far away from base.',
      },
      {
        title: 'Should I delete my co-op save if rejoin is broken?',
        body: 'No. Update, restart, use a fresh invite, and test a short save first. Deleting or replacing the main save should be a last resort.',
      },
      {
        title: 'Does this replace the multiplayer not working checklist?',
        body: 'No. Use this page for the rejoin-position problem. Use the multiplayer checklist when invites, platform services, or joining fails before the player loads in.',
      },
      {
        title: 'Why mention oxygen on a bug-fix page?',
        body: 'Because loading far from base can become dangerous quickly. The practical fix is not only technical; it is also a safe regroup routine.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: 'Multiplayer Not Working',
      },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2CoopPlayerCount, label: 'Co-op Player Count' },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 Changes' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon Guide' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 2, 2026 against Unknown Worlds Hotfix 3, Hotfix 2, Steam, Xbox, and the official gameplay trailer. The page image is original Abyss Guides art and is not copied from wiki screenshots or game captures.',
    cardKicker: 'Co-op sync card',
    cardBody:
      'A Hotfix 3 rejoin checklist for client position fixes, base distance, fresh invites, short test saves, oxygen callouts, and safe regrouping.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Co-op fix',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Patch',
    cardStatusValue: 'Hotfix 3',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Hotfix 3 后联机重连位置错误怎么办',
      description:
        'Subnautica 2 Hotfix 3 后联机重连检查：客户端位置回退、离基地太远、重新邀请、测试存档、氧气和载具位置确认。',
    },
    eyebrow: 'Subnautica 2 联机重连',
    title: 'Hotfix 3 后联机重连位置错误怎么办',
    description:
      'Hotfix 3 修了一个很具体的多人重连问题，但实际排查还是要稳一点。动主存档之前，先按这个顺序测试。',
    quickLabel: '快速结论',
    quickAnswer:
      'Hotfix 3 说明修复了客户端重连多人会话时，有时会加载到之前位置的问题，其中包括离基地很远的位置。更新后，让所有玩家重启游戏，由房主重新开会话并发送新邀请，先用短测试存档验证，再动主联机存档。第一次重连进来后，先报位置、氧气、离基地距离和载具位置，确认正常再分头行动。',
    fieldNotesTitle: '为什么单独写这一页',
    fieldNotes: [
      {
        title: '这个问题很具体',
        body: '这不是一句泛泛的联机稳定性修复。Unknown Worlds 明确提到客户端重连位置问题，所以它值得从普通联机排查里拆出来。',
      },
      {
        title: '离基地太远才吓人',
        body: '重连到远离基地的位置不只是烦人。玩家可能没有氧气、工具或清楚的返回路线。',
      },
      {
        title: '新邀请比旧邀请靠谱',
        body: '补丁之后不要继续点旧邀请链。让房主重开会话，重新发一次干净邀请。',
      },
    ],
    routeChecklistTitle: 'Hotfix 3 后重连清单',
    routeChecklist: [
      '所有玩家设备都更新 Subnautica 2。',
      '房主重启会话，并发送新邀请。',
      '先用一个短测试存档验证，不要直接赌主联机存档。',
      '加载后先报位置、氧气、离基地距离和载具位置。',
      '所有客户端确认位置正确前，不要让队伍分头行动。',
    ],
    contentsLabel: '目录',
    routeTitle: '更稳的重连流程',
    routeSteps: [
      {
        title: '从干净会话开始',
        body: '让房主关闭游戏、重新打开、重新建会话。如果朋友是通过旧邀请加入的，换成新邀请。',
      },
      {
        title: '先用测试存档',
        body: '短测试存档能快速判断你的安装、平台和邀请流程是否正常。比直接在主存档里吵半天更省时间。',
      },
      {
        title: '加载后先说位置',
        body: '客户端进来后，先说自己在哪、氧气多少、能不能看到基地或载具。说完再开始采集或探索。',
      },
      {
        title: '核对载具和信标',
        body: '如果玩家位置正常，但队伍已经散开，就用 Beacon、Tadpole 位置和基地路线名先集合。',
      },
      {
        title: '重复失败就记录细节',
        body: '如果同一个客户端仍然刷到离基地很远的位置，记录平台、房主、存档、版本号，以及是否用了新邀请。这种记录对后续排查更有用。',
      },
    ],
    tableTitle: '重连症状表',
    tableHeaders: ['症状', '下一步先查什么'],
    tableRows: [
      ['客户端加载到旧位置', '确认所有玩家都更新到 Hotfix 3，再用新邀请重测。'],
      [
        '客户端离基地很远',
        '先停下，报氧气，用 Beacon 或载具位置规划返回路线。',
      ],
      ['邀请阶段就失败', '看普通联机排查：同版本、平台服务、房主新会话。'],
      ['只有一个存档出问题', '用短测试存档区分是存档问题，还是会话/平台问题。'],
      ['重连修好了但队伍很乱', '重新命名路线、箱子和载具，再继续分工。'],
    ],
    visualTitle: '重连同步卡',
    visualItems: [
      {
        label: '补丁',
        value: 'Hotfix 3',
        note: '客户端重连位置修复。',
      },
      {
        label: '先测',
        value: '短存档',
        note: '保护主联机存档。',
      },
      {
        label: '报点',
        value: '氧气 + 基地',
        note: '移动前先说清楚。',
      },
    ],
    cautionTitle: '不要一进来就各游各的',
    cautionBody:
      '重连后的第一分钟最容易把技术问题变成玩家自己制造的混乱。先确认位置、氧气和载具，再让队伍继续分头做任务。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 3 修了什么联机重连问题？',
        body: 'Unknown Worlds 说明 Hotfix 3 修复了客户端重连多人会话时，有时会加载到之前位置的问题，包括离基地很远的位置。',
      },
      {
        title: '重连坏了要删联机存档吗？',
        body: '不要先删。先更新、重启、新邀请、测试短存档。主存档应该是最后才动的东西。',
      },
      {
        title: '这页能替代联机失败排查吗？',
        body: '不能。这页专门处理“重连后位置不对”。如果是邀请失败、平台服务或进不去会话，请看联机失败排查页。',
      },
      {
        title: '为什么 bug 修复页还要写氧气？',
        body: '因为刷到离基地很远的位置会马上变成生存问题。实际解决办法不只是技术排查，也包括安全集合流程。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2MultiplayerNotWorking, label: '联机失败排查' },
      { href: Routes.Subnautica2Coop, label: '联机指南' },
      { href: Routes.Subnautica2CoopPlayerCount, label: '联机人数' },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 更新内容' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon 指南' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 2 日核对 Unknown Worlds Hotfix 3、Hotfix 2、Steam、Xbox 和官方实机预告。本页图片为 Abyss Guides 原创图，不复制 wiki 截图或游戏截图。',
    cardKicker: '联机同步卡',
    cardBody:
      '围绕 Hotfix 3 后客户端重连位置、离基地距离、新邀请、短测试存档、氧气报点和安全集合写的检查页。',
    cardTypeLabel: '类型',
    cardTypeValue: '联机修复',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '补丁',
    cardStatusValue: 'Hotfix 3',
  },
};

function getCopy(locale: Locale): CoopRejoinCopy {
  return copyByLocale[locale] ?? copyByLocale.en;
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
    pathname: Routes.Subnautica2CoopRejoinAfterHotfix3,
  });
}

export default async function CoopRejoinAfterHotfix3Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={RadioTowerIcon}
      locale={locale}
      pathname={Routes.Subnautica2CoopRejoinAfterHotfix3}
      sources={sharedSources}
    />
  );
}
