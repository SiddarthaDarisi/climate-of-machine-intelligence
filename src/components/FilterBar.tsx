'use client';

import type { Tag } from '@/lib/types';

export type FilterTag = Tag | 'all';

const OPTIONS: { label: string; tag: FilterTag }[] = [
  { label: 'All', tag: 'all' },
  { label: 'Theory', tag: 'theory' },
  { label: 'Hardware', tag: 'hardware' },
  { label: 'AI Winter', tag: 'winter' },
  { label: 'Industry', tag: 'industry' },
  { label: 'Model Release', tag: 'model' },
];

interface FilterBarProps {
  activeTag: FilterTag;
  onChange: (tag: FilterTag) => void;
  visibleCount: number;
  totalCount: number;
}

export default function FilterBar({
  activeTag,
  onChange,
  visibleCount,
  totalCount,
}: FilterBarProps) {
  return (
    <div className="sticky top-0 z-20 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 px-6 py-3">
        {OPTIONS.map((opt) => {
          const isActive = opt.tag === activeTag;
          return (
            <button
              key={opt.tag}
              type="button"
              onClick={() => onChange(opt.tag)}
              aria-pressed={isActive}
              className={`rounded-full border px-3 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                isActive
                  ? 'border-ink bg-ink text-paper'
                  : 'border-ink/30 bg-transparent text-ink/70 hover:border-ink/60 hover:text-ink'
              }`}
            >
              {opt.label}
            </button>
          );
        })}
        <span className="ml-auto font-mono text-xs text-ink/60">
          {visibleCount} of {totalCount} shown
        </span>
      </div>
    </div>
  );
}
