'use client'

import { motion } from 'framer-motion'
import { 
  Flame, 
  Snowflake, 
  Wind, 
  Thermometer, 
  Home,
  Droplet,
  Gauge,
  Wrench,
  Building2
} from 'lucide-react'

const services = [
  {
    icon: Flame,
    title: 'Furnaces',
    description: 'Installation, repair & maintenance',
    href: '/services/furnaces',
  },
  {
    icon: Snowflake,
    title: 'Air Conditioning',
    description: 'AC installation, repair & tune-ups',
    href: '/services/air-conditioning',
  },
  {
    icon: Thermometer,
    title: 'Heat Pumps',
    description: 'Year-round heating & cooling',
    href: '/services/heat-pumps',
  },
  {
    icon: Home,
    title: 'Ductless Systems',
    description: 'Flexible multi-zone comfort',
    href: '/services/ductless-systems',
  },
  {
    icon: Droplet,
    title: 'Boilers',
    description: 'Water & steam heating systems',
    href: '/services/boilers',
  },
  {
    icon: Wind,
    title: 'Air Quality',
    description: 'Purification & filtration',
    href: '/services/air-quality',
  },
  {
    icon: Gauge,
    title: 'Thermostats',
    description: 'Smart temperature control',
    href: '/services/thermostats',
  },
  {
    icon: Wrench,
    title: 'Ductwork',
    description: 'Sealing, repair & installation',
    href: '/services/ductwork',
  },
  {
    icon: Building2,
    title: 'Commercial',
    description: 'Business HVAC solutions',
    href: '/services/commercial',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 overflow-hidden bg-gradient-to-br from-iron-50 via-white to-iron-50">
      {/* Diagonal Background Split */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-secondary-600/5"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-iron-100/30 to-transparent" 
          style={{ transform: 'skewY(-6deg)', transformOrigin: 'top left' }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Title - Minimal & Side Aligned */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-iron-900 leading-none mb-4">
            What We Do<span className="text-primary-600">.</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-600 to-secondary-600"></div>
        </motion.div>

        {/* Services - Flowing List Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-1">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.a
                key={idx}
                href={service.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative py-6 border-b border-iron-200 hover:border-primary-600 transition-all duration-300 flex items-start gap-4"
              >
                {/* Number + Icon */}
                <div className="flex-shrink-0 flex items-center gap-3">
                  <span className="text-sm font-mono text-iron-400 group-hover:text-primary-600 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white border border-iron-200 group-hover:border-primary-600 group-hover:bg-primary-50 flex items-center justify-center transition-all duration-300">
                    <Icon className="w-5 h-5 text-iron-600 group-hover:text-primary-600 transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-iron-900 group-hover:text-primary-600 transition-colors mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-iron-600 group-hover:text-iron-900 transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Arrow - Appears on Hover */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Subtle Glow on Hover */}
                <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-primary-600/0 via-primary-600/5 to-secondary-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10"></div>
              </motion.a>
            )
          })}
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t-2 border-iron-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-lg text-iron-900 font-semibold mb-1">Need a custom solution?</p>
            <p className="text-iron-600">We handle unique HVAC challenges for residential and commercial properties.</p>
          </div>
          <a 
            href="#contact" 
            className="group inline-flex items-center gap-3 bg-iron-900 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap"
          >
            Let's Talk
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

