import React from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import Paragraph from '../components/Paragraph.jsx'
import './WhyChooseUs.css'

const reasons = [
  {
    title: 'Experience You Can Rely On',
    text: 'Our team has handled thousands of matters across multiple practice areas, giving you the benefit of proven strategies and deep institutional knowledge.',
  },
  {
    title: 'Client-First Approach',
    text: 'We take time to understand your goals and constraints. Your priorities guide our advice and representation at every stage.',
  },
  {
    title: 'Transparent Communication',
    text: 'We explain legal options in plain language and keep you informed about timelines, costs, and developments so you can make confident decisions.',
  },
  {
    title: 'Ethical Standards',
    text: 'Integrity is non-negotiable. We adhere to the highest professional and ethical standards in every engagement.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="why-choose">
      <div className="container">
        <SectionTitle overline="The Sterling Difference" title="Why Choose Us" align="center" />
        <div className="why-choose__grid">
          {reasons.map((item) => (
            <div key={item.title} className="why-choose__item">
              <h3 className="why-choose__title">{item.title}</h3>
              <Paragraph>{item.text}</Paragraph>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
