import React from 'react'
import Navbar from './components/Navbar.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import VisionMission from './sections/VisionMission.jsx'
import PracticeAreas from './sections/PracticeAreas.jsx'
import WhyChooseUs from './sections/WhyChooseUs.jsx'
import OurTeam from './sections/OurTeam.jsx'
import Achievements from './sections/Achievements.jsx'
import Testimonials from './sections/Testimonials.jsx'
import FAQ from './sections/FAQ.jsx'
import ContactUs from './sections/ContactUs.jsx'
import Footer from './sections/Footer.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <PracticeAreas />
        <WhyChooseUs />
        <OurTeam />
        <Achievements />
        <Testimonials />
        <FAQ />
        <ContactUs />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  )
}
