import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiCheck } from 'react-icons/fi'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  
  const [submitted, setSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formState)
    // Simulate successful submission
    setSubmitted(true)
    setFormState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }
  
  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email Us',
      info: 'skydeeta@gmail.com',
      action: 'mailto:info@skydeeta.com',
    },
    {
      icon: <FiPhone />,
      title: 'Call Us',
      info: '+94 768473741',
      action: 'tel:+15551234567',
    }
  ]
  
  return (
    <section className="section py-20 md:py-28" id="contact">
      <div className="container-custom">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind or need digital expertise? We're here to help you succeed."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.action}
                  target={item.icon === <FiMapPin /> ? '_blank' : undefined}
                  rel={item.icon === <FiMapPin /> ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6 flex items-start space-x-4 hover-card cursor-pointer"
                >
                  <div className="text-2xl text-primary-electric dark:text-primary-electric mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-secondary-charcoal dark:text-secondary-white">
                      {item.title}
                    </h3>
                    <p className="text-secondary-gray dark:text-accent-silver">
                      {item.info}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-6 mt-6"
            >
              <h3 className="font-semibold text-lg mb-4 text-secondary-charcoal dark:text-secondary-white">
                Working Hours
              </h3>
              <div className="space-y-2 text-secondary-gray dark:text-accent-silver">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>7:00 AM - 10:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span>7:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-secondary-charcoal dark:text-secondary-white">
                Send Us a Message
              </h3>
              
              {submitted ? (
                <div className="bg-success/10 border border-success text-success p-4 rounded-lg flex items-center">
                  <FiCheck className="mr-2 text-xl" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-secondary-charcoal dark:text-secondary-white mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-accent-silver/30 focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/20 dark:bg-dark-200 dark:border-dark-100 dark:text-white transition-colors duration-200"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-secondary-charcoal dark:text-secondary-white mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-accent-silver/30 focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/20 dark:bg-dark-200 dark:border-dark-100 dark:text-white transition-colors duration-200"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-secondary-charcoal dark:text-secondary-white mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-accent-silver/30 focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/20 dark:bg-dark-200 dark:border-dark-100 dark:text-white transition-colors duration-200"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-secondary-charcoal dark:text-secondary-white mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-accent-silver/30 focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/20 dark:bg-dark-200 dark:border-dark-100 dark:text-white transition-colors duration-200"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-secondary-charcoal dark:text-secondary-white mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows="6"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-accent-silver/30 focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/20 dark:bg-dark-200 dark:border-dark-100 dark:text-white transition-colors duration-200"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" size="large" fullWidth>
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact