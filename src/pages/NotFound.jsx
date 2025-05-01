import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

const NotFound = () => {
  return (
    <section className="py-32 md:py-40 flex items-center justify-center min-h-screen">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-9xl font-bold text-primary-blue dark:text-primary-electric mb-4">
            404
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-charcoal dark:text-secondary-white">
            Page Not Found
          </h2>
          
          <p className="text-xl text-secondary-gray dark:text-accent-silver mb-8 max-w-xl mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/" size="large">
              Return Home
            </Button>
            
            <Button to="/contact" variant="outline" size="large">
              Contact Support
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NotFound