import React from 'react'

type Item = { title: string; desc: string }

type Props = {
  title: string
  items: Item[]
  /** Optional styling hooks */
  titleClassName?: string
  borderClassName?: string
  /** 'grid' (default) = classic two-column; 'rowMobile' = horizontal row that wraps */
  layout?: 'grid' | 'rowMobile'
}

export default function Pillar({
  title,
  items,
  titleClassName,
  borderClassName,
  layout = 'grid',
}: Props) {
  return (
    <div
      className={`h-full rounded-2xl border-2 ${borderClassName ?? 'border-blue-700/30'} bg-white p-6 md:p-8 shadow-soft overflow-hidden`}
    >
      <h3 className={`text-2xl font-semibold ${titleClassName ?? 'text-blue-900'}`}>
        {title}
      </h3>

      {/* Row layout: wrap + clamp item width so cards never escape the box */}
      {layout === 'rowMobile' ? (
        <div className="mt-6 flex flex-wrap gap-5">
          {items.map((s) => (
            <div
              key={s.title}
              className="card card-hover p-5 w-full sm:flex-[1_1_320px] md:flex-[1_1_360px] max-w-full"
            >
              <div className="text-lg font-semibold">{s.title}</div>
              <p className="mt-1 text-ink-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      ) : (
        // Classic grid layout
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {items.map((s) => (
            <div key={s.title} className="card card-hover p-5">
              <div className="text-lg font-semibold">{s.title}</div>
              <p className="mt-1 text-ink-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
