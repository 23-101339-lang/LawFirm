import React from 'react'
import './SectionTitle.css'

export default function SectionTitle({ overline, title, align = 'center', className = '' }) {
  return (
    <header className={`section-title section-title--${align} ${className}`.trim()}>
      {overline && <span className="section-title__overline">{overline}</span>}
      <h2 className="section-title__heading">{title}</h2>
    </header>
  )
}
