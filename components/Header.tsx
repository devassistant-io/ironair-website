'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronDown,
  Home,
  Wrench,
  Wind,
  Flame,
  Snowflake,
  Thermometer,
  Building2,
  Shield,
  Clock,
  Star
} from 'lucide-react'
import { trackConversion } from '@/lib/tracking'

export default function Header({ forceScrolled = false }: { forceScrolled?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(forceScrolled)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    if (forceScrolled) return
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [forceScrolled])

  const services = [
    {
      title: 'Residential Services',
      items: [
        { name: 'Furnace Services', icon: Flame, href: '/services/furnaces' },
        { name: 'Air Conditioning', icon: Snowflake, href: '/services/air-conditioning' },
        { name: 'Heat Pumps', icon: Thermometer, href: '/services/heat-pumps' },
        { name: 'Ductless Systems', icon: Home, href: '/services/ductless-systems' },
        { name: 'Boilers', icon: Flame, href: '/services/boilers' },
        { name: 'Air Quality', icon: Wind, href: '/services/air-quality' },
        { name: 'Smart Thermostats', icon: Thermometer, href: '/services/thermostats' },
        { name: 'Ductwork', icon: Wrench, href: '/services/ductwork' },
      ]
    },
    {
      title: 'Commercial Services',
      items: [
        { name: 'Commercial HVAC', icon: Building2, href: '/services/commercial' },
      ]
    }
  ]

  return (
    <>
      {/* Main Header */}
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-3 gap-6">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-1.5 flex-shrink-0"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <img 
                  src="/logo.avif" 
                  alt="Iron Air HC Logo" 
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold">
                  <span className="text-secondary-600">Iron</span> <span className="text-primary-600">Air</span> <span className={isScrolled ? 'text-iron-900' : 'text-white'}>HC</span>
                </h1>
                <p className={`text-xs ${isScrolled ? 'text-iron-600' : 'text-white/80'}`}>Heating & Cooling Excellence</p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <div 
                className="relative group"
                onMouseEnter={() => setOpenDropdown('services')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className={`flex items-center gap-1 font-medium transition-colors px-4 py-2 rounded-lg ${
                  isScrolled 
                    ? 'text-iron-700 hover:text-primary-600 hover:bg-iron-50' 
                    : 'text-white hover:text-primary-400 hover:bg-white/10'
                }`}>
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {openDropdown === 'services' && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-2xl border border-iron-100 overflow-hidden min-w-[600px]"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="grid grid-cols-2 gap-4 p-6">
                        {services.map((category, idx) => (
                          <div key={idx}>
                            <h3 className="text-sm font-semibold text-iron-900 mb-3 pb-2 border-b border-iron-200">
                              {category.title}
                            </h3>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIdx) => {
                                const Icon = item.icon
                                return (
                                  <li key={itemIdx}>
                                    <a
                                      href={item.href}
                                      className="flex items-center gap-3 text-iron-700 hover:text-primary-600 hover:bg-primary-50 p-2 rounded-md transition-all group/item"
                                    >
                                      <Icon className="w-4 h-4 text-primary-600 group-hover/item:scale-110 transition-transform" />
                                      <span className="text-sm">{item.name}</span>
                                    </a>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="/#service-area" className={`font-medium transition-colors px-4 py-2 rounded-lg ${
                isScrolled 
                  ? 'text-iron-700 hover:text-primary-600 hover:bg-iron-50' 
                  : 'text-white hover:text-primary-400 hover:bg-white/10'
              }`}>
                Service Area
              </a>
              <a href="/#reviews" className={`font-medium transition-colors px-4 py-2 rounded-lg ${
                isScrolled 
                  ? 'text-iron-700 hover:text-primary-600 hover:bg-iron-50' 
                  : 'text-white hover:text-primary-400 hover:bg-white/10'
              }`}>
                Reviews
              </a>
              <a href="/#contact" className={`font-medium transition-colors px-4 py-2 rounded-lg ${
                isScrolled 
                  ? 'text-iron-700 hover:text-primary-600 hover:bg-iron-50' 
                  : 'text-white hover:text-primary-400 hover:bg-white/10'
              }`}>
                Contact
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <a 
                href="tel:365-888-5854"
                onClick={() => trackConversion.phoneClick()}
                className={`flex items-center gap-2 font-semibold transition-colors ${
                  isScrolled 
                    ? 'text-primary-600 hover:text-primary-700' 
                    : 'text-white hover:text-primary-400'
                }`}
              >
                <Phone className="w-5 h-5" />
                <div className="text-left">
                  <div className={`text-xs ${isScrolled ? 'text-iron-600' : 'text-white/80'}`}>Call Now</div>
                  <div className="text-sm">(365) 888-5854</div>
                </div>
              </a>
              <motion.a
                href="/#contact"
                onClick={() => trackConversion.ctaClick('header_quote_button')}
                className={`relative overflow-hidden font-semibold px-5 py-2 rounded-full transition-all duration-500 shadow-md hover:shadow-lg text-sm whitespace-nowrap ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white' 
                    : 'bg-white text-iron-900 hover:bg-iron-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Free Quote
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 transition-colors ${
                isScrolled 
                  ? 'text-iron-700 hover:text-primary-600' 
                  : 'text-white hover:text-primary-400'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-iron-200 bg-white"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container-custom py-6 space-y-4">
                <a 
                  href="/#services" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-iron-700 hover:text-primary-600 font-medium text-lg"
                >
                  Services
                </a>
                <a 
                  href="/#service-area" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-iron-700 hover:text-primary-600 font-medium text-lg"
                >
                  Service Area
                </a>
                <a 
                  href="/#reviews" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-iron-700 hover:text-primary-600 font-medium text-lg"
                >
                  Reviews
                </a>
                <a 
                  href="/#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-iron-700 hover:text-primary-600 font-medium text-lg"
                >
                  Contact
                </a>
                <div className="pt-2 space-y-3 border-t border-iron-200">
                  <a 
                    href="tel:365-888-5854"
                    onClick={() => {
                      trackConversion.phoneClick()
                      setIsMobileMenuOpen(false)
                    }}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-primary-50 text-primary-600 font-semibold rounded-lg"
                  >
                    <Phone className="w-5 h-5" />
                    (365) 888-5854
                  </a>
                  <a 
                    href="/#contact"
                    onClick={() => {
                      trackConversion.ctaClick('mobile_menu_quote_button')
                      setIsMobileMenuOpen(false)
                    }}
                    className="block w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-500 shadow-md hover:shadow-lg text-sm text-center"
                  >
                    Free Quote
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

