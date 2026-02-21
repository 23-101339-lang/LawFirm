import React from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import Paragraph from '../components/Paragraph.jsx'
import Card from '../components/Card.jsx'
import './OurTeam.css'

const team = [
  { name: 'James Sterling', role: 'Managing Partner', focus: 'Corporate & Commercial Law' },
  { name: 'Sarah Chen', role: 'Partner', focus: 'Litigation & Dispute Resolution' },
  { name: 'Michael Reeves', role: 'Partner', focus: 'Real Estate & Property' },
  { name: 'Emily Walsh', role: 'Senior Associate', focus: 'Estate Planning & Probate' },
]

export default function OurTeam() {
  return (
    <section id="team" className="our-team">
      <div className="container">
        <SectionTitle overline="The People Behind the Practice" title="Our Team" align="center" />
        <div className="our-team__grid">
          {team.map((member) => (
            <Card key={member.name} className="our-team__card">
              <div className="our-team__avatar" aria-hidden="true">
                {member.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <h3 className="our-team__name">{member.name}</h3>
              <p className="our-team__role">{member.role}</p>
              <Paragraph size="small" muted>
                {member.focus}
              </Paragraph>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
