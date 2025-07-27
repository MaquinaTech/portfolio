import { motion } from 'framer-motion'
import { useState } from 'react'

const skillCategories = [
  {
    title: "Frontend & Mobile",
    icon: "📱",
    skills: [
      { name: "React Native", level: 95, color: "bg-blue-500" },
      { name: "Next.js", level: 92, color: "bg-gray-900" },
      { name: "React", level: 95, color: "bg-blue-600" },
      { name: "TypeScript", level: 88, color: "bg-blue-700" },
      { name: "Alpine.js", level: 85, color: "bg-teal-500" },
      { name: "React Native Skia", level: 80, color: "bg-purple-600" },
    ]
  },
  {
    title: "Backend & APIs",
    icon: "⚙️",
    skills: [
      { name: "Laravel", level: 95, color: "bg-red-500" },
      { name: "Node.js", level: 88, color: "bg-green-600" },
      { name: "PHP", level: 92, color: "bg-indigo-500" },
      { name: "Python", level: 85, color: "bg-yellow-500" },
      { name: "Java SpringBoot", level: 80, color: "bg-orange-600" },
      { name: "Prisma", level: 85, color: "bg-gray-700" },
    ]
  },
  {
    title: "Architecture & DevOps",
    icon: "🏗️",
    skills: [
      { name: "Monorepo Architecture", level: 90, color: "bg-purple-500" },
      { name: "Microservices", level: 88, color: "bg-blue-400" },
      { name: "Docker", level: 85, color: "bg-blue-500" },
      { name: "Firebase", level: 90, color: "bg-yellow-600" },
      { name: "Google Cloud", level: 80, color: "bg-blue-600" },
      { name: "REST APIs", level: 95, color: "bg-green-500" },
    ]
  },
  {
    title: "Leadership & Methodologies",
    icon: "�",
    skills: [
      { name: "Technical Leadership", level: 92, color: "bg-red-600" },
      { name: "Scrum Master", level: 88, color: "bg-orange-500" },
      { name: "Team Management", level: 90, color: "bg-purple-600" },
      { name: "DDD/TDD", level: 85, color: "bg-indigo-600" },
      { name: "Clean Code", level: 95, color: "bg-green-600" },
      { name: "SOLID Principles", level: 90, color: "bg-blue-700" },
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-20 my-8 bg-gradient-to-br from-apple-50 to-blue-50 rounded-lg shadow-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-apple-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-apple-600 max-w-2xl mx-auto">
            A comprehensive toolkit built over years of passionate development and continuous learning.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.title}
              variants={itemVariants}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-apple-700 hover:bg-blue-50 border border-apple-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="card-apple p-6"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-apple-900">{skill.name}</h3>
                <span className="text-sm font-medium text-apple-600">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-apple-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${skill.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                />
              </div>
              
              {/* Skill Level Indicator */}
              <div className="flex justify-between mt-2 text-xs text-apple-500">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { number: "6+", label: "Years Experience" },
            { number: "10.000+", label: "Users Served" },
            { number: "20+", label: "Technologies Mastered" },
            { number: "5+", label: "Teams Led" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-apple-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                className="text-3xl font-bold text-blue-600 mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-sm font-medium text-apple-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
