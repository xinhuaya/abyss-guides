import { AbyssGuidePage } from '@/components/abyss/guide-page';
import { UsersIcon } from 'lucide-react';

export default function CoopGuidePage() {
  return (
    <AbyssGuidePage
      eyebrow="Team survival"
      title="Subnautica 2 Co-op Guide"
      description="A practical multiplayer guide for shared bases, role splitting, storage habits, route planning, and Early Access co-op checks."
      icon={UsersIcon}
      quickAnswer="Subnautica 2 supports online co-op. Co-op is faster and safer when teams agree on roles, storage rules, base location, and route names before everyone swims in different directions."
      sections={[
        {
          title: 'Before you start',
          body: 'Check platform compatibility, host rules, save ownership, crossplay status, voice setup, and known current-patch co-op issues.',
        },
        {
          title: 'Useful roles',
          body: 'Small teams do not need strict jobs, but roles prevent four players from doing the same thing while the base has no storage or power.',
          items: ['Scout', 'Gatherer', 'Builder', 'Crafter'],
        },
        {
          title: 'Storage rule',
          body: 'Shared storage becomes messy fast. Organize by material type early and agree before spending rare resources on upgrades.',
        },
        {
          title: 'Route naming',
          body: 'Use simple route names tied to landmarks. Clear route names are more useful than vague calls like "over here" in an unfamiliar ocean.',
        },
      ]}
    />
  );
}
