'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Phone, CheckCircle2 } from 'lucide-react'
import { trackConversion } from '@/lib/tracking'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const services = [
  'Furnace Installation',
  'Furnace Repair',
  'Air Conditioning Installation',
  'AC Repair',
  'Heat Pump',
  'Ductless Mini Split',
  'Boiler Service',
  'Indoor Air Quality',
  'Smart Thermostat',
  'Ductwork',
  'Commercial HVAC',
  'Emergency Service',
]

export default function ContactForm() {
  const [step, setStep] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const steps = [
    {
      id: 'name',
      label: "What's your name?",
      placeholder: 'Enter your full name',
      type: 'text',
    },
    {
      id: 'email',
      label: "What's your email?",
      placeholder: 'your@email.com',
      type: 'email',
    },
    {
      id: 'phone',
      label: "What's your phone number?",
      placeholder: '(365) 888-5854',
      type: 'tel',
    },
    {
      id: 'service',
      label: 'What service do you need?',
      placeholder: 'Select a service',
      type: 'select',
    },
    {
      id: 'message',
      label: 'Tell us about your needs',
      placeholder: 'Describe your HVAC needs or any questions you have...',
      type: 'textarea',
    },
  ]

  const currentStep = steps[step]
  const isLastStep = step === steps.length - 1
  const currentValue = formData[currentStep.id as keyof FormData]

  const handleNext = () => {
    if (currentValue.trim()) {
      if (isLastStep) {
        handleSubmit()
      } else {
        setStep(step + 1)
      }
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async () => {
    try {
      trackConversion.formSubmit('contact_form')
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      
      console.error('=== CONTACT FORM API RESPONSE ===')
      console.error('Status:', response.status)
      console.error('Response:', data)
      console.error('Full Response:', response)
      console.error('================================')

      setIsSubmitted(true)
    } catch (error) {
      console.error('=== CONTACT FORM ERROR ===')
      console.error('Error:', error)
      console.error('Error message:', error instanceof Error ? error.message : 'Unknown error')
      console.error('==========================')
      setIsSubmitted(true)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleNext()
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-iron-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center space-y-8 py-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto"
            >
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </motion.div>
            
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-iron-900">Thank You!</h2>
              <p className="text-xl text-iron-600">
                We've received your request and will get back to you as soon as possible.
              </p>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
              <p className="text-iron-700 mb-3">
                <strong>Need immediate assistance or have an emergency?</strong>
              </p>
              <a 
                href="tel:365-888-5854"
                className="inline-flex items-center gap-2 text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
              >
                <Phone className="w-6 h-6" />
                (365) 888-5854
              </a>
              <p className="text-sm text-iron-600 mt-2">Available 24/7 for emergencies</p>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false)
                setStep(0)
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  service: '',
                  message: '',
                })
              }}
              className="text-primary-600 hover:text-primary-700 font-semibold underline"
            >
              Submit another request
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-iron-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-iron-900 mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-iron-600">
              Have questions or need service? We're here to help
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-iron-600">
                Step {step + 1} of {steps.length}
              </span>
              <span className="text-sm text-iron-500">
                {Math.round(((step + 1) / steps.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full h-2 bg-iron-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-600 to-secondary-600"
                initial={{ width: 0 }}
                animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Form Step */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-iron-900">
                {currentStep.label}
              </h2>

              {currentStep.type === 'select' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => {
                        setFormData({ ...formData, service })
                        setTimeout(handleNext, 300)
                      }}
                      className={`text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                        formData.service === service
                          ? 'border-primary-600 bg-primary-50 text-primary-700 font-semibold'
                          : 'border-iron-200 hover:border-primary-400 bg-white hover:bg-primary-50'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              ) : currentStep.type === 'textarea' ? (
                <textarea
                  value={formData[currentStep.id as keyof FormData]}
                  onChange={(e) => setFormData({ ...formData, [currentStep.id]: e.target.value })}
                  onKeyPress={handleKeyPress}
                  placeholder={currentStep.placeholder}
                  rows={6}
                  className="w-full px-6 py-4 text-xl border-2 border-iron-300 rounded-xl focus:border-primary-600 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                />
              ) : (
                <input
                  type={currentStep.type}
                  value={formData[currentStep.id as keyof FormData]}
                  onChange={(e) => setFormData({ ...formData, [currentStep.id]: e.target.value })}
                  onKeyPress={handleKeyPress}
                  placeholder={currentStep.placeholder}
                  className="w-full px-6 py-4 text-xl border-2 border-iron-300 rounded-xl focus:border-primary-600 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                />
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 pt-6">
                {step > 0 && (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-iron-300 text-iron-700 font-semibold hover:bg-iron-50 transition-all"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                )}
                
                <button
                  onClick={handleNext}
                  disabled={!currentValue.trim()}
                  className={`flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all ${
                    currentValue.trim()
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                      : 'bg-iron-300 text-iron-500 cursor-not-allowed'
                  }`}
                >
                  {isLastStep ? 'Submit' : 'Next'}
                  {!isLastStep && <ArrowRight className="w-5 h-5" />}
                </button>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  )
}
