export function Metric({ value, label }: { value: string; label: string }) {
	return (
	  <div className="card card-hover p-6 text-center">
		<div className="text-4xl font-bold text-blue-700">{value}</div>
		<div className="mt-2 text-ink-600">{label}</div>
	  </div>
	)
  }