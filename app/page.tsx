"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ExperienceSection from "@/components/sections/experience-section"
import SkillsSection from "@/components/sections/skills-section"
import ProjectsSection from "@/components/sections/projects-section"
import ContactSection from "@/components/sections/contact-section"
import LoadingScreen from "@/components/loading-screen"
import SidebarLayout from "@/components/sidebar-layout"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <SidebarLayout>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div 
            key="home" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden md:snap-y md:snap-mandatory scroll-smooth"
          >
            <div id="hero" className="snap-start min-h-screen">
              <HeroSection />
            </div>
            <div id="about" className="snap-start min-h-screen">
              <AboutSection />
            </div>
            <div id="experience" className="snap-start min-h-screen">
              <ExperienceSection />
            </div>
            <div id="skills" className="snap-start min-h-screen">
              <SkillsSection />
            </div>
            <div id="projects" className="snap-start min-h-screen">
              <ProjectsSection />
            </div>
            <div id="contact" className="snap-start min-h-screen">
              <ContactSection />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SidebarLayout>
  )
}