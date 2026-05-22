import { AbyssGuidePage } from '@/components/abyss/guide-page';
import { BoxesIcon } from 'lucide-react';

export default function ResourcesGuidePage() {
  return (
    <AbyssGuidePage
      eyebrow="Material index"
      title="Subnautica 2 Resources Guide"
      description="A growing Early Access resource index for materials, farming routes, recipe uses, and biome notes."
      icon={BoxesIcon}
      quickAnswer="Use this page as the main resource index. Exact locations should be added only after gameplay verification or reliable current sources, because Early Access item placement can change."
      sections={[
        {
          title: 'Resource page format',
          body: 'Every resource page should answer the same player questions quickly: what it is used for, where to find it, what tools are required, what danger is nearby, and whether there is a better repeat route.',
          items: [
            'Where to find it',
            'Best early route',
            'Best repeat farming route',
            'Recipes that use it',
          ],
        },
        {
          title: 'Publish first',
          body: 'Start with materials players repeatedly search for, then expand into rarer resources once the guide data is verified.',
          items: ['Titanium', 'Copper Ore', 'Quartz', 'Silver Ore', 'Gold', 'Lead'],
        },
        {
          title: 'Farming principle',
          body: 'A good farming route is safe, repeatable, and easy to describe. A risky one-time discovery is less useful than a boring route that works every time.',
        },
        {
          title: 'Verification rule',
          body: 'Do not publish exact coordinates as final until they are checked in the current build. Mark uncertain entries clearly and update after major patches.',
        },
      ]}
    />
  );
}
