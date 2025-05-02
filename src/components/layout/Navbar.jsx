import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  
  const navItems = [
    { name: 'Home', path: '/*' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ]
  
  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])
  
  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 glassmorphism shadow-lg' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between pr-10 pl-10">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src={logo} 
            // height={70}
            // width={50}
            alt="SkyDeeta" 
            className="h-12 md:h-14 rounded-[20px]"
          />
        <span className="font-poppins font-bold text-xl md:text-2xl">
        <span className="text-primary-electric dark:text-secondary-white">Sky</span>
        <span className="text-primary-blue">Deeta</span>
      </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                text-base font-medium transition-colors duration-300
                ${isActive 
                  ? 'text-primary-electric dark:text-primary-electric' 
                  : 'text-secondary-charcoal dark:text-secondary-white hover:text-primary-blue dark:hover:text-primary-electric'
                }
              `}
            >
              {item.name}
            </NavLink>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-accent-cyan dark:bg-dark-100 text-primary-blue dark:text-primary-electric hover:bg-primary-blue hover:text-white dark:hover:bg-primary-electric transition-colors duration-300"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-accent-cyan dark:bg-dark-100 text-primary-blue dark:text-primary-electric"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-secondary-charcoal dark:text-secondary-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glassmorphism shadow-lg"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    py-2 px-4 rounded-md text-base font-medium transition-colors duration-300
                    ${isActive 
                      ? 'bg-primary-blue/10 text-primary-blue dark:text-primary-electric' 
                      : 'text-secondary-charcoal dark:text-secondary-white hover:bg-primary-blue/5 dark:hover:bg-dark-100'
                    }
                  `}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar