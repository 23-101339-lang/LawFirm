import React from 'react'
import Button from '../components/Button.jsx'
import Paragraph from '../components/Paragraph.jsx'
import './Hero.css'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <span className="hero__overline">Trusted Legal Advisors Since 1985</span>
        <h1 className="hero__title">
          Excellence in Law.
          <br />
          <em>Integrity in Practice.</em>
        </h1>
        <Paragraph size="large" className="hero__text">
          We provide comprehensive legal solutions for businesses and individuals, 
          combining decades of experience with a commitment to your success.
        </Paragraph>
        <div className="hero__actions">
          <Button variant="primary" size="large" onClick={scrollToContact}>
            Schedule a Consultation
          </Button>
          <Button variant="secondary" size="large" href="#about">
            Learn About Us
          </Button>
        </div>
      </div>
      <div className="hero__overlay" aria-hidden="true" />
    </section>
  )
}
