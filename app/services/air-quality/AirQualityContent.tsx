'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, Wind, Droplets, Zap, Shield, Leaf, Heart, ChevronDown, Sparkles } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactFormModal from '@/components/ContactFormModal'

const features = [
  {
    icon: Wind,
    title: 'Air Purification Systems',
    description: 'Install whole-home air purifiers to remove airborne contaminants, allergens, and odors effectively.',
  },
  {
    icon: Shield,
    title: 'Air Filtration',
    description: 'High-efficiency filters and media air cleaners to capture particles and improve air quality.',
  },
  {
    icon: Droplets,
    title: 'Humidification',
    description: 'Whole-home humidifiers to maintain optimal humidity levels for comfort and health.',
  },
  {
    icon: Droplets,
    title: 'Dehumidification',
    description: 'Control excess moisture to prevent mold growth and improve indoor comfort levels.',
  },
  {
    icon: Zap,
    title: 'UV Light Systems',
    description: 'Install UV germicidal lights to eliminate bacteria, viruses, and mold in your HVAC system.',
  },
  {
    icon: Leaf,
    title: 'Ventilation Solutions',
    description: 'Improve fresh air circulation with energy recovery ventilators and fresh air systems.',
  },
]

const benefits = [
  'Reduce allergens and airborne irritants',
  'Remove odors and improve freshness',
  'Help prevent mold and mildew growth',
  'Maintain optimal humidity levels',
  'Whole-home solutions integrated with HVAC',
  'Professional installation and setup',
  'Ongoing maintenance support available',
  'Improve sleep quality and overall health',
]

const healthBenefits = [
  {
    icon: Heart,
    title: 'Better Respiratory Health',
    description: 'Reduce asthma triggers, allergens, and respiratory irritants for easier breathing.',
  },
  {
    icon: Sparkles,
    title: 'Cleaner Living Space',
    description: 'Less dust accumulation means less cleaning and a fresher home environment.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Solutions',
    description: 'Energy-efficient systems that improve air quality while reducing your carbon footprint.',
  },
]

const faqs = [
  {
    question: 'Why is indoor air quality important?',
    answer: 'Indoor air can be 2-5 times more polluted than outdoor air. Poor air quality can trigger allergies, asthma, and other respiratory issues. Good air quality improves sleep, reduces illness, and creates a healthier living environment for you and your family.'
  },
  {
    question: 'What are common indoor air pollutants?',
    answer: 'Common pollutants include dust, pollen, pet dander, mold spores, volatile organic compounds (VOCs), bacteria, viruses, and odors. These contaminants can come from everyday activities, building materials, cleaning products, and outdoor sources.'
  },
  {
    question: 'How do air purification systems work?',
    answer: 'Air purification systems use various technologies including HEPA filters, activated carbon, UV light, and ionization to remove contaminants. They integrate with your HVAC system to continuously clean air throughout your entire home, not just one room.'
  },
  {
    question: 'What humidity level is ideal for my home?',
    answer: 'The ideal indoor humidity level is between 30-50%. Too low causes dry skin and respiratory discomfort, while too high promotes mold growth. Our whole-home humidifiers and dehumidifiers maintain optimal levels automatically throughout the year.'
  },
  {
    question: 'How often should air filters be changed?',
    answer: 'Standard filters should be changed every 1-3 months, while high-efficiency filters may last 6-12 months. Frequency depends on factors like pets, allergies, and system usage. We can set up a maintenance schedule to ensure optimal performance.'
  },
  {
    question: 'Are UV light systems safe for my home?',
    answer: 'Yes! UV germicidal lights are installed inside your HVAC system where they safely neutralize microorganisms without exposing occupants to UV radiation. They\'re an effective, safe way to reduce biological contaminants in your air.'
  }
]

export default function AirQualityContent() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen">
      <Header />
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        defaultService="Air Quality Solutions"
      />
      
      {/* Hero Section - Dark & Cinematic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/HVAC-Systems.jpg"
            alt="Indoor Air Quality"
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
                Healthy Indoor Air
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Air Quality Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
              Comprehensive indoor air quality solutions to help you breathe cleaner, healthier air in your home.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                Improve Your Air Quality
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

      {/* Health Benefits Section - 3 Cards */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-iron-900 mb-4">
              Health Benefits<span className="text-primary-600">.</span>
            </h2>
            <p className="text-xl text-iron-600 max-w-2xl mx-auto">
              Experience the positive impact of clean, healthy air
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {healthBenefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-iron-900 mb-3">{benefit.title}</h3>
                  <p className="text-iron-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section - Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-iron-900 mb-4">
              Our Solutions<span className="text-primary-600">.</span>
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
                  {/* Subtle Glow on Hover */}
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

      {/* Benefits List Section */}
      <section className="py-20 bg-gradient-to-br from-iron-50 via-white to-iron-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-iron-900 mb-4">
                Why Choose Our Solutions<span className="text-primary-600">.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-iron-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
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
              Get answers to common questions about indoor air quality
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
              Ready to Breathe Better<span className="text-primary-400">?</span>
            </h2>
            <p className="text-xl text-iron-300 mb-10">
              Contact us today for a free air quality assessment and discover how we can improve your indoor environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="group relative overflow-hidden bg-white hover:bg-iron-50 text-iron-900 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                Get Free Assessment
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

