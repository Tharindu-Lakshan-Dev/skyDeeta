import { Helmet } from 'react-helmet'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
import freelancer from "../assets/freelancer.jpg";
import job from "../assets/images.png"
import trader from "../assets/trader.avif"

const Portfolio = () => {
  const [filter, setFilter] = useState('all')
  
  const projects = [
    {
      title: 'Freelancing Platform',
      category: 'web',
      image: freelancer,
      description: 'A comprehensive e-commerce solution with integrated payment processing, inventory management, and customer analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwindcss'],
      client: 'Sample Name',
    },
    {
      title: 'Job Finder',
      category: 'mobile',
      image: job,
      description: 'Patient-centered mobile application for appointment scheduling, medical records access, and telemedicine consultations.',
      technologies: ['React Native', 'Firebase', 'AWS', 'Redux'],
      client: 'Sample name',
    },
    {
      title: 'Trader Platform',
      category: 'software',
      image:trader,
      description: 'Real-time financial analytics dashboard with customizable reporting, forecasting tools, and secure data visualization.',
      technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL'],
      client: 'sample name',
    },
    // {
    //   title: 'Educational Platform',
    //   category: 'web',
    //   image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   description: 'Online learning platform with course management, virtual classrooms, and interactive content delivery.',
    //   technologies: ['Angular', 'Node.js', 'MongoDB', 'Socket.io'],
    //   client: 'EduLearn',
    // },
    // {
    //   title: 'Fitness Tracking App',
    //   category: 'mobile',
    //   image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   description: 'Mobile application for tracking workouts, nutrition, and health metrics with personalized coaching recommendations.',
    //   technologies: ['Flutter', 'Firebase', 'TensorFlow Lite'],
    //   client: 'FitLife',
    // },
    // {
    //   title: 'Inventory Management System',
    //   category: 'software',
    //   image: 'https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   description: 'Custom inventory management solution with barcode scanning, supplier management, and automated reordering.',
    //   technologies: ['React', 'Express', 'MySQL', 'Docker'],
    //   client: 'LogiTech',
    // },
    // {
    //   title: 'Travel Booking Platform',
    //   category: 'web',
    //   image: 'https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   description: 'Comprehensive travel booking system with flight and hotel reservations, itinerary management, and travel recommendations.',
    //   technologies: ['Next.js', 'GraphQL', 'MongoDB', 'Stripe'],
    //   client: 'TravelEase',
    // },
    // {
    //   title: 'IoT Smart Home App',
    //   category: 'mobile',
    //   image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   description: 'Mobile application for controlling and monitoring smart home devices with automation rules and energy usage insights.',
    //   technologies: ['React Native', 'Node.js', 'MQTT', 'AWS IoT'],
    //   client: 'SmartLiving',
    // },
  ]
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)
  
  return (
    <>
      <Helmet>
        <title>Portfolio - SkyDeeta</title>
        <meta name="description" content="Explore SkyDeeta's portfolio of successful projects across web development, mobile apps, and custom software solutions." />
      </Helmet>
      
      {/* Header Section */}
      {/* <section className=" text-white relative"> */}
        {/* <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Portfolio
            </h1>
            <p className="text-xl text-accent-silver">
              Explore our latest projects and see how we've helped businesses achieve their digital goals.
            </p>
          </motion.div>
        </div> */}
        
        {/* Background decoration */}
        {/* <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-electric/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-cyan/20 blur-3xl rounded-full"></div>
      </section> */}
      
      {/* Portfolio Section */}
      <section className="py-40 md:py-28">
        <div className="container-custom">
          <SectionHeader
            title="Featured Projects"
            subtitle="A selection of our best work across various industries and technologies."
          
          />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button 
              variant={filter === 'all' ? 'primary' : 'outline'} 
              size="small"
              onClick={() => setFilter('all')}
            >
              All Projects
            </Button>
            <Button 
              variant={filter === 'web' ? 'primary' : 'outline'} 
              size="small"
              onClick={() => setFilter('web')}
            >
              Web Development
            </Button>
            <Button 
              variant={filter === 'mobile' ? 'primary' : 'outline'} 
              size="small"
              onClick={() => setFilter('mobile')}
            >
              Mobile Apps
            </Button>
            <Button 
              variant={filter === 'software' ? 'primary' : 'outline'} 
              size="small"
              onClick={() => setFilter('software')}
            >
              Custom Software
            </Button>
          </div>
          
          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layout
                  className="card overflow-hidden hover-card group"
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-charcoal/80 to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-electric text-white rounded-full mb-2">
                        {project.category === 'web' 
                          ? 'Web Development' 
                          : project.category === 'mobile' 
                            ? 'Mobile App' 
                            : 'Custom Software'
                        }
                      </span>
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-secondary-gray dark:text-accent-silver mb-4">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-secondary-charcoal dark:text-secondary-white">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-accent-cyan/50 dark:bg-dark-300 text-primary-blue dark:text-primary-electric"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-secondary-gray dark:text-accent-silver">
                        Client: <strong>{project.client}</strong>
                      </span>
                      
                      <Button 
                        to={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                        variant="ghost"
                        size="small"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-secondary-gray dark:text-accent-silver mb-4">
                No projects found in this category.
              </p>
              <Button 
                variant="primary" 
                onClick={() => setFilter('all')}
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Client Logos Section */}
      <section className="py-16 md:py-20 bg-accent-cyan/10 rounded-[20px] dark:bg-dark-100">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-primary-blue dark:text-primary-electric">
            Trusted by Industry Leaders
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {['FashionHub', 'MediCare', 'InvestPro', 'EduLearn', 'FitLife', 'TravelEase'].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-200 p-6 rounded-lg shadow-md flex items-center justify-center hover-card"
              >
                <span className="text-lg font-bold text-primary-blue dark:text-primary-electric">
                  {client}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-28  rounded-[20px] bg-dark-200  text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-electric">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-accent-silver mb-8">
                Let's discuss how we can help you achieve your digital goals and create something amazing together.
              </p>
              <Button 
                to="/contact" 
                variant="secondary" 
                size="large"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio