import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

const About = () => {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '25+', label: 'Projects Completed' },
    { value: '10+', label: 'Team Members' },
    { value: '2+', label: 'Countries Served' },
  ]
  
  return (
    <section className="section py-20 md:py-28 bg-accent-cyan/10 dark:bg-dark-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader 
                title="About SkyDeeta"
                subtitle="We're a team of passionate technologists committed to helping businesses thrive in the digital landscape."
                centered={false}
              />
              
              <div className="space-y-6 text-secondary-gray dark:text-accent-silver">
                <p>
                  Founded in 2020, SkyDeeta has been at the forefront of digital innovation, helping businesses of all sizes transform their operations and reach new heights of success through technology.
                </p>
                <p>
                  Our approach combines technical expertise with strategic thinking to deliver solutions that not only meet your current needs but position you for future growth and adaptation in an ever-changing digital landscape.
                </p>
              </div>
              
              <div className="mt-8">
                <Button to="/about">
                  Learn More About Us
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Stats */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-8 text-center dark:hover:bg-dark-100/50"
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-primary-blue dark:text-primary-electric mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-secondary-gray dark:text-accent-silver">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Additional info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 card p-8 border-l-4 border-primary-electric"
            >
              <h4 className="text-xl font-semibold mb-2 text-secondary-charcoal dark:text-secondary-white">
                Our Mission
              </h4>
              <p className="text-secondary-gray dark:text-accent-silver">
                To empower businesses with innovative digital solutions that drive growth, improve efficiency, and create exceptional user experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About