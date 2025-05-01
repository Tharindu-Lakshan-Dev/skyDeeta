import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi'
import logo from '../../assets/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/about#team' },
        { name: 'Careers', path: '/careers' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Custom Software', path: '/services#software' },
        { name: 'Web Development', path: '/services#web' },
        { name: 'Mobile Apps', path: '/services#mobile' },
        { name: 'SEO Services', path: '/services#seo' },
        { name: 'UI/UX Design', path: '/services#design' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Case Studies', path: '/portfolio' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Support', path: '/support' },
        { name: 'Contact Us', path: '/contact' },
      ]
    },
  ]
  
  const socialLinks = [
    { icon: <FiLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: <FiTwitter />, name: 'Twitter', url: 'https://twitter.com' },
    { icon: <FiFacebook />, name: 'Facebook', url: 'https://facebook.com' },
    { icon: <FiInstagram />, name: 'Instagram', url: 'https://instagram.com' },
  ]
  
  return (
    <footer className="bg-white dark:bg-dark-200 relative z-10 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="SkyDeeta" className="h-16 rounded-[20px]" />
            </Link>
            <p className="text-secondary-gray dark:text-accent-silver mb-6 max-w-md">
              Empowering businesses with cutting-edge digital solutions. We specialize in custom software development, web & mobile applications, and SEO services.
            </p>
            <div className="space-y-3">

              <div className="flex items-center text-secondary-gray dark:text-accent-silver">
                <FiPhone className="mr-3 text-primary-blue dark:text-primary-electric" />
                <span>+94 768473741</span>
              </div>
              <div className="flex items-center text-secondary-gray dark:text-accent-silver">
                <FiMail className="mr-3 text-primary-blue dark:text-primary-electric" />
                <span>skydeeta@gmail.com</span>
              </div>
            </div>
          </div>
          
          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-lg mb-4 text-secondary-charcoal dark:text-secondary-white">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-secondary-gray dark:text-accent-silver hover:text-primary-blue dark:hover:text-primary-electric transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent-silver/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-gray dark:text-accent-silver text-sm mb-4 md:mb-0">
            &copy; {currentYear} SkyDeeta. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-cyan dark:bg-dark-300 text-primary-blue dark:text-white hover:bg-primary-blue hover:text-white dark:hover:bg-primary-electric transition-colors duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer