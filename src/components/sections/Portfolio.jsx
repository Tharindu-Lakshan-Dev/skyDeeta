import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import WorkzHub from "../../assets/WorkzHub.png"
import Fxsam from "../../assets/httpfxsam.png";
import Job from "../../assets/images.png"


const Portfolio = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  
  const projects = [
    {
      title: 'Freelancing Platform',
      category: 'Web Development',
      image: WorkzHub,
      description: 'WorkerzHub is a dynamic platform that connects skilled workers with employers, offering efficient hiring solutions and job opportunities across various industries. It streamlines workforce management through user-friendly tools, making recruitment faster and more reliable..',
      href:"http://workerzhub.com",
    },
    {
      title: 'Currency Trading',
      category: 'Web Development',
      image: Fxsam,
      description: 'FXSam is a comprehensive online platform offering forex trading tools, educational resources, and market analysis to help traders make informed decisions. It empowers both beginners and professionals with real-time data and strategic insights for successful currency trading.',
      href:"http://fxsam.com",
    },
    {
      title: 'Finding Jobs',
      category: 'Custom Software',
      image: Job,
      description: 'Waiting for the information .',
      href:"http://jobhelp.lk",
    },
    
  ]
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 * i,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      }
    })
  }
  
  return (
    <section className="section py-20 md:py-28" id="portfolio">
      <div className="container-custom">
        <SectionHeader
          title="Our Portfolio"
          subtitle="Explore our latest projects and see how we've helped businesses achieve their digital goals."
        />
        
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="card overflow-hidden hover-card group"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-secondary-charcoal/80 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-electric text-white rounded-full mb-2">
                    {project.category}
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
                
                <a 
                  href={project.href}
                  target='_blank'
                  className='text-primary-electric pt-7'
                >
                  View Case Study
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button to="/portfolio" size="large">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio