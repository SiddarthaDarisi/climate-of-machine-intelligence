'use client';

import { timeline } from '@/data/timeline';
import type { Temp } from '@/lib/types';

const tempClasses: Record<Temp, string> = {
  warm: 'bg-thaw',
  cold: 'bg-frost',
  hot: 'bg-violet',
};

function scrollToEra(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
}

export default function Barometer() {
  return (
    <section aria-label="Eras of AI history, sized by duration" className="bg-paper py-6">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
          The Barometer — click a band to jump there
        </p>
        <div className="flex h-16 w-full overflow-hidden rounded-sm border border-ink/20 sm:h-20">
          {timeline.map((era) => (
            <button
              key={era.id}
              type="button"
              onClick={() => scrollToEra(era.id)}
              style={{ flexGrow: era.weight }}
              className={`group relative flex h-full min-w-[2.5rem] flex-col items-center justify-center border-r border-ink/20 last:border-r-0 ${tempClasses[era.temp]} transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink`}
              aria-label={`Jump to ${era.name}, ${era.years}`}
            >
              <span className="font-mono text-[10px] text-paper/90 sm:text-xs">
                {era.years.split('–')[0]}
              </span>
              <span className="pointer-events-none absolute -bottom-7 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-ink px-2 py-1 font-mono text-[10px] text-paper opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
                {era.name}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-2 flex justify-between font-mono text-[10px] text-ink/50">
          <span>1943</span>
          <span>2025</span>
        </div>
      </div>
    </section>
  );
}
