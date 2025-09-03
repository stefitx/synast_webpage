import React from 'react'

type SectionProps = React.PropsWithChildren<{
  id?: string
  alt?: boolean
  className?: string
}>

export default function Section({ id, alt = false, className = '', children }: SectionProps) {
  return (
    // add scroll-mt classes
<section id={id} className={`${alt ? 'section-alt' : 'section'} scroll-mt-24 md:scroll-mt-28 ${className}`}>

      <div className="container">{children}</div>
    </section>
  )
}

