"use client"
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion"
import { Database, Smartphone, Globe, Layers, Terminal } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function SkillsSection() {
  const { currentTheme, displayMode } = useTheme()

  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "HTML/CSS", icon: "🌐" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Material UI", icon: "📦" },
        { name: "Chakra UI", icon: "⚡" },
        { name: "shadcn/ui", icon: "🎯" },
      ],
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        { name: "Express.js", icon: "🚀" },
        { name: "Flask", icon: "🐍" },
        { name: "Spring Boot", icon: "🍃" },
      ],
    },
    {
      title: "Languages",
      icon: Terminal,
      skills: [
        { name: "JavaScript/TypeScript", icon: "📜" },
        { name: "Python", icon: "🐍" },
        { name: "C/C++", icon: "⚙️" },
        { name: "Core Java", icon: "☕" },
      ],
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: [
        { name: "Flutter", icon: "📱" },
        { name: "Firebase", icon: "🔥" },
        { name: "Dart", icon: "🎯" },
      ],
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "Firebase", icon: "🔥" },
        { name: "Supabase", icon: "⚡" },
      ],
    },
    {
      title: "Tools",
      icon: Layers,
      skills: [
        { name: "Git & GitHub", icon: "🐙" },
        { name: "VS Code", icon: "💻" },
        { name: "Android Studio", icon: "🤖" },
        { name: "Cursor IDE", icon: "🎯" },
        { name: "Docker", icon: "🐳" },
        { name: "Dramatiq", icon: "🎭" },
        { name: "Redis", icon: "🔴" },
      ],
    },
  ]

  return (
    <section id="skills" className={`py-12 md:py-20 px-4 md:px-6 ${currentTheme.background} min-h-full flex flex-col justify-center`}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {displayMode === "developer" ? (
              <>
                <span className={currentTheme.codeKeyword}>{"<"}</span>
                <span className={currentTheme.accent}>Skills</span>
                <span className={currentTheme.codeKeyword}>{" />"}</span>
              </>
            ) : (
              "Tech Stack & Expertise"
            )}
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${currentTheme.gradient} mx-auto rounded-full`} />
          <p className={`${currentTheme.textSecondary} mt-6 max-w-3xl mx-auto ${displayMode === 'developer' ? 'font-mono' : ''}`}>
            {displayMode === "developer" && <span className={currentTheme.codeComment}>{"// "}</span>}
            My technical arsenal for building amazing software
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg p-5 md:p-6 hover:${currentTheme.accent.replace("text-", "border-")}/50 transition-all duration-300 shadow-md`}
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className={`p-2.5 md:p-3 rounded-lg ${currentTheme.accent.replace("text-", "bg-")}/20 ${currentTheme.accent.replace("text-", "border-")}/30 border`}
                >
                  <category.icon className={`w-5 h-5 md:w-6 md:h-6 ${currentTheme.accent}`} />
                </div>
                <h3 className={`text-lg md:text-xl font-bold ${currentTheme.text} ${displayMode === 'developer' ? 'font-mono' : ''}`}>{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className={`flex items-center gap-3 p-2.5 md:p-3 rounded-lg ${currentTheme.cardBg} hover:${currentTheme.accent.replace("text-", "border-")}/30 border border-transparent hover:border-current transition-all duration-300 cursor-default`}
                  >
                    <div className="text-2xl">{skill.icon}</div>
                    <span className={`${currentTheme.text} ${displayMode === 'developer' ? 'font-mono' : ''} text-sm font-medium`}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Code Snippet - Only for developer mode */}
        {displayMode === "developer" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className={`mt-16 ${currentTheme.cardBg} ${currentTheme.border} border rounded-lg`}
          >
            <div
              className={`flex items-center justify-between px-4 py-3 ${currentTheme.cardBg} rounded-t-lg ${currentTheme.border} border-b`}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
                <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                <div className="w-3 h-3 bg-[#27ca3f] rounded-full"></div>
              </div>
              <div className={`${currentTheme.textSecondary} text-sm font-mono`}>skills.js</div>
              <div className="w-16"></div>
            </div>

            <div className="p-6 font-mono text-sm">
              <div className="space-y-2">
                <div className={currentTheme.textSecondary}>
                  <span className={currentTheme.codeComment}>{"// "}</span>
                  My technical skill set
                </div>
                <div className="h-2"></div>
                <div>
                  <span className={currentTheme.codeKeyword}>const</span>{" "}
                  <span className={currentTheme.codeVariable}>skills</span>{" "}
                  <span className={currentTheme.codeKeyword}>=</span> <span className={currentTheme.text}>{"{"}</span>
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className={currentTheme.codeVariable}>frontend</span>
                    <span className={currentTheme.text}>: [</span>
                    <span className={currentTheme.codeString}>'React.js'</span>
                    <span className={currentTheme.text}>, </span>
                    <span className={currentTheme.codeString}>'HTML/CSS'</span>
                    <span className={currentTheme.text}>, </span>
                    <span className={currentTheme.codeString}>'Tailwind'</span>
                    <span className={currentTheme.text}>, </span>
                    <span className={currentTheme.codeString}>'shadcn/ui'</span>
                    <span className={currentTheme.text}>],</span>
                  </div>
                  <div>
                    <span className={currentTheme.codeVariable}>backend</span>
                    <span className={currentTheme.text}>: [</span>
                    <span className={currentTheme.codeString}>'Express.js'</span>
                    <span className={currentTheme.text}>, </span>
                    <span className={currentTheme.codeString}>'Flask'</span>
                    <span className={currentTheme.text}>, </span>
                    <span className={currentTheme.codeString}>'Spring Boot'</span>
                    <span className={currentTheme.text}>],</span>
                  </div>
                  <div>
                    <span className={currentTheme.codeVariable}>languages</span>
                    <span className={currentTheme.text}>: [</span>
                    <span className={currentTheme.codeString}>'JavaScript/TS'</span>
                    <span className={currentTheme.text}>, </span>
                    <span className={currentTheme.codeString}>'Python'</span>
                    <span className={currentTheme.text}>, </span>
                    <span className={currentTheme.codeString}>'Java'</span>
                    <span className={currentTheme.text}>],</span>
                  </div>
                  <div>
                    <span className={currentTheme.codeVariable}>mobile</span>
                    <span className={currentTheme.text}>: [</span>
                    <span className={currentTheme.codeString}>'Flutter'</span>
                    <span className={currentTheme.text}>, </span>
                    <span className={currentTheme.codeString}>'Firebase'</span>
                    <span className={currentTheme.text}>],</span>
                  </div>
                  <div>
                    <span className={currentTheme.codeVariable}>databases</span>
                    <span className={currentTheme.text}>: [</span>
                    <span className={currentTheme.codeString}>'MongoDB'</span>
                    <span className={currentTheme.text}>, </span>
                    <span className={currentTheme.codeString}>'Supabase'</span>
                    <span className={currentTheme.text}>],</span>
                  </div>
                  <div>
                    <span className={currentTheme.codeVariable}>tools</span>
                    <span className={currentTheme.text}>: [</span>
                    <span className={currentTheme.codeString}>'Git'</span>
                    <span className={currentTheme.text}>, </span>
                    <span className={currentTheme.codeString}>'VS Code'</span>
                    <span className={currentTheme.text}>, </span>
                    <span className={currentTheme.codeString}>'Docker'</span>
                    <span className={currentTheme.text}>, </span>
                    <span className={currentTheme.codeString}>'Dramatiq'</span>
                    <span className={currentTheme.text}>, </span>
                    <span className={currentTheme.codeString}>'Redis'</span>
                    <span className={currentTheme.text}>]</span>
                  </div>
                </div>
                <div>
                  <span className={currentTheme.text}>{"}"}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
