import React from 'react'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import lightArrow from "../../assets/arrow-up.png"
import darkArrow from "../../assets/up-arrow.png"

function Backtotop() {
    const [visible, setVisible] = useState(false)
  
    useEffect(() => {
      const toggleVisibility = () => {
        setVisible(window.scrollY > 300)
      }
  
      window.addEventListener('scroll', toggleVisibility)
      return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  
    return (
      visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50  transition "
          aria-label="Back to top"
        >
          
          <img src={lightArrow} alt="light arrow" className='hidden dark:block h-10 w-10 ' />
          <img src={darkArrow} alt="dark arrow" className='block dark:hidden h-10 w-10 ' />
        </button>
      )
    )
  }

export default Backtotop
