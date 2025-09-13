"use client"
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion"
import { ChevronDown, Play } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function HeroSection() {
  const { currentTheme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Code Editor Window */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg ${currentTheme.shadow} mb-12 max-w-4xl mx-auto`}
          >
            {/* Window Header */}
            <div
              className={`flex items-center justify-between px-4 py-3 ${currentTheme.cardBg} rounded-t-lg ${currentTheme.border} border-b`}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                <div className="w-3 h-3 bg-[#27ca3f] rounded-full"></div>
              </div>
              <div className={`${currentTheme.textSecondary} text-sm font-mono`}>portfolio.tsx</div>
              <div className="w-16"></div>
            </div>

            {/* Code Content */}
            <div className="p-8 font-mono text-left">
              <div className="space-y-4">
                <div className={currentTheme.textSecondary}>
                  <span className={currentTheme.codeComment}>{"// "}</span>
                  Welcome to my digital workspace
                </div>
                <div className={currentTheme.textSecondary}>
                  <span className={currentTheme.codeComment}>{"// "}</span>
                  Software Engineer 1 @ Logiciel Solutions Limited
                </div>
                <div className="h-4"></div>
                <div>
                  <span className={currentTheme.codeKeyword}>import</span>{" "}
                  <span className={currentTheme.text}>{"{ "}</span>
                  <span className={currentTheme.codeVariable}>passion</span>
                  <span className={currentTheme.text}>, </span>
                  <span className={currentTheme.codeVariable}>creativity</span>
                  <span className={currentTheme.text}>, </span>
                  <span className={currentTheme.codeVariable}>innovation</span>
                  <span className={currentTheme.text}>{" } "}</span>
                  <span className={currentTheme.codeKeyword}>from</span>{" "}
                  <span className={currentTheme.codeString}>'./developer'</span>
                  <span className={currentTheme.text}>;</span>
                </div>
                <div className="h-4"></div>
                <div className="text-2xl md:text-3xl">
                  <span className={currentTheme.codeKeyword}>const</span>{" "}
                  <span className={currentTheme.codeVariable}>developer</span>{" "}
                  <span className={currentTheme.codeKeyword}>=</span> <span className={currentTheme.text}>{"{"}</span>
                </div>
                <div className="pl-8 space-y-2">
                  <div>
                    <span className={currentTheme.codeVariable}>name</span>
                    <span className={currentTheme.text}>: </span>
                    <span className={currentTheme.codeString}>'Gurpreet Singh'</span>
                    <span className={currentTheme.text}>,</span>
                  </div>
                  <div>
                    <span className={currentTheme.codeVariable}>role</span>
                    <span className={currentTheme.text}>: </span>
                    <span className={currentTheme.codeString}>'Software Engineer 1'</span>
                    <span className={currentTheme.text}>,</span>
                  </div>
                  <div>
                    <span className={currentTheme.codeVariable}>company</span>
                    <span className={currentTheme.text}>: </span>
                    <span className={currentTheme.codeString}>'Logiciel Solutions Limited'</span>
                    <span className={currentTheme.text}>,</span>
                  </div>
                  <div>
                    <span className={currentTheme.codeVariable}>skills</span>
                    <span className={currentTheme.text}>: [</span>
                    <span className={currentTheme.codeString}>'Nextjs'</span>
                    <span className={currentTheme.text}>, </span>
                    <span className={currentTheme.codeString}>'Reactjs'</span>
                    <span className={currentTheme.text}>, </span>
                    <span className={currentTheme.codeString}>'javascript/typescript'</span>
                    <span className={currentTheme.text}>, </span>
                    <span className={currentTheme.codeString}>'python'</span>
                    <span className={currentTheme.text}>],</span>
                  </div>
                  <div>
                    <span className={currentTheme.codeVariable}>passion</span>
                    <span className={currentTheme.text}>: </span>
                    <span className={currentTheme.codeString}>'Building innovative solutions'</span>
                    <span className={currentTheme.text}>,</span>
                  </div>
                  <div>
                    <span className={currentTheme.codeVariable}>hireable</span>
                    <span className={currentTheme.text}>: </span>
                    <span className={currentTheme.codeVariable}>true</span>
                  </div>
                </div>
                <div className="text-2xl md:text-3xl">
                  <span className={currentTheme.text}>{"}"}</span>
                </div>
                <div className="h-4"></div>
                <div className={currentTheme.textSecondary}>
                  <span className={currentTheme.codeComment}>{"// "}</span>
                  Let's build something amazing together!
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className={`group flex items-center gap-3 px-8 py-4 ${currentTheme.success.replace("text-", "bg-")} hover:opacity-80 text-white rounded-lg font-medium transition-all duration-300 ${currentTheme.shadow}`}
            >
              <Play className="w-5 h-5" />
              <span>{"developer.showProjects()"}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className={`px-8 py-4 border-2 ${currentTheme.accent.replace("text-", "border-")} ${currentTheme.accent} hover:${currentTheme.accent.replace("text-", "bg-")} hover:text-white rounded-lg font-medium transition-all duration-300`}
            >
              {"developer.contact()"}
            </motion.button>
          </motion.div>

          {/* Console Output */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`${currentTheme.background} ${currentTheme.border} border rounded-lg p-6 max-w-2xl mx-auto mb-16`}
          >
            <div className="text-left font-mono">
              <div className={`${currentTheme.textSecondary} mb-2`}>{">"} console.log(developer.introduction)</div>
              <div className={currentTheme.accent}>
                "Passionate Software Engineer crafting digital experiences that make a difference. Currently building
                innovative solutions at Logiciel Solutions Limited."
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            onClick={() => scrollToSection("about")}
            className={`p-3 rounded-full ${currentTheme.cardBg} hover:${currentTheme.cardBg} ${currentTheme.border} border transition-colors`}
          >
            <ChevronDown className={`w-6 h-6 ${currentTheme.accent}`} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
