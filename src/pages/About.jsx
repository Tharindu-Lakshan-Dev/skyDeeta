import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
import { FiBriefcase, FiUsers, FiAward, FiTarget } from 'react-icons/fi'
import Tharindu from "../assets/tharindu1.jpg"
import Vihanga from "../assets/vihanga.png"
import Nisal from "../assets/nisal.png"

const About = () => {
  const values = [
    {
      icon: <FiBriefcase />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to customer service.'
    },
    {
      icon: <FiUsers />,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients to deliver solutions that truly meet their needs.'
    },
    {
      icon: <FiAward />,
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to provide cutting-edge solutions.'
    },
    {
      icon: <FiTarget />,
      title: 'Results-Focused',
      description: 'We measure our success by the tangible results we deliver for our clients.'
    },
  ]
  
  const team = [
    {
      name: 'Vihanga Sapumal',
      position: 'Founder & CEO',
      image: Vihanga,
      bio: 'With over 5 years in technology leadership, Alex founded SkyDeeta with a vision to help businesses thrive in the digital era.'
    },
    {
      name: 'Tharindu Lakshan',
      position: 'Web Developer',
      image: Tharindu,
      bio: 'Tharindu leads our technical strategy and ensures we stay at the forefront of emerging technologies and best practices.'
    },
    {
      name: 'Nisal Maduranga',
      position: 'Web Designer',
      image: Nisal,
      bio: 'Nisal oversees our development team, bringing extensive experience in building scalable, high-performance applications.'
    },
    {
      name: 'Michelle Taylor',
      position: 'Design Director',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Michelle ensures all our projects feature intuitive, engaging user experiences and visually stunning designs.'
    },
  ]
  
  return (
    <>
      <Helmet>
        <title>About Us - SkyDeeta</title>
        <meta name="description" content="Learn about SkyDeeta, our mission, values, and the team behind our digital innovation solutions." />
      </Helmet>
      
      {/* Header Section */}
      <section className="py-32 md:py-40 bg-accent-cyan/10 dark:bg-dark-200 rounded-[20px] relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-blue dark:text-primary-electric">
              About SkyDeeta
            </h1>
            <p className="text-xl text-secondary-gray dark:text-accent-silver">
              We're a team of passionate technologists committed to empowering businesses through innovative digital solutions.
            </p>
          </motion.div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-electric/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary-blue/10 blur-3xl rounded-full"></div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader
                title="Our Story"
                subtitle="How SkyDeeta began and where we're headed."
                centered={false}
                // dark={true}
              />
              
              <div className="space-y-6 text-secondary-gray dark:text-accent-silver">
                <p>
                  Founded in 2020, SkyDeeta emerged from a simple idea: that businesses of all sizes deserve access to cutting-edge technology and digital expertise. What started as a small team of three passionate developers has grown into a comprehensive digital solutions provider with a global client base.
                </p>
                <p>
                  Over the years, we've expanded our services to include not just software development, but also web and mobile application development, UI/UX design, and digital marketing services. Throughout our growth, we've remained committed to our core values of excellence, innovation, and client satisfaction.
                </p>
                <p>
                  Today, SkyDeeta is proud to have helped hundreds of businesses across multiple industries transform their operations and achieve their digital goals. As technology continues to evolve, we remain dedicated to staying at the forefront of innovation and delivering solutions that drive real business results.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-lg h-48">
                    <img 
                      src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Team collaboration" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg h-64">
                    <img 
                      src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Office environment" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-6">
                  <div className="rounded-lg overflow-hidden shadow-lg h-64">
                    <img 
                      src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Team meeting" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg h-48">
                    <img 
                      src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Design session" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-electric/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-blue/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20 md:py-28 bg-dark-200  rounded-[20px] text-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Values"
            subtitle="The core principles that guide our work and company culture."
            // dark={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 dark:bg-dark-100/50 backdrop-blur-sm rounded-xl p-6 hover-card"
              >
                <div className="text-4xl text-primary-electric mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-accent-silver">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-20 md:py-28" id="team">
        <div className="container-custom">
          <SectionHeader
            title="Meet Our Team"
            subtitle="The talented professionals driving SkyDeeta's success."
            // dark={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden hover-card group"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-secondary-charcoal dark:text-secondary-white">
                    {member.name}
                  </h3>
                  <p className="text-primary-blue dark:text-primary-electric font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-secondary-gray dark:text-accent-silver">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Join Our Team CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary-blue dark:text-primary-electric">
              Join Our Team
            </h3>
            <p className="text-secondary-gray dark:text-accent-silver max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals to join our team. If you're passionate about technology and innovation, we'd love to hear from you.
            </p>
            <Button to="/careers" size="large">
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About