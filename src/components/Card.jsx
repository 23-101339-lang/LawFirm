import React from 'react'
import './Card.css'

export default function Card({ children, className = '', variant = 'default', ...props }) {
  return (
    <div className={`card card--${variant} ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}
