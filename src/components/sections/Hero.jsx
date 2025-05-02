import { motion } from 'framer-motion'
import Button from '../ui/Button'
import coverImage from '../../assets/cover1.webp'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="z-10"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-blue dark:text-primary-electric mb-6"
            >
              Empowering Your <br />
              <span className="text-primary-electric dark:text-white">Digital Future</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-secondary-gray dark:text-accent-silver mb-8 max-w-lg"
            >
              We specialize in custom software development, web & mobile app solutions, and SEO services to boost your online presence and drive business growth.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button to="/services" size="large">
                Our Services
              </Button>
              
              <Button to="/contact" variant="outline" size="large">
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image */}

            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* <div className="relative overflow-hidden rounded-xl shadow-xl shadow-glass"> */}
              <div className=" relative w-full aspect-[4/3] bg-gradient-to-br from-primary-blue to-accent-cyan trans p-4 rounded-2xl shadow-glass overflow-hidden">
                <img
                  src={coverImage}
                  alt="SkyDeeta Digital Solutions"
                  className="w-full h-auto object-cover rounded-xl"
                />
                
                {/* Overlay with gradient */}
                <div className="  absolute inset-0 bg-gradient-to-tr from-primary-blue/20 to-transparent opacity-60 rounded-xl"></div>
                <div className="hidden sm:block absolute bottom-6 left-6 right-6 p-4 bg-secondary-white/85 rounded-lg">
                <div className="flex items-center space-x-4 ">
                  <div className="flex -space-x-2 ">
                    {[1, 2, 3].map((index) => (
                      <div key={index} className="w-10 h-10 rounded-full border-2 border-primary-blue overflow-hidden">
                        <img 
                          src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${index + 10}.jpg`}
                          alt="Team member"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-primary-blue font-medium">Expert Team</p>
                    <p className=" text-sm text-primary-blue/50">Always at your service</p>
                  </div>
                </div>
              </div>
              </div>
               {/* Floating stats element */}
            <motion.div 
              className="absolute -right-4 top-1/4 bg-secondary-white/85 py-2 px-4 rounded-lg shadow-lg border border-accent-silver/30"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-primary-blue font-semibold">95% Client Satisfaction</p>
            </motion.div>
             {/* Floating awards element */}
             <motion.div 
              className="hidden sm:block absolute -left-4 bottom-1/4 bg-secondary-white/85 mb-2 py-2 px-4 rounded-lg shadow-lg border border-accent-silver/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >  
              <div className="flex items-center">
                <div className= " text-primary-blue mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"></path>
                  </svg>
                </div>
                <p className="text-secondary-charcoal">Award-winning solutions</p>
              </div>
            </motion.div>
              {/* Decoration Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-electric/20 dark:bg-primary-electric/10 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-cyan/30 dark:bg-primary-blue/20 rounded-full blur-xl"></div>
            </motion.div>
  
          {/* end */}
        </div>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent-cyan/20 to-transparent dark:from-primary-blue/10 dark:to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary-electric/10 to-transparent dark:from-primary-electric/5 dark:to-transparent blur-3xl"></div>
    </section>
  )
}

export default Hero