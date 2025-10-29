'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone, Building2, Wrench, Calendar, Shield, Zap, Clock, ChevronDown, Users, Store, Factory, Briefcase } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactFormModal from '@/components/ContactFormModal'

const features = [
  {
    icon: Building2,
    title: 'Commercial Installation',
    description: 'Expert installation of rooftop units, split systems, and packaged HVAC equipment for any commercial space.',
  },
  {
    icon: Clock,
    title: 'Emergency Repairs',
    description: 'Fast response for commercial HVAC emergencies to minimize business disruption and downtime.',
  },
  {
    icon: Calendar,
    title: 'Preventive Maintenance',
    description: 'Scheduled maintenance programs to prevent breakdowns and extend equipment life significantly.',
  },
  {
    icon: Zap,
    title: 'System Retrofits',
    description: 'Upgrade existing systems with modern, energy-efficient commercial HVAC equipment.',
  },
  {
    icon: Shield,
    title: 'Building Automation',
    description: 'Integrate HVAC controls with building management systems for optimal efficiency.',
  },
  {
    icon: Wrench,
    title: 'Custom Solutions',
    description: 'Tailored HVAC solutions for offices, retail, restaurants, and industrial facilities.',
  },
]

const benefits = [
  'Licensed commercial HVAC contractors',
  'Minimize downtime with fast service',
  'Flexible scheduling including after-hours',
  'Energy-efficient systems to reduce costs',
  'Maintenance contracts available',
  'Experienced with all commercial systems',
  'Professional, uniformed technicians',
  'Comprehensive warranty coverage',
]

const businessTypes = [
  {
    icon: Briefcase,
    title: 'Office Buildings',
    description: 'Climate control solutions for professional office environments',
  },
  {
    icon: Store,
    title: 'Retail Spaces',
    description: 'Comfortable shopping environments for customers and staff',
  },
  {
    icon: Factory,
    title: 'Industrial Facilities',
    description: 'Heavy-duty HVAC systems for warehouses and manufacturing',
  },
  {
    icon: Users,
    title: 'Multi-Tenant Properties',
    description: 'Complex HVAC systems for apartment and commercial complexes',
  },
]

const maintenanceFeatures = [
  'Priority emergency service response',
  'Regular inspections and tune-ups',
  'Detailed maintenance reports',
  'Parts and labor discounts',
  'Extended equipment warranties',
  'Energy usage monitoring',
]

const faqs = [
  {
    question: 'What makes commercial HVAC different from residential?',
    answer: 'Commercial HVAC systems are typically larger, more complex, and designed for constant operation. They often include rooftop units, variable refrigerant flow systems, and building automation integration. Commercial systems require specialized knowledge, different equipment, and must comply with commercial building codes and regulations.'
  },
  {
    question: 'How quickly can you respond to commercial emergencies?',
    answer: 'We offer priority emergency service for commercial clients with response times typically within 2-4 hours. For maintenance contract clients, we provide even faster response. We understand that HVAC downtime affects your business, customers, and revenue, so we prioritize getting your system back online quickly.'
  },
  {
    question: 'Do you offer maintenance contracts?',
    answer: 'Yes! Our commercial maintenance contracts include scheduled preventive maintenance, priority emergency service, discounted rates on repairs, detailed reporting, and extended warranties. Regular maintenance reduces unexpected breakdowns, extends equipment life, and optimizes energy efficiency, saving you money long-term.'
  },
  {
    question: 'Can you work after hours to avoid disrupting business?',
    answer: 'Absolutely. We offer flexible scheduling including evenings, weekends, and overnight service to minimize disruption to your operations. Whether you need installation, repairs, or maintenance, we can arrange service during off-hours to keep your business running smoothly.'
  },
  {
    question: 'What types of commercial HVAC systems do you service?',
    answer: 'We service all commercial HVAC systems including rooftop units (RTUs), split systems, packaged systems, chillers, boilers, variable refrigerant flow (VRF), building automation systems, and more. Our technicians are experienced with all major commercial brands and system types.'
  },
  {
    question: 'How can I reduce my commercial HVAC energy costs?',
    answer: 'Key strategies include regular maintenance, upgrading to high-efficiency equipment, implementing programmable controls, proper system sizing, improving building insulation, and using building automation. We provide energy audits to identify opportunities for savings and can recommend cost-effective upgrades that typically pay for themselves through reduced energy bills.'
  }
]

