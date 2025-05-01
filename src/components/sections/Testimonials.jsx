import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import SectionHeader from '../ui/SectionHeader'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, Jobhelp',
      content: "SkyDeeta transformed our outdated systems into a streamlined digital ecosystem. Their team's expertise and attention to detail exceeded our expectations, and the results have been outstanding.",
      rating: 5,
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Michael Rodriguez',
      position: 'Marketing Director, Workerzhub',
      content: "The SEO and web development services provided by SkyDeeta have significantly boosted our online presence. We've seen a 200% increase in organic traffic and a 45% improvement in conversion rates.",
      rating: 5,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Jessica Chen',
      position: 'Product Manager, TraderMan',
      content: 'SkyDeeta delivered our mobile app on time and within budget. Their collaborative approach and technical expertise made the entire development process smooth and stress-free.',
      rating: 4,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ]
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }
  
  const handleDotClick = (index) => {
    setActiveIndex(index)
  }
  
  return (
    <section className="section py-20 md:py-28 bg-primary-blue dark:bg-dark-100 relative rounded-[20px]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-electric/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-cyan/20 blur-3xl rounded-full"></div>
      
      <div className="container-custom relative z-10">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Hear from businesses that have experienced the SkyDeeta difference."
          dark={true}
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="card p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex text-primary-electric mb-3">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <FiStar key={i} className="fill-primary-electric" />
                      ))}
                      {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
                        <FiStar key={i + testimonials[activeIndex].rating} />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-secondary-charcoal dark:text-secondary-white mb-6 italic">
                      "{testimonials[activeIndex].content}"
                    </blockquote>
                    
                    <cite className="not-italic">
                      <div className="font-semibold text-secondary-charcoal dark:text-secondary-white">
                        {testimonials[activeIndex].name}
                      </div>
                      <div className="text-secondary-gray dark:text-accent-silver">
                        {testimonials[activeIndex].position}
                      </div>
                    </cite>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 -mx-4 md:-mx-6">
              <button
                onClick={handlePrev}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-dark-200 shadow-md flex items-center justify-center text-primary-blue dark:text-primary-electric hover:bg-primary-blue hover:text-white dark:hover:bg-primary-electric transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft size={24} />
              </button>
              
              <button
                onClick={handleNext}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-dark-200 shadow-md flex items-center justify-center text-primary-blue dark:text-primary-electric hover:bg-primary-blue hover:text-white dark:hover:bg-primary-electric transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-primary-electric w-8' 
                    : 'bg-white dark:bg-dark-300 opacity-50 hover:opacity-75'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials