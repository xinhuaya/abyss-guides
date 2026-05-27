import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type HubLink = {
  href: Routes;
  title: string;
  description: string;
};

type HubCopy = {
  metadata: {
    title: string;
    description: string;
  };
  updated: string;
  title: string;
  description: string;
  sections: HubLink[];
  priorityEyebrow: string;
  priorityTitle: string;
  priorityResources: HubLink[];
  patchEyebrow: string;
  patchTitle: string;
  patchBody: string;
  patchLinks: HubLink[];
  editorialTitle: string;
  editorialBody: string;
  disclaimer: string;
};

const copyByLocale: Record<'en' | 'zh', HubCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Guide Hub - Beginner Tips, Resources, Crafting, Map, and Co-op',
      description:
        'Start here for Subnautica 2 beginner tips, resource locations, crafting recipes, map and biome notes, co-op help, settings fixes, and Early Access updates.',
    },
    updated: 'Last updated May 24, 2026',
    title: 'Subnautica 2 Guide Hub',
    description:
      'Subnautica 2 is in Early Access, so guides need to stay flexible. This hub organizes beginner routes, resources, crafting, map notes, co-op help, settings, and updates in one place.',
    sections: [
      {
        href: Routes.Subnautica2Beginner,
        title: 'Beginner Guide',
        description:
          'First-session priorities, safe routes, scanning habits, and base planning.',
      },
      {
        href: Routes.Subnautica2Resources,
        title: 'Resources',
        description:
          'Material tables, farming notes, and individual resource pages as data is verified.',
      },
      {
        href: Routes.Subnautica2Crafting,
        title: 'Crafting',
        description:
          'Recipe tracking, blueprint unlock notes, and calculator-ready recipe structure.',
      },
      {
        href: Routes.Subnautica2Biomes,
        title: 'Map & Biomes',
        description:
          'Biome routes, safety notes, base-friendly areas, and patch-sensitive map planning.',
      },
      {
        href: Routes.Subnautica2Coop,
        title: 'Co-op',
        description:
          'Team roles, shared storage habits, setup checks, and multiplayer troubleshooting.',
      },
      {
        href: Routes.Subnautica2Updates,
        title: 'Roadmap',
        description:
          'Early Access changes, patch summaries, and guide pages that need updating.',
      },
    ],
    priorityEyebrow: 'High-demand resource pages',
    priorityTitle: 'Start with the materials players get stuck on',
    priorityResources: [
      {
        href: Routes.Subnautica2Copper,
        title: 'Where to Find Copper',
        description:
          'Early battery and electronics material with Lifepod cave route notes.',
      },
      {
        href: Routes.Subnautica2CopperIngot,
        title: 'Copper Ingot',
        description:
          'Copper x3, Processor conversion, Vehicle Fabricator prep, Copper Wire timing, and raw Copper reserves.',
      },
      {
        href: Routes.Subnautica2BasicBattery,
        title: 'Basic Battery',
        description:
          'Default unlock, Copper x2, Acidic Raion Pouch x1, 100 energy, and early tool priorities.',
      },
      {
        href: Routes.Subnautica2BatteryTerminal,
        title: 'Battery Terminal',
        description:
          'Old Habitat fragment route, Habitat Builder placement, Copper Wire prep, six-slot battery rotation, and base power safety.',
      },
      {
        href: Routes.Subnautica2AdvancedBattery,
        title: 'Advanced Battery',
        description:
          'Karakorum fragment route, Data Box unlock, Conduit Crystal, Strong Acid, Silver Ingot, 200 energy, and charger rotation.',
      },
      {
        href: Routes.Subnautica2PowerCell,
        title: 'Power Cell',
        description:
          'Basic Battery x2, Strong Acid, Salt, Fabricator crafting, Tadpole use, and vehicle power planning.',
      },
      {
        href: Routes.Subnautica2VehicleFabricator,
        title: 'Vehicle Fabricator',
        description:
          'Moonpool clearance, Tadpole Dock setup, current recipe data, Power Cell timing, and vehicle bay planning.',
      },
      {
        href: Routes.Subnautica2TadpoleDock,
        title: 'Tadpole Dock',
        description:
          'Moonpool placement, dock clearance, Titanium Ingot, Silver Ingot, Copper Wire, and Tadpole approach testing.',
      },
      {
        href: Routes.Subnautica2Moonpool,
        title: 'Moonpool',
        description:
          'Scan/Data Box unlock leads, Titanium x5, Habitat Builder placement, Tadpole Dock clearance, and insufficient-space fixes.',
      },
      {
        href: Routes.Subnautica2InsufficientSpaceToDock,
        title: 'Insufficient Space to Dock Fix',
        description:
          'Moonpool depth, Tadpole Dock clearance, approach path, Vehicle Fabricator spacing, and rebuild timing.',
      },
      {
        href: Routes.Subnautica2AcidicRaionPouch,
        title: 'Acidic Raion Pouch',
        description:
          'Coral Gardens harvest lead, Basic Battery use, Mild Acid use, and current map-data caveat.',
      },
      {
        href: Routes.Subnautica2MildAcid,
        title: 'Mild Acid',
        description:
          'Acidic Raion Pouch, Copper, Fabricator recipe, Processor route, and upgrade uses.',
      },
      {
        href: Routes.Subnautica2Processor,
        title: 'Processor',
        description:
          'Scan unlock, Old Habitat lead, Titanium, Mild Acid, Copper Wire, and processing chains.',
      },
      {
        href: Routes.Subnautica2Biolab,
        title: 'Biolab',
        description:
          'Welcome Center route, Titanium, Copper Wire, Mild Acid, and Biomod management.',
      },
      {
        href: Routes.Subnautica2EchoLocation,
        title: 'Echo Location',
        description:
          'Modification Station recipe, Quartz, Mild Acid, Atacamite, and Tadpole resource ping use.',
      },
      {
        href: Routes.Subnautica2ModificationStation,
        title: 'Modification Station',
        description:
          'Scan/Data Box unlock, Alien Ruins route, Titanium, Celestine, Copper, and upgrade crafting.',
      },
      {
        href: Routes.Subnautica2EngineEfficiency,
        title: 'Engine Efficiency',
        description:
          'Tadpole power-saving module, 20% stack text, Modification Station recipe, and Alien Ruins pickup note.',
      },
      {
        href: Routes.Subnautica2CopperWire,
        title: 'Copper Wire',
        description:
          '2 Copper recipe, battery timing, Wiring Kit prep, and base-building electronics use.',
      },
      {
        href: Routes.Subnautica2HabitatBuilder,
        title: 'Habitat Builder',
        description:
          'Scan unlock, Titanium, Glass, Basic Battery, Copper Wire, and first base prep.',
      },
      {
        href: Routes.Subnautica2Titanium,
        title: 'Titanium',
        description:
          'Coral Gardens nodes, Metal Salvage processing, Sonic Resonator deposits, base storage, and ingot planning.',
      },
      {
        href: Routes.Subnautica2Silver,
        title: 'Where to Find Silver',
        description:
          'Early-game air tank and electronics bottleneck with patch-sensitive route notes.',
      },
      {
        href: Routes.Subnautica2SilverIngot,
        title: 'Silver Ingot',
        description:
          'Silver x3, Processor conversion, Advanced Battery, Tadpole Dock, and raw Silver buffer planning.',
      },
      {
        href: Routes.Subnautica2AirTank,
        title: 'Air Tank and O2',
        description:
          'Oxygen upgrades, Air Bladders, bubble sources, and safe early dive planning.',
      },
      {
        href: Routes.Subnautica2OxygenDepth,
        title: 'Oxygen and Depth',
        description:
          'Dive-readiness checks, turn-back rules, cave pressure, and deeper route planning.',
      },
      {
        href: Routes.Subnautica2Wakemaker,
        title: 'Wakemaker',
        description:
          'Fragment scan route, Life Pod 1 shallows, Lily Pads backup, recipe, and early swim timing.',
      },
      {
        href: Routes.Subnautica2Rebreather,
        title: 'Rebreather',
        description:
          'Blueprint Analyzer unlock, System Chip, Fiber Mesh, and deep-route oxygen planning.',
      },
      {
        href: Routes.Subnautica2ScannerStation,
        title: 'Scanner Station',
        description:
          'Base utility planning, System Chip, Copper Wire, Titanium, power margin, and resource search use.',
      },
      {
        href: Routes.Subnautica2Beacon,
        title: 'Beacon',
        description:
          'Copper and Titanium recipe, scan unlock, marker naming, exits, and route navigation.',
      },
      {
        href: Routes.Subnautica2RepairTool,
        title: 'Repair Tool',
        description:
          'Fragment scans, Titanium Ingot, Wiring Kit, Basic Battery, Sulfur, and safe repair prep.',
      },
      {
        href: Routes.Subnautica2Sulfur,
        title: 'Sulfur',
        description:
          'Early Lifepod route, hand pickups, Sonic Resonator bulk mining, Repair Tool use, and heat-route warning.',
      },
      {
        href: Routes.Subnautica2Quartz,
        title: 'Quartz',
        description:
          'Coral dome pickups, northwest Lifepod sweep, Glass, Scanner, System Chip, and Sonic Resonator bulk mining.',
      },
      {
        href: Routes.Subnautica2Glass,
        title: 'Glass',
        description:
          'Quartz x2, Salt alternate recipe, Fabricator, Processor, Habitat Builder, and upgrade chain planning.',
      },
      {
        href: Routes.Subnautica2Lithium,
        title: 'Lithium',
        description:
          'Great Jaw route, ruin pickup, Sonic Resonator mining, Plasteel Ingot, and High Capacity Air Tank prep.',
      },
      {
        href: Routes.Subnautica2PlasteelIngot,
        title: 'Plasteel Ingot',
        description:
          'Titanium x2, Lithium x1, Processor crafting, High Capacity Air Tank timing, and vehicle-chain planning.',
      },
      {
        href: Routes.Subnautica2Lead,
        title: 'Lead',
        description:
          'Northeast ravine route, blue current entry, hand pickups, Sonic Resonator unlock, and Germanium processing.',
      },
      {
        href: Routes.Subnautica2GermaniumIngot,
        title: 'Germanium Ingot',
        description:
          'Lead x2 or Silver x2, Processor crafting, input choice, and base-power uses.',
      },
      {
        href: Routes.Subnautica2Gold,
        title: 'Gold',
        description:
          'Volcanic vent route, Heat Tolerance gate, crashed colony ship farming, Advanced Wiring Kit, and Thermal Plant prep.',
      },
      {
        href: Routes.Subnautica2GoldIngot,
        title: 'Gold Ingot',
        description:
          'Gold x3, Processor crafting, raw Gold reserve, Entangled Power Cell, and Fabrication Station planning.',
      },
      {
        href: Routes.Subnautica2EntangledPowerCell,
        title: 'Entangled Power Cell',
        description:
          'Conduit Crystal, Strong Acid, Gold Ingot, Troilite, fragment scans, and late power planning.',
      },
      {
        href: Routes.Subnautica2HeatTolerance,
        title: 'Heat Tolerance',
        description:
          'Angel Comb route, Bloom clearing, Sonic Resonator prep, oxygen kit, and hot-biome access planning.',
      },
      {
        href: Routes.Subnautica2AngelComb,
        title: 'Angel Comb',
        description:
          'Bloom Biofilm clearing order, northwest search pocket, Sonic Resonator prep, and Heat Tolerance route safety.',
      },
      {
        href: Routes.Subnautica2BloomBiofilm,
        title: 'Bloom Biofilm',
        description:
          'Sonic Resonator controls, Bloom Cankers, Angel Comb blockers, Feedback Resonator timing, and common mistakes.',
      },
      {
        href: Routes.Subnautica2Salt,
        title: 'Salt',
        description:
          'Chap Black Box cave route, respawning early pickups, Power Cell priority, jerky caution, and Coral Gardens farming.',
      },
      {
        href: Routes.Subnautica2MetalSalvage,
        title: 'Metal Salvage',
        description:
          'Wreck debris pickup, Fabricator conversion, Salvaged Titanium, backpack space, and base-building stock.',
      },
      {
        href: Routes.Subnautica2FiberMesh,
        title: 'Fiber Mesh',
        description:
          'Creepvine material route, Fabricator recipe check, Wakemaker use, and storage timing.',
      },
      {
        href: Routes.Subnautica2Rubber,
        title: 'Rubber',
        description:
          'Lucifer Rotsac recipe, Fabricator timing, Basic Fins, Air Bladder, and Standard Air Tank planning.',
      },
      {
        href: Routes.Subnautica2BasicFins,
        title: 'Basic Fins',
        description:
          'First swim-speed upgrade, Rubber, Fiber or Fiber Mesh check, Fabricator timing, and Improved Fins planning.',
      },
      {
        href: Routes.Subnautica2ImprovedFins,
        title: 'Improved Fins',
        description:
          'Mid-game scan route, Basic Fins upgrade path, Fiber Mesh, Conduit Crystal, and Tadpole safety prep.',
      },
      {
        href: Routes.Subnautica2Scanner,
        title: 'Scanner and Bioscanner',
        description:
          'Blueprint scanning, Bioscanner upgrade route, Biomod unlocks, and route priorities.',
      },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        title: 'Bioscanner and Biomods',
        description:
          'Bioscanner timing, lifeform scan habits, Biomod priorities, and first upgrade choices.',
      },
      {
        href: Routes.Subnautica2SystemChip,
        title: 'System Chip',
        description:
          'Wiring Kit, Quartz, Silver prep, and electronics use for Tadpole and depth upgrades.',
      },
      {
        href: Routes.Subnautica2WiringKit,
        title: 'Wiring Kit',
        description:
          'Silver, Copper Wire, electronics storage, System Chip prep, and upgrade-material timing.',
      },
      {
        href: Routes.Subnautica2AdvancedWiringKit,
        title: 'Advanced Wiring Kit',
        description:
          'Wiring Kit, Gold, Sulfur, station wording, Dedicated Core, Heat Resistance Chip, and Scout Ray planning.',
      },
      {
        href: Routes.Subnautica2SonicResonator,
        title: 'Sonic Resonator',
        description:
          'Mining tool fragments, large ore use, route blockers, and Feedback Resonator prep.',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        title: 'Conduit Crystal',
        description:
          'Alien Ruins route, depth planning, Sonic Resonator mining, and upgrade material use.',
      },
      {
        href: Routes.Subnautica2FeedbackResonator,
        title: 'Feedback Resonator',
        description:
          'Sonic Resonator prep, Alien Ruins scan route, craft materials, and safe ranged clearing.',
      },
      {
        href: Routes.Subnautica2Celestine,
        title: 'Celestine',
        description:
          'Alien Ruins mining route, blue mineral veins, Needler risk, and Strontium processing.',
      },
      {
        href: Routes.Subnautica2CreatureEnamel,
        title: 'Creature Enamel',
        description:
          'Needler Mango route, Alien Ruins safety, Tadpole prep, and Enameled Glass planning.',
      },
      {
        href: Routes.Subnautica2EnameledGlass,
        title: 'Enameled Glass',
        description:
          'Glass recipe chain, Creature Enamel gate, craft timing, and upgrade storage.',
      },
      {
        href: Routes.Subnautica2Strontium,
        title: 'Strontium',
        description:
          'Celestine route, Processor conversion, and upgrade planning for advanced tools.',
      },
      {
        href: Routes.Subnautica2StrongAcid,
        title: 'Strong Acid',
        description:
          'Necrolei Cysts, Processor setup, Power Cell crafting, and Tadpole prep.',
      },
      {
        href: Routes.Subnautica2Tadpole,
        title: 'Tadpole Vehicle',
        description:
          'Fragment scanning, vehicle crafting, Power Cell prep, and upgrade planning.',
      },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        title: 'Tadpole Depth Module',
        description:
          'Mk.1 scan route, Alien Ruins Needler risk, Celestine, Enameled Glass, and deep route prep.',
      },
      {
        href: Routes.Subnautica2BaseBuilding,
        title: 'Base Building',
        description:
          'First base priorities, power, storage, route placement, and expansion rules.',
      },
      {
        href: Routes.Subnautica2BestBaseLocations,
        title: 'Best Base Locations',
        description:
          'Early, mid-route, and deep-route base placement notes for safer progression.',
      },
      {
        href: Routes.Subnautica2Troilite,
        title: 'Where to Find Troilite',
        description:
          'Late-route rare material guide for Mangalloy, Metal Farms, and safer planning.',
      },
      {
        href: Routes.Subnautica2MineralizedClinker,
        title: 'Mineralized Clinker Guide',
        description:
          'Deposit-name notes for Troilite routes after Hotfix 2 and late-game resource checks.',
      },
      {
        href: Routes.Subnautica2TroiliteSoftlock,
        title: 'Troilite Softlock Fix',
        description:
          'What to do if you spent your first Troilite before Metal Farm or Mangalloy planning.',
      },
      {
        href: Routes.Subnautica2Atacamite,
        title: 'Where to Find Atacamite',
        description:
          'Alien Ruins route notes for the other rare material in Mangalloy Ingots.',
      },
      {
        href: Routes.Subnautica2MetalFarm,
        title: 'Metal Farm Guide',
        description:
          'Blueprint scans, power planning, and rare-metal duplication workflow.',
      },
    ],
    patchEyebrow: 'Hotfix 2 tracker',
    patchTitle: 'Patch-sensitive pages to recheck first',
    patchBody:
      'Hotfix 2 changes early Silver availability and late-game Troilite resource areas. Start here when an old guide feels too harsh or too narrow.',
    patchLinks: [
      {
        href: Routes.Subnautica2Hotfix2,
        title: 'Hotfix 2 Changes',
        description:
          'Silver, Troilite, oxygen, Hammerhead, co-op, crashes, and affected guide pages.',
      },
      {
        href: Routes.Subnautica2SilverAfterHotfix2,
        title: 'Silver After Hotfix 2',
        description:
          'What changed in early Silver routing and what old advice needs rechecking.',
      },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        title: 'Troilite After Hotfix 2',
        description:
          'Late-game Troilite area changes and how to treat launch-week scarcity notes.',
      },
      {
        href: Routes.Subnautica2MineralizedClinker,
        title: 'Mineralized Clinker',
        description:
          'The deposit name players should watch for when following Troilite routes.',
      },
      {
        href: Routes.Subnautica2TroiliteSoftlock,
        title: 'Troilite Softlock Fix',
        description:
          'A recovery checklist for players who spent Troilite too early.',
      },
    ],
    editorialTitle: 'Editorial rule',
    editorialBody:
      'Exact resource locations, recipes, and platform details should be published only after gameplay verification or official/current sources. Early Access pages should show a visible last-updated date.',
    disclaimer:
      'Abyss Guides is an independent fan-made guide site and is not affiliated with Unknown Worlds Entertainment, Krafton, or the official Subnautica 2 team. Game names, trademarks, and assets belong to their respective owners.',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 攻略中心 - 新手、资源、制作、地图和联机',
      description:
        'Subnautica 2 中文攻略入口，整理新手路线、资源位置、制作链、地图生态区、联机建议和抢先体验更新。',
    },
    updated: '最后更新：2026 年 5 月 24 日',
    title: 'Subnautica 2 攻略中心',
    description:
      'Subnautica 2 还在抢先体验阶段，数据会变，攻略也要跟着改。这个入口先把新手路线、资源、制作、地图、联机和更新放在一起，方便玩家快速跳到要查的内容。',
    sections: [
      {
        href: Routes.Subnautica2Beginner,
        title: '新手指南',
        description: '第一局该先做什么，怎么安全往外探索，什么时候开始建家。',
      },
      {
        href: Routes.Subnautica2Resources,
        title: '资源',
        description: '材料表、采集路线和后续会补齐的单项资源位置页。',
      },
      {
        href: Routes.Subnautica2Crafting,
        title: '制作',
        description: '配方、蓝图解锁、材料链，以及后续制作计算器的数据结构。',
      },
      {
        href: Routes.Subnautica2Map,
        title: '地图与生态区',
        description: '按路线记录安全区、资源区、建家点和危险区域。',
      },
      {
        href: Routes.Subnautica2Coop,
        title: '联机',
        description: '队伍分工、共享仓库、建家规则和多人游玩常见问题。',
      },
      {
        href: Routes.Subnautica2Updates,
        title: '路线图和更新',
        description: '抢先体验补丁、官方路线图，以及需要回头更新的页面。',
      },
    ],
    priorityEyebrow: '高需求资源页',
    priorityTitle: '先做玩家最容易卡住的材料',
    priorityResources: [
      {
        href: Routes.Subnautica2Copper,
        title: '铜在哪里找',
        description: '开局电池、电子元件和扫描器相关路线。',
      },
      {
        href: Routes.Subnautica2CopperIngot,
        title: 'Copper Ingot 指南',
        description:
          'Copper x3、Processor 加工、Vehicle Fabricator 准备、Copper Wire 时机和原矿库存规划。',
      },
      {
        href: Routes.Subnautica2BatteryTerminal,
        title: 'Battery Terminal 指南',
        description:
          'Old Habitat 碎片路线、Habitat Builder 放置、Copper Wire 准备、6 格电池轮换和基地供电安全。',
      },
      {
        href: Routes.Subnautica2CopperWire,
        title: 'Copper Wire 指南',
        description:
          '2 Copper 配方、电池制作时机、Wiring Kit 前置和基地电子材料用途。',
      },
      {
        href: Routes.Subnautica2AdvancedBattery,
        title: 'Advanced Battery 指南',
        description:
          'Karakorum 碎片路线、Data Box 解锁、Conduit Crystal、Strong Acid、Silver Ingot、200 能量和充电轮换。',
      },
      {
        href: Routes.Subnautica2PowerCell,
        title: 'Power Cell 指南',
        description:
          'Basic Battery x2、Strong Acid、Salt、Fabricator 制作、Tadpole 用途和载具供电规划。',
      },
      {
        href: Routes.Subnautica2VehicleFabricator,
        title: 'Vehicle Fabricator 指南',
        description:
          'Moonpool 空间、Tadpole Dock 设置、当前配方数据、Power Cell 时机和载具区规划。',
      },
      {
        href: Routes.Subnautica2TadpoleDock,
        title: 'Tadpole Dock 指南',
        description:
          'Moonpool 摆放、Dock 下方空间、Titanium Ingot、Silver Ingot、Copper Wire 和 Tadpole 进出测试。',
      },
      {
        href: Routes.Subnautica2Moonpool,
        title: 'Moonpool 指南',
        description:
          '扫描 / Data Box 解锁线索、Titanium x5、Habitat Builder 摆放、Tadpole Dock 空间和空间不足修正。',
      },
      {
        href: Routes.Subnautica2InsufficientSpaceToDock,
        title: 'Insufficient Space to Dock 修复',
        description:
          'Moonpool 深度、Tadpole Dock 空间、进出路线、Vehicle Fabricator 距离和重建时机。',
      },
      {
        href: Routes.Subnautica2HabitatBuilder,
        title: 'Habitat Builder 指南',
        description:
          '扫描解锁、Titanium、Glass、Basic Battery、Copper Wire 和第一座基地准备。',
      },
      {
        href: Routes.Subnautica2Titanium,
        title: 'Titanium 位置',
        description:
          'Coral Gardens 节点、Metal Salvage 加工、Sonic Resonator 大矿、基地收纳和 ingot 规划。',
      },
      {
        href: Routes.Subnautica2Silver,
        title: '银在哪里找',
        description: '前期常见卡点，和氧气、电子制作都有关系。',
      },
      {
        href: Routes.Subnautica2SilverIngot,
        title: 'Silver Ingot 指南',
        description:
          'Silver x3、Processor 加工、Advanced Battery、Tadpole Dock 和原矿库存规划。',
      },
      {
        href: Routes.Subnautica2AirTank,
        title: '气瓶和氧气',
        description: '氧气升级、Air Bladder、气泡源和安全潜水节奏。',
      },
      {
        href: Routes.Subnautica2Wakemaker,
        title: 'Wakemaker 指南',
        description:
          '碎片扫描路线、Life Pod 1 浅滩、Lily Pads 备用路线、配方和前期游泳节奏。',
      },
      {
        href: Routes.Subnautica2Rebreather,
        title: 'Rebreather 指南',
        description:
          'Blueprint Analyzer 解锁、System Chip、Fiber Mesh 和深水氧气路线规划。',
      },
      {
        href: Routes.Subnautica2ScannerStation,
        title: 'Scanner Station 指南',
        description:
          '基地工具规划、System Chip、Copper Wire、Titanium、供电余量和资源搜索用途。',
      },
      {
        href: Routes.Subnautica2Beacon,
        title: 'Beacon 指南',
        description:
          'Copper 与 Titanium 配方、扫描解锁、标记命名、出口和路线导航。',
      },
      {
        href: Routes.Subnautica2RepairTool,
        title: 'Repair Tool 指南',
        description:
          '碎片扫描、Titanium Ingot、Wiring Kit、Basic Battery、Sulfur 和安全维修准备。',
      },
      {
        href: Routes.Subnautica2Sulfur,
        title: 'Sulfur 位置',
        description:
          'Lifepod 早期路线、手捡小块、Sonic Resonator 批量采集、Repair Tool 用途和热源提醒。',
      },
      {
        href: Routes.Subnautica2Quartz,
        title: 'Quartz 位置',
        description:
          '珊瑚穹顶手捡、Lifepod 西北路线、Glass、Scanner、System Chip 和 Sonic Resonator 批量采集。',
      },
      {
        href: Routes.Subnautica2Glass,
        title: 'Glass 配方',
        description:
          'Quartz x2、Salt 替代配方、Fabricator、Processor、Habitat Builder 和升级链规划。',
      },
      {
        href: Routes.Subnautica2Lithium,
        title: 'Lithium 位置',
        description:
          'The Great Jaw 路线、废墟外拾取、Sonic Resonator 挖矿、Plasteel Ingot 和高容量氧气瓶准备。',
      },
      {
        href: Routes.Subnautica2PlasteelIngot,
        title: 'Plasteel Ingot',
        description:
          'Titanium x2、Lithium x1、Processor 加工、高容量氧气瓶时机和载具链规划。',
      },
      {
        href: Routes.Subnautica2Lead,
        title: 'Lead 位置',
        description:
          '东北峡谷路线、蓝色水流入口、手捡小块、Sonic Resonator 解锁和 Germanium 加工。',
      },
      {
        href: Routes.Subnautica2GermaniumIngot,
        title: 'Germanium Ingot',
        description:
          'Lead x2 或 Silver x2、Processor 加工、原料选择和基地供电用途。',
      },
      {
        href: Routes.Subnautica2Gold,
        title: 'Gold 位置',
        description:
          '火山热泉路线、Heat Tolerance 门槛、坠毁殖民船采集、Advanced Wiring Kit 和 Thermal Plant 准备。',
      },
      {
        href: Routes.Subnautica2GoldIngot,
        title: 'Gold Ingot',
        description:
          'Gold x3、Processor 加工、原始 Gold 储备、Entangled Power Cell 和 Fabrication Station 规划。',
      },
      {
        href: Routes.Subnautica2EntangledPowerCell,
        title: 'Entangled Power Cell',
        description:
          'Conduit Crystal、Strong Acid、Gold Ingot、Troilite、碎片扫描和后期供电规划。',
      },
      {
        href: Routes.Subnautica2HeatTolerance,
        title: 'Heat Tolerance 指南',
        description:
          'Angel Comb 路线、Bloom 清理、Sonic Resonator 准备、氧气装备和热区入口规划。',
      },
      {
        href: Routes.Subnautica2AngelComb,
        title: 'Angel Comb 指南',
        description:
          'Bloom Biofilm 清理顺序、西北搜索区域、Sonic Resonator 准备和 Heat Tolerance 路线安全。',
      },
      {
        href: Routes.Subnautica2BloomBiofilm,
        title: 'Bloom Biofilm 指南',
        description:
          'Sonic Resonator 操作、Bloom Cankers、Angel Comb 卡关、Feedback Resonator 时机和常见错误。',
      },
      {
        href: Routes.Subnautica2Salt,
        title: 'Salt 位置',
        description:
          'Chap Black Box 洞穴路线、前期刷新拾取、Power Cell 优先级、jerky 提醒和 Coral Gardens 采集。',
      },
      {
        href: Routes.Subnautica2MetalSalvage,
        title: 'Metal Salvage 指南',
        description:
          '残骸拾取、Fabricator 加工、Salvaged Titanium、背包空间和基地建造储备。',
      },
      {
        href: Routes.Subnautica2FiberMesh,
        title: 'Fiber Mesh 指南',
        description:
          'Creepvine 材料路线、Fabricator 配方检查、Wakemaker 用途和前期收纳。',
      },
      {
        href: Routes.Subnautica2Rubber,
        title: 'Rubber 配方',
        description:
          'Lucifer Rotsac 配方、Fabricator 时机、Basic Fins、Air Bladder 和 Standard Air Tank 规划。',
      },
      {
        href: Routes.Subnautica2BasicFins,
        title: 'Basic Fins 指南',
        description:
          '第一件游速升级、Rubber、Fiber 或 Fiber Mesh 检查、Fabricator 时机和 Improved Fins 规划。',
      },
      {
        href: Routes.Subnautica2ImprovedFins,
        title: 'Improved Fins 指南',
        description:
          '中期扫描路线、Basic Fins 升级链、Fiber Mesh、Conduit Crystal 和 Tadpole 安全准备。',
      },
      {
        href: Routes.Subnautica2Scanner,
        title: '扫描器和生物扫描器',
        description: '蓝图扫描、升级路线、Biomod 解锁和探索优先级。',
      },
      {
        href: Routes.Subnautica2SystemChip,
        title: 'System Chip 指南',
        description:
          'Wiring Kit、Quartz、Silver 准备，以及 Tadpole 和深度升级用途。',
      },
      {
        href: Routes.Subnautica2WiringKit,
        title: 'Wiring Kit 指南',
        description:
          'Silver、Copper Wire、电子材料收纳、System Chip 前置和升级材料时机。',
      },
      {
        href: Routes.Subnautica2AdvancedWiringKit,
        title: 'Advanced Wiring Kit',
        description:
          'Wiring Kit、Gold、Sulfur、制作站写法、Dedicated Core、Heat Resistance Chip 和 Scout Ray 规划。',
      },
      {
        href: Routes.Subnautica2MildAcid,
        title: 'Mild Acid Guide',
        description:
          'Acidic Raion Pouch, Copper, Fabricator recipe, Processor route, and upgrade uses.',
      },
      {
        href: Routes.Subnautica2Processor,
        title: 'Processor Guide',
        description:
          'Scan unlock, Old Habitat lead, Titanium, Mild Acid, Copper Wire, and processing chains.',
      },
      {
        href: Routes.Subnautica2Biolab,
        title: 'Biolab Guide',
        description:
          'Welcome Center route, Titanium, Copper Wire, Mild Acid, and Biomod management.',
      },
      {
        href: Routes.Subnautica2EchoLocation,
        title: 'Echo Location Guide',
        description:
          'Modification Station recipe, Quartz, Mild Acid, Atacamite, and Tadpole resource ping use.',
      },
      {
        href: Routes.Subnautica2ModificationStation,
        title: 'Modification Station Guide',
        description:
          'Scan/Data Box unlock, Alien Ruins route, Titanium, Celestine, Copper, and upgrade crafting.',
      },
      {
        href: Routes.Subnautica2EngineEfficiency,
        title: 'Engine Efficiency Guide',
        description:
          'Tadpole power-saving module, 20% stack text, Modification Station recipe, and Alien Ruins pickup note.',
      },
      {
        href: Routes.Subnautica2StrongAcid,
        title: 'Strong Acid',
        description: 'Necrolei Cyst、Processor、动力电池和蝌蚪号准备。',
      },
      {
        href: Routes.Subnautica2Tadpole,
        title: '蝌蚪号载具',
        description: '碎片扫描、载具制作、动力电池和升级准备。',
      },
      {
        href: Routes.Subnautica2SonicResonator,
        title: 'Sonic Resonator 指南',
        description: '挖矿工具碎片、大矿节点、路线清障和后续远程升级前置。',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        title: 'Conduit Crystal 指南',
        description:
          'Alien Ruins 深水路线、Sonic Resonator 采集和工具升级材料用途。',
      },
      {
        href: Routes.Subnautica2CreatureEnamel,
        title: 'Creature Enamel 指南',
        description:
          'Needler Mango 路线、Alien Ruins 安全停靠、Tadpole 准备和 Enameled Glass 规划。',
      },
      {
        href: Routes.Subnautica2EnameledGlass,
        title: 'Enameled Glass 指南',
        description:
          'Glass 配方链、Creature Enamel 卡点、制作时机和升级材料存放。',
      },
      {
        href: Routes.Subnautica2BaseBuilding,
        title: '基地建造',
        description: '第一座基地、供电、仓库、路线位置和扩建节奏。',
      },
      {
        href: Routes.Subnautica2BestBaseLocations,
        title: '最佳建家位置',
        description: '前期、中期和深层路线的建家点选择。',
      },
      {
        href: Routes.Subnautica2Troilite,
        title: 'Troilite 在哪里找',
        description: 'Mangalloy、Metal Farm 和后期路线相关稀有材料。',
      },
      {
        href: Routes.Subnautica2MineralizedClinker,
        title: 'Mineralized Clinker 指南',
        description:
          'Hotfix 2 后找 Troilite 时要留意的矿点名称和后期路线说明。',
      },
      {
        href: Routes.Subnautica2Atacamite,
        title: 'Atacamite 在哪里找',
        description: '外星遗迹路线，以及 Mangalloy Ingot 相关材料。',
      },
      {
        href: Routes.Subnautica2MetalFarm,
        title: 'Metal Farm 指南',
        description: '扫描、供电、建造和稀有金属复制流程。',
      },
    ],
    patchEyebrow: 'Hotfix 2 更新追踪',
    patchTitle: '先复查这些补丁相关页面',
    patchBody:
      'Hotfix 2 改了前期银资源点，也增加了后期 Troilite 资源区域。遇到首发周攻略说法太绝对时，优先从这组页面重新核对。',
    patchLinks: [
      {
        href: Routes.Subnautica2Hotfix2,
        title: 'Hotfix 2 更新内容',
        description: '银、Troilite、氧气、Hammerhead、联机和崩溃修复整理。',
      },
      {
        href: Routes.Subnautica2SilverAfterHotfix2,
        title: 'Hotfix 2 后银怎么找',
        description: '前期银资源点增加后，旧路线哪些地方需要重新跑。',
      },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        title: 'Hotfix 2 后 Troilite 怎么找',
        description: '后期 Troilite 区域增加后，旧稀缺描述怎么判断。',
      },
      {
        href: Routes.Subnautica2MineralizedClinker,
        title: 'Mineralized Clinker',
        description:
          '跟 Troilite 路线相关的矿点名称，避免只盯着 Troilite 这个词找。',
      },
    ],
    editorialTitle: '收录规则',
    editorialBody:
      '中文页只放已经人工整理过的内容。没翻好的英文攻略不会进入中文 sitemap 和 hreflang。每篇正式攻略至少要有快速答案、表格或卡片、FAQ 或内链，以及清楚的最后更新时间。',
    disclaimer:
      'Abyss Guides 是独立玩家攻略站，和 Unknown Worlds Entertainment、Krafton 或 Subnautica 2 官方团队没有隶属关系。游戏名、商标和素材归各自权利方所有。',
  },
};

const hubCopyOverrides: Record<string, Partial<HubCopy>> = {
  ru: {
    metadata: {
      title: 'Subnautica 2 Guide Hub - ресурсы, крафт, карта и кооп',
      description:
        'Русский хаб по Subnautica 2: первые маршруты, ресурсы, крафт, карта, кооп и обновления Early Access.',
    },
    updated: 'Обновлено 23 мая 2026',
    title: 'Subnautica 2 Guide Hub',
    description:
      'Subnautica 2 находится в раннем доступе, поэтому точные данные могут меняться. Этот хаб собирает стартовые маршруты, ресурсы, крафт, карту, кооп и обновления в одном месте.',
    sections: [
      {
        href: Routes.Subnautica2Beginner,
        title: 'Гайд для новичков',
        description: 'Первые цели, безопасные маршруты, сканирование и база.',
      },
      {
        href: Routes.Subnautica2Resources,
        title: 'Ресурсы',
        description: 'Материалы, фарм и страницы отдельных ресурсов.',
      },
      {
        href: Routes.Subnautica2Crafting,
        title: 'Крафт',
        description: 'Рецепты, чертежи и цепочки материалов.',
      },
      {
        href: Routes.Subnautica2Map,
        title: 'Карта и биомы',
        description: 'Маршруты, безопасность, ресурсы и места для базы.',
      },
      {
        href: Routes.Subnautica2Coop,
        title: 'Кооп',
        description: 'Роли, общее хранилище и командная выживаемость.',
      },
      {
        href: Routes.Subnautica2Updates,
        title: 'Обновления',
        description:
          'Патчи Early Access и страницы, которые нужно перепроверить.',
      },
    ],
    editorialTitle: 'Правило публикации',
    editorialBody:
      'Локализованные страницы попадают в sitemap только после ручной подготовки. Непереведенные статьи остаются noindex.',
  },
  de: {
    metadata: {
      title: 'Subnautica 2 Guide Hub - Ressourcen, Crafting, Karte und Koop',
      description:
        'Deutscher Subnautica 2 Hub fuer Anfaenger, Ressourcen, Crafting, Karte, Koop und Early-Access-Updates.',
    },
    updated: 'Zuletzt aktualisiert am 23. Mai 2026',
    title: 'Subnautica 2 Guide Hub',
    description:
      'Subnautica 2 ist im Early Access, also koennen Details nach Patches wechseln. Dieser Hub sammelt Start-Routen, Ressourcen, Crafting, Karte, Koop und Updates.',
    sections: [
      {
        href: Routes.Subnautica2Beginner,
        title: 'Anfaenger-Guide',
        description: 'Erste Ziele, sichere Routen, Scans und Basisplanung.',
      },
      {
        href: Routes.Subnautica2Resources,
        title: 'Ressourcen',
        description: 'Materialien, Farming und einzelne Ressourcenseiten.',
      },
      {
        href: Routes.Subnautica2Crafting,
        title: 'Crafting',
        description: 'Rezepte, Blueprints und Materialketten.',
      },
      {
        href: Routes.Subnautica2Map,
        title: 'Karte und Biome',
        description: 'Routen, Sicherheit, Ressourcen und Basisorte.',
      },
      {
        href: Routes.Subnautica2Coop,
        title: 'Koop',
        description: 'Teamrollen, Lagerregeln und Multiplayer-Probleme.',
      },
      {
        href: Routes.Subnautica2Updates,
        title: 'Updates',
        description:
          'Early-Access-Patches und Seiten, die geprueft werden muessen.',
      },
    ],
    editorialTitle: 'SEO-Regel',
    editorialBody:
      'Lokalisierte Seiten kommen erst in sitemap und hreflang, wenn sie wirklich uebersetzt sind. Unfertige Artikel bleiben noindex.',
  },
  fr: {
    metadata: {
      title: 'Subnautica 2 Guide Hub - ressources, craft, carte et coop',
      description:
        'Hub francais pour Subnautica 2 : debuter, ressources, craft, carte, coop et mises a jour Early Access.',
    },
    updated: 'Mis a jour le 23 mai 2026',
    title: 'Hub de guides Subnautica 2',
    description:
      'Subnautica 2 est en Early Access, donc les details peuvent changer. Ce hub regroupe les routes de depart, les ressources, le craft, la carte, la coop et les mises a jour.',
    sections: [
      {
        href: Routes.Subnautica2Beginner,
        title: 'Guide debutant',
        description: 'Priorites de depart, routes sures, scan et base.',
      },
      {
        href: Routes.Subnautica2Resources,
        title: 'Ressources',
        description: 'Materiaux, farm et pages par ressource.',
      },
      {
        href: Routes.Subnautica2Crafting,
        title: 'Craft',
        description: 'Recettes, blueprints et chaines de materiaux.',
      },
      {
        href: Routes.Subnautica2Map,
        title: 'Carte et biomes',
        description: 'Routes, securite, ressources et bases.',
      },
      {
        href: Routes.Subnautica2Coop,
        title: 'Coop',
        description: 'Roles, stockage partage et problemes multijoueur.',
      },
      {
        href: Routes.Subnautica2Updates,
        title: 'Mises a jour',
        description: 'Patchs Early Access et pages a verifier.',
      },
    ],
    editorialTitle: 'Regle SEO',
    editorialBody:
      'Une page localisee entre dans le sitemap seulement quand elle est vraiment traduite. Les articles incomplets restent noindex.',
  },
  'pt-BR': {
    metadata: {
      title: 'Subnautica 2 Hub - recursos, fabricacao, mapa e coop',
      description:
        'Hub em portugues do Brasil para Subnautica 2: inicio, recursos, fabricacao, mapa, coop e atualizacoes do Early Access.',
    },
    updated: 'Atualizado em 23 de maio de 2026',
    title: 'Hub de guias de Subnautica 2',
    description:
      'Subnautica 2 esta em Early Access, entao detalhes mudam com patches. Este hub junta rotas iniciais, recursos, fabricacao, mapa, coop e atualizacoes.',
    sections: [
      {
        href: Routes.Subnautica2Beginner,
        title: 'Guia inicial',
        description: 'Primeiras prioridades, rotas seguras, scans e base.',
      },
      {
        href: Routes.Subnautica2Resources,
        title: 'Recursos',
        description: 'Materiais, farm e paginas de recursos.',
      },
      {
        href: Routes.Subnautica2Crafting,
        title: 'Fabricacao',
        description: 'Receitas, blueprints e cadeias de materiais.',
      },
      {
        href: Routes.Subnautica2Map,
        title: 'Mapa e biomas',
        description: 'Rotas, seguranca, recursos e locais de base.',
      },
      {
        href: Routes.Subnautica2Coop,
        title: 'Coop',
        description: 'Funcoes, armazenamento compartilhado e multiplayer.',
      },
      {
        href: Routes.Subnautica2Updates,
        title: 'Atualizacoes',
        description: 'Patches do Early Access e paginas para revisar.',
      },
    ],
    editorialTitle: 'Regra de SEO',
    editorialBody:
      'Uma pagina localizada so entra no sitemap depois de traducao real. Artigos incompletos continuam noindex.',
  },
  'es-419': {
    metadata: {
      title: 'Subnautica 2 Hub - recursos, fabricacion, mapa y cooperativo',
      description:
        'Hub en espanol latino para Subnautica 2: inicio, recursos, fabricacion, mapa, cooperativo y actualizaciones de Early Access.',
    },
    updated: 'Actualizado el 23 de mayo de 2026',
    title: 'Centro de guias de Subnautica 2',
    description:
      'Subnautica 2 esta en Early Access, asi que los datos pueden cambiar. Este hub junta rutas iniciales, recursos, fabricacion, mapa, cooperativo y actualizaciones.',
    sections: [
      {
        href: Routes.Subnautica2Beginner,
        title: 'Guia inicial',
        description: 'Primeras prioridades, rutas seguras, escaneo y base.',
      },
      {
        href: Routes.Subnautica2Resources,
        title: 'Recursos',
        description: 'Materiales, farmeo y paginas por recurso.',
      },
      {
        href: Routes.Subnautica2Crafting,
        title: 'Fabricacion',
        description: 'Recetas, blueprints y cadenas de materiales.',
      },
      {
        href: Routes.Subnautica2Map,
        title: 'Mapa y biomas',
        description: 'Rutas, seguridad, recursos y lugares para base.',
      },
      {
        href: Routes.Subnautica2Coop,
        title: 'Cooperativo',
        description: 'Roles, almacenamiento compartido y multijugador.',
      },
      {
        href: Routes.Subnautica2Updates,
        title: 'Actualizaciones',
        description: 'Parches de Early Access y paginas para revisar.',
      },
    ],
    editorialTitle: 'Regla SEO',
    editorialBody:
      'Una pagina localizada entra al sitemap solo cuando esta traducida de verdad. Los articulos incompletos siguen con noindex.',
  },
  ko: {
    metadata: {
      title: 'Subnautica 2 공략 허브 - 자원, 제작, 지도, 협동',
      description:
        'Subnautica 2 한국어 공략 허브입니다. 초반 루트, 자원, 제작, 지도, 협동 플레이, 얼리 액세스 업데이트를 정리합니다.',
    },
    updated: '마지막 업데이트: 2026년 5월 23일',
    title: 'Subnautica 2 공략 허브',
    description:
      'Subnautica 2는 얼리 액세스 게임이라 패치마다 정보가 바뀔 수 있습니다. 이 허브는 초반 루트, 자원, 제작, 지도, 협동, 업데이트를 한곳에 묶습니다.',
    sections: [
      {
        href: Routes.Subnautica2Beginner,
        title: '초보자 가이드',
        description: '첫 목표, 안전 루트, 스캔 습관, 기지 계획.',
      },
      {
        href: Routes.Subnautica2Resources,
        title: '자원',
        description: '재료표, 파밍 노트, 개별 자원 페이지.',
      },
      {
        href: Routes.Subnautica2Crafting,
        title: '제작',
        description: '레시피, 청사진, 재료 체인.',
      },
      {
        href: Routes.Subnautica2Map,
        title: '지도와 생태계',
        description: '루트, 안전도, 자원, 기지 후보.',
      },
      {
        href: Routes.Subnautica2Coop,
        title: '협동',
        description: '팀 역할, 공동 창고, 멀티플레이 문제.',
      },
      {
        href: Routes.Subnautica2Updates,
        title: '업데이트',
        description: '얼리 액세스 패치와 다시 확인할 페이지.',
      },
    ],
    editorialTitle: 'SEO 규칙',
    editorialBody:
      '현지화 페이지는 실제 번역이 끝난 뒤 sitemap에 넣습니다. 미완성 글은 noindex 상태로 둡니다.',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 攻略ハブ - 資源、クラフト、マップ、協力プレイ',
      description:
        'Subnautica 2 日本語攻略ハブ。序盤ルート、資源、クラフト、マップ、協力プレイ、早期アクセス更新を整理します。',
    },
    updated: '最終更新: 2026年5月23日',
    title: 'Subnautica 2 攻略ハブ',
    description:
      'Subnautica 2 は早期アクセス中なので、情報はパッチで変わります。このハブでは序盤ルート、資源、クラフト、マップ、協力プレイ、更新情報をまとめます。',
    sections: [
      {
        href: Routes.Subnautica2Beginner,
        title: '初心者ガイド',
        description: '最初の目標、安全なルート、スキャン、拠点計画。',
      },
      {
        href: Routes.Subnautica2Resources,
        title: '資源',
        description: '素材表、集め方、個別資源ページ。',
      },
      {
        href: Routes.Subnautica2Crafting,
        title: 'クラフト',
        description: 'レシピ、設計図、素材チェーン。',
      },
      {
        href: Routes.Subnautica2Map,
        title: 'マップとバイオーム',
        description: 'ルート、安全度、資源、拠点候補。',
      },
      {
        href: Routes.Subnautica2Coop,
        title: '協力プレイ',
        description: '役割分担、共有ストレージ、マルチプレイの注意点。',
      },
      {
        href: Routes.Subnautica2Updates,
        title: 'アップデート',
        description: '早期アクセスのパッチと再確認が必要なページ。',
      },
    ],
    editorialTitle: 'SEO ルール',
    editorialBody:
      'ローカライズ済みページだけを sitemap に入れます。未翻訳の記事は noindex のままにします。',
  },
};

function getHubCopy(locale: Locale): HubCopy {
  if (locale === 'zh') {
    return copyByLocale.zh;
  }

  return {
    ...copyByLocale.en,
    ...(locale ? hubCopyOverrides[locale] : {}),
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = getHubCopy(locale);

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2,
  });
}

export default async function Subnautica2HubPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getHubCopy(locale);

  return (
    <main className="bg-[#031314] text-[#dff8f0]">
      <Container className="px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bf6f45]">
            {copy.updated}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal md:text-6xl">
            {copy.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#a9c9c3]">
            {copy.description}
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {copy.sections.map((section) => (
            <LocaleLink
              key={section.title}
              id={section.href.split('/').pop()}
              href={section.href}
              className="border border-cyan-200/12 bg-[#071f23] p-5 transition hover:-translate-y-1 hover:border-cyan-200/40"
            >
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                {section.description}
              </p>
            </LocaleLink>
          ))}
        </div>

        <section className="mt-12 border border-cyan-200/12 bg-[#082226] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bf6f45]">
            {copy.priorityEyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#effffb]">
            {copy.priorityTitle}
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {copy.priorityResources.map((item) => (
              <LocaleLink
                key={item.title}
                href={item.href}
                className="border border-cyan-200/12 bg-[#071f23] p-5 transition hover:-translate-y-1 hover:border-cyan-200/40"
              >
                <h3 className="text-xl font-semibold text-[#78ead7]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                  {item.description}
                </p>
              </LocaleLink>
            ))}
          </div>
        </section>

        <section className="mt-12 overflow-hidden border border-cyan-200/12 bg-[#071f23]">
          <div className="border-b border-cyan-200/12 bg-[#0a2a30] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
              {copy.patchEyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[#effffb]">
              {copy.patchTitle}
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-[#abc8c3]">
              {copy.patchBody}
            </p>
          </div>
          <div className="grid md:grid-cols-2">
            {copy.patchLinks.map((item) => (
              <LocaleLink
                key={item.title}
                href={item.href}
                className="border-b border-cyan-200/10 p-5 transition hover:bg-cyan-300/5 md:border-r"
              >
                <h3 className="text-xl font-semibold text-[#78ead7]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                  {item.description}
                </p>
              </LocaleLink>
            ))}
          </div>
        </section>

        <section
          id="updates"
          className="mt-12 border border-cyan-200/12 bg-[#082226] p-6"
        >
          <h2 className="text-2xl font-semibold">{copy.editorialTitle}</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#abc8c3]">
            {copy.editorialBody}
          </p>
        </section>

        <p className="mt-12 text-sm leading-6 text-[#8ba39e]">
          {copy.disclaimer}
        </p>
      </Container>
    </main>
  );
}
