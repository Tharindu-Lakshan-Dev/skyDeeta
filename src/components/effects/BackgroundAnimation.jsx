import { useEffect, useRef } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const BackgroundAnimation = () => {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const pointsRef = useRef([])
  const frameRef = useRef(null)
  const { theme } = useTheme()
  
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height
    
    // Initialize points
    const initPoints = () => {
      pointsRef.current = []
      
      // Create a grid of points
      const gridSize = Math.min(width, height) > 800 ? 20 : 15
      const spacingX = width / gridSize
      const spacingY = height / gridSize
      
      for (let x = 0; x < width; x += spacingX) {
        for (let y = 0; y < height; y += spacingY) {
          pointsRef.current.push({
            x: x,
            y: y,
            originX: x,
            originY: y,
            color: theme === 'light' ? 'rgba(0, 174, 239, 0.2)' : 'rgba(0, 174, 239, 0.15)',
            randomSpeed: Math.random() * 0.5 + 0.2
          })
        }
      }
    }
    
    // Resize handler
    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      
      initPoints()
    }
    
    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      }
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      // Update and draw each point
      for (let i = 0; i < pointsRef.current.length; i++) {
        const point = pointsRef.current[i]
        
        // Calculate distance from mouse
        const dx = mouseRef.current.x - point.x
        const dy = mouseRef.current.y - point.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxDist = 150
        
        if (dist < maxDist) {
          // Move away from mouse
          const angle = Math.atan2(dy, dx)
          const force = (maxDist - dist) / maxDist
          
          point.x -= Math.cos(angle) * force * 3
          point.y -= Math.sin(angle) * force * 3
        } else {
          // Return to original position
          point.x += (point.originX - point.x) * 0.05
          point.y += (point.originY - point.y) * 0.05
        }
        
        // Add some random movement
        point.x += Math.sin(Date.now() * 0.001 * point.randomSpeed) * 0.5
        point.y += Math.cos(Date.now() * 0.001 * point.randomSpeed) * 0.5
        
        // Draw point
        ctx.beginPath()
        ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = point.color
        ctx.fill()
        
        // Connect nearby points with lines
        for (let j = i + 1; j < pointsRef.current.length; j++) {
          const nextPoint = pointsRef.current[j]
          const distance = Math.sqrt(
            Math.pow(point.x - nextPoint.x, 2) + 
            Math.pow(point.y - nextPoint.y, 2)
          )
          
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(nextPoint.x, nextPoint.y)
            ctx.strokeStyle = theme === 'light' 
              ? `rgba(0, 174, 239, ${0.2 - distance * 0.002})` 
              : `rgba(0, 174, 239, ${0.15 - distance * 0.0015})`
            ctx.stroke()
          }
        }
      }
      
      frameRef.current = requestAnimationFrame(animate)
    }
    
    // Setup
    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    
    frameRef.current = requestAnimationFrame(animate)
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(frameRef.current)
    }
  }, [theme])
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    ></canvas>
  )
}

export default BackgroundAnimation