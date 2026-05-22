'use client';

import { cn } from '@/lib/utils';
import { WavesIcon } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex size-8 items-center justify-center rounded-xl',
        'border border-[#102a2a]/10 bg-[#d9f5ef] text-[#0f3834]',
        'shadow-[0_8px_18px_rgba(21,128,116,0.20)]',
        'dark:border-white/10 dark:bg-[#123432] dark:text-[#91f2dc]',
        className
      )}
    >
      <WavesIcon className="size-4" />
    </span>
  );
}
