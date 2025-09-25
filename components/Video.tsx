// components/Video.tsx
type VideoProps = { id: string; title?: string }
export default function Video({ id, title = 'Video' }: VideoProps) {
  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`}
        title={title}
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}
