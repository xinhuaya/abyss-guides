'use client';

import { LocaleLink } from '@/i18n/navigation';
import { Routes } from '@/routes';
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  CircleIcon,
  RotateCcwIcon,
  SearchIcon,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import { useEffect, useMemo, useState } from 'react';

type FilterKey = 'all' | 'early' | 'base' | 'vehicle' | 'crafting';

type ChecklistItem = {
  id: string;
  name: string;
  note: string;
  href: Routes;
  filters: Exclude<FilterKey, 'all'>[];
};

type ChecklistGroup = {
  title: string;
  description: string;
  items: ChecklistItem[];
};

const STORAGE_KEY = 'abyss-subnautica-2-resource-checklist-v1';

const groups: ChecklistGroup[] = [
  {
    title: 'First-hour materials',
    description:
      'Good early checks before you commit to a deeper route or a larger base.',
    items: [
      {
        id: 'titanium',
        name: 'Titanium',
        note: 'Keep a small stack for base parts, tools, and emergency rebuilds.',
        href: Routes.Subnautica2Titanium,
        filters: ['early', 'base', 'crafting'],
      },
      {
        id: 'copper',
        name: 'Copper',
        note: 'Battery, wire, scanner, and electronics progress all touch Copper.',
        href: Routes.Subnautica2Copper,
        filters: ['early', 'crafting'],
      },
      {
        id: 'quartz',
        name: 'Quartz',
        note: 'Glass and scanner chains start here; mark the return path.',
        href: Routes.Subnautica2Quartz,
        filters: ['early', 'crafting'],
      },
      {
        id: 'silver',
        name: 'Silver',
        note: 'Common blocker for Wiring Kit, Scanner Station, and early upgrades.',
        href: Routes.Subnautica2Silver,
        filters: ['early', 'crafting'],
      },
      {
        id: 'sulfur',
        name: 'Sulfur',
        note: 'Repair Tool prep. Avoid panic farming without enough oxygen.',
        href: Routes.Subnautica2Sulfur,
        filters: ['early', 'crafting'],
      },
      {
        id: 'salt',
        name: 'Salt',
        note: 'Power Cell and food planning material; do not spend all of it casually.',
        href: Routes.Subnautica2Salt,
        filters: ['early', 'crafting'],
      },
    ],
  },
  {
    title: 'Base-building checks',
    description:
      'Core parts that stop a first base from turning into a storage mess.',
    items: [
      {
        id: 'habitat-builder',
        name: 'Habitat Builder',
        note: 'Confirm tool materials before choosing a base site.',
        href: Routes.Subnautica2HabitatBuilder,
        filters: ['base', 'crafting'],
      },
      {
        id: 'fabricator',
        name: 'Fabricator',
        note: 'The base station that turns resource runs into finished kit.',
        href: Routes.Subnautica2Fabricator,
        filters: ['base', 'crafting'],
      },
      {
        id: 'processor',
        name: 'Processor',
        note: 'Resource conversion starts here; keep raw material buffers.',
        href: Routes.Subnautica2Processor,
        filters: ['base', 'crafting'],
      },
      {
        id: 'biolab',
        name: 'Biolab',
        note: 'Useful once your route starts collecting biological materials.',
        href: Routes.Subnautica2Biolab,
        filters: ['base', 'crafting'],
      },
      {
        id: 'scanner-station',
        name: 'Scanner Station',
        note: 'Plan power margin before you place it.',
        href: Routes.Subnautica2ScannerStation,
        filters: ['base'],
      },
      {
        id: 'battery-terminal',
        name: 'Battery Terminal',
        note: 'Stops tool rotation from becoming a backpack problem.',
        href: Routes.Subnautica2BatteryTerminal,
        filters: ['base', 'crafting'],
      },
    ],
  },
  {
    title: 'Vehicle prep',
    description:
      'Checks to run before building around Tadpole travel, docking, and depth.',
    items: [
      {
        id: 'tadpole',
        name: 'Tadpole',
        note: 'Treat it as a route hub, not just a fast swim upgrade.',
        href: Routes.Subnautica2Tadpole,
        filters: ['vehicle'],
      },
      {
        id: 'vehicle-fabricator',
        name: 'Vehicle Fabricator',
        note: 'Check space, power, and recipe timing before moving your base.',
        href: Routes.Subnautica2VehicleFabricator,
        filters: ['vehicle', 'base'],
      },
      {
        id: 'tadpole-dock',
        name: 'Tadpole Dock',
        note: 'Leave clearance and test the approach path before decorating.',
        href: Routes.Subnautica2TadpoleDock,
        filters: ['vehicle', 'base'],
      },
      {
        id: 'moonpool',
        name: 'Moonpool',
        note: 'Depth and approach space matter more than a pretty view.',
        href: Routes.Subnautica2Moonpool,
        filters: ['vehicle', 'base'],
      },
      {
        id: 'power-cell',
        name: 'Power Cell',
        note: 'Pack one before long vehicle routes and keep charging plans simple.',
        href: Routes.Subnautica2PowerCell,
        filters: ['vehicle', 'crafting'],
      },
      {
        id: 'depth-module',
        name: 'Tadpole Depth Module',
        note: 'Do not follow deep-route notes before checking the module chain.',
        href: Routes.Subnautica2TadpoleDepthModule,
        filters: ['vehicle', 'crafting'],
      },
    ],
  },
  {
    title: 'Crafting blockers',
    description:
      'Recipe chain pieces that players often notice only after a return trip.',
    items: [
      {
        id: 'basic-battery',
        name: 'Basic Battery',
        note: 'First tool power. Keep spare Copper instead of crafting blindly.',
        href: Routes.Subnautica2BasicBattery,
        filters: ['early', 'crafting'],
      },
      {
        id: 'copper-wire',
        name: 'Copper Wire',
        note: 'Needed often enough that two raw Copper is rarely enough.',
        href: Routes.Subnautica2CopperWire,
        filters: ['crafting'],
      },
      {
        id: 'wiring-kit',
        name: 'Wiring Kit',
        note: 'Silver bottleneck. Make one only after checking the next craft.',
        href: Routes.Subnautica2WiringKit,
        filters: ['crafting'],
      },
      {
        id: 'advanced-wiring-kit',
        name: 'Advanced Wiring Kit',
        note: 'Gold and Sulfur planning matters after the first base loop.',
        href: Routes.Subnautica2AdvancedWiringKit,
        filters: ['crafting'],
      },
      {
        id: 'glass',
        name: 'Glass',
        note: 'Quartz sink for Habitat Builder, scanner, and upgrade chains.',
        href: Routes.Subnautica2Glass,
        filters: ['base', 'crafting'],
      },
      {
        id: 'plasteel-ingot',
        name: 'Plasteel Ingot',
        note: 'Mid-route craft. Check Lithium before you promise yourself a depth run.',
        href: Routes.Subnautica2PlasteelIngot,
        filters: ['vehicle', 'crafting'],
      },
    ],
  },
  {
    title: 'Advanced route flags',
    description:
      'Late or deeper-route materials worth tracking before you spend the first pickup.',
    items: [
      {
        id: 'lithium',
        name: 'Lithium',
        note: 'Plasteel and air-tank planning material.',
        href: Routes.Subnautica2Lithium,
        filters: ['vehicle', 'crafting'],
      },
      {
        id: 'gold',
        name: 'Gold',
        note: 'Electronics and advanced chains. Keep a raw reserve.',
        href: Routes.Subnautica2Gold,
        filters: ['crafting'],
      },
      {
        id: 'conduit-crystal',
        name: 'Conduit Crystal',
        note: 'Upgrade material tied to deeper route safety.',
        href: Routes.Subnautica2ConduitCrystal,
        filters: ['vehicle', 'crafting'],
      },
      {
        id: 'strong-acid',
        name: 'Strong Acid',
        note: 'Power Cell and advanced crafting chains can drain it fast.',
        href: Routes.Subnautica2StrongAcid,
        filters: ['vehicle', 'crafting'],
      },
      {
        id: 'troilite',
        name: 'Troilite',
        note: 'Rare route material. Read the softlock note before spending it.',
        href: Routes.Subnautica2Troilite,
        filters: ['crafting'],
      },
      {
        id: 'mineralized-clinker',
        name: 'Mineralized Clinker',
        note: 'Deposit-name note tied to late resource checks.',
        href: Routes.Subnautica2MineralizedClinker,
        filters: ['crafting'],
      },
    ],
  },
];

