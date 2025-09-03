export default function Testimonial({ quote, author }: { quote: string; author: string }) {
	return (
	  <figure className="card card-hover p-6">
		<blockquote className="text-lg">“{quote}”</blockquote>
		<figcaption className="mt-4 text-sm text-ink-600">— {author}</figcaption>
	  </figure>
	)
  }