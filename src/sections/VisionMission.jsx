import React from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import Paragraph from '../components/Paragraph.jsx'
import Card from '../components/Card.jsx'
import './VisionMission.css'

export default function VisionMission() {
  return (
    <section id="vision" className="vision-mission">
      <div className="container">
        <SectionTitle overline="Our Foundation" title="Vision & Mission" align="center" />
        <div className="vision-mission__grid">
          <Card variant="bordered" className="vision-mission__card">
            <h3 className="vision-mission__heading">Our Vision</h3>
            <Paragraph>
              To be the most trusted name in legal services—where clients turn first 
              for clarity, advocacy, and results. We aim to set the standard for 
              professionalism and ethical practice in our community and beyond.
            </Paragraph>
          </Card>
          <Card variant="bordered" className="vision-mission__card">
            <h3 className="vision-mission__heading">Our Mission</h3>
            <Paragraph>
              To provide accessible, high-quality legal representation that protects 
              our clients’ rights and advances their interests. We are committed to 
              integrity, excellence, and a client-first approach in every matter we handle.
            </Paragraph>
          </Card>
        </div>
      </div>
    </section>
  )
}
