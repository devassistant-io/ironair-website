'use client'

import { motion } from 'framer-motion'
import { 
  Award, 
  Clock, 
  DollarSign, 
  Users, 
  Zap,
  Shield,
  Calendar,
  GraduationCap
} from 'lucide-react'

const features = [
  { icon: Award, title: 'Licensed & Certified' },
  { icon: DollarSign, title: 'Transparent Pricing' },
  { icon: Calendar, title: 'Flexible Scheduling' },
  { icon: Users, title: 'Professional Service' },
  { icon: Zap, title: 'Fast & Reliable' },
  { icon: Shield, title: 'Full-Service' },
  { icon: Clock, title: '24/7 Emergency' },
  { icon: GraduationCap, title: 'Expert Training' },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        
        {/* Clean Features List */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full border-2 border-iron-200 group-hover:border-primary-600 flex items-center justify-center mb-3 transition-all duration-300">
                  <Icon className="w-5 h-5 text-iron-600 group-hover:text-primary-600 transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-iron-900 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

