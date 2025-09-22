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
      'Upload your presentation to YouTube and set the NEXT_PUBLIC_TEAM_VIDEO_ID environment variable to the video ID (the characters after v= in the URL). The page will update automatically once the ID is in place.',
    hint: 'The player uses YouTube\'s privacy-enhanced mode so cookies load only after someone presses play.',
  },
  ro: {
    placeholderTitle: 'Videoclipul de prezentare va fi disponibil în curând',
    placeholderBody:
      'Încarcă prezentarea pe YouTube și setează variabila de mediu NEXT_PUBLIC_TEAM_VIDEO_ID cu ID-ul videoclipului (caracterele de după v= în link). Pagina se va actualiza automat când ID-ul este completat.',
    hint: 'Playerul folosește modul YouTube cu confidențialitate sporită, astfel că modulele cookie apar doar după ce utilizatorul apasă play.',
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
