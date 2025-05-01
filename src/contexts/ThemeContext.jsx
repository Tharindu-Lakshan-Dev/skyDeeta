import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  // Check for saved theme preference or use system preference
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  
  const [theme, setTheme] = useState(getInitialTheme)
  
  // Update theme class on document.documentElement
  useEffect(() => {
    const root = window.document.documentElement
    
    // Remove previous theme class
    root.classList.remove('light', 'dark')
    
    // Add current theme class
    root.classList.add(theme)
    
    // Save theme to localStorage
    localStorage.setItem('theme', theme)
  }, [theme])
  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}