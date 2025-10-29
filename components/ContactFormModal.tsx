'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Phone, CheckCircle2, X } from 'lucide-react'
import { trackConversion } from '@/lib/tracking'

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
  defaultService?: string
}

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

export default function ContactFormModal({ isOpen, onClose, defaultService }: ContactFormModalProps) {
  const [step, setStep] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: defaultService || '',
    message: '',
  })

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(0)
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: defaultService || '',
        message: '',
      })
    }
  }, [isOpen, defaultService])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

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
      trackConversion.formSubmit('contact_form_modal')
      
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => {})

      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
      setIsSubmitted(true)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleNext()
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-iron-100 hover:bg-iron-200 flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5 text-iron-600" />
              </button>

              <div className="p-8 md:p-12">
                {isSubmitted ? (
                  // Success State
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-8 py-8"
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
                      onClick={onClose}
                      className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  // Form Steps
                  <>
                    {/* Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center mb-8"
                    >
                      <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
                        Get In Touch
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-iron-900 mb-4">
                        Request Your Free Quote
                      </h2>
                      <p className="text-iron-600">
                        Get a free, no-obligation quote for your HVAC needs
                      </p>
                    </motion.div>

                    {/* Progress Bar */}
                    <div className="mb-8">
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
                        className="space-y-6"
                      >
                        <h3 className="text-2xl md:text-3xl font-bold text-iron-900">
                          {currentStep.label}
                        </h3>

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
                            rows={4}
                            className="w-full px-6 py-4 text-lg border-2 border-iron-300 rounded-xl focus:border-primary-600 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                          />
                        ) : (
                          <input
                            type={currentStep.type}
                            value={formData[currentStep.id as keyof FormData]}
                            onChange={(e) => setFormData({ ...formData, [currentStep.id]: e.target.value })}
                            onKeyPress={handleKeyPress}
                            placeholder={currentStep.placeholder}
                            className="w-full px-6 py-4 text-lg border-2 border-iron-300 rounded-xl focus:border-primary-600 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                          />
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex gap-4 pt-4">
                          {step > 0 && (
                            <button
                              onClick={handleBack}
                              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-iron-300 text-iron-700 font-semibold hover:bg-iron-50 transition-all"
                            >
                              <ArrowLeft className="w-5 h-5" />
                              Back
                            </button>
                          )}
                          
                          <button
                            onClick={handleNext}
                            disabled={!currentValue.trim()}
                            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
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
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

