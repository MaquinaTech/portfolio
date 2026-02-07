import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import IconEmoji from './IconEmoji'

// Variants composed from central utilities
const heroVariants = staggerContainer(0.18)
const itemVariants = fadeInUp(0)

const floatingElements = [
  { icon: "⚡", delay: 0, x: 100, y: -120 },
  { icon: "🚀", delay: 2, x: -140, y: -30 },
  { icon: "💻", delay: 4, x: 160, y: 40 },
  { icon: "🎨", delay: 1, x: -160, y: 120 },
  { icon: "📱", delay: 3, x: 120, y: -80 },
]

const heroHighlights = [
  { label: "6+ Years", value: "Engineering Leadership" },
  { label: "10K+ Users", value: "Apps Shipped" },
  { label: "20+ Tech", value: "Stack Coverage" },
  { label: "5+ Teams", value: "Led Globally" }
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 w-[40rem] h-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-400/10 to-transparent blur-3xl" />
        <div className="absolute top-1/3 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-emerald-400/20 to-transparent blur-3xl" />
        <div className="glow-ring top-20 left-20 w-24 h-24 opacity-60" />
        <div className="glow-ring bottom-32 right-24 w-16 h-16 opacity-40" />
      </div>

      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
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
          <IconEmoji size={48}>{element.icon}</IconEmoji>
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
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-2 h-2 bg-green-500 rounded-full mr-2"
          />
          <span className="text-green-700 text-sm font-medium">Open to new leadership opportunities</span>
          <span className="ml-3 text-xs text-apple-500">Based in Extremadura, Spain</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
        >
          <span className="block gradient-text">CTO • Systems Architect</span>
          <span className="block text-apple-900">Senior Specialist Developer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-apple-600 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Driving product strategy, AI systems, and scalable mobile/web platforms.
          Specialized in React Native, Next.js, Laravel, and cloud-native architectures that ship fast and scale.
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
            <span className="font-medium">Technology Leader • Mobile & Web Expert • AI/Automation</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-apple px-8 py-4 text-lg"
          >
            View My Work
          </motion.a>
          <motion.a
            href="/assets/Nicolás_López_de_lerma_LópezCV.pdf"
            download="Nicolas_Lopez_de_lerma_CV.pdf"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-full font-medium border-2 border-apple-300 text-apple-700 hover:bg-apple-50 transition-all duration-200 text-lg cursor-pointer"
          >
            Download Resume
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-full font-medium border-2 border-blue-200 text-blue-700 hover:bg-blue-50 transition-all duration-200 text-lg cursor-pointer"
          >
            Let's Collaborate
          </motion.a>
        </motion.div>

        {/* Skills Preview */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {['React Native', 'Next.js', 'Laravel', 'Node.js', 'Firebase', 'TypeScript', 'Prisma', 'AI Systems'].map((skill, index) => (
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

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16"
        >
          {heroHighlights.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.04, y: -4 }}
              className="highlight-card rounded-2xl px-6 py-4 text-left backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-apple-900">{item.label}</div>
              <div className="text-sm text-apple-600">{item.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mb-3"
        >
          <span className="text-apple-500 text-sm mb-2 font-medium">Scroll to explore</span>
          <motion.a
            href="#experience"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="p-2 rounded-full border border-apple-300 hover:bg-apple-50 transition-colors duration-200 cursor-pointer"
          >
            <svg className="w-5 h-5 text-apple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 pointer-events-none" />
    </section>
  )
}
