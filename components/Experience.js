import { motion } from 'framer-motion'

export default function Experience({ title, company, period, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-4 rounded shadow mb-4"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="italic text-sm text-gray-500">{company} | {period}</p>
      <div className="mt-2 text-gray-700">{children}</div>
    </motion.div>
  )
}