const filterCopy: Record<FilterKey, { label: string; description: string }> = {
  all: {
    label: 'All',
    description: 'Show every checklist item.',
  },
  early: {
    label: 'Early game',
    description: 'First-hour materials and tools.',
  },
  base: {
    label: 'Base building',
    description: 'Habitat, storage, and utility station prep.',
  },
  vehicle: {
    label: 'Vehicle',
    description: 'Tadpole, dock, power, and depth planning.',
  },
  crafting: {
    label: 'Crafting',
    description: 'Recipe blockers and conversion chains.',
  },
};

const zhText = {
  saved: '已勾选',
  reset: '重置',
  open: '打开攻略',
  search: '搜索材料或工具',
  progress: '当前进度',
  localOnly: '状态只保存在当前浏览器。',
};

const enText = {
  saved: 'checked',
  reset: 'Reset',
  open: 'Open guide',
  search: 'Search material or tool',
  progress: 'Current progress',
  localOnly: 'Saved in this browser only.',
};

export function ResourceChecklist({ locale }: { locale?: Locale }) {
  const text = locale === 'zh' ? zhText : enText;
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return;
    }

    try {
      setChecked(JSON.parse(saved));
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  const allItems = useMemo(() => groups.flatMap((group) => group.items), []);
  const checkedCount = allItems.filter((item) => checked[item.id]).length;
  const progress = Math.round((checkedCount / allItems.length) * 100);
  const normalizedQuery = query.trim().toLowerCase();

  const filteredGroups = groups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        const matchesFilter =
          activeFilter === 'all' || item.filters.includes(activeFilter);
        const matchesQuery =
          normalizedQuery.length === 0 ||
          item.name.toLowerCase().includes(normalizedQuery) ||
          item.note.toLowerCase().includes(normalizedQuery);

        return matchesFilter && matchesQuery;
      }),
    }))
    .filter((group) => group.items.length > 0);

  function toggleItem(id: string) {
    setChecked((current) => ({ ...current, [id]: !current[id] }));
  }

  function resetChecklist() {
    setChecked({});
  }

  return (
    <section className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
        <div className="border border-cyan-200/14 bg-[#071f23] p-4">
          <label
            className="flex items-center gap-2 text-sm font-semibold text-[#effffb]"
            htmlFor="resource-checklist-search"
          >
            <SearchIcon className="size-4 text-[#78ead7]" />
            {text.search}
          </label>
          <input
            className="mt-3 min-h-11 w-full border border-cyan-200/15 bg-[#020b0d] px-3 text-sm text-[#dff8f0] outline-none placeholder:text-[#6f8f88]"
            id="resource-checklist-search"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Silver, Tadpole, Wiring Kit..."
            value={query}
          />
        </div>

        <div className="border border-cyan-200/14 bg-[#082226] p-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
                {text.progress}
              </p>
              <p className="mt-1 text-2xl font-semibold text-[#effffb]">
                {checkedCount}/{allItems.length}
              </p>
            </div>
            <button
              className="inline-flex min-h-10 items-center gap-2 border border-cyan-200/15 px-3 text-sm font-semibold text-[#78ead7] transition hover:bg-cyan-300/10"
              onClick={resetChecklist}
              type="button"
            >
              <RotateCcwIcon className="size-4" />
              {text.reset}
            </button>
          </div>
          <div className="mt-4 h-2 overflow-hidden bg-[#031314]">
            <div
              className="h-full bg-[#f08b4f]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-xs text-[#8fb8b1]">{text.localOnly}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {(Object.keys(filterCopy) as FilterKey[]).map((filter) => (
          <button
            className={`min-h-10 border px-3 text-sm font-semibold transition ${
              activeFilter === filter
                ? 'border-[#f08b4f]/60 bg-[#f08b4f]/18 text-[#ffc4a1]'
                : 'border-cyan-200/15 bg-[#061d22] text-[#a9c9c3] hover:border-cyan-200/35 hover:text-[#78ead7]'
            }`}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            title={filterCopy[filter].description}
            type="button"
          >
            {filterCopy[filter].label}
          </button>
        ))}
      </div>

      <div className="grid gap-5">
        {filteredGroups.map((group) => (
          <section
            className="border border-cyan-200/14 bg-[#061d22]"
            key={group.title}
          >
            <div className="border-b border-cyan-200/10 p-5">
              <h2 className="break-words text-2xl font-semibold text-[#effffb]">
                {group.title}
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#abc8c3]">
                {group.description}
              </p>
            </div>
            <div className="grid gap-px bg-cyan-200/10 md:grid-cols-2 xl:grid-cols-3">
              {group.items.map((item) => {
                const isChecked = Boolean(checked[item.id]);

                return (
                  <article className="min-w-0 bg-[#071f23] p-4" key={item.id}>
                    <button
                      className="group flex w-full min-w-0 items-start gap-3 text-left"
                      onClick={() => toggleItem(item.id)}
                      type="button"
                    >
                      {isChecked ? (
                        <CheckCircle2Icon className="mt-0.5 size-5 shrink-0 text-[#78ead7]" />
                      ) : (
                        <CircleIcon className="mt-0.5 size-5 shrink-0 text-[#7baaa2]" />
                      )}
                      <span className="min-w-0">
                        <span
                          className={`block break-words font-semibold ${
                            isChecked
                              ? 'text-[#78ead7]'
                              : 'text-[#effffb] group-hover:text-[#78ead7]'
                          }`}
                        >
                          {item.name}
                        </span>
                        <span className="mt-2 block break-words text-sm leading-6 text-[#abc8c3]">
                          {item.note}
                        </span>
                      </span>
                    </button>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs uppercase tracking-[0.14em] text-[#8fb8b1]">
                        {isChecked ? text.saved : item.filters.join(' / ')}
                      </span>
                      <LocaleLink
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#78ead7] hover:underline"
                        href={item.href}
                      >
                        {text.open}
                        <ArrowRightIcon className="size-4" />
                      </LocaleLink>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
