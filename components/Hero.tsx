'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

const brands = ['Goodman', 'Rheem', 'Daikin']

const brandLogos: Record<string, string> = {
  'Goodman': '/brand-goodman.png',
  'Carrier': '/brand-carrier.png',
  'Daikin': '/brand-daikin.png',
  'Bryant': '/brand-bryant.png',
  'Lennox': '/brand-lennox.png',
  'Trane': '/brand-trane.png',
  'Rheem': '/brand-rheem.png',
  'American Standard': '/brand-american-standard.png',
  'York': '/brand-york.png',
  'Frigidaire': '/brand-frigidaire.png',
  'Amana': '/brand-amana.png',
  'Coleman': '/brand-coleman.png',
}

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content - Single Column Centered */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20 w-full">
        <div className="w-full">
          <div className="max-w-5xl mx-auto text-center space-y-10 px-4">
            
                {/* Main Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-white">
                    Premium{' '}
                    <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-primary-400">Heating & Cooling</span>
                  </h1>
                  <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto font-light">
                    Expert HVAC solutions for your home and business.
                  </p>
                </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
            >
              <a 
                href="#contact" 
                className="group relative overflow-hidden bg-white hover:bg-iron-50 text-iron-900 px-8 py-4 rounded-full font-semibold transition-all duration-500 inline-flex items-center gap-2 shadow-lg hover:shadow-2xl transform hover:scale-105 w-full sm:w-auto justify-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </a>
              <a 
                href="tel:365-888-5854" 
                className="relative overflow-hidden bg-transparent hover:bg-white/10 text-white border-2 border-white hover:border-white font-semibold px-8 py-4 rounded-full transition-all duration-500 shadow-md hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                (365) 888-5854
              </a>
            </motion.div>
          </div>

          {/* Brands Trust Bar - Full Width */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-20 w-full"
          >
            {/* Infinite Scrolling Brand Bar */}
            <div className="relative overflow-hidden brands-carousel-fade">
              <div 
                className="infinite-brands-carousel"
                style={{
                  display: 'flex',
                  gap: '4rem',
                  animation: 'infiniteBrandsCarousel 15s linear infinite',
                  width: 'fit-content'
                }}
              >
                {/* Create 6 sets for seamless infinite loop */}
                {[...Array(6)].map((_, setIndex) => (
                  brands.map((brand, idx) => (
                    <div 
                      key={`set${setIndex}-${idx}`} 
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{ minWidth: '200px', height: '70px' }}
                    >
                      {brandLogos[brand] ? (
                        <img 
                          src={brandLogos[brand]} 
                          alt={`${brand} logo`}
                          className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300 drop-shadow-lg"
                        />
                      ) : (
                        <div className="text-xl font-bold text-white/60 hover:text-white transition-colors whitespace-nowrap">
                          {brand}
                        </div>
                      )}
                    </div>
                  ))
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

