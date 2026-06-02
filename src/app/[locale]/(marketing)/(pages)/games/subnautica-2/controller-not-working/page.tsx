import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { Gamepad2Icon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type ControllerCopy = ResourceGuideCopy & {
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
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
];

const copyByLocale: Record<string, ControllerCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Controller Not Working - Gamepad and Input Checklist',
      description:
        'A practical Subnautica 2 controller not working guide for gamepad detection, Steam Input, Xbox controllers, Steam Deck controls, input lag, Cloud sessions, and Early Access patch checks.',
    },
    eyebrow: 'Subnautica 2 controller troubleshooting',
    title: 'Controller Not Working: Gamepad and Input Checklist',
    description:
      'Subnautica 2 has official controller support on Steam and Xbox platform support on the Xbox listing, but that does not mean every input problem has the same fix. Start by naming the symptom: no input, wrong prompts, delayed input, Steam Deck layout trouble, or a cloud session that feels late.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Update the game, restart the launcher, and test with one active controller before changing a dozen settings. On Steam, check Steam Input, controller order, and the selected layout. On Xbox or Game Pass, confirm the device/session from the Xbox listing, reconnect the controller, and restart the app. If the controller works but input feels late, treat it as performance, network, or co-op load instead of a pure gamepad bug.',
    fieldNotesTitle: 'Separate the symptoms first',
    fieldNotes: [
      {
        title: 'Not detected is different from wrong prompts',
        body: 'A controller that does nothing needs a connection and input-order check. A controller that works but shows strange buttons usually needs a layout or Steam Input pass.',
      },
      {
        title: 'Steam Deck is a handheld settings problem too',
        body: 'Steam lists the game as Steam Deck Verified, but handheld play still needs frame caps, heat control, and a layout that feels right during panic swims.',
      },
      {
        title: 'Input lag often comes from somewhere else',
        body: 'If the button press lands late during co-op, near a busy base, or while FPS is dropping, fix the session or performance load before blaming the controller.',
      },
    ],
    routeChecklistTitle: 'Fast controller check',
    routeChecklist: [
      'Update Subnautica 2 and fully restart Steam, the Xbox app, or the launcher.',
      'Connect only one controller while testing, then remove extra Bluetooth devices.',
      'On Steam, check Steam Input, controller order, and the active layout.',
      'On Xbox or Game Pass, reconnect the controller and confirm the session/device type.',
      'Try a wired connection once, even if you normally play wireless.',
      'Test in the main menu, a fresh save, and your main save before calling it solved.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to fix controller input without guessing',
    routeSteps: [
      {
        title: 'Confirm the game build and platform first',
        body: 'Steam and Xbox are the two official pages to check before troubleshooting. If the platform listing, Early Access state, or patch status changed, old controller advice may be stale.',
      },
      {
        title: 'Test one controller in the main menu',
        body: 'Use one controller, turn off spare gamepads, and remove half-paired Bluetooth devices. If the menu does not react, you are still at detection level and should not worry about in-game bindings yet.',
      },
      {
        title: 'Use Steam Input as a controlled test',
        body: 'On Steam, open the controller settings for the game, check the controller order, and try the default layout before browsing community layouts. If you changed several layouts earlier, restart Steam after returning to one clean setup.',
      },
      {
        title: 'Handle Xbox and Game Pass through the app session',
        body: 'For Xbox, PC Game Pass, Cloud, or handheld wording, use the Xbox listing as the device source. Reconnect the controller, restart the Xbox app or cloud session, and check whether the same pad works in another game.',
      },
      {
        title: 'Try wired before blaming the save',
        body: 'A wired test is boring but useful. If wired works and wireless does not, the problem may be Bluetooth pairing, batteries, distance, or another device taking control.',
      },
      {
        title: 'Split input lag from controller failure',
        body: 'If buttons register but feel late, compare a quiet biome with a busy base, solo with co-op, and low settings with your normal preset. Delayed input often follows low FPS, host load, or cloud/network delay.',
      },
    ],
    tableTitle: 'Controller symptom table',
    tableHeaders: ['What you see', 'First useful check'],
    tableRows: [
      [
        'No input in the menu',
        'Restart the launcher, test one connected controller, then check controller order.',
      ],
      [
        'Wrong button prompts or strange layout',
        'Reset to a default Steam Input layout before trying community layouts.',
      ],
      [
        'Xbox controller works in Windows but not the game',
        'Restart the app session and test the controller in another game from the same launcher.',
      ],
      [
        'Steam Deck controls feel odd',
        'Use the Steam Deck settings page and retest with a frame cap.',
      ],
      [
        'Cloud or Game Pass input feels delayed',
        'Check network stability, cloud session state, and whether delay appears outside Subnautica 2.',
      ],
      [
        'Input gets worse near base or in co-op',
        'Treat it as FPS, host load, or multiplayer sync before changing controller layouts.',
      ],
    ],
    visualTitle: 'Input field card',
    visualItems: [
      {
        label: 'First split',
        value: 'Dead or late',
        note: 'No input and delayed input need different fixes.',
      },
      {
        label: 'Steam test',
        value: 'Clean layout',
        note: 'Default layout, controller order, then restart.',
      },
      {
        label: 'Lag test',
        value: 'Quiet route',
        note: 'Compare open water against your busiest base.',
      },
    ],
    cautionTitle: 'Do not tune controls while the game is struggling',
    cautionBody:
      'A controller can feel broken when the real problem is a bad frame-time spike, a cloud session delay, a weak co-op host, or a busy base. Fix obvious performance and session issues first, then come back to layout changes.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Does Subnautica 2 support controllers?',
        body: 'Steam lists Full Controller Support, Xbox Controllers, and Steam Deck Verified for Subnautica 2. Use the official Xbox listing for Xbox, PC, Cloud, handheld, and Game Pass device wording.',
      },
      {
        title: 'Why does my controller work elsewhere but not in Subnautica 2?',
        body: 'The launcher session, Steam Input layout, controller order, or a half-connected wireless device can still interfere. Restart the launcher and test one controller before changing bindings.',
      },
      {
        title: 'Should I disable Steam Input?',
        body: 'Do not start there. First test a clean default layout and controller order. If that fails, try the opposite Steam Input state as a single controlled test, then restart Steam.',
      },
      {
        title: 'Is controller input lag a bug?',
        body: 'It can be, but late input can also come from low FPS, cloud latency, co-op host load, or a busy save. Use the low-FPS and multiplayer lag pages if the controller still responds.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2SteamDeckSettings,
        label: 'Steam Deck Settings',
      },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      {
        href: Routes.Subnautica2BestSettingsLowFps,
        label: 'Best Settings for Low FPS',
      },
      {
        href: Routes.Subnautica2MultiplayerLagDesync,
        label: 'Multiplayer Lag and Desync',
      },
      {
        href: Routes.Subnautica2BlackScreenFreezing,
        label: 'Black Screen and Freezing',
      },
      {
        href: Routes.Subnautica2SystemRequirements,
        label: 'System Requirements',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against Steam, Xbox, Unknown Worlds Hotfix 3, and the Early Access roadmap. Page art is original Abyss Guides artwork; the embedded video is the official Subnautica trailer.',
    cardKicker: 'Input field card',
    cardBody:
      'A controller troubleshooting page for gamepad detection, Steam Input, Xbox controllers, Steam Deck layouts, cloud delay, low FPS, and co-op input lag.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Controller troubleshooting',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Best first test',
    cardStatusValue: 'One controller',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 手柄没反应怎么办 - 控制器和输入排查',
      description:
        'Subnautica 2 手柄没反应、控制器无法识别、Steam Input、Xbox 手柄、Steam Deck 按键、输入延迟、云游戏和联机延迟中文排查指南。',
    },
    eyebrow: 'Subnautica 2 手柄排查',
    title: '手柄没反应：控制器和输入排查清单',
    description:
      'Steam 页面写明 Subnautica 2 支持控制器，Xbox 商店也列出了 Xbox、PC、Cloud 和掌机相关支持。但“手柄没反应”不只有一种原因。先分清楚：完全没输入、按键提示不对、输入延迟、Steam Deck 布局别扭，还是云游戏/联机里慢半拍。',
    quickLabel: '快速结论',
    quickAnswer:
      '先更新游戏，重启 Steam、Xbox app 或启动器，并且只保留一个手柄测试。Steam 版优先检查 Steam Input、控制器顺序和当前布局；Xbox 或 Game Pass 版先确认设备和会话，重新连接手柄并重启 app。手柄能用但输入慢时，不要急着改按键，先按低 FPS、云游戏延迟或联机负载来排查。',
    fieldNotesTitle: '先把现象分清楚',
    fieldNotes: [
      {
        title: '没识别和按键提示不对不是一回事',
        body: '完全没反应时，先查连接、控制器顺序和启动器。能动但按键显示奇怪时，通常更像布局或 Steam Input 问题。',
      },
      {
        title: 'Steam Deck 还要看性能和发热',
        body: 'Steam 把 Subnautica 2 标为 Steam Deck Verified，但掌机仍然需要锁帧、控热和适合自己的布局，尤其是紧急上浮或躲生物的时候。',
      },
      {
        title: '输入延迟经常不是手柄本身',
        body: '如果按键会响应，只是联机、基地附近或掉帧时慢半拍，先处理性能、网络或房主负载，再动控制器设置。',
      },
    ],
    routeChecklistTitle: '快速排查清单',
    routeChecklist: [
      '更新 Subnautica 2，并完整重启 Steam、Xbox app 或启动器。',
      '测试时只连接一个手柄，先关掉多余蓝牙设备。',
      'Steam 版检查 Steam Input、控制器顺序和当前布局。',
      'Xbox 或 Game Pass 版重新连接手柄，并确认设备/会话类型。',
      '哪怕平时用无线，也做一次有线测试。',
      '分别在主菜单、新存档和主存档里测试，不要只看一个场景。',
    ],
    contentsLabel: '目录',
    routeTitle: '不靠猜的手柄排查方法',
    routeSteps: [
      {
        title: '先确认游戏版本和平台',
        body: 'Steam 和 Xbox 是优先核对的官方页面。平台支持、抢先体验状态和补丁都可能改变，旧教程不一定还适合当前版本。',
      },
      {
        title: '先在主菜单测试一个手柄',
        body: '只保留一个控制器，关掉备用手柄和半连接的蓝牙设备。如果主菜单都不响应，那还是识别层面的问题，暂时不用纠结游戏内按键。',
      },
      {
        title: '把 Steam Input 当成单独测试',
        body: 'Steam 版打开游戏的控制器设置，检查控制器顺序，先回到默认布局再试。之前换过多个社区布局的话，恢复到一个干净布局后重启 Steam。',
      },
      {
        title: 'Xbox 和 Game Pass 从会话入手',
        body: 'Xbox、PC Game Pass、Cloud 或掌机相关信息，以 Xbox 商店页面为设备来源。重新连接手柄，重启 Xbox app 或云游戏会话，再确认同一个手柄在其他游戏里是否正常。',
      },
      {
        title: '先做一次有线测试',
        body: '有线测试很朴素，但能快速排除蓝牙、距离、电量和其他设备抢控制权的问题。如果有线正常、无线不正常，方向就很清楚了。',
      },
      {
        title: '把输入延迟和手柄失效分开',
        body: '按钮能响应但慢半拍时，分别对比安静水域和复杂基地、单人和联机、低画质和常用设置。很多延迟其实跟低 FPS、房主负载或云游戏网络有关。',
      },
    ],
    tableTitle: '手柄现象对照表',
    tableHeaders: ['你看到什么', '先检查什么'],
    tableRows: [
      ['主菜单完全没输入', '重启启动器，只连接一个手柄，再检查控制器顺序。'],
      ['按键提示不对或布局很怪', '先恢复默认 Steam Input 布局，再试社区布局。'],
      [
        'Xbox 手柄在 Windows 里正常，进游戏没反应',
        '重启 app 会话，并用同一个启动器里的其他游戏测试手柄。',
      ],
      [
        'Steam Deck 按键手感不对',
        '先看 Steam Deck 设置页，并配合锁帧重新测试。',
      ],
      [
        'Cloud 或 Game Pass 输入延迟',
        '检查网络稳定性、云游戏会话，以及其他游戏是否也有延迟。',
      ],
      [
        '基地附近或联机时输入变慢',
        '先按 FPS、房主负载或联机同步问题处理，不要只改手柄布局。',
      ],
    ],
    visualTitle: '输入排查卡',
    visualItems: [
      {
        label: '先区分',
        value: '没反应/慢半拍',
        note: '完全没输入和输入延迟不是一类问题。',
      },
      {
        label: 'Steam 测试',
        value: '干净布局',
        note: '默认布局、控制器顺序，然后重启。',
      },
      {
        label: '延迟测试',
        value: '安静路线',
        note: '用开阔水域对比最复杂的基地。',
      },
    ],
    cautionTitle: '游戏卡顿时不要急着调按键',
    cautionBody:
      '帧时间尖峰、云游戏延迟、房主机器吃力或大型基地负载，都可能让手柄像坏了一样。先把明显的性能和会话问题排掉，再回头改布局。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 支持手柄吗？',
        body: 'Steam 页面列出了 Full Controller Support、Xbox Controllers 和 Steam Deck Verified。Xbox、PC、Cloud、掌机和 Game Pass 相关设备文字，则以 Xbox 官方商店页面为准。',
      },
      {
        title: '为什么我的手柄别的游戏能用，Subnautica 2 不能用？',
        body: '启动器会话、Steam Input 布局、控制器顺序，或者半连接的无线设备都可能干扰。先重启启动器，并只用一个手柄测试。',
      },
      {
        title: '要不要关闭 Steam Input？',
        body: '不要一开始就关。先用默认布局和正确的控制器顺序测试。如果仍然不行，再把 Steam Input 的相反状态作为一次单独测试，改完后重启 Steam。',
      },
      {
        title: '输入延迟算 bug 吗？',
        body: '有可能，但也可能是低 FPS、云游戏网络、联机房主负载或大型存档造成的。手柄仍然有响应时，先看低 FPS 和联机延迟排查页。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2SteamDeckSettings, label: 'Steam Deck 设置' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      {
        href: Routes.Subnautica2BestSettingsLowFps,
        label: '低 FPS 和最佳设置',
      },
      {
        href: Routes.Subnautica2MultiplayerLagDesync,
        label: '联机延迟和不同步',
      },
      {
        href: Routes.Subnautica2BlackScreenFreezing,
        label: '黑屏和卡死排查',
      },
      { href: Routes.Subnautica2SystemRequirements, label: '配置要求' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日核对 Steam、Xbox、Unknown Worlds Hotfix 3 和 Early Access 路线图。页面图片为 Abyss Guides 原创图；视频为 Subnautica 官方预告嵌入。',
    cardKicker: '输入排查卡',
    cardBody:
      '面向手柄无法识别、Steam Input、Xbox 手柄、Steam Deck 布局、云游戏延迟、低 FPS 和联机输入延迟的排查页。',
    cardTypeLabel: '类型',
    cardTypeValue: '手柄排查',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '优先测试',
    cardStatusValue: '单个手柄',
  },
};

function getCopy(locale: Locale): ControllerCopy {
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
    pathname: Routes.Subnautica2ControllerNotWorking,
  });
}

export default async function Subnautica2ControllerNotWorkingPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={Gamepad2Icon}
      locale={locale}
      pathname={Routes.Subnautica2ControllerNotWorking}
      sources={sharedSources}
    />
  );
}
