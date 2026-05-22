import { AbyssGuidePage } from '@/components/abyss/guide-page';
import { CompassIcon } from 'lucide-react';

export default function BeginnerGuidePage() {
  return (
    <AbyssGuidePage
      eyebrow="Spoiler-light route"
      title="Subnautica 2 Beginner Guide"
      description="A practical first-session route for Early Access players who want to survive, scan, gather, and build without turning discovery into homework."
      icon={CompassIcon}
      quickAnswer="In your first Subnautica 2 session, stabilize before pushing deep: learn the safe area, collect common materials, scan anything useful, return before oxygen becomes risky, and build a small base only after a route proves useful."
      sections={[
        {
          title: 'First 10 minutes',
          body: 'Your first goal is not distance. It is stability. Learn the area around your start, identify safe landmarks, and collect common materials near reliable return paths.',
          items: [
            'Scan fragments, tools, base pieces, and anything that looks interactable.',
            'Avoid long caves until oxygen and route confidence improve.',
            'Treat every trip as a loop: leave, gather, return, craft, repeat.',
          ],
        },
        {
          title: 'First base rule',
          body: 'Your first base should reduce friction. Do not overbuild in a scenic place before you know whether that place helps your resource loop.',
          items: [
            'Good: close to common resources, clear landmarks, low danger.',
            'Bad: beautiful but isolated, cramped, hard to describe in co-op.',
          ],
        },
        {
          title: 'What to scan early',
          body: 'Scanning is progression. Prioritize anything that unlocks survival time, storage, power, base expansion, or mobility.',
        },
        {
          title: 'Common mistakes',
          body: 'Most early losses come from greed: pushing too deep, ignoring oxygen, chasing rare resources before basic tools, or building before scouting.',
        },
      ]}
    />
  );
}
