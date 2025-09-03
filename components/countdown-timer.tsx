"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface CountdownTimerProps {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 relative">
      {/* Random glitch lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-70">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] bg-red-500 w-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: 0,
              opacity: Math.random() * 0.5 + 0.5,
              transform: `translateY(${Math.random() * 10 - 5}px)`,
              animation: `glitch-strong ${0.2 + Math.random() * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-black/50 border border-red-500/30 rounded-lg flex items-center justify-center text-2xl md:text-3xl font-bold text-white overflow-hidden">
              <motion.span
                key={unit.value}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className={`absolute ${Math.random() > 0.9 ? "animate-glitch-text" : ""}`}
              >
                {unit.value.toString().padStart(2, "0")}
              </motion.span>
            </div>
            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse-slow" />
          </div>
          <span className="text-xs md:text-sm mt-2 text-red-400">{unit.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
