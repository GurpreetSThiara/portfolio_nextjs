"use client"
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion"
import { Brain, Coffee, Code, Zap } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function AboutSection() {
  const { currentTheme } = useTheme()

  const traits = [
    {
      icon: Brain,
      title: "Problem Solver",
      description: "I thrive on complex challenges and finding elegant solutions",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Always adapting to new technologies and methodologies",
    },
    {
      icon: Code,
      title: "Clean Coder",
      description: "Writing maintainable, scalable, and well-documented code",
    },
    {
      icon: Coffee,
      title: "Team Player",
      description: "Collaborating effectively and sharing knowledge with peers",
    },
  ]

  return (
    <section id="about" className={`py-24 px-6 ${currentTheme.background}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className={currentTheme.codeKeyword}>{"<"}</span>
            <span className={currentTheme.accent}>About</span>
            <span className={currentTheme.codeKeyword}>{" />"}</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${currentTheme.gradient} mx-auto rounded-full`} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg ${currentTheme.shadow}`}
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
              <div className={`${currentTheme.textSecondary} text-sm font-mono`}>about.js</div>
              <div className="w-16"></div>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className={`${currentTheme.text} leading-relaxed`}>
                <code>
                  <span className={currentTheme.codeKeyword}>class</span>{" "}
                  <span className={currentTheme.codeFunction}>GurpreetSingh</span>{" "}
                  <span className={currentTheme.codeKeyword}>extends</span>{" "}
                  <span className={currentTheme.codeFunction}>SoftwareEngineer</span>{" "}
                  <span className={currentTheme.text}>{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className={currentTheme.codeFunction}>constructor</span>
                  <span className={currentTheme.text}>() {"{"}</span>
                  {"\n"}
                  {"    "}
                  <span className={currentTheme.codeKeyword}>super</span>
                  <span className={currentTheme.text}>();</span>
                  {"\n"}
                  {"    "}
                  <span className={currentTheme.codeKeyword}>this</span>
                  <span className={currentTheme.text}>.</span>
                  <span className={currentTheme.codeVariable}>name</span>
                  <span className={currentTheme.text}> = </span>
                  <span className={currentTheme.codeString}>"Gurpreet Singh"</span>
                  <span className={currentTheme.text}>;</span>
                  {"\n"}
                  {"    "}
                  <span className={currentTheme.codeKeyword}>this</span>
                  <span className={currentTheme.text}>.</span>
                  <span className={currentTheme.codeVariable}>role</span>
                  <span className={currentTheme.text}> = </span>
                  <span className={currentTheme.codeString}>"Software Engineer 1"</span>
                  <span className={currentTheme.text}>;</span>
                  {"\n"}
                  {"  "}
                  <span className={currentTheme.text}>{"}"}</span>
                  {"\n\n"}
                  {"  "}
                  <span className={currentTheme.codeFunction}>getPassion</span>
                  <span className={currentTheme.text}>() {"{"}</span>
                  {"\n"}
                  {"    "}
                  <span className={currentTheme.codeKeyword}>return</span>{" "}
                  <span className={currentTheme.codeString}>"Building innovative solutions"</span>
                  <span className={currentTheme.text}>;</span>
                  {"\n"}
                  {"  "}
                  <span className={currentTheme.text}>{"}"}</span>
                  {"\n"}
                  <span className={currentTheme.text}>{"}"}</span>
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg p-6`}>
              <div className="font-mono text-sm mb-4">
                <span className={currentTheme.codeComment}>{"// "}</span>
                <span className={currentTheme.accent}>About me</span>
              </div>
              <div className={`space-y-4 ${currentTheme.text} leading-relaxed`}>
                <p>
                  I'm a passionate Software Engineer 1 at Logiciel Solutions Limited, where I channel my love for
                  technology into creating innovative solutions. My journey from intern to full-time engineer has been
                  driven by curiosity and a constant desire to push boundaries.
                </p>
                <p>
                  Previously at Kreativan Technologies, I honed my skills in full-stack development, working on diverse
                  projects from e-commerce platforms to healthcare solutions. I believe in writing clean, efficient code
                  and creating user experiences that are both functional and delightful.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or mentoring fellow developers. I'm always excited about the next challenge!
                </p>
              </div>
            </div>

          
            <div className="grid grid-cols-2 gap-4">
              <div className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg p-4 text-center`}>
                <div className={`text-3xl font-bold ${currentTheme.accent} mb-2`}>2+</div>
                <div className={`${currentTheme.textSecondary} text-sm`}>Years Experience</div>
              </div>
              <div className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg p-4 text-center`}>
                <div className={`text-3xl font-bold ${currentTheme.success} mb-2`}>5+</div>
                <div className={`${currentTheme.textSecondary} text-sm`}>Projects Built</div>
              </div>
              <div className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg p-4 text-center`}>
                <div className={`text-3xl font-bold ${currentTheme.accentSecondary} mb-2`}>9.6</div>
                <div className={`${currentTheme.textSecondary} text-sm`}>M.Tech GPA</div>
              </div>
              <div className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg p-4 text-center`}>
                <div className={`text-3xl font-bold ${currentTheme.warning} mb-2`}>100%</div>
                <div className={`${currentTheme.textSecondary} text-sm`}>Commitment</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Traits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className={`text-2xl font-bold ${currentTheme.text} mb-4 font-mono`}>
              <span className={currentTheme.codeComment}>{"// "}</span>
              Core traits and values
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {traits.map((trait, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg p-6 hover:${currentTheme.accent.replace("text-", "border-")}/50 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <trait.icon className={`w-6 h-6 ${currentTheme.accent}`} />
                  <h4 className={`font-bold ${currentTheme.text}`}>{trait.title}</h4>
                </div>
                <p className={`${currentTheme.textSecondary} text-sm leading-relaxed`}>{trait.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
