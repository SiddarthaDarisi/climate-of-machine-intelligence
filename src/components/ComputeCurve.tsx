const WIDTH = 800;
const HEIGHT = 400;
const MARGIN = { top: 24, right: 40, bottom: 50, left: 64 };
const PLOT_W = WIDTH - MARGIN.left - MARGIN.right;
const PLOT_H = HEIGHT - MARGIN.top - MARGIN.bottom;
const YEAR_MIN = 1950;
const YEAR_MAX = 2025;

// Illustrative, hand-authored log-scale compute points (v: 0 = least, 1 = most).
// Flat through both winters, near-vertical after AlexNet (2012). Not to scale.
const POINTS: { year: number; v: number }[] = [
  { year: 1950, v: 0.02 },
  { year: 1956, v: 0.035 },
  { year: 1969, v: 0.05 },
  { year: 1973, v: 0.055 },
  { year: 1980, v: 0.06 },
  { year: 1986, v: 0.1 },
  { year: 1987, v: 0.105 },
  { year: 1993, v: 0.11 },
  { year: 1997, v: 0.14 },
  { year: 2006, v: 0.2 },
  { year: 2009, v: 0.26 },
  { year: 2012, v: 0.38 },
  { year: 2016, v: 0.62 },
  { year: 2017, v: 0.7 },
  { year: 2020, v: 0.9 },
  { year: 2023, v: 0.97 },
  { year: 2025, v: 1.0 },
];

const WINTERS = [
  { label: 'Winter I', from: 1974, to: 1980 },
  { label: 'Winter II', from: 1987, to: 1993 },
];

const TICKS = [1950, 1960, 1970, 1980, 1990, 2000, 2012, 2020, 2025];

function yearToX(year: number) {
  return MARGIN.left + ((year - YEAR_MIN) / (YEAR_MAX - YEAR_MIN)) * PLOT_W;
}

function vToY(v: number) {
  return MARGIN.top + (1 - v) * PLOT_H;
}

export default function ComputeCurve() {
  const pathD = POINTS.map((p, i) => `${i === 0 ? 'M' : 'L'} ${yearToX(p.year)} ${vToY(p.v)}`).join(
    ' '
  );

  const alexnet = POINTS.find((p) => p.year === 2012)!;
  const gpt3 = POINTS.find((p) => p.year === 2020)!;

  return (
    <figure className="mx-auto max-w-5xl px-6 py-4">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-labelledby="compute-curve-title compute-curve-desc"
        className="w-full"
      >
        <title id="compute-curve-title">Illustrative training compute over time</title>
        <desc id="compute-curve-desc">
          A log-scale line chart of AI training compute from 1950 to 2025, flat through both AI
          winters and rising near-vertically after 2012.
        </desc>

        {WINTERS.map((w) => (
          <rect
            key={w.label}
            x={yearToX(w.from)}
            y={MARGIN.top}
            width={yearToX(w.to) - yearToX(w.from)}
            height={PLOT_H}
            className="fill-frost/15"
          />
        ))}
        {WINTERS.map((w) => (
          <text
            key={`${w.label}-label`}
            x={(yearToX(w.from) + yearToX(w.to)) / 2}
            y={MARGIN.top + 16}
            textAnchor="middle"
            className="fill-frost font-mono text-[10px] uppercase tracking-wide"
          >
            {w.label}
          </text>
        ))}

        <line
          x1={MARGIN.left}
          y1={MARGIN.top}
          x2={MARGIN.left}
          y2={HEIGHT - MARGIN.bottom}
          className="stroke-ink/30"
          strokeWidth={1}
        />
        <line
          x1={MARGIN.left}
          y1={HEIGHT - MARGIN.bottom}
          x2={WIDTH - MARGIN.right}
          y2={HEIGHT - MARGIN.bottom}
          className="stroke-ink/30"
          strokeWidth={1}
        />

        {TICKS.map((year) => (
          <g key={year}>
            <line
              x1={yearToX(year)}
              y1={HEIGHT - MARGIN.bottom}
              x2={yearToX(year)}
              y2={HEIGHT - MARGIN.bottom + 6}
              className="stroke-ink/30"
            />
            <text
              x={yearToX(year)}
              y={HEIGHT - MARGIN.bottom + 22}
              textAnchor="middle"
              className="fill-ink/60 font-mono text-[10px]"
            >
              {year}
            </text>
          </g>
        ))}

        <text
          x={-(HEIGHT / 2)}
          y={20}
          transform="rotate(-90)"
          textAnchor="middle"
          className="fill-ink/60 font-mono text-[10px] uppercase tracking-wide"
        >
          Training compute (log scale, illustrative)
        </text>

        <path d={pathD} fill="none" className="stroke-violet" strokeWidth={3} strokeLinecap="round" />

        <circle cx={yearToX(alexnet.year)} cy={vToY(alexnet.v)} r={5} className="fill-thaw" />
        <text
          x={yearToX(alexnet.year) + 8}
          y={vToY(alexnet.v) - 8}
          className="fill-ink font-mono text-[11px]"
        >
          AlexNet, 2012
        </text>

        <circle cx={yearToX(gpt3.year)} cy={vToY(gpt3.v)} r={5} className="fill-thaw" />
        <text
          x={yearToX(gpt3.year) + 8}
          y={vToY(gpt3.v) - 8}
          className="fill-ink font-mono text-[11px]"
        >
          GPT-3, 2020
        </text>
      </svg>
      <figcaption className="mt-2 font-mono text-xs text-ink/50">
        Illustrative only — not to scale. Shaded bands mark the First and Second AI Winters, when
        training compute growth stayed essentially flat regardless of any theoretical progress
        happening at the time.
      </figcaption>
    </figure>
  );
}
