import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  href,
  to,
  external = false,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300'
  
  const variants = {
    primary: 'bg-primary-blue text-white hover:bg-primary-electric shadow-md hover:shadow-lg',
    secondary: 'bg-accent-cyan text-primary-blue hover:bg-primary-blue hover:text-white',
    outline: 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white',
    ghost: 'text-primary-blue dark:text-primary-electric hover:bg-accent-cyan dark:hover:bg-dark-100',
  }
  
  const sizes = {
    small: 'text-sm px-4 py-2',
    medium: 'px-6 py-3',
    large: 'text-lg px-8 py-4',
  }
  
  const allClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `
  
  // External link
  if (href) {
    return (
      <a 
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={allClasses}
        {...props}
      >
        {children}
      </a>
    )
  }
  
  // Internal routing with Link
  if (to) {
    return (
      <Link
        to={to}
        className={allClasses}
        {...props}
      >
        {children}
      </Link>
    )
  }
  
  // Regular button
  return (
    <button
      className={allClasses}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button