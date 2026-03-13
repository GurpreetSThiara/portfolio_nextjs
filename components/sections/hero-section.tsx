"use client"
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion"
import { ChevronDown, Play } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const { currentTheme, displayMode } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background decoration for professional mode */}
      {displayMode === "professional" && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {displayMode === "developer" ? (
            <>
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
                <div className="p-4 md:p-8 font-mono text-left">
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
                    <div className="text-lg md:text-3xl">
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
                    <div className="text-lg md:text-3xl">
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
            </>
          ) : (
            <div className="py-10 md:py-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="mb-8 overflow-hidden"
              >
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight overflow-hidden text-ellipsis">
                  Gurpreet Singh
                </h1>
                <p className={`text-lg md:text-3xl ${currentTheme.textSecondary} max-w-2xl mx-auto leading-relaxed px-4`}>
                  Software Engineer crafting digital experiences that make a difference.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-20"
              >
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  className="w-full sm:w-auto px-10 py-6 text-base md:text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-xl shadow-blue-500/20"
                >
                  View My Work
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  size="lg"
                  className={`w-full sm:w-auto px-10 py-6 text-base md:text-lg rounded-full border-2 ${currentTheme.border} hover:bg-white/5 transition-all`}
                >
                  Let's Talk
                </Button>
              </motion.div>

              {/* Stats/Intro for professional mode */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              >
                {[
                  { label: "Experience", value: "2+ Years" },
                  { label: "Projects", value: "5+ Built" },
                  { label: "Expertise", value: "Full Stack" },
                  { label: "Status", value: "Available" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className={`text-2xl font-bold ${currentTheme.accent}`}>{stat.value}</div>
                    <div className={`text-sm ${currentTheme.textSecondary}`}>{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          )}
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
