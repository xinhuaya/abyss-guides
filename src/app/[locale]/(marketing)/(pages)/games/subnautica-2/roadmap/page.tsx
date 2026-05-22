import { AbyssGuidePage } from '@/components/abyss/guide-page';
import { RadioIcon } from 'lucide-react';

export default function RoadmapGuidePage() {
  return (
    <AbyssGuidePage
      eyebrow="Patch tracker"
      title="Subnautica 2 Roadmap and Updates"
      description="Track Early Access updates, player-facing changes, and the guide pages that need to be refreshed after each patch."
      icon={RadioIcon}
      quickAnswer="Subnautica 2 launched into Early Access on May 14, 2026. Because systems and content can change, roadmap and patch pages should link to official sources and show a visible last-updated date."
      sections={[
        {
          title: 'Track these changes',
          body: 'Not every patch note needs a full article. Focus on changes that alter how players explore, craft, build, fight, or play co-op.',
          items: ['New biomes', 'New resources', 'Recipe changes', 'Creature changes', 'Co-op fixes', 'Performance updates'],
        },
        {
          title: 'Update workflow',
          body: 'When a patch lands, update the roadmap summary first, then refresh affected resource, crafting, biome, settings, and co-op pages.',
        },
        {
          title: 'Source rule',
          body: 'Official patch notes should be the primary source. Gameplay testing can supplement them, but mark tested details with the date.',
        },
        {
          title: 'Newsletter angle',
          body: 'The update tracker can later become an email newsletter: what changed, which pages were updated, and what players should try next.',
        },
      ]}
    />
  );
}
