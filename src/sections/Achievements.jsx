import React from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import Paragraph from '../components/Paragraph.jsx'
import Card from '../components/Card.jsx'
import './Achievements.css'

const cases = [
  { title: 'Landmark Corporate Merger', result: 'Successfully advised on a $120M cross-border merger with full regulatory clearance.', year: '2023' },
  { title: 'Major Construction Dispute', result: 'Secured favorable settlement for developer in multi-party construction litigation.', year: '2023' },
  { title: 'Estate & Trust Resolution', result: 'Resolved complex estate dispute preserving family assets and minimizing conflict.', year: '2022' },
  { title: 'Employment Class Action Defense', result: 'Defended employer in class action; key claims dismissed at summary judgment.', year: '2022' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <SectionTitle overline="Track Record" title="Case Studies & Achievements" align="center" />
        <div className="achievements__grid">
          {cases.map((item) => (
            <Card key={item.title} variant="elevated" className="achievements__card">
              <span className="achievements__year">{item.year}</span>
              <h3 className="achievements__title">{item.title}</h3>
              <Paragraph size="small">{item.result}</Paragraph>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
