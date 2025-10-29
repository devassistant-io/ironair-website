'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, Flame, Wrench, Calendar, Shield, Droplets, AlertCircle, ChevronDown, Award } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactFormModal from '@/components/ContactFormModal'

const features = [
  {
    icon: Flame,
    title: 'Boiler Installation',
    description: 'Professional installation of new boilers including gas, oil, and electric systems for reliable heating.',
  },
  {
    icon: Wrench,
    title: 'Boiler Repair',
    description: 'Expert diagnosis and repair of all boiler issues for reliable heating performance year-round.',
  },
  {
    icon: Calendar,
    title: 'Annual Maintenance',
    description: 'Regular tune-ups to ensure safe, efficient operation and prevent unexpected breakdowns.',
  },
  {
    icon: Shield,
    title: 'System Upgrades',
    description: 'Replace older boilers with modern high-efficiency models for better performance and savings.',
  },
  {
    icon: AlertCircle,
    title: 'Safety Inspections',
    description: 'Thorough safety checks to ensure your boiler operates safely and meets all regulations.',
  },
  {
    icon: Droplets,
    title: 'Water Treatment',
    description: 'Proper water treatment to prevent corrosion and extend your boiler system lifespan.',
  },
]

const benefits = [
  'Licensed boiler technicians',
  'Experience with all boiler types',
  'Safety-first approach to all work',
  'Efficient, reliable heating solutions',
  'Emergency repair services available',
  'Quality parts and materials used',
  'Comprehensive system testing',
  'Competitive pricing and warranties',
]

const stats = [
  { number: '25+', label: 'Years Experience' },
  { number: '2000+', label: 'Boilers Serviced' },
  { number: '99%', label: 'Satisfaction Rate' },
  { number: '24/7', label: 'Emergency Service' },
]

const faqs = [
  {
    question: 'How long do boilers typically last?',
    answer: 'A well-maintained boiler can last 15-20 years. Regular annual maintenance, proper water treatment, and prompt repairs are key to maximizing your boiler\'s lifespan and ensuring safe, efficient operation throughout its lifetime.'
  },
  {
    question: 'What are signs my boiler needs repair?',
    answer: 'Warning signs include strange noises (banging, whistling), water leaks, inconsistent heating, pilot light problems, increased energy bills, or error codes. If you notice any of these issues, contact us immediately for a professional inspection.'
  },
  {
    question: 'How often should I service my boiler?',
    answer: 'We recommend annual boiler servicing before the heating season. Regular maintenance prevents breakdowns, ensures safety, maintains efficiency, and can identify potential issues before they become major problems, saving you money in the long run.'
  },
  {
    question: 'Are boilers more efficient than forced air?',
    answer: 'Boilers are often more efficient than forced air systems because they don\'t lose heat through ductwork. Modern high-efficiency boilers can achieve 90-98% efficiency, providing consistent, comfortable heat while reducing energy costs.'
  },
  {
    question: 'What types of boilers do you service?',
    answer: 'We service all types of boilers including gas, oil, and electric systems. Our technicians are experienced with residential and commercial boilers, hot water and steam systems, and all major brands and models.'
  },
  {
    question: 'Can you convert my oil boiler to gas?',
    answer: 'Yes! We specialize in boiler conversions from oil to gas or other fuel types. Our team assesses your current system, local gas availability, and heating needs to recommend the best conversion option for your home or business.'
  }
]

export default function BoilersContent() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen">
      <Header />
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        defaultService="Boiler Services"
      />
      
      {/* Hero Section - Dark & Cinematic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80"
            alt="Boiler Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary-600/20 border border-primary-500/30 px-4 py-2 rounded-full mb-6 mx-auto">
              <Flame className="w-4 h-4 text-primary-400" />
              <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
                Heating Systems
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Boiler Services
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
              Comprehensive boiler services for water and steam heating systems to keep your space warm and comfortable.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                Schedule Boiler Service
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:365-888-5854"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (365) 888-5854
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm md:text-base font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid - Masonry Style */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-iron-900 mb-4">
              Expert Boiler Services<span className="text-primary-600">.</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-gradient-to-br from-white to-iron-50 p-8 rounded-2xl border border-iron-200 hover:border-primary-600 transition-all duration-300 hover:shadow-2xl"
                >
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-iron-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-iron-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section with Image */}
      <section className="py-20 bg-gradient-to-br from-iron-50 via-white to-iron-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                alt="Boiler System"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-iron-900">Licensed</div>
                    <div className="text-sm text-iron-600">HVAC Experts</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-iron-900 mb-8">
                Why Choose Us<span className="text-primary-600">.</span>
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-lg text-iron-700 group-hover:text-primary-600 transition-colors">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-iron-900 mb-4">
              Frequently Asked Questions<span className="text-primary-600">.</span>
            </h2>
            <p className="text-xl text-iron-600 max-w-2xl mx-auto">
              Get answers to common questions about boiler services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white to-iron-50 border border-iron-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-iron-50/50 transition-colors"
                >
                  <span className="text-lg font-bold text-iron-900 pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform ${
                      openFaqIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-6 pb-6">
                    <p className="text-iron-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Boiler Service<span className="text-primary-400">?</span>
            </h2>
            <p className="text-xl text-iron-300 mb-10">
              Contact us today for reliable boiler installation, repair, and maintenance services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="group relative overflow-hidden bg-white hover:bg-iron-50 text-iron-900 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:365-888-5854"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

