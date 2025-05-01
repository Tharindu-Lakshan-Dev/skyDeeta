import { Helmet } from 'react-helmet'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import Portfolio from '../components/sections/Portfolio'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>SkyDeeta - Empowering Your Digital Future</title>
        <meta name="description" content="SkyDeeta specializes in custom software development, web & mobile app solutions, and SEO services to boost your online presence." />
      </Helmet>
      
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home