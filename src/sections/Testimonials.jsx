import React from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import Paragraph from '../components/Paragraph.jsx'
import Card from '../components/Card.jsx'
import './Testimonials.css'

const testimonials = [
  {
    quote: 'Sterling & Associates handled our merger with professionalism and clarity. We always knew where we stood and the outcome exceeded our expectations.',
    author: 'David Morrison',
    role: 'CEO, Morrison Industries',
  },
  {
    quote: 'I was facing a difficult employment situation. The team was responsive, strategic, and ultimately achieved a resolution I could live with. Highly recommend.',
    author: 'Jennifer Park',
    role: 'Private Client',
  },
  {
    quote: 'Their real estate group guided us through a complex commercial purchase. They anticipated issues we had not considered and closed the deal on time.',
    author: 'Robert Hayes',
    role: 'Hayes Development LLC',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <SectionTitle overline="What Clients Say" title="Testimonials" align="center" />
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <Card key={t.author} className="testimonials__card">
              <blockquote className="testimonials__quote">
                <Paragraph>"{t.quote}"</Paragraph>
              </blockquote>
              <footer className="testimonials__footer">
                <strong className="testimonials__author">{t.author}</strong>
                <span className="testimonials__role">{t.role}</span>
              </footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
