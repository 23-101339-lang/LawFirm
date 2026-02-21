import React from 'react'
import './Button.css'

export default function Button({ children, variant = 'primary', size = 'medium', type = 'button', href, className = '', ...props }) {
  const classNames = `btn btn--${variant} btn--${size} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classNames} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classNames} {...props}>
      {children}
    </button>
  )
}
