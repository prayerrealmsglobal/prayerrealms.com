"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5 // Smaller particles
        this.speedX = (Math.random() - 0.5) * 0.3 // Slower movement
        this.speedY = (Math.random() - 0.5) * 0.3
        // More subtle red color with lower opacity
        this.color = `rgba(255, ${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 50)}, ${Math.random() * 0.3 + 0.05})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function initParticles() {
      particles = []
      // Fewer particles for subtlety
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000)

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        // Connect particles with lines - more subtle connections
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 80) {
            // Shorter connection distance
            ctx.beginPath()
            // Lower opacity for connections
            ctx.strokeStyle = `rgba(255, 0, 0, ${0.05 * (1 - distance / 80)})`
            ctx.lineWidth = 0.3 // Thinner lines
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    function glitchEffect() {
      // Much more subtle and rare glitch effect
      if (Math.random() > 0.998) {
        canvas.style.filter = `hue-rotate(${Math.random() * 20}deg) contrast(105%)`
        canvas.style.transform = `translate(${Math.random() * 3 - 1.5}px, ${Math.random() * 3 - 1.5}px)`

        setTimeout(
          () => {
            canvas.style.filter = ""
            canvas.style.transform = ""
          },
          50 + Math.random() * 100,
        )
      }

      requestAnimationFrame(glitchEffect)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()
    glitchEffect()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
      canvas.style.filter = ""
      canvas.style.transform = ""
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  )
}
