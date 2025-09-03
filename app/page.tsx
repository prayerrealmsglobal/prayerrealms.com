"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import ParticlesBackground from "@/components/particles-background"
import AlternatingLogo from "@/components/alternating-logo"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black bg-grid bg-noise">
      <ParticlesBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

      <div className="container relative z-10 px-4 py-10 mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full animate-float"
        >
          <AlternatingLogo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 mt-12"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-red-500 hover:text-red-400 hover:bg-red-500/10 animate-glitch-hover"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-red-500 hover:text-red-400 hover:bg-red-500/10 animate-glitch-hover"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-red-500 hover:text-red-400 hover:bg-red-500/10 animate-glitch-hover"
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-red-500 hover:text-red-400 hover:bg-red-500/10 animate-glitch-hover"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-4 w-full text-center text-xs text-red-500/70"
      >
        <p>© {new Date().getFullYear()} Yawningz Shots. All rights reserved.</p>
      </motion.div>

      <div className="fixed bottom-6 right-6 z-20">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-red-600/10 border-red-500/30 hover:bg-red-600/20 text-red-500 animate-spin-slow"
        >
          <Sparkles className="h-5 w-5" />
          <span className="sr-only">Effects</span>
        </Button>
      </div>
    </main>
  )
}
