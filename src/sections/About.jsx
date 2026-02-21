import React from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import Paragraph from '../components/Paragraph.jsx'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle overline="About Us" title="About the Firm" align="center" />
        <div className="about__grid">
          <div className="about__content">
            <Paragraph size="large">
              Sterling & Associates was founded in 1985 with a singular mission: to deliver 
              exceptional legal counsel with unwavering integrity. Our firm has grown from 
              a small practice to a full-service law firm serving clients across the region.
            </Paragraph>
            <Paragraph>
              We combine traditional values with modern expertise. Our attorneys are 
              recognized in their fields and committed to understanding your unique 
              circumstances before recommending a path forward.
            </Paragraph>
            <Paragraph>
              Whether you are an individual facing a personal legal matter or a business 
              navigating complex regulations, we provide clear guidance and dedicated 
              representation at every step.
            </Paragraph>
          </div>
          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-value">38+</span>
              <span className="about__stat-label">Years of Experience</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-value">500+</span>
              <span className="about__stat-label">Cases Resolved</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-value">25+</span>
              <span className="about__stat-label">Legal Professionals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
