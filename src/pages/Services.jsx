import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { FiCode, FiMonitor, FiSmartphone, FiSearch, FiLayout, FiShield, FiCloud, FiDatabase } from 'react-icons/fi'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'

const Services = () => {
  const services = [
    {
      id: 'software',
      icon: <FiCode />,
      title: 'Custom Software Development',
      description: 'Tailor-made software solutions designed to address your specific business challenges and streamline operations.',
      features: [
        'Requirements analysis and solution design',
        'Full-stack development with modern technologies',
        'Legacy system modernization',
        'API development and integration',
        'Quality assurance and testing',
        'Ongoing maintenance and support'
      ],
    },
    {
      id: 'web',
      icon: <FiMonitor />,
      title: 'Web Development',
      description: 'Responsive, user-friendly websites and web applications built with modern technologies for optimal performance.',
      features: [
        'Responsive website design and development',
        'Progressive web applications (PWAs)',
        'E-commerce solutions',
        'Content management systems (CMS)',
        'Performance optimization',
        'Web accessibility compliance'
      ],
    },
    {
      id: 'mobile',
      icon: <FiSmartphone />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions (React Native, Flutter)',
        'UI/UX design for mobile',
        'App testing and quality assurance',
        'App Store and Google Play submission',
        'App maintenance and updates'
      ],
    },
    {
      id: 'seo',
      icon: <FiSearch />,
      title: 'SEO Services',
      description: 'Data-driven SEO strategies to improve your search rankings, drive organic traffic, and increase conversions.',
      features: [
        'Comprehensive SEO audit',
        'Keyword research and strategy',
        'On-page and off-page optimization',
        'Technical SEO improvements',
        'Content strategy and creation',
        'Performance tracking and reporting'
      ],
    },
    {
      id: 'design',
      icon: <FiLayout />,
      title: 'UI/UX Design',
      description: 'Intuitive, engaging user interfaces designed to enhance user experience and strengthen your brand identity.',
      features: [
        'User research and persona development',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Usability testing',
        'Interaction design',
        'Design systems creation'
      ],
    },
    {
      id: 'security',
      icon: <FiShield />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security measures to protect your digital assets from threats and ensure data privacy compliance.',
      features: [
        'Security assessment and audit',
        'Penetration testing',
        'Secure coding practices',
        'Authentication and authorization solutions',
        'Data encryption',
        'Security monitoring and incident response'
      ],
    },
    {
      id: 'cloud',
      icon: <FiCloud />,
      title: 'Cloud Solutions',
      description: 'Scalable, reliable cloud infrastructure and services to power your business applications and processes.',
      features: [
        'Cloud migration strategy',
        'AWS, Azure, and Google Cloud services',
        'Cloud architecture design',
        'Serverless applications',
        'DevOps and CI/CD implementation',
        'Cloud cost optimization'
      ],
    },
    {
      id: 'data',
      icon: <FiDatabase />,
      title: 'Data Analytics',
      description: 'Transform your raw data into actionable insights that drive better business decisions and outcomes.',
      features: [
        'Data collection and integration',
        'Data warehousing and lake solutions',
        'Business intelligence dashboards',
        'Predictive analytics',
        'Machine learning implementation',
        'Data visualization'
      ],
    },
  ]
  
  return (
    <>
      <Helmet>
        <title>Services - SkyDeeta</title>
        <meta name="description" content="Explore SkyDeeta's comprehensive range of digital services including custom software development, web & mobile app solutions, SEO, and more." />
      </Helmet>
      
      {/* Header Section */}
      {/* <section className="py-32 md:py-40 bg-secondary-white dark:bg-dark-200 relative"> */}
        {/* <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-blue">
              Our Services
            </h1>
            <p className="text-xl text-secondary-gray">
              Comprehensive digital solutions tailored to meet your business needs and drive sustainable growth.
            </p>
          </motion.div>
        </div> */}
        
        {/* Background decoration */}
        {/* <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-electric/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-cyan/20 blur-3xl rounded-full"></div>
      </section> */}
      
      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <SectionHeader
            title="What We Offer"
            subtitle="From custom software development to digital marketing, we provide end-to-end solutions to help your business thrive in the digital landscape."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.a
                key={index}
                href={`#${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card p-6 hover-card cursor-pointer dark:bg-dark-200 border border-white dark:hover:bg-dark-100"
              >
                <div className="text-3xl text-primary-electric dark:text-primary-electric mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-charcoal dark:text-secondary-white">
                  {service.title}
                </h3>
                <p className="text-secondary-gray dark:text-accent-silver">
                  {service.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section 
          key={index} 
          id={service.id}
          className={`rounded-[20px] py-20 md:py-28 ${
            index % 2 === 1 
              ? 'bg-accent-cyan/10 dark:bg-dark-100' 
              : 'bg-white dark:bg-dark-200'
          }`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className="text-5xl text-primary-electric dark:text-primary-electric mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-blue dark:text-primary-electric">
                  {service.title}
                </h2>
                <p className="text-lg text-secondary-gray dark:text-accent-silver mb-8">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="text-primary-electric shrink-0 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-secondary-gray dark:text-accent-silver">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button to="/contact" variant="primary">
                  Request a Consultation
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="relative">
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src={`https://images.pexels.com/photos/${
                        [
                          '3182812', // software
                          '1779487', // web
                          '3184339', // mobile
                          '1569076', // seo
                          '1779487', // design
                          '5380642', // security
                          '1148820', // cloud
                          '7947159'  // data
                        ][index]
                      }/pexels-photo-${
                        [
                          '3182812', // software
                          '1779487', // web
                          '3184339', // mobile
                          '1569076', // seo
                          '1779487', // design
                          '5380642', // security
                          '1148820', // cloud
                          '7947159'  // data
                        ][index]
                      }.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} 
                      alt={service.title} 
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-electric/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-blue/20 rounded-full blur-xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
      
      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-dark-200 text-white rounded-[20px]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-electric">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-xl text-accent-silver mb-8">
                Contact us today to discuss your project and discover how SkyDeeta can help you achieve your digital goals.
              </p>
              <Button 
                to="/contact" 
                variant="secondary" 
                size="large"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services