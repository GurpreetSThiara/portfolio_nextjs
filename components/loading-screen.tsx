"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useTheme } from "@/contexts/theme-context"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState("")
  const { currentTheme } = useTheme()

  const steps = [
    "Initializing portfolio...",
    "Loading components...",
    "Fetching developer data...",
    "Compiling skills...",
    "Building projects...",
    "Ready to deploy!",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15
        const stepIndex = Math.floor((newProgress / 100) * steps.length)
        setCurrentStep(steps[Math.min(stepIndex, steps.length - 1)])
        return Math.min(newProgress, 100)
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  // Add safety check
  if (!currentTheme) {
    return (
      <div className="fixed inset-0 bg-[#0d1117] flex items-center justify-center z-50">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  const getColorClass = (colorClass: string, type: "bg" | "border" = "bg") => {
    if (!colorClass) return ""
    return colorClass.replace("text-", `${type}-`)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 ${currentTheme.background} flex items-center justify-center z-50`}
    >
      <div className="max-w-md w-full px-6">
        <div className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg p-8 ${currentTheme.shadow}`}>
          <div className="text-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className={`w-16 h-16 mx-auto mb-4 border-4 ${getColorClass(currentTheme.accent, "border")} border-t-transparent rounded-full`}
            />
            <h2 className={`text-xl font-bold ${currentTheme.accent} mb-2`}>{"<Loading />"}</h2>
            <p className={`${currentTheme.textSecondary} text-sm`}>Booting up developer portfolio...</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className={currentTheme.textSecondary}>Progress:</span>
              <span className={currentTheme.accent}>{Math.round(progress)}%</span>
            </div>
            <div className={`w-full ${currentTheme.cardBg} rounded-full h-2`}>
              <motion.div
                className={`bg-gradient-to-r ${currentTheme.gradient} h-2 rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className={`${currentTheme.textSecondary} text-sm`}>{currentStep}</p>
          </div>

          <div className={`mt-6 text-xs ${currentTheme.textSecondary} font-mono`}>
            <div>
              <span className={currentTheme.codeComment}>{"// "}</span>
              Initializing Gurpreet Singh's Portfolio
            </div>
            <div>
              <span className={currentTheme.codeComment}>{"// "}</span>
              Version: 2.0.0
            </div>
            <div>
              <span className={currentTheme.codeComment}>{"// "}</span>
              Built with: Next.js, TypeScript, Framer Motion
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