export default function CommercialContent() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen">
      <Header />
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        defaultService="Commercial HVAC"
      />
      
      {/* Hero Section - Dark & Cinematic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/hvac_231473096-1024x683.jpg"
            alt="Commercial HVAC Services"
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
              <Building2 className="w-4 h-4 text-primary-400" />
              <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
                Business Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Commercial HVAC
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
              Reliable commercial HVAC solutions to keep your business comfortable and operating efficiently.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                Get Commercial Quote
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

      {/* Emergency Service Banner */}
      <section className="py-6 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6" />
              <div>
                <h2 className="text-lg md:text-xl font-bold">24/7 Emergency Service Available</h2>
                <p className="text-sm text-white/90">HVAC down? We respond fast to minimize business disruption.</p>
              </div>
            </div>
            <a
              href="tel:365-888-5854"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-iron-50 transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call for Emergency Service
            </a>
          </motion.div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-iron-900 mb-4">
              Businesses We Serve<span className="text-primary-600">.</span>
            </h2>
            <p className="text-xl text-iron-600 max-w-2xl mx-auto">
              Professional HVAC solutions tailored to your industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessTypes.map((type, idx) => {
              const Icon = type.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-white to-iron-50 rounded-2xl border border-iron-200 hover:border-primary-600 transition-all hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-iron-900 mb-2">{type.title}</h3>
                  <p className="text-iron-600 text-sm">{type.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features - Modern List Layout */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-iron-900 mb-4">
              Our Services<span className="text-primary-600">.</span>
            </h2>
            <p className="text-xl text-iron-600 max-w-2xl">
              Comprehensive commercial HVAC solutions for your business
            </p>
          </motion.div>

          <div className="max-w-5xl space-y-1">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group flex items-start gap-6 p-6 hover:bg-iron-50 transition-all border-l-4 border-transparent hover:border-primary-600"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-iron-100 group-hover:bg-gradient-to-br group-hover:from-primary-600 group-hover:to-primary-700 rounded-lg flex items-center justify-center transition-all">
                      <Icon className="w-7 h-7 text-iron-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold text-iron-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-iron-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Maintenance Programs Section */}
      <section className="py-20 bg-gradient-to-br from-iron-50 via-white to-iron-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-iron-900 mb-6">
                Maintenance Programs<span className="text-primary-600">.</span>
              </h2>
              <p className="text-xl text-iron-600 mb-8">
                Protect your investment and avoid costly downtime with our comprehensive maintenance contracts.
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                Learn About Maintenance Plans
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {maintenanceFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl border border-iron-200 hover:shadow-md transition-shadow"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-iron-700">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Compact List */}
      <section className="py-20 bg-gradient-to-br from-iron-50 via-white to-iron-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-iron-900 mb-4">
              Why Choose Us<span className="text-primary-600">?</span>
            </h2>
            <p className="text-xl text-iron-600 max-w-2xl mx-auto">
              Professional service backed by experience and reliability
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl border border-iron-200 hover:border-primary-600 transition-all hover:shadow-md"
                >
                  <div className="w-5 h-5 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-sm font-medium text-iron-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
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
              Get answers to common questions about commercial HVAC services
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
                className="bg-white border border-iron-200 rounded-2xl overflow-hidden"
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
              Ready to Upgrade Your Commercial HVAC<span className="text-primary-400">?</span>
            </h2>
            <p className="text-xl text-iron-300 mb-10">
              Contact us today for a free commercial HVAC consultation and quote.
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

