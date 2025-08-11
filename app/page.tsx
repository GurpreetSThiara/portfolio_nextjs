"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"
import ThemeSwitcher from "@/components/theme-switcher"
import Terminal from "@/components/terminal"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ExperienceSection from "@/components/sections/experience-section"
import SkillsSection from "@/components/sections/skills-section"
import ProjectsSection from "@/components/sections/projects-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"

export default function DeveloperPortfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("hero")
  const [terminalOpen, setTerminalOpen] = useState(false)
  const { currentTheme } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPos = window.scrollY + 100

      sections.forEach((section) => {
        const element = section as HTMLElement
        if (scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(element.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Add safety check
  if (!currentTheme) {
    return (
      <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono flex items-center justify-center">
        <div>Loading themes...</div>
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen ${currentTheme.background} ${currentTheme.text} font-mono transition-all duration-500`}
    >
      <ThemeSwitcher />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div key="portfolio" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Navigation activeSection={activeSection} onTerminalToggle={() => setTerminalOpen(!terminalOpen)} />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
            <AnimatePresence>{terminalOpen && <Terminal onClose={() => setTerminalOpen(false)} />}</AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
