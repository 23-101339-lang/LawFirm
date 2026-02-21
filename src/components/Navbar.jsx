import React, { useState } from 'react'
import Button from './Button.jsx'
import { useTheme } from '../context/ThemeContext.jsx'
import './Navbar.css'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'vision', label: 'Vision & Mission' },
  { id: 'practice', label: 'Practice Areas' },
  { id: 'why-us', label: 'Why Choose Us' },
  { id: 'team', label: 'Our Team' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="#hero" className="navbar__brand" onClick={(e) => { e.preventDefault(); scrollTo('hero') }}>
          Sterling & Associates
        </a>
        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className="navbar__link"
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__theme"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? '☀' : '☾'}
          </button>
          <button
            type="button"
            className="navbar__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
