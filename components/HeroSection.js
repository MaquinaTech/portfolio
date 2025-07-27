import { motion } from 'framer-motion'

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const floatingElements = [
  { icon: "⚡", delay: 0, x: 100, y: -50 },
  { icon: "🚀", delay: 2, x: -80, y: -30 },
  { icon: "💻", delay: 4, x: 120, y: 40 },
  { icon: "🎨", delay: 1, x: -120, y: 60 },
  { icon: "📱", delay: 3, x: 80, y: -80 },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-10"
          style={{
            left: `calc(50% + ${element.x}px)`,
            top: `calc(50% + ${element.y}px)`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut"
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="text-center px-4 max-w-5xl mx-auto relative z-10"
      >
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-green-500 rounded-full mr-2"
          />
          <span className="text-green-700 text-sm font-medium">Available for new opportunities</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="block gradient-text">Senior Specialist</span>
          <span className="block text-apple-900">Developer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-apple-600 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Leading technological innovation and development teams. Expert in mobile and web applications 
          with 5+ years architecting scalable solutions from startups to enterprise.
        </motion.p>

        {/* Name */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-apple-800 mb-2">
            Nicolas Lopez de Lerma
          </h2>
          <div className="flex items-center justify-center space-x-2 text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="font-medium">Technology Leader • Mobile & Web Expert • Team Builder</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-apple px-8 py-4 text-lg"
          >
            View My Work
          </motion.button>
          <motion.a
            href="/assets/Nicolás_López_de_lerma_LópezCV.pdf"
            download="Nicolas_Lopez_de_lerma_CV.pdf"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-full font-medium border-2 border-apple-300 text-apple-700 hover:bg-apple-50 transition-all duration-200 text-lg cursor-pointer"
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Skills Preview */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {['React Native', 'Next.js', 'Laravel', 'Node.js', 'Firebase', 'TypeScript', 'Prisma', 'Monorepo'].map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-apple-700 border border-apple-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mb-3"
        >
          <span className="text-apple-500 text-sm mb-2 font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full border border-apple-300 hover:bg-apple-50 transition-colors duration-200 cursor-pointer"
          >
            <svg className="w-5 h-5 text-apple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 pointer-events-none" />
    </section>
  )
}
