import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiMonitor, FiSmartphone, FiSearch, FiLayout, FiShield } from 'react-icons/fi'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

const Services = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  
  const services = [
    {
      icon: <FiCode />,
      title: 'Custom Software Development',
      description: 'Tailor-made software solutions designed to address your specific business challenges and streamline operations.',
    },
    {
      icon: <FiMonitor />,
      title: 'Web Development',
      description: 'Responsive, user-friendly websites and web applications built with modern technologies for optimal performance.',
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.',
    },
    {
      icon: <FiSearch />,
      title: 'SEO Services',
      description: 'Data-driven SEO strategies to improve your search rankings, drive organic traffic, and increase conversions.',
    },
    {
      icon: <FiLayout />,
      title: 'UI/UX Design',
      description: 'Intuitive, engaging user interfaces designed to enhance user experience and strengthen your brand identity.',
    },
    {
      icon: <FiShield />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security measures to protect your digital assets from threats and ensure data privacy compliance.',
    },
  ]
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      }
    })
  }
  
  return (
    <section className="section py-16 md:py-24" id="services">
      <div className="container-custom">
        <SectionHeader
          title="Our Services"
          subtitle="We deliver comprehensive digital solutions tailored to meet your business needs and drive sustainable growth."
        />
        
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="card p-8 hover:bg-primary-blue/10"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 text-primary-electric dark:text-primary-electric text-4xl">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-secondary-charcoal dark:text-secondary-white">
                  {service.title}
                </h3>
                
                <p className="text-secondary-gray dark:text-accent-silver mb-6 flex-grow">
                  {service.description}
                </p>
                
                <Button 
                  to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  variant="ghost"
                  size="small"
                  className="self-start mt-auto"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button to="/services" size="large">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services