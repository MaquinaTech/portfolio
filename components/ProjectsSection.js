import { motion } from 'framer-motion'
import { useState } from 'react'
import { staggerContainer, fadeInUp } from '@/utils/animations'
import IconEmoji from './IconEmoji'

const projects = [
  {
    id: 1,
    title: "Laurel Gaming Mobile App",
    description: "Led mobile app development using React Native with monorepo architecture. Implemented predictive notifications and gamification features.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Monorepo", "TypeScript", "Push Notifications"],
    category: "Mobile",
    featured: true,
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    id: 2,
    title: "Fundecyt Employee Management",
    description: "Developed comprehensive employee management tools with Laravel backend and React Native mobile app.",
    image: "/api/placeholder/600/400",
    technologies: ["Laravel", "React Native", "REST API", "MySQL"],
    category: "Full Stack",
    featured: true,
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    id: 3,
    title: "Grupo Blendio Management Platform",
    description: "Created management tools and mobile apps serving 600+ employees with OTA updates and secure API Gateway.",
    image: "/api/placeholder/600/400",
    technologies: ["Laravel", "React Native", "API Gateway", "OTA Updates"],
    category: "Enterprise",
    featured: false,
    links: {
      live: "#",
      github: "#"
    }
  },
  {
    id: 4,
    title: "WealtyApp Platform",
    description: "Led platform development with Next.js frontend and React Native mobile app. Integrated payment systems.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "React Native", "Payment Integration", "Deployment Automation"],
    category: "FinTech",
    featured: false,
    links: {
      live: "#",
      github: "#"
    }
  }
]

const categories = ["All", "Mobile", "Full Stack", "Enterprise", "FinTech"]

const containerVariants = staggerContainer(0.12)
const itemVariants = fadeInUp(0, 30)

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState(null)

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="py-20 my-8 bg-white rounded-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-apple-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-apple-600 max-w-2xl mx-auto">
            A showcase of innovative solutions I've built for various industries and use cases.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-apple-50 text-apple-700 hover:bg-blue-50 border border-apple-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                <motion.div
                  animate={{ scale: hoveredProject === project.id ? 1.08 : 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center will-change-transform"
                >
                  <div className="text-white text-center">
                    <IconEmoji size={64} className="opacity-80">🧩</IconEmoji>
                    <p className="text-lg font-medium opacity-80">Project Preview</p>
                  </div>
                </motion.div>
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4"
                >
                  <motion.a
                    href={project.links.live}
                    aria-label={`${project.title} live demo`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full text-apple-900 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href={project.links.github}
                    aria-label={`${project.title} source code`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full text-apple-900 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </motion.a>
                </motion.div>

                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ scale: 0, rotate: -12 }}
                    animate={{ scale: 1, rotate: -12 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 180, damping: 12 }}
                    className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                  >
                    <IconEmoji size={16}>⭐</IconEmoji> FEATURED
                  </motion.div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-full hover:bg-apple-50 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 text-apple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-apple-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-apple-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * techIndex }}
                      className="text-xs font-medium text-apple-600 bg-apple-50 px-2 py-1 rounded border border-apple-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-apple px-8 py-4 text-lg"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
