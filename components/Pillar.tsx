type Item = { title: string; desc: string }

export default function Pillar({
  title,
  items,
}: {
  title: string
  items: Item[]
}) {
  return (
    <div className="h-full rounded-2xl border-2 border-blue-700/30 bg-white p-6 md:p-8 shadow-soft">
      <h3 className="text-2xl font-semibold text-blue-900">{title}</h3>

      {/* Items grid reads vertically on mobile, 2 columns on desktop */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {items.map((s) => (
          <div key={s.title} className="card card-hover p-5">
            <div className="text-lg font-semibold">{s.title}</div>
            <p className="mt-1 text-ink-600 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
