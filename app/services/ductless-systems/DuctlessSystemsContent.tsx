'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, Wind, Wrench, Calendar, Shield, Zap, Home, ChevronDown } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactFormModal from '@/components/ContactFormModal'

const features = [
  {
    icon: Home,
    title: 'Mini Split Installation',
    description: 'Expert installation of single and multi-zone ductless systems for customized comfort in any space.',
  },
  {
    icon: Wrench,
    title: 'System Repair',
    description: 'Professional repairs for all ductless brands. Fast, reliable service to restore your comfort.',
  },
  {
    icon: Zap,
    title: 'Multi-Zone Design',
    description: 'Custom design of multi-zone systems for independent temperature control in each area.',
  },
  {
    icon: Calendar,
    title: 'Maintenance Service',
    description: 'Regular cleaning and maintenance to keep your ductless system running efficiently year-round.',
  },
  {
    icon: Shield,
    title: 'Retrofit Solutions',
    description: 'Add heating and cooling to spaces without existing ductwork easily and efficiently.',
  },
  {
    icon: Wind,
    title: 'Energy Audits',
    description: 'Assess your space and recommend the most efficient ductless solution for your needs.',
  },
]

const benefits = [
  'No ductwork required - perfect for additions',
  'Zone control for personalized comfort',
  'High-efficiency heating and cooling',
  'Quiet operation with minimal noise',
  'Easy installation with minimal disruption',
  'Improved indoor air quality',
  'Sleek, modern appearance',
  'Energy savings up to 30% vs traditional HVAC',
]

const faqs = [
  {
    question: 'What is a ductless mini-split system?',
    answer: 'A ductless mini-split is an efficient heating and cooling system that doesn\'t require ductwork. It consists of an outdoor compressor unit and one or more indoor air handlers, providing independent temperature control for different zones in your home or business.'
  },
  {
    question: 'How many rooms can one system handle?',
    answer: 'Multi-zone ductless systems can handle anywhere from 2 to 8 indoor units with a single outdoor condenser. Each indoor unit can be controlled independently, providing customized comfort for each room or zone.'
  },
  {
    question: 'Is installation complicated?',
    answer: 'Ductless installation is relatively simple compared to traditional HVAC. It requires only a small hole through the wall for the conduit connecting indoor and outdoor units. Most installations are completed in one day with minimal disruption to your home.'
  },
  {
    question: 'Are ductless systems energy efficient?',
    answer: 'Yes! Ductless systems are highly efficient, often achieving SEER ratings of 20 or higher. Without ductwork, you avoid the 20-30% energy loss typical in traditional systems, resulting in significant energy savings.'
  },
  {
    question: 'What maintenance do ductless systems need?',
    answer: 'Ductless systems require regular filter cleaning (monthly) and annual professional maintenance. This includes cleaning the indoor units, checking refrigerant levels, inspecting connections, and ensuring optimal performance of both indoor and outdoor components.'
  },
  {
    question: 'Can I add more zones later?',
    answer: 'Yes! One of the advantages of ductless systems is their flexibility. As long as your outdoor unit has capacity, you can add additional indoor units to create new zones. Our team can assess your system and recommend the best expansion options.'
  }
]

export default function DuctlessSystemsContent() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen">
      <Header />
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        defaultService="Ductless Systems"
      />
      
      {/* Hero Section - Dark & Cinematic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/ductless-AC.jpg"
            alt="Ductless Mini Split System"
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
                Multi-Zone Comfort
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Ductless Systems
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
              Flexible heating and cooling solutions with ductless mini-split systems for any room or space.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                Schedule Ductless Service
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

      {/* Features Section - Alternating Layout */}
      <section className="py-20 bg-gradient-to-br from-white via-iron-50 to-white">
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

          <div className="max-w-5xl mx-auto space-y-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              const isEven = idx % 2 === 0
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 bg-white p-8 rounded-2xl border border-iron-200 shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className={`flex-1 ${isEven ? 'text-left' : 'md:text-right'}`}>
                    <h3 className="text-2xl font-bold text-iron-900 mb-3">{feature.title}</h3>
                    <p className="text-iron-600 leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section - Two Column Grid */}
      <section className="py-20 bg-gradient-to-br from-iron-900 via-iron-800 to-iron-900 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Ductless<span className="text-primary-400">?</span>
            </h2>
            <p className="text-xl text-iron-300 max-w-2xl mx-auto">
              Experience the benefits of modern, efficient climate control
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-white/90">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-iron-900 mb-4">
              Sleek & Modern Design<span className="text-primary-600">.</span>
            </h2>
            <p className="text-xl text-iron-600 max-w-2xl mx-auto">
              Ductless systems blend seamlessly with any interior design
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                alt="Modern Interior with Ductless"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative h-80 rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&q=80"
                alt="Ductless System Installation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative h-80 rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                alt="Multi-Zone Control"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-iron-50 via-white to-iron-50">
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
              Get answers to common questions about ductless systems
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
              Ready for Flexible Climate Control<span className="text-primary-400">?</span>
            </h2>
            <p className="text-xl text-iron-300 mb-10">
              Contact us today for a free consultation and discover the benefits of ductless mini-split systems.
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

