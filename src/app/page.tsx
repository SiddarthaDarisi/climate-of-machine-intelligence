'use client';

import { useMemo, useState } from 'react';
import Hero from '@/components/Hero';
import Barometer from '@/components/Barometer';
import FilterBar, { type FilterTag } from '@/components/FilterBar';
import EraSection from '@/components/EraSection';
import ComputeCurve from '@/components/ComputeCurve';
import Sources from '@/components/Sources';
import { timeline, totalEventCount } from '@/data/timeline';

export default function Home() {
  const [activeTag, setActiveTag] = useState<FilterTag>('all');

  const filteredEras = useMemo(() => {
    return timeline.map((era) => ({
      era,
      events:
        activeTag === 'all'
          ? era.events
          : era.events.filter((event) => event.tags.includes(activeTag)),
    }));
  }, [activeTag]);

  const visibleCount = useMemo(
    () => filteredEras.reduce((sum, { events }) => sum + events.length, 0),
    [filteredEras]
  );

  return (
    <main>
      <Hero />
      <Barometer />
      <ComputeCurve />
      <FilterBar
        activeTag={activeTag}
        onChange={setActiveTag}
        visibleCount={visibleCount}
        totalCount={totalEventCount}
      />
      <div>
        {filteredEras.map(({ era, events }) => (
          <EraSection key={era.id} era={era} events={events} />
        ))}
      </div>
      <Sources />
    </main>
  );
}
