import React from 'react'
import './Paragraph.css'

export default function Paragraph({ children, size = 'medium', muted = false, className = '', ...props }) {
  return (
    <p
      className={`paragraph paragraph--${size} ${muted ? 'paragraph--muted' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </p>
  )
}
