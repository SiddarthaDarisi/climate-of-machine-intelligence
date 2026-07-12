import { totalEventCount } from '@/data/timeline';

export default function Hero() {
  return (
    <header className="border-b border-frost/30 bg-ink text-paper">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-thaw">
          A Graduate Discussion Primer
        </p>
        <h1 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">
          The Climate of Machine Intelligence
        </h1>
        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-paper/80 sm:text-lg">
          AI history does not move in a straight line — it moves like weather. Warm
          springs of funding and optimism give way to cold winters of disillusionment,
          then boil over into hot booms of rapid deployment. This timeline reads{' '}
          {totalEventCount} milestones from 1943 to 2025 through that lens, and argues
          that the winters were failures of hardware and funding, not of ideas.
        </p>
        <p className="mt-4 font-mono text-xs text-frost">
          Scroll, filter by theme, or click a band in the barometer below to jump to an era.
        </p>
      </div>
    </header>
  );
}
