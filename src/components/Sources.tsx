const CITATIONS = [
  'Putchuon. (n.d.). The entire history of artificial intelligence [Video]. YouTube.',
  'IEEE Computer Society. (n.d.). The evolution of AI. IEEE Computer Society.',
  'Roser, M., Hasell, J., Herre, B., & Mathieu, E. (2023). A brief history of artificial intelligence. Our World in Data.',
  'Lighthill, J. (1973). Artificial intelligence: A general survey. Science Research Council.',
  'Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). Learning representations by back-propagating errors. Nature, 323(6088), 533–536.',
  'Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. Advances in Neural Information Processing Systems, 25.',
  'Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is all you need. Advances in Neural Information Processing Systems, 30.',
  'Russell, S., & Norvig, P. (2020). Artificial intelligence: A modern approach (4th ed.). Pearson.',
];

export default function Sources() {
  return (
    <section className="border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="font-display text-2xl sm:text-3xl">Sources</h2>
        <ol className="mt-6 space-y-3 font-body text-sm leading-relaxed text-paper/80 sm:text-base">
          {CITATIONS.map((c, i) => (
            <li key={i} className="border-b border-paper/10 pb-3 last:border-b-0">
              {c}
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-md border border-thaw/40 bg-thaw/10 p-5">
          <p className="font-mono text-xs uppercase tracking-widest text-thaw">
            AI Tools Used — Disclosure
          </p>
          <p className="mt-3 font-body text-sm leading-relaxed text-paper/85 sm:text-base">
            Claude was used to compile milestones and draft copy for this timeline. Dates,
            attributions, and the stated causes of each AI winter were verified against the
            sources listed above. The climate framing, the selection of which moments count as
            pivots, and the thesis that both AI winters were failures of hardware and funding
            rather than of ideas are the author&apos;s own editorial choices.
          </p>
        </div>
      </div>
    </section>
  );
}
