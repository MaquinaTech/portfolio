import Layout from '@/components/Layout'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="prose mx-auto"
      >
        <h1>About Me</h1>
        <p>
          I am a proactive developer who excels both in teams and working autonomously. My strong decision-making skills and attention to detail allow me to deliver high-quality solutions across the entire stack.
        </p>
        <p>
          Fluent in Spanish, English, and Portuguese, I bring a global perspective to every project. My experience ranges from database design to creating remarkable user experiences, always following Clean Code principles and modern best practices.
        </p>
      </motion.div>
    </Layout>
  )
}
