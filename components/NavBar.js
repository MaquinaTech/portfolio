import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('nav')) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [mobileMenuOpen])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass border-b border-white/20 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-200">
                <span className="text-white font-bold text-sm">NL</span>
              </div>
              <span className="font-bold text-xl text-apple-900 group-hover:text-blue-600 transition-colors duration-200">
                Nicolas
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.href}>
                  <motion.span
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                      router.pathname === item.href
                        ? 'text-blue-600'
                        : 'text-apple-700 hover:text-blue-600'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {router.pathname === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-blue-50 rounded-full -z-10"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden sm:block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-apple text-sm"
            >
              Let's Talk
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:hidden p-2 rounded-lg text-apple-700 hover:bg-apple-100 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0, 
          height: mobileMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 py-2 space-y-1 glass border-t border-white/20">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <button 
                className={`w-full text-left block px-3 py-2 rounded-md text-sm font-medium ${
                  router.pathname === item.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-apple-700 hover:text-blue-600 hover:bg-apple-50'
                } transition-colors duration-200`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </button>
            </Link>
          ))}
          <div className="pt-2">
            <button 
              className="w-full btn-apple text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let's Talk
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
