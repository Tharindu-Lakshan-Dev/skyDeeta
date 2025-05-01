import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  
  useEffect(() => {
    // Don't show custom cursor on touch devices
    const isTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0
    }
    
    if (isTouchDevice()) return
    
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseenter', onMouseEnter)
      document.addEventListener('mouseleave', onMouseLeave)
      document.addEventListener('mousedown', onMouseDown)
      document.addEventListener('mouseup', onMouseUp)
      document.body.addEventListener('mouseover', onElementMouseOver)
    }
    
    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      document.body.removeEventListener('mouseover', onElementMouseOver)
    }
    
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    
    const onMouseEnter = () => {
      setHidden(false)
    }
    
    const onMouseLeave = () => {
      setHidden(true)
    }
    
    const onMouseDown = () => {
      setClicked(true)
    }
    
    const onMouseUp = () => {
      setClicked(false)
    }
    
    const onElementMouseOver = (e) => {
      const targetElement = e.target
      
      // Check if hovering over a clickable element
      const isClickable = 
        targetElement.tagName.toLowerCase() === 'a' || 
        targetElement.tagName.toLowerCase() === 'button' ||
        targetElement.closest('a') ||
        targetElement.closest('button') ||
        targetElement.classList.contains('cursor-pointer') ||
        window.getComputedStyle(targetElement).cursor === 'pointer'
      
      setLinkHovered(isClickable)
    }
    
    addEventListeners()
    return () => removeEventListeners()
  }, [])
  
  if (typeof window === 'undefined') return null
  
  return (
    <div
      className={`custom-cursor ${hidden ? 'opacity-0' : 'opacity-100'} ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: hidden ? 0 : 1,
        transform: `translate(-50%, -50%) scale(${clicked ? 0.75 : linkHovered ? 1.5 : 1})`,
        transition: 'transform 0.3s ease-out, opacity 0.2s ease-out, background-color 0.3s ease-out',
        backgroundColor: linkHovered ? 'rgba(0, 74, 173, 0.5)' : 'rgba(0, 174, 239, 0.5)',
      }}
    />
  )
}

export default CustomCursor