"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function AlternatingLogo() {
  const [showYawning, setShowYawning] = useState(true)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    // Toggle between logos every 5 seconds
    const intervalId = setInterval(() => {
      // Trigger glitch effect
      setIsGlitching(true)

      // After a short delay, change the logo
      setTimeout(() => {
        setShowYawning((prev) => !prev)

        // After changing, stop the glitch effect
        setTimeout(() => {
          setIsGlitching(false)
        }, 300)
      }, 200)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  // Random subtle glitch effect that happens occasionally
  useEffect(() => {
    const randomGlitch = () => {
      // Reduce frequency of random glitches (30% chance instead of 70%)
      const shouldGlitch = Math.random() > 0.7
      if (shouldGlitch && !isGlitching) {
        setIsGlitching(true)
        // Shorter glitch duration for subtlety
        setTimeout(() => setIsGlitching(false), 100 + Math.random() * 150)
      }

      // Schedule next random glitch
      setTimeout(randomGlitch, 2000 + Math.random() * 5000)
    }

    const timeout = setTimeout(randomGlitch, 3000)
    return () => clearTimeout(timeout)
  }, [isGlitching])

  return (
    <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={showYawning ? "yawning" : "coming"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`w-full ${isGlitching ? "animate-glitch-subtle" : ""}`}
        >
          <div className="relative aspect-[2/1] w-full">
            {showYawning ? (
              <Image
                src="/images/yawning-logo.png"
                alt="Yawningz Shots"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 50vw"
                className="object-contain"
                priority
              />
            ) : (
              <Image
                src="/images/coming-soon.png"
                alt="Coming Soon"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 50vw"
                className="object-contain"
                priority
              />
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Subtle glitch overlay elements */}
      {isGlitching && (
        <>
          <div className="absolute inset-0 bg-red-500 mix-blend-screen opacity-10 animate-glitch-subtle" />
          <div
            className="absolute inset-0 bg-blue-500 mix-blend-screen opacity-10 animate-glitch-subtle"
            style={{ animationDelay: "0.03s" }}
          />
        </>
      )}
    </div>
  )
}
