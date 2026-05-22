import { AbyssGuidePage } from '@/components/abyss/guide-page';
import { WrenchIcon } from 'lucide-react';

export default function CraftingGuidePage() {
  return (
    <AbyssGuidePage
      eyebrow="Blueprint tracker"
      title="Subnautica 2 Crafting Recipes"
      description="Track tools, blueprints, base pieces, upgrades, and recipe dependencies as Subnautica 2 changes through Early Access."
      icon={WrenchIcon}
      quickAnswer="Crafting should be organized around player goals: survival time, scanning progress, storage, power, base growth, and safe access to deeper routes."
      sections={[
        {
          title: 'Recipe structure',
          body: 'Each recipe should list category, required materials, unlock method, and update status. This structure also becomes the database for a future crafting calculator.',
          items: ['Item', 'Category', 'Materials', 'Unlock method', 'Last verified patch'],
        },
        {
          title: 'Early priorities',
          body: 'Prioritize recipes that let players stay out longer, scan more, carry more, or return safely. Decorative or late-route items can come after the core loop is stable.',
        },
        {
          title: 'Calculator plan',
          body: 'The first tool should let a player choose an item and instantly see required materials, nested materials, and links to resource pages.',
        },
        {
          title: 'Update rule',
          body: 'If a patch changes recipes, update the recipe table first, then update individual resource pages that depend on those recipes.',
        },
      ]}
    />
  );
}
