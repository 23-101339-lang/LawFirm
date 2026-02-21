import React from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import Paragraph from '../components/Paragraph.jsx'
import Card from '../components/Card.jsx'
import './PracticeAreas.css'

const areas = [
  {
    title: 'Corporate Law',
    description: 'Formation, governance, mergers & acquisitions, and compliance for businesses of all sizes.',
  },
  {
    title: 'Litigation & Dispute Resolution',
    description: 'Civil litigation, arbitration, and mediation to protect your interests and resolve conflicts.',
  },
  {
    title: 'Real Estate',
    description: 'Commercial and residential transactions, leasing, zoning, and property disputes.',
  },
  {
    title: 'Estate Planning & Probate',
    description: 'Wills, trusts, estate administration, and succession planning for families and businesses.',
  },
  {
    title: 'Employment Law',
    description: 'Contracts, workplace disputes, discrimination, and compliance with labor regulations.',
  },
  {
    title: 'Intellectual Property',
    description: 'Trademarks, patents, copyrights, and protection of your creative and commercial assets.',
  },
]

export default function PracticeAreas() {
  return (
    <section id="practice" className="practice-areas">
      <div className="container">
        <SectionTitle overline="What We Do" title="Practice Areas" align="center" />
        <Paragraph className="practice-areas__intro">
          Our attorneys bring deep expertise across a wide range of practice areas, 
          ensuring you receive informed and strategic representation.
        </Paragraph>
        <div className="practice-areas__grid">
          {areas.map((area) => (
            <Card key={area.title} className="practice-areas__card">
              <h3 className="practice-areas__title">{area.title}</h3>
              <Paragraph size="small" muted>
                {area.description}
              </Paragraph>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
