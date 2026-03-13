"use client"
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion"
import { Brain, Coffee, Code, Zap, ExternalLink } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function AboutSection() {
  const { currentTheme, displayMode } = useTheme()

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
    <section id="about" className={`py-12 md:py-20 px-4 md:px-6 ${currentTheme.background} min-h-full flex flex-col justify-center`}>
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
                <span className={currentTheme.accent}>About</span>
                <span className={currentTheme.codeKeyword}>{" />"}</span>
              </>
            ) : (
              "About Me"
            )}
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${currentTheme.gradient} mx-auto rounded-full`} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {displayMode === "developer" ? (
            <>
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
                      <span className={currentTheme.text}>{"}"}</span>
                      {"\n\n"}
                      {"  "}
                      <span className={currentTheme.codeFunction}>getPhilosophy</span>
                      <span className={currentTheme.text}>() {"{"}</span>
                      {"\n"}
                      {"    "}
                      <span className={currentTheme.codeKeyword}>return</span>{" "}
                      <span className={currentTheme.codeString}>
                        `I believe good software is built with clarity, simplicity,{"\n"}
                        and responsibility. For me, development is not just about{"\n"}
                        making things work, but about creating solutions that are{"\n"}
                        reliable, maintainable, and useful for real users. I focus{"\n"}
                        on writing clean, readable code and solving problems in the{"\n"}
                        simplest and most efficient way possible. I also believe in{"\n"}
                        continuously learning and adapting to new technologies,{"\n"}
                        because staying curious is essential to building better{"\n"}
                        products over time.`
                      </span>
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
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative max-w-md mx-auto h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20 animate-pulse" />
              <div className={`${currentTheme.cardBg} ${currentTheme.border} border p-6 md:p-10 rounded-2xl relative z-10 h-full flex flex-col justify-center`}>
                <h3 className={`text-2xl md:text-3xl font-bold ${currentTheme.text} mb-4 md:mb-6`}>My Philosophy</h3>
                <p className={`${currentTheme.textSecondary} text-base md:text-lg italic leading-relaxed`}>
                  "I believe good software is built with clarity, simplicity, and responsibility. For me, development is not just about making things work, but about creating solutions that are reliable, maintainable, and useful for real users. I focus on writing clean, readable code and solving problems in the simplest and most efficient way possible. I also believe in continuously learning and adapting to new technologies, because staying curious is essential to building better products over time."
                </p>
                <div className="mt-6 md:mt-8 flex items-center gap-4">
                  <div className={`w-12 h-1 ${currentTheme.accent.replace('text-', 'bg-')} rounded-full`} />
                  <span className={`font-bold ${currentTheme.text}`}>Gurpreet Singh</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg p-5 md:p-6`}>
              {displayMode === "developer" && (
                <div className="font-mono text-sm mb-4">
                  <span className={currentTheme.codeComment}>{"// "}</span>
                  <span className={currentTheme.accent}>About me</span>
                </div>
              )}
                <motion.p 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg sm:text-xl md:text-2xl font-medium mb-4 md:mb-6 leading-tight"
                >
                  Hi, I’m <span className={`font-bold ${currentTheme.accent}`}>Gurpreet Singh</span>, a Software Engineer who enjoys building <span className="italic text-white">practical and scalable</span> web applications.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="leading-relaxed"
                >
                  Over the past <span className="font-semibold text-white">2 years</span> of my experience, I’ve worked with technologies like <span className={currentTheme.accent}>React</span>, <span className={currentTheme.accent}>Next.js</span>, <span className={currentTheme.accent}>Node.js</span>, and <span className={currentTheme.accent}>Python (Flask)</span> to develop full-stack solutions that solve real problems. I enjoy working across the entire stack because it allows me to understand how products work end-to-end.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="leading-relaxed"
                >
                  During my time working on production systems, I implemented features such as <span className="font-medium text-white border-b border-blue-500/50">map clustering</span> for large property datasets, integrated authentication using <span className="font-medium text-white border-b border-purple-500/50">Azure Entra</span>, and developed <span className="font-medium text-white border-b border-pink-500/50">web-scraping microservices</span> using Playwright with Flask.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className={`p-5 rounded-xl bg-white/5 border ${currentTheme.border} my-6 relative overflow-hidden group`}
                >
                  <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap className="w-12 h-12" />
                  </div>
                  <p className="text-sm md:text-base italic leading-relaxed m-0 relative z-10">
                    I also enjoy building independent products. One example is my resume builder <a href="https://createfreecv.com" target="_blank" rel="noopener noreferrer" className={`font-bold ${currentTheme.accent} hover:underline inline-flex items-center gap-1`}>createfreecv.com <ExternalLink className="w-3 h-3" /></a>, where I designed a custom PDF generation logic using <span className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">pdf-lib</span> capable of rendering multi-page resume layouts directly in the browser.
                  </p>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="leading-relaxed"
                >
                  I’m always learning, experimenting with new tools, and looking for ways to build things that are both <span className="font-semibold text-white">technically solid</span> and <span className="italic underline decoration-yellow-500/50">genuinely useful</span>.
                </motion.p>
            </div>

          
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              <div className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg p-3 md:p-4 text-center flex flex-col justify-center`}>
                <div className={`text-xl md:text-2xl font-bold ${currentTheme.accent} mb-1`}>2+ Years</div>
                <div className={`${currentTheme.textSecondary} text-[10px] md:text-xs uppercase tracking-wider font-semibold`}>Experience</div>
              </div>
              <div className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg p-3 md:p-4 text-center flex flex-col justify-center`}>
                <div className={`text-xl md:text-2xl font-bold ${currentTheme.accentSecondary} mb-1`}>9.6</div>
                <div className={`${currentTheme.textSecondary} text-[10px] md:text-xs uppercase tracking-wider font-semibold`}>M.Tech GPA</div>
              </div>
              <div className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg p-3 md:p-4 text-center flex flex-col justify-center`}>
                <div className={`text-xl md:text-2xl font-bold ${currentTheme.accentSecondary} mb-1`}>7.86</div>
                <div className={`${currentTheme.textSecondary} text-[10px] md:text-xs uppercase tracking-wider font-semibold`}>B.Tech CSE</div>
              </div>
              <div className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg p-3 md:p-4 text-center flex flex-col justify-center`}>
                <div className={`text-xl md:text-2xl font-bold ${currentTheme.success} mb-1`}>75%</div>
                <div className={`${currentTheme.textSecondary} text-[10px] md:text-xs uppercase tracking-wider font-semibold`}>12th Grade</div>
              </div>
              <div className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg p-3 md:p-4 text-center flex flex-col justify-center`}>
                <div className={`text-xl md:text-2xl font-bold ${currentTheme.success} mb-1`}>9.0</div>
                <div className={`${currentTheme.textSecondary} text-[10px] md:text-xs uppercase tracking-wider font-semibold`}>10th CGPA</div>
              </div>
              <div className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg p-3 md:p-4 text-center flex flex-col justify-center`}>
                <div className={`text-xl md:text-2xl font-bold ${currentTheme.warning} mb-1`}>5+</div>
                <div className={`${currentTheme.textSecondary} text-[10px] md:text-xs uppercase tracking-wider font-semibold`}>Projects</div>
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
            <h3 className={`text-2xl font-bold ${currentTheme.text} mb-4 ${displayMode === 'developer' ? 'font-mono' : ''}`}>
              {displayMode === "developer" && <span className={currentTheme.codeComment}>{"// "}</span>}
              Core traits and values
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {traits.map((trait, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`${currentTheme.cardBg} ${currentTheme.border} border rounded-lg p-5 md:p-6 hover:${currentTheme.accent.replace("text-", "border-")}/50 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <trait.icon className={`w-5 h-5 md:w-6 md:h-6 ${currentTheme.accent}`} />
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
