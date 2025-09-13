"use client"
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion"
import { Heart, Coffee, Code } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function Footer() {
  const { currentTheme } = useTheme()

  return (
    <footer className={`py-12 px-6 ${currentTheme.background} ${currentTheme.border} border-t`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Code Block */}
          <div className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg p-6 mb-8 max-w-2xl mx-auto`}>
            <div className="font-mono text-sm text-left">
              <div className="space-y-2">
                <div className={currentTheme.textSecondary}>
                  <span className={currentTheme.codeComment}>{"// "}</span>
                  Thanks for visiting my portfolio!
                </div>
                <div className="h-2"></div>
                <div>
                  <span className={currentTheme.codeKeyword}>const</span>{" "}
                  <span className={currentTheme.codeVariable}>footer</span>{" "}
                  <span className={currentTheme.codeKeyword}>=</span> <span className={currentTheme.text}>{"{"}</span>
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className={currentTheme.codeVariable}>madeWith</span>
                    <span className={currentTheme.text}>: [</span>
                    <span className={currentTheme.codeString}>'❤️'</span>
                    <span className={currentTheme.text}>, </span>
                    <span className={currentTheme.codeString}>'☕'</span>
                    <span className={currentTheme.text}>, </span>
                    <span className={currentTheme.codeString}>'Next.js'</span>
                    <span className={currentTheme.text}>],</span>
                  </div>
                  <div>
                    <span className={currentTheme.codeVariable}>author</span>
                    <span className={currentTheme.text}>: </span>
                    <span className={currentTheme.codeString}>"Gurpreet Singh"</span>
                    <span className={currentTheme.text}>,</span>
                  </div>
                  <div>
                    <span className={currentTheme.codeVariable}>year</span>
                    <span className={currentTheme.text}>: </span>
                    <span className={currentTheme.codeVariable}>2024</span>
                    <span className={currentTheme.text}>,</span>
                  </div>
                  <div>
                    <span className={currentTheme.codeVariable}>message</span>
                    <span className={currentTheme.text}>: </span>
                    <span className={currentTheme.codeString}>"Let's build something amazing together!"</span>
                  </div>
                </div>
                <div>
                  <span className={currentTheme.text}>{"}"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Text */}
          <div className={`flex items-center justify-center gap-2 ${currentTheme.textSecondary} font-mono`}>
            <span>© 2024 Gurpreet Singh • Crafted with</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
              <Heart className={`w-4 h-4 ${currentTheme.error} fill-current`} />
            </motion.div>
            <span>and</span>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Coffee className={`w-4 h-4 ${currentTheme.accentSecondary}`} />
            </motion.div>
            <span>using</span>
            <Code className={`w-4 h-4 ${currentTheme.accent}`} />
          </div>

          <div className={`mt-4 ${currentTheme.textSecondary} font-mono text-sm`}>
            <span className={currentTheme.codeComment}>{"// "}</span>
            console.log("Thanks for visiting! 🚀");
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
