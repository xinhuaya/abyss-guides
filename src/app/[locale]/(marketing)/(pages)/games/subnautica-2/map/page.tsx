import { AbyssGuidePage } from '@/components/abyss/guide-page';
import { MapIcon } from 'lucide-react';

export default function MapGuidePage() {
  return (
    <AbyssGuidePage
      eyebrow="Route planning"
      title="Subnautica 2 Map and Biomes Guide"
      description="A route-first map guide for safe exploration, resource zones, biome notes, danger areas, and base planning."
      icon={MapIcon}
      quickAnswer="In Subnautica 2, reliable routes matter more than memorizing the whole world. Build your map knowledge around landmarks, safe loops, resource clusters, and return paths."
      sections={[
        {
          title: 'Explore by loops',
          body: 'Start from a landmark, move toward one goal, note resources and threats, then return before oxygen or supplies become risky.',
          items: ['Leave from a known point', 'Follow one direction', 'Record useful resources', 'Return safely', 'Repeat until familiar'],
        },
        {
          title: 'Biome page format',
          body: 'Each biome page should include safety, depth notes, common resources, rare resources, creature threats, base potential, and recommended equipment.',
        },
        {
          title: 'Base-friendly signs',
          body: 'A good base area is safe enough for repeated trips, close to common resources, easy to find, and near routes that will matter later.',
        },
        {
          title: 'Danger notes',
          body: 'A danger note should be practical: what threatens the player, what warning signs appear, and what route avoids unnecessary risk.',
        },
      ]}
    />
  );
}
