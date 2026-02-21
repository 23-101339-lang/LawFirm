import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import FormInput from '../components/FormInput.jsx'
import Button from '../components/Button.jsx'
import Paragraph from '../components/Paragraph.jsx'
import './ContactUs.css'

export default function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact-us">
      <div className="container">
        <SectionTitle overline="Get in Touch" title="Contact Us" align="center" />
        <div className="contact-us__layout">
          <div className="contact-us__info">
            <Paragraph>
              Schedule a consultation or send us a message. We will respond as soon as possible.
            </Paragraph>
            <div className="contact-us__details">
              <p><strong>Address</strong><br />123 Legal Plaza, Suite 400<br />City, State 12345</p>
              <p><strong>Phone</strong><br /><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
              <p><strong>Email</strong><br /><a href="mailto:info@sterlinglaw.com">info@sterlinglaw.com</a></p>
            </div>
          </div>
          <form className="contact-us__form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="contact-us__success" role="alert">
                Thank you. Your message has been received. We will be in touch shortly.
              </div>
            )}
            <FormInput
              label="Full Name"
              name="name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              value={form.email}
              onChange={handleChange}
            />
            <FormInput
              label="Phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={form.phone}
              onChange={handleChange}
            />
            <FormInput
              label="Subject"
              name="subject"
              placeholder="Brief subject of your inquiry"
              value={form.subject}
              onChange={handleChange}
            />
            <FormInput
              label="Message"
              name="message"
              placeholder="How can we help?"
              required
              multiline
              rows={5}
              value={form.message}
              onChange={handleChange}
            />
            <Button type="submit" variant="primary" size="large">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
