import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NavBar() {
  return (
    <nav className="bg-white shadow mb-8">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">Nicolas</Link>
        <motion.ul className="flex space-x-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <li>
            <Link href="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">About</Link>
          </li>
        </motion.ul>
      </div>
    </nav>
  )
}
