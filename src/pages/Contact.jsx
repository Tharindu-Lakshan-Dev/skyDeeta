import { Helmet } from 'react-helmet'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiCheck } from 'react-icons/fi'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'

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
      action: 'mailto:tharinduln2004@gmail.com',
    },
    {
      icon: <FiPhone />,
      title: 'Call Us',
      info: '+94 768473741',
      action: 'tel:+94768473741',
    },
    {
      icon: <FiPhone />,
      title: 'Call Us',
      info: '+94 768473741',
      action: 'tel:+94768473741',
    }
  
  ]
  
  return (
    <>
      <Helmet>
        <title>Contact Us - SkyDeeta</title>
        <meta name="description" content="Get in touch with SkyDeeta for all your digital needs. We're here to help with custom software, web development, mobile apps, and more." />
      </Helmet>
      
      {/* Header Section */}
      <section className="py-32 md:py-40 text-primary-blue relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-primary-electric text-primary-blue">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 ">
              Have a project in mind or need digital expertise? We're here to help you succeed.
            </p>
          </motion.div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-electric/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-cyan/20 blur-3xl rounded-full"></div>
      </section>
      
      {/* Contact Information Cards */}
      <section className="py-20 md:py-28 -mt-16 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.action}
                target={item.icon === <FiMapPin /> ? '_blank' : undefined}
                rel={item.icon === <FiMapPin /> ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-8 text-center hover-card cursor-pointer shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-blue text-white text-3xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-secondary-charcoal dark:text-secondary-white">
                  {item.title}
                </h3>
                <p className="text-primary-blue dark:text-primary-electric font-medium">
                  {item.info}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-accent-cyan/10 rounded-[20px] dark:bg-dark-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="card p-8 shadow-lg rounded-[20px]">
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
            
            {/* Right Column - Map and Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">

                
                <div className="card p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-charcoal dark:text-secondary-white">
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
                </div>
                
                <div className="card p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-charcoal dark:text-secondary-white">
                    Need Urgent Help?
                  </h3>
                  <p className="text-secondary-gray dark:text-accent-silver mb-4">
                    For urgent inquiries, you can reach our support team directly:
                  </p>
                  <Button 
                    href="tel:+15551234567" 
                    variant="primary"
                    fullWidth
                  >
                    <FiPhone className="mr-2" /> Call Support
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and processes."
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: 'What types of businesses do you work with?',
                  answer: 'We work with businesses of all sizes across various industries, from startups to enterprise companies. Our clients include e-commerce businesses, healthcare providers, educational institutions, financial services, and more.'
                },
                {
                  question: 'How long does it typically take to complete a project?',
                  answer: "Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex custom software solution could take several months. During our initial consultation, we'll provide you with a detailed timeline based on your specific requirements."
                },
                {
                  question: 'Do you provide ongoing support after project completion?',
                  answer: 'Yes, we offer various support and maintenance packages to ensure your digital products continue to function optimally. These can include regular updates, security patches, performance monitoring, and technical support.'
                },
                {
                  question: 'What is your pricing structure?',
                  answer: "We offer flexible pricing models including fixed-price quotes for well-defined projects and time-and-materials billing for more complex or evolving projects. We'll recommend the most appropriate model based on your specific needs during our consultation."
                },
                {
                  question: 'Can you help with an existing project that needs improvements?',
                  answer: "Absolutely! We're experienced in taking over existing projects, conducting thorough code reviews, and implementing improvements or new features. We'll work closely with you to understand the current state and develop a plan to achieve your goals."
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <h3 className="text-lg font-semibold mb-3 text-secondary-charcoal dark:text-secondary-white">
                    {faq.question}
                  </h3>
                  <p className="text-secondary-gray dark:text-accent-silver">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-secondary-gray dark:text-accent-silver mb-4">
                Still have questions? Feel free to reach out to us directly.
              </p>
              <Button to="/error" variant="outline">
                View All FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact