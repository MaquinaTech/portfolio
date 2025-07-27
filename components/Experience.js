import { motion } from 'framer-motion'
import { useState } from 'react'

const containerVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const contentVariants = {
  hidden: { 
    opacity: 0, 
    height: 0,
    transition: {
      duration: 0.3
    }
  },
  visible: { 
    opacity: 1, 
    height: "auto",
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

export default function Experience({ title, company, period, children, icon }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -2 }}
      className="group"
    >
      <div className="card-apple hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500 hover:border-blue-600">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-4">
            {/* Company Icon/Avatar */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
            >
              {icon ? (
                <span className="text-white text-xl">{icon}</span>
              ) : (
                <span className="text-white font-bold text-sm">
                  {company.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </span>
              )}
            </motion.div>

            <div className="flex-1">
              <motion.h3 
                className="text-xl font-bold text-apple-900 group-hover:text-blue-600 transition-colors duration-200"
                layoutId={`title-${company}`}
              >
                {title}
              </motion.h3>
              <motion.p 
                className="text-blue-600 font-semibold text-sm"
                layoutId={`company-${company}`}
              >
                {company}
              </motion.p>
              <motion.p 
                className="text-apple-500 text-sm flex items-center mt-1"
                layoutId={`period-${company}`}
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {period}
              </motion.p>
            </div>
          </div>

          {/* Expand/Collapse Button */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="p-2 rounded-full hover:bg-apple-50 transition-colors duration-200"
          >
            <svg className="w-5 h-5 text-apple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={isExpanded ? "visible" : "hidden"}
          className="overflow-hidden"
        >
          <div className="pt-4 mt-4 border-t border-apple-100">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: isExpanded ? 0.1 : 0 }}
              className="text-apple-700 space-y-3"
            >
              {children}
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Progress Indicator */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  )
}
