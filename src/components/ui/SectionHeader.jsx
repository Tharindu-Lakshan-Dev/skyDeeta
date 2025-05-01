import { motion } from 'framer-motion'

const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = true,
  dark = false,
  className = '',
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          dark 
            ?   'text-primary-electric '
            :'text-primary-blue'
        }`}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg md:text-xl max-w-2xl mx-auto ${
            centered ? 'mx-auto' : 'ml-0'
          } ${
            dark 
              ? 'text-accent-silver/90' 
              : 'text-secondary-gray dark:text-accent-silver'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeader