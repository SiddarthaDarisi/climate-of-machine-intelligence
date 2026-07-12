'use client';

import { useEffect, useRef, useState } from 'react';
import type { TimelineEvent, Temp } from '@/lib/types';

const nodeClasses: Record<Temp, string> = {
  warm: 'bg-thaw',
  cold: 'bg-frost',
  hot: 'bg-violet',
};

const tagLabels: Record<string, string> = {
  theory: 'Theory',
  hardware: 'Hardware',
  winter: 'AI Winter',
  industry: 'Industry',
  model: 'Model Release',
};

interface EventCardProps {
  event: TimelineEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-[3.5rem_1.5rem_1fr] gap-x-3 sm:grid-cols-[5rem_1.5rem_1fr] ${
        visible ? 'animate-fade-up opacity-100' : 'opacity-0'
      }`}
    >
      <div className="pt-1 text-right font-mono text-sm text-ink/70 sm:text-base">
        {event.year}
      </div>

      <div className="relative flex justify-center">
        <div className="h-full w-px bg-ink/15" aria-hidden="true" />
        <span
          className={`absolute top-1.5 rounded-full ${
            event.pivot ? 'h-4 w-4 bg-violet ring-4 ring-violet/20' : `h-3 w-3 ${nodeClasses[event.temp]}`
          }`}
          aria-hidden="true"
        />
      </div>

      <div
        tabIndex={0}
        className={`mb-8 rounded-md border border-ink/10 bg-white/40 p-4 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ink sm:p-5 ${
          event.pivot ? 'border-l-4 border-l-violet bg-violet/5' : ''
        }`}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-lg text-ink sm:text-xl">{event.title}</h3>
          {event.pivot && (
            <span className="font-mono text-[10px] uppercase tracking-widest text-violet">
              Pivot Moment
            </span>
          )}
        </div>
        <p className="mt-1 font-mono text-xs text-ink/60">{event.who}</p>
        <p className="mt-3 font-body text-sm leading-relaxed text-ink/85 sm:text-base">
          {event.body}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ink/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ink/60"
            >
              {tagLabels[tag] ?? tag}
            </span>
          ))}
        </div>
        {event.pivot && event.impact && (
          <div className="mt-4 rounded border border-violet/30 bg-violet/10 p-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-violet">
              {event.impact.label}
            </p>
            <p className="mt-1 font-body text-sm text-ink/85">{event.impact.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}
