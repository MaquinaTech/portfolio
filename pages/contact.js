import Layout from '@/components/Layout'
import { motion } from 'framer-motion'
import { useState } from 'react'

const contactMethods = [
  {
    icon: "EnvelopeIcon",
    title: "Email",
    description: "nicolopezdelerma@gmail.com",
    action: "Send Email",
    color: "from-blue-500 to-purple-600",
    href: "mailto:nicolopezdelerma@gmail.com?subject=Hello%20Nicolas&body=Hi%20Nicolas,%0A%0AI%20would%20like%20to%20discuss..."
  },
  {
    icon: "PhoneIcon",
    title: "Phone",
    description: "+34 633 314 144",
    action: "Call Now",
    color: "from-green-500 to-blue-500",
    href: "tel:+34633314144"
  },
  {
    icon: "MapPinIcon",
    title: "Location",
    description: "Extremadura, Spain",
    action: "View Map",
    color: "from-purple-500 to-pink-500",
    href: "https://www.google.com/maps/place/Extremadura,+Spain"
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create email link with form data
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const emailLink = `mailto:nicolopezdelerma@gmail.com?subject=${subject}&body=${body}`
    
    // Open email client
    window.open(emailLink, '_self')
    
    // Simulate form submission for UI feedback
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 1000)
  }

  return (
    <Layout>
      <div className="pt-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 text-center"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-apple-900 mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-apple-600 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Want to collaborate? I'm always excited to hear about 
              new opportunities and interesting challenges.
            </p>
          </div>
        </motion.section>

        {/* Contact Methods */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 from-apple-50 to-blue-50"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={method.icon === "MapPinIcon" ? "_blank" : "_self"}
                  rel={method.icon === "MapPinIcon" ? "noopener noreferrer" : ""}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="text-center card-apple cursor-pointer group block no-underline"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    {method.icon === "EnvelopeIcon" && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {method.icon === "PhoneIcon" && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )}
                    {method.icon === "MapPinIcon" && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-apple-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {method.title}
                  </h3>
                  
                  <p className="text-apple-600 mb-4">{method.description}</p>
                  
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                  >
                    {method.action} →
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-white rounded-lg shadow-lg"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-apple-900 mb-4">
                  Send Me a Message
                </h2>
                <p className="text-xl text-apple-600">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-apple-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-apple-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-apple-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-apple-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-apple-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-apple-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-apple-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-apple-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                        isSubmitted
                          ? 'bg-green-500 text-white'
                          : isSubmitting
                          ? 'bg-blue-400 text-white cursor-not-allowed'
                          : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg'
                      }`}
                    >
                      {isSubmitted ? (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Message Sent!</span>
                        </>
                      ) : isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-apple-900 mb-4">
                      Let's Talk About Your Project
                    </h3>
                    <p className="text-apple-600 leading-relaxed mb-6">
                      Whether you need a full-stack web application, a mobile app, 
                      or technical leadership for your team, I'm here to help bring 
                      your vision to life.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-apple-900">Services I Offer:</h4>
                    <ul className="space-y-3">
                      {[
                        "Full-Stack Web Development",
                        "Mobile App Development (React Native)",
                        "Technical Leadership & Architecture",
                        "API Development & Integration",
                        "Performance Optimization",
                        "Code Review & Mentoring"
                      ].map((service, index) => (
                        <motion.li
                          key={service}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-center space-x-3 text-apple-700"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>{service}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-apple bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100">
                    <h4 className="text-lg font-semibold text-apple-900 mb-3">
                      Response Time
                    </h4>
                    <p className="text-apple-600">
                      I typically respond to messages within 24 hours. For urgent 
                      projects, feel free to mention it in your message.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 from-apple-50 to-blue-50"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-apple-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-apple-600">
                Quick answers to common questions about working together.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "What's your typical project timeline?",
                  answer: "Project timelines vary based on complexity, but most web applications take 4-8 weeks, while mobile apps typically require 6-12 weeks. I'll provide a detailed timeline during our initial consultation."
                },
                {
                  question: "Do you work with international clients?",
                  answer: "Absolutely! I work with clients worldwide and am fluent in Spanish, English, and Portuguese. I'm comfortable with remote collaboration and different time zones."
                },
                {
                  question: "What technologies do you specialize in?",
                  answer: "I specialize in React, Next.js, React Native, Laravel, and Node.js. I'm also experienced with TypeScript, Python, and various databases and cloud platforms."
                },
                {
                  question: "Do you provide ongoing support?",
                  answer: "Yes, I offer maintenance and support packages for all projects. This includes bug fixes, security updates, and feature enhancements as needed."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="card-apple"
                >
                  <h3 className="text-lg font-semibold text-apple-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-apple-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  )
}
