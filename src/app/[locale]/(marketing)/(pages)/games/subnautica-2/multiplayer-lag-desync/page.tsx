import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { ActivityIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type LagCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-03';
const UPDATED_AT = '2026-06-03';

const sharedSources = [
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/?l=english',
    label: 'Official Steam page',
  },
  {
    href: 'https://www.xbox.com/en-US/games/store/subnautica-2/9pjpcb188svg',
    label: 'Official Xbox store listing',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-3',
    label: 'Unknown Worlds Hotfix 3',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-2',
    label: 'Unknown Worlds Hotfix 2',
  },
];

const copyByLocale: Record<string, LagCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Multiplayer Lag and Desync - Co-op Fix Checklist',
      description:
        'A practical Subnautica 2 multiplayer lag and desync guide for rubberbanding, delayed interactions, co-op rejoin position issues, high ping, host load, Game Pass sessions, and base-heavy saves.',
    },
    eyebrow: 'Subnautica 2 co-op performance',
    title: 'Multiplayer Lag, Desync, and Rubberbanding Checklist',
    description:
      'If a friend can join but doors, lockers, vehicles, creatures, or player positions feel late, you are past the basic invite problem. Treat it like a sync test: host, network, save load, base clutter, and current hotfix all matter.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Use this page after everyone can join the session. First update every player, restart the host session, and test a short save. If lag or desync stays, swap host, compare wired versus Wi-Fi, test away from the busiest base, lower host graphics load if the host is struggling, and check whether the issue appears after rejoining. Hotfix 3 specifically mentions multiplayer clients sometimes loading into a previous location, so rejoin problems deserve their own test.',
    fieldNotesTitle: 'Sort the symptom first',
    fieldNotes: [
      {
        title: 'Invite failure is a different problem',
        body: 'If a friend cannot enter the session at all, use the multiplayer-not-working checklist first. This page is for sessions that load but feel wrong.',
      },
      {
        title: 'The host is part of performance',
        body: 'A weak or overloaded host can make a co-op world feel laggy even when the joining player has a strong PC.',
      },
      {
        title: 'Rejoin issues changed after Hotfix 3',
        body: 'Unknown Worlds named a client rejoin position fix in Hotfix 3. If a player appears in an old or distant location, separate that from normal network lag.',
      },
    ],
    routeChecklistTitle: 'Ten-minute sync test',
    routeChecklist: [
      'Update Subnautica 2 on every device and restart the host session.',
      'Use a short test save before touching the main co-op save.',
      'Have the most stable connection host, ideally wired Ethernet.',
      'Compare a quiet biome against the busiest base or vehicle route.',
      'If one player rejoined, call out position, oxygen, base distance, and vehicle location.',
      'Write down whether the lag follows the host, the save, or one player.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to test co-op lag without guessing',
    routeSteps: [
      {
        title: 'Confirm the problem is not joining',
        body: 'If invites fail, account prompts do not appear, or the friend never loads in, stop here and use the general multiplayer checklist. Lag and desync checks only make sense once the session is actually running.',
      },
      {
        title: 'Start with a small save',
        body: 'A tiny save removes base clutter, storage, long routes, and old patch history. If the small save feels fine, the main world may be carrying the load.',
      },
      {
        title: 'Swap the host once',
        body: 'Do not swap hosts five times. Try one clean host change with the player who has the most stable connection and strongest machine. If the problem moves with the host, you have useful evidence.',
      },
      {
        title: 'Test a quiet area and a busy base',
        body: 'Run the same two-minute route in open water, then repeat near the busiest base, Tadpole parking spot, storage wall, or creature-heavy path. That shows whether the issue is network, host load, or world load.',
      },
      {
        title: 'Handle rejoin position separately',
        body: 'After Hotfix 3, retest rejoining with a fresh invite. If a client loads into an old location or far from base, record that as a rejoin-position issue instead of calling it simple lag.',
      },
      {
        title: 'Keep one note per test',
        body: 'Write down host, platform, wired or Wi-Fi, save name, area tested, and what felt delayed. It sounds dull, but it keeps the group from repeating the same failed fix all night.',
      },
    ],
    tableTitle: 'Symptom table',
    tableHeaders: ['What you see', 'First useful check'],
    tableRows: [
      [
        'Friend can join but actions feel delayed',
        'Restart host session, test a short save, then swap host once.',
      ],
      [
        'Players snap back or rubberband',
        'Compare wired host, Wi-Fi clients, and platform service stability.',
      ],
      [
        'Lag appears only near base',
        'Test away from storage, lights, vehicles, and creature-heavy routes.',
      ],
      [
        'One player loads into an old position',
        'Treat it as a Hotfix 3 rejoin-position check, not ordinary lag.',
      ],
      [
        'Game Pass session feels worse than Steam test',
        'Check Xbox services, account flow, and whether both installs are current.',
      ],
      [
        'Host FPS is also low',
        'Lower host load first; a struggling host can make co-op feel worse.',
      ],
    ],
    visualTitle: 'Co-op sync card',
    visualItems: [
      {
        label: 'First split',
        value: 'Join vs lag',
        note: 'Failed invites are not the same as desync.',
      },
      {
        label: 'Best host',
        value: 'Stable line',
        note: 'Prefer the strongest machine on a wired connection.',
      },
      {
        label: 'Control save',
        value: 'Short test',
        note: 'Protect the main world while testing.',
      },
    ],
    cautionTitle: 'Do not blame one player before testing the host',
    cautionBody:
      'Co-op problems often feel personal because one friend sees the worst delay. The cause may still be the host, the save, a busy base, Wi-Fi, platform services, or a rejoin edge case. Change one thing, test it, and keep the main save out of the experiment until you know more.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Why is Subnautica 2 co-op laggy if everyone can join?',
        body: 'Joining only proves the session started. Lag can still come from host load, network stability, a busy save, Wi-Fi, platform services, or rejoining after a patch.',
      },
      {
        title: 'Who should host a Subnautica 2 co-op session?',
        body: 'Start with the player on the most stable connection and strongest machine. A wired desktop is a better first host than a hot handheld or weak laptop.',
      },
      {
        title: 'Is rubberbanding a save problem?',
        body: 'Not always. Test a short save and a quiet area first. If only the main save near a base has trouble, then world load becomes more likely.',
      },
      {
        title: 'Did Hotfix 3 fix multiplayer desync?',
        body: 'Hotfix 3 specifically mentions a client rejoin position issue. That is narrower than every possible lag or desync problem, so keep testing by symptom.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: 'Multiplayer Not Working',
      },
      {
        href: Routes.Subnautica2CoopRejoinAfterHotfix3,
        label: 'Co-op Rejoin After Hotfix 3',
      },
      { href: Routes.Subnautica2Crossplay, label: 'Crossplay Guide' },
      { href: Routes.Subnautica2CoopPlayerCount, label: 'Co-op Player Count' },
      {
        href: Routes.Subnautica2BestSettingsLowFps,
        label: 'Best Settings for Low FPS',
      },
      {
        href: Routes.Subnautica2ControllerNotWorking,
        label: 'Controller Not Working',
      },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 Changes' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against Steam, Xbox, Unknown Worlds Hotfix 3, and Hotfix 2. Page art is original Abyss Guides artwork; the embedded video is the official Subnautica trailer.',
    cardKicker: 'Co-op sync field card',
    cardBody:
      'A troubleshooting page for co-op lag, delayed interactions, rubberbanding, host load, busy bases, rejoin position checks, and Game Pass sessions.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Co-op troubleshooting',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Best first test',
    cardStatusValue: 'Short save',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 联机延迟和不同步怎么办 - 多人卡顿排查',
      description:
        'Subnautica 2 联机延迟、不同步、橡皮筋、交互延迟、重进位置错误、高 ping、房主负载、Game Pass 会话和基地附近卡顿中文排查。',
    },
    eyebrow: 'Subnautica 2 联机性能',
    title: '联机延迟、不同步和橡皮筋排查',
    description:
      '如果好友已经能进房，但门、箱子、载具、怪物或玩家位置都慢半拍，那就不是普通邀请失败了。按同步问题来测：房主、网络、存档负载、基地复杂度和当前补丁都要分开看。',
    quickLabel: '快速结论',
    quickAnswer:
      '这页适合“已经能进房但联机很卡”的情况。先让所有人更新游戏，重启房主会话，并用短测试存档排查。如果延迟或不同步还在，换一个更稳定的人当房主，对比有线和 Wi-Fi，在远离大型基地的位置测试，房主机器吃力时先降低房主负载，再看问题是否出现在重进之后。Hotfix 3 明确提到过多人客户端重进位置问题，所以重进后刷到旧位置要单独记录。',
    fieldNotesTitle: '先分清是哪种问题',
    fieldNotes: [
      {
        title: '邀请失败是另一个问题',
        body: '好友完全进不来时，先看 multiplayer-not-working 那页。这里处理的是已经进房，但动作和位置明显不同步。',
      },
      {
        title: '房主也算性能的一部分',
        body: '房主机器太弱、过热或网络不稳时，加入的玩家可能会觉得整个世界都慢半拍。',
      },
      {
        title: 'Hotfix 3 后重进问题要单独看',
        body: 'Unknown Worlds 在 Hotfix 3 里点名修过客户端重进位置问题。玩家刷到旧位置或离基地很远时，不要简单归类成网络延迟。',
      },
    ],
    routeChecklistTitle: '10 分钟同步测试',
    routeChecklist: [
      '所有设备都更新 Subnautica 2，并重启房主会话。',
      '先用短测试存档，不要直接拿主联机存档实验。',
      '让网络最稳定的人当房主，最好是有线连接。',
      '分别测试安静生态区和最复杂的基地/载具路线。',
      '有人重进后，先报位置、氧气、离基地距离和载具位置。',
      '记录延迟到底跟着房主、存档，还是某一个玩家走。',
    ],
    contentsLabel: '目录',
    routeTitle: '不靠猜的联机卡顿测试法',
    routeSteps: [
      {
        title: '先确认不是进房问题',
        body: '如果邀请失败、账号提示没弹出，或好友根本加载不进去，就先停下，去看普通联机失败排查。只有会话已经跑起来了，延迟和不同步测试才有意义。',
      },
      {
        title: '从小存档开始',
        body: '小存档能避开大型基地、储物墙、长路线和旧补丁历史。如果小存档正常，主世界本身的负载就更值得怀疑。',
      },
      {
        title: '只换一次房主',
        body: '不要一晚上来回换五次。让网络最稳、机器最强的人开一次干净会话。如果问题跟着房主变化，这就是有用线索。',
      },
      {
        title: '对比安静区域和复杂基地',
        body: '在开放水域跑同一段两分钟路线，再去最复杂的基地、Tadpole 停放点、储物墙或生物多的路线复测。这样能分清是网络、房主负载，还是世界负载。',
      },
      {
        title: '重进位置单独处理',
        body: 'Hotfix 3 后，用新邀请单独测试重进。如果客户端刷到旧位置或离基地很远，就按重进位置问题记录，不要直接叫它普通延迟。',
      },
      {
        title: '每次测试只记一行',
        body: '写下房主、平台、有线还是 Wi-Fi、存档名、测试地点和具体延迟表现。看起来麻烦，但能防止整队人反复做同一个无效操作。',
      },
    ],
    tableTitle: '现象对照表',
    tableHeaders: ['你看到什么', '先检查什么'],
    tableRows: [
      [
        '好友能进房，但交互慢半拍',
        '重启房主会话，用短存档测试，再换一次房主。',
      ],
      ['玩家瞬移回去或橡皮筋', '对比有线房主、Wi-Fi 客户端和平台服务状态。'],
      ['只在基地附近卡', '离开储物、灯光、载具和生物密集路线再测。'],
      [
        '某个玩家重进后刷到旧位置',
        '按 Hotfix 3 重进位置问题排查，不要当成普通延迟。',
      ],
      [
        'Game Pass 会话比 Steam 测试更差',
        '检查 Xbox 服务、账号流程，以及双方安装是否为当前版本。',
      ],
      ['房主自己也低 FPS', '先降低房主负载；房主吃力会拖累联机体验。'],
    ],
    visualTitle: '联机同步卡',
    visualItems: [
      {
        label: '先区分',
        value: '进房/延迟',
        note: '邀请失败和不同步不是同一类问题。',
      },
      {
        label: '房主选择',
        value: '稳定线路',
        note: '优先选有线连接和更强机器。',
      },
      {
        label: '对照存档',
        value: '短测试',
        note: '测试时保护主世界。',
      },
    ],
    cautionTitle: '不要还没测房主就怪某个玩家',
    cautionBody:
      '联机问题很容易让人觉得是某个好友网络差，因为他看到的延迟最明显。但原因也可能是房主、存档、大型基地、Wi-Fi、平台服务，或补丁后的重进边缘问题。每次只改一个变量，先用小存档测清楚。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '为什么 Subnautica 2 能进房但联机还是卡？',
        body: '进房只说明会话建立了。延迟还可能来自房主负载、网络稳定性、大型存档、Wi-Fi、平台服务或补丁后的重进问题。',
      },
      {
        title: 'Subnautica 2 联机谁来当房主最好？',
        body: '优先让连接最稳定、机器最强的人当房主。有线台式机通常比发热的掌机或弱笔记本更适合先测试。',
      },
      {
        title: '橡皮筋一定是存档问题吗？',
        body: '不一定。先用短存档和安静区域测试。如果只有主存档的大型基地附近出问题，再考虑世界负载。',
      },
      {
        title: 'Hotfix 3 修复了所有多人不同步吗？',
        body: 'Hotfix 3 明确提到的是客户端重进位置问题。这比“所有延迟和不同步”窄得多，所以还是要按症状分别测。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: '联机失败排查',
      },
      {
        href: Routes.Subnautica2CoopRejoinAfterHotfix3,
        label: 'Hotfix 3 后联机重进',
      },
      { href: Routes.Subnautica2Crossplay, label: '跨平台联机' },
      { href: Routes.Subnautica2CoopPlayerCount, label: '联机人数' },
      {
        href: Routes.Subnautica2BestSettingsLowFps,
        label: '低 FPS 和最佳设置',
      },
      { href: Routes.Subnautica2ControllerNotWorking, label: '手柄没反应' },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 更新内容' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日核对 Steam、Xbox、Unknown Worlds Hotfix 3 和 Hotfix 2。页面图片为 Abyss Guides 原创图；视频为 Subnautica 官方预告嵌入。',
    cardKicker: '联机同步记录卡',
    cardBody:
      '面向联机延迟、交互慢半拍、橡皮筋、房主负载、大型基地、重进位置和 Game Pass 会话的排查页。',
    cardTypeLabel: '类型',
    cardTypeValue: '联机排查',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '优先测试',
    cardStatusValue: '短存档',
  },
};

function getCopy(locale: Locale): LagCopy {
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
    pathname: Routes.Subnautica2MultiplayerLagDesync,
  });
}

export default async function Subnautica2MultiplayerLagDesyncPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={ActivityIcon}
      locale={locale}
      pathname={Routes.Subnautica2MultiplayerLagDesync}
      sources={sharedSources}
    />
  );
}
