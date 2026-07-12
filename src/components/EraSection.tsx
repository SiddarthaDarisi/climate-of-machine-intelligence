import type { Era, TimelineEvent, Temp } from '@/lib/types';
import EventCard from './EventCard';

const badgeClasses: Record<Temp, string> = {
  warm: 'bg-thaw/15 text-thaw border-thaw/40',
  cold: 'bg-frost/15 text-frost border-frost/40',
  hot: 'bg-violet/15 text-violet border-violet/40',
};

const tempWord: Record<Temp, string> = {
  warm: 'Warm',
  cold: 'Cold',
  hot: 'Hot',
};

interface EraSectionProps {
  era: Era;
  events: TimelineEvent[];
}

export default function EraSection({ era, events }: EraSectionProps) {
  if (events.length === 0) return null;

  return (
    <section id={era.id} className="scroll-mt-16 border-b border-ink/10 py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">{era.name}</h2>
            <span
              className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${badgeClasses[era.temp]}`}
            >
              {tempWord[era.temp]}
            </span>
          </div>
          <p className="mt-1 font-mono text-sm text-ink/60">{era.years}</p>
          <p className="mt-3 font-body text-sm leading-relaxed text-ink/75 sm:text-base">
            {era.note}
          </p>
        </div>

        <div>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
