import { cn } from '@/lib/utils';
import Image from 'next/image';

export function MkSaaSLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/mksaas.png"
      alt="Logo of Abyss Guides"
      title="Logo of Abyss Guides"
      width={96}
      height={96}
      className={cn('size-8 rounded-md', className)}
    />
  );
}
