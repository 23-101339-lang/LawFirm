import React from 'react'
import SocialIcon from '../components/SocialIcon.jsx'
import Paragraph from '../components/Paragraph.jsx'
import './Footer.css'

const socials = [
  { name: 'linkedin', href: 'https://linkedin.com', ariaLabel: 'LinkedIn' },
  { name: 'twitter', href: 'https://twitter.com', ariaLabel: 'Twitter' },
  { name: 'facebook', href: 'https://facebook.com', ariaLabel: 'Facebook' },
]

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <strong className="footer__name">Sterling & Associates</strong>
            <Paragraph size="small" muted>
              Excellence in Law. Integrity in Practice.
            </Paragraph>
          </div>
          <nav className="footer__nav">
            <button type="button" onClick={() => scrollTo('about')}>About</button>
            <button type="button" onClick={() => scrollTo('practice')}>Practice Areas</button>
            <button type="button" onClick={() => scrollTo('team')}>Our Team</button>
            <button type="button" onClick={() => scrollTo('contact')}>Contact</button>
          </nav>
          <div className="footer__social">
            {socials.map((s) => (
              <SocialIcon key={s.name} {...s} />
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <Paragraph size="small" muted>
            © {new Date().getFullYear()} Sterling & Associates. All rights reserved.
          </Paragraph>
          <Paragraph size="small" muted>
            This site is for illustrative purposes. Not legal advice.
          </Paragraph>
        </div>
      </div>
    </footer>
  )
}
