import Layout from '@/components/Layout'
import { motion } from 'framer-motion'

const values = [
  {
    icon: "CodeBracketIcon",
    title: "Technical Excellence",
    description: "Expert in clean, scalable code with full-stack vision. From databases to delightful UX, quality is non-negotiable."
  },
  {
    icon: "LightBulbIcon",
    title: "Innovation & AI",
    description: "Designing AI systems, RAG pipelines, and automation workflows that unlock measurable product impact."
  },
  {
    icon: "UserGroupIcon",
    title: "Team Leadership",
    description: "Leading multidisciplinary teams with clarity, accountability, and strong execution across product lifecycles."
  },
  {
    icon: "RocketLaunchIcon",
    title: "Business Impact",
    description: "Focused on business outcomes, rapid iteration, and continuous improvement through high-impact delivery."
  }
]

const languages = [
  { name: "Spanish", level: "Native", flag: "🇪🇸" },
  { name: "English", level: "Fluent", flag: "🇺🇸" },
  { name: "Portuguese", level: "Fluent", flag: "🇵🇹" }
]

const journey = [
  {
    year: "2025",
    title: "AI & Data Science Engineering",
    description: "Pursuing advanced studies in AI, data science, and scalable systems at the International University of Valencia."
  },
  {
    year: "2024",
    title: "Systems Architecture & AI Platforms",
    description: "Architected on-premise LLM multi-agent platforms with secure, role-based data access."
  },
  {
    year: "2023",
    title: "Senior Developer Journey",
    description: "Stepped into leadership roles, leading teams and architecting complex systems."
  },
  {
    year: "2022",
    title: "Full Stack Mastery",
    description: "Mastered both frontend and backend technologies, becoming a versatile developer."
  },
  {
    year: "2021",
    title: "React Native Expertise",
    description: "Specialized in mobile development, creating cross-platform applications."
  },
  {
    year: "2020",
    title: "Web Development Focus",
    description: "Deep dive into modern web technologies and frameworks."
  }
]

export default function About() {
  return (
    <Layout>
      <div className="pt-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 text-center"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
            >
              <span className="text-white text-4xl font-bold">NL</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-apple-900 mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-apple-600 max-w-3xl mx-auto leading-relaxed">
              CTO and technology leader with 6+ years architecting scalable solutions. 
              I deliver innovative systems across mobile gaming, enterprise platforms, and AI automation.
            </p>
          </div>
        </motion.section>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/60"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-apple-900 mb-6">
                  My Story
                </h2>
                <div className="space-y-6 text-apple-700 leading-relaxed">
                  <p className="text-lg">
                    As an experienced professional with solid experience in application development, 
                    I stand out for being highly decisive, adapting to each problem and providing 
                    quality solutions. My proactive attitude and attention to detail drives 
                    excellence in every development.
                  </p>
                  <p className="text-lg">
                    From database architecture to magnificent UX experiences, I bring a global 
                    vision to every project. Highly versatile in development, I provide great 
                    code quality across the entire stack while leading multidisciplinary teams 
                    to deliver exceptional results.
                  </p>
                  <p className="text-lg">
                    Currently serving as CTO at Laurel Gaming, I lead innovation across AI systems, 
                    game development, and scalable mobile architectures that serve users across iOS and Android platforms.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { number: "6+", label: "Years Experience" },
                  { number: "10.000+", label: "Users Served" },
                  { number: "20+", label: "Technologies" },
                  { number: "5+", label: "Teams Led" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-6 card-apple"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-sm font-medium text-apple-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-gradient-to-br from-apple-50 to-blue-50 rounded-2xl shadow-xl border border-white/60"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-apple-900 mb-4">
                What Drives Me
              </h2>
              <p className="text-xl text-apple-600 max-w-2xl mx-auto">
                The principles and values that guide my approach to development and collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="text-center card-apple"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    {value.icon === "CodeBracketIcon" && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )}
                    {value.icon === "LightBulbIcon" && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )}
                    {value.icon === "UserGroupIcon" && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {value.icon === "RocketLaunchIcon" && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                  </motion.div>
                  <h3 className="text-xl font-bold text-apple-900 mb-3">{value.title}</h3>
                  <p className="text-apple-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Languages Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/60"
        >
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-apple-900 mb-4">
                Global Communication
              </h2>
              <p className="text-xl text-apple-600 max-w-2xl mx-auto">
                Fluent in multiple languages, bringing a global perspective to every project.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card-apple min-w-[200px] text-center"
                >
                  <div className="text-4xl mb-3">{language.flag}</div>
                  <h3 className="text-xl font-bold text-apple-900 mb-2">{language.name}</h3>
                  <p className="text-blue-600 font-medium">{language.level}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Journey Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-gradient-to-br from-apple-50 to-blue-50 rounded-2xl shadow-xl border border-white/60"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-apple-900 mb-4">
                My Journey
              </h2>
              <p className="text-xl text-apple-600 max-w-2xl mx-auto">
                Key milestones in my development career and continuous learning path.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-blue-200"></div>

                {journey.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center mb-12 ${
                      index % 2 === 0 ? 'flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="card-apple"
                      >
                        <div className={`text-2xl font-bold text-blue-600 mb-2 ${
                          index % 2 === 0 ? 'text-right' : 'text-left'
                        }`}>
                          {item.year}
                        </div>
                        <h3 className={`text-xl font-bold text-apple-900 mb-3 ${
                          index % 2 === 0 ? 'text-right' : 'text-left'
                        }`}>
                          {item.title}
                        </h3>
                        <p className={`text-apple-600 leading-relaxed ${
                          index % 2 === 0 ? 'text-right' : 'text-left'
                        }`}>
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/60 text-center"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="max-w-3xl mx-auto card-apple border-2 border-blue-100"
            >
              <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h2 className="text-3xl font-bold text-apple-900 mb-4">
                Let's Create Something Amazing
              </h2>
              <p className="text-xl text-apple-600 mb-8">
                Ready to bring your ideas to life? I'd love to hear about your project 
                and explore how we can work together.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-apple px-8 py-4 text-lg"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </Layout>
  )
}
