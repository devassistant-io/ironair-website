'use client'

import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail,
} from 'lucide-react'
import { trackConversion } from '@/lib/tracking'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-iron-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/logo.avif" 
                  alt="Iron Air HC Logo" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-xl font-display font-bold">
                    <span className="text-secondary-400">Iron</span> <span className="text-primary-400">Air</span> <span className="text-white">HC</span>
                  </h3>
                  <p className="text-xs text-iron-400">Heating & Cooling Excellence</p>
                </div>
              </div>
              <p className="text-iron-400 leading-relaxed">
                Professional HVAC services. Licensed, certified, and dedicated to your comfort.
              </p>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Furnace Services', href: '/services/furnaces' },
                { name: 'Air Conditioning', href: '/services/air-conditioning' },
                { name: 'Heat Pumps', href: '/services/heat-pumps' },
                { name: 'Ductless Systems', href: '/services/ductless-systems' },
                { name: 'Boilers', href: '/services/boilers' },
                { name: 'Air Quality', href: '/services/air-quality' },
                { name: 'Smart Thermostats', href: '/services/thermostats' },
                { name: 'Ductwork', href: '/services/ductwork' },
                { name: 'Commercial HVAC', href: '/services/commercial' },
              ].map((service, idx) => (
                <li key={idx}>
                  <a href={service.href} className="text-iron-400 hover:text-primary-400 transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/#about' },
                { label: 'Reviews', href: '/#reviews' },
                { label: 'Service Area', href: '/#service-area' },
                { label: 'Contact Us', href: '/#contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-iron-400 hover:text-primary-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:365-888-5854" className="flex items-start gap-3 text-iron-400 hover:text-primary-400 transition-colors group">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-white font-semibold">(365) 888-5854</div>
                    <div className="text-sm">24/7 Emergency Service</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@ironairhc.com" className="flex items-start gap-3 text-iron-400 hover:text-primary-400 transition-colors group">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>info@ironairhc.com</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-iron-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-iron-400">
            <div className="flex flex-wrap items-center gap-4">
              <p>&copy; {currentYear} Iron Air HC. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="/privacy-policy" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
                <span>|</span>
                <a href="/terms-of-service" className="hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>Licensed & Insured</span>
              <span className="text-iron-600">•</span>
              <span>EPA Certified</span>
              <span className="text-iron-600">•</span>
              <span>BBB Accredited</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA Button */}
      <motion.a
        href="tel:365-888-5854"
        onClick={() => trackConversion.phoneClick()}
        className="fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-2xl flex items-center gap-3 font-semibold z-40 group"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <span className="hidden md:inline">Call Now</span>
      </motion.a>
    </footer>
  )
}

