import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import Paragraph from '../components/Paragraph.jsx'
import './FAQ.css'

const faqs = [
  {
    q: 'How do I schedule an initial consultation?',
    a: 'You can reach us by phone, email, or through the Contact Us form on this website. We typically respond within one business day and can arrange a consultation at a time that works for you.',
  },
  {
    q: 'What should I bring to my first meeting?',
    a: 'Bring any relevant documents—contracts, correspondence, court papers—and a brief summary of your situation. We will guide you on what is most helpful for your specific matter.',
  },
  {
    q: 'Do you offer fixed fees or only hourly billing?',
    a: 'We offer both, depending on the type of matter. For many transactional and estate planning matters we can quote a fixed fee. For litigation and complex matters we often work on an hourly basis with clear estimates when possible.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We are based in the city but serve clients across the region and, in appropriate matters, nationally. Remote consultations are available where permitted by law.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  return (
    <section id="faq" className="faq">
      <div className="container">
        <SectionTitle overline="Common Questions" title="FAQ" align="center" />
        <div className="faq__list">
          {faqs.map((item, index) => {
            const id = `faq-${index}`
            const isOpen = openId === index
            return (
              <div key={id} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                <button
                  type="button"
                  className="faq__question"
                  onClick={() => setOpenId(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`${id}-answer`}
                  id={`${id}-q`}
                >
                  {item.q}
                  <span className="faq__icon" aria-hidden="true">+</span>
                </button>
                <div
                  id={`${id}-answer`}
                  className="faq__answer"
                  role="region"
                  aria-labelledby={`${id}-q`}
                >
                  <Paragraph size="small">{item.a}</Paragraph>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
