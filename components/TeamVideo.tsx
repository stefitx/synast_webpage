import React from 'react'

type TeamVideoProps = {
  locale: 'en' | 'ro'
  videoId?: string
}

const FALLBACK_VIDEO_ID = 'VIDEO_ID_HERE'

const copy = {
  en: {
    placeholderTitle: 'Your intro video is on the way',
    placeholderBody:
      'Coming soon: a video where we explain how we can help your business grow.',
	hint: 'P.S. If you want to get in touch sooner, feel free to reach out via the contact form below.',
  },
  ro: {
    placeholderTitle: 'Videoclipul de prezentare va fi disponibil în curând',
	placeholderBody:
	  'În curând: un videoclip în care îți vom explica cum te putem ajuta să-ți crești afacerea.',
	hint: 'P.S. Dacă dorești să iei legătura mai repede, nu ezita să ne contactezi prin formularul de mai jos.',
  },
} as const satisfies Record<TeamVideoProps['locale'], { placeholderTitle: string; placeholderBody: string; hint: string }>

export default function TeamVideo({ locale, videoId }: TeamVideoProps) {
  const resolvedVideoId = videoId ?? process.env.NEXT_PUBLIC_TEAM_VIDEO_ID ?? FALLBACK_VIDEO_ID
  const texts = copy[locale]

  if (resolvedVideoId === FALLBACK_VIDEO_ID) {
    return (
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-dashed border-blue-700/30 bg-white p-10 text-center shadow-soft">
          <h2 className="text-2xl font-semibold text-blue-900">{texts.placeholderTitle}</h2>
          <p className="mt-3 text-ink-600">{texts.placeholderBody}</p>
        </div>
        <p className="mt-4 text-center text-sm text-ink-600">{texts.hint}</p>
      </div>
    )
  }

  const embedUrl = `https://www.youtube-nocookie.com/embed/${resolvedVideoId}?rel=0`

  return (
    <div className="mx-auto max-w-4xl">
      <div className="aspect-video overflow-hidden rounded-2xl shadow-soft">
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title={locale === 'ro' ? 'Videoclip de prezentare Synast Digital' : 'Synast Digital introduction video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <p className="mt-4 text-center text-sm text-ink-600">{texts.hint}</p>
    </div>
  )
}
