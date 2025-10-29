'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, Wind, Wrench, Shield, Zap, Layers, Settings, ChevronDown, AlertTriangle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactFormModal from '@/components/ContactFormModal'

const features = [
  {
    icon: Wind,
    title: 'Duct Cleaning',
    description: 'Thorough cleaning to remove dust, debris, and contaminants from your ductwork system.',
  },
  {
    icon: Shield,
    title: 'Duct Sealing',
    description: 'Seal leaks and gaps to prevent air loss, improve efficiency, and reduce energy bills.',
  },
  {
    icon: Wrench,
    title: 'Duct Repair',
    description: 'Fix damaged or disconnected ductwork to restore proper airflow throughout your home.',
  },
  {
    icon: Layers,
    title: 'New Duct Installation',
    description: 'Install new ductwork for additions, renovations, or complete system replacements.',
  },
  {
    icon: Settings,
    title: 'Duct Design',
    description: 'Proper duct sizing and design for balanced airflow and maximum comfort.',
  },
  {
    icon: Zap,
    title: 'Insulation Services',
    description: 'Add or replace duct insulation to prevent energy loss and condensation issues.',
  },
]

const benefits = [
  'Improve heating and cooling efficiency',
  'Reduce energy waste and lower bills',
  'Better airflow to all rooms',
  'Improved indoor air quality',
  'Eliminate hot and cold spots',
  'Professional workmanship guaranteed',
  'Clean, respectful service',
  'Extended HVAC system lifespan',
]

const warningSignsData = [
  {
    title: 'Uneven Temperature',
    description: 'Some rooms too hot or cold compared to others',
  },
  {
    title: 'High Energy Bills',
    description: 'Unexplained increases in heating/cooling costs',
  },
  {
    title: 'Poor Airflow',
    description: 'Weak air coming from vents or registers',
  },
  {
    title: 'Excessive Dust',
    description: 'Constant dust buildup throughout your home',
  },
  {
    title: 'Strange Noises',
    description: 'Whistling, rattling, or banging from ducts',
  },
  {
    title: 'Visible Damage',
    description: 'Disconnected, crushed, or deteriorating ducts',
  },
]

const faqs = [
  {
    question: 'How often should ductwork be cleaned?',
    answer: 'We recommend professional duct cleaning every 3-5 years, or more frequently if you have pets, allergies, recent renovations, or notice excessive dust. Regular cleaning improves air quality and system efficiency while reducing allergens and contaminants circulating in your home.'
  },
  {
    question: 'What are signs of leaky ductwork?',
    answer: 'Common signs include high energy bills, uneven temperatures between rooms, excessive dust, difficulty maintaining comfortable temperatures, and whistling sounds from vents. Leaky ducts can waste 20-30% of your conditioned air, significantly impacting comfort and costs.'
  },
  {
    question: 'How long does duct sealing take?',
    answer: 'Most duct sealing projects take 4-8 hours depending on the size of your home and extent of leaks. We use professional-grade sealants and techniques to ensure long-lasting results. The investment typically pays for itself through energy savings within a few years.'
  },
  {
    question: 'Is duct cleaning worth it?',
    answer: 'Yes! Professional duct cleaning removes years of accumulated dust, allergens, and contaminants. It improves indoor air quality, system efficiency, and can reduce allergy symptoms. It\'s especially beneficial for homes with pets, smokers, or family members with respiratory issues.'
  },
  {
    question: 'Can damaged ductwork affect my HVAC system?',
    answer: 'Absolutely. Damaged or leaky ductwork forces your HVAC system to work harder to maintain temperatures, leading to increased wear, higher energy bills, and potential premature failure. Proper ductwork is essential for optimal system performance and longevity.'
  },
  {
    question: 'Do you work with existing ductwork or only new installations?',
    answer: 'We handle both! Our services include cleaning, repairing, sealing, and modifying existing ductwork, as well as complete new installations for additions, renovations, or system replacements. We assess your current system and recommend the most cost-effective solution.'
  }
]

export default function DuctworkContent() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen">
      <Header />
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        defaultService="Ductwork Services"
      />
      
      {/* Hero Section - Dark & Cinematic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/hvac-ductwork.jpg"
            alt="Ductwork Services"
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
              <Wind className="w-4 h-4 text-primary-400" />
              <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
                Air Distribution
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Ductwork Services
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
              Complete ductwork services to ensure efficient air distribution and optimal HVAC system performance.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                Schedule Ductwork Service
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

      {/* Warning Signs Section */}
      <section className="py-20 bg-gradient-to-br from-iron-50 via-white to-iron-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-iron-900 mb-4">
              Warning Signs<span className="text-primary-600">.</span>
            </h2>
            <p className="text-xl text-iron-600 max-w-2xl mx-auto">
              Your ductwork may need attention if you notice any of these issues
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {warningSignsData.map((sign, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl border border-amber-200 hover:border-amber-400 transition-colors shadow-md hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-iron-900 mb-2">{sign.title}</h3>
                <p className="text-iron-600">{sign.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-iron-900 mb-4">
              Our Services<span className="text-primary-600">.</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-gradient-to-br from-white to-iron-50 p-8 rounded-2xl border border-iron-200 hover:border-primary-600 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="absolute -inset-px bg-gradient-to-r from-primary-600/0 via-primary-600/10 to-secondary-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10"></div>
                  
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-iron-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-iron-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-iron-50 via-white to-iron-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-iron-900 mb-4">
              Benefits of Proper Ductwork<span className="text-primary-600">.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl border border-iron-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-iron-700">{benefit}</p>
              </motion.div>
            ))}
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
              Get answers to common questions about ductwork services
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
              Ready to Optimize Your Airflow<span className="text-primary-400">?</span>
            </h2>
            <p className="text-xl text-iron-300 mb-10">
              Contact us today for professional ductwork inspection, cleaning, sealing, or repair services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="group relative overflow-hidden bg-white hover:bg-iron-50 text-iron-900 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                Get Free Inspection
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

