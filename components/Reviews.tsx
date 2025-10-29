'use client'

import { motion } from 'framer-motion'
import { Star, CheckCircle2 } from 'lucide-react'

const reviews = [
  {
    name: 'Michael Rossi',
    initial: 'M',
    location: 'Hamilton, ON',
    rating: 5,
    text: 'Had an emergency with our furnace on the coldest night of the year. Called around 10pm and Nino himself showed up within the hour! Fixed it quickly and refused to overcharge us despite the late hour. This guy really cares about his customers. Will never use anyone else.',
    date: '2 weeks ago',
    verified: true,
  },
  {
    name: 'Sarah Mitchell',
    initial: 'S',
    location: 'Burlington, ON',
    rating: 5,
    text: 'Best HVAC company I have ever dealt with. The owner took the time to explain all my options without any pressure. His team installed our new heat pump system and it works perfectly. They were clean, professional, and the pricing was very fair. Highly recommend Iron Air Home Comfort!',
    date: '1 month ago',
    verified: true,
  },
  {
    name: 'David Park',
    initial: 'D',
    location: 'Oakville, ON',
    rating: 5,
    text: 'I was skeptical after getting quotes from 3 other companies that were way too high. Iron Air came in with honest pricing and actually saved me money by suggesting a more efficient system. The installation crew was fantastic and finished in one day. You can tell this company is run by someone who actually cares.',
    date: '3 weeks ago',
    verified: true,
  },
  {
    name: 'Jennifer L.',
    initial: 'J',
    location: 'Milton, ON',
    rating: 5,
    text: 'Our AC died during a summer heat wave. Called Iron Air and they came out same day. The technician was knowledgeable, fixed the issue quickly, and even showed me how to maintain it properly. Fair pricing, no hidden fees. These guys are legit!',
    date: '1 week ago',
    verified: true,
  },
  {
    name: 'Robert Chen',
    initial: 'R',
    location: 'Mississauga, ON',
    rating: 5,
    text: 'Nino and his team installed a complete HVAC system in our new build. From start to finish, everything was handled professionally. He personally came to check the work and made sure we were 100% satisfied. You do not find this level of service anymore. Worth every penny!',
    date: '2 months ago',
    verified: true,
  },
  {
    name: 'Amanda Foster',
    initial: 'A',
    location: 'Ancaster, ON',
    rating: 5,
    text: 'Cannot say enough good things about this company. Had them do our annual furnace maintenance and they found a small issue that could have been dangerous. Fixed it on the spot and did not charge extra. Honest, reliable, and actually care about safety. This is how business should be done.',
    date: '3 days ago',
    verified: true,
  },
  {
    name: 'Thomas Grant',
    initial: 'T',
    location: 'Waterdown, ON',
    rating: 5,
    text: 'After dealing with another company that left us hanging, Iron Air came through big time. The owner himself made sure everything was done right. His team was professional, on time, and cleaned up perfectly. Pricing was transparent - no surprises. Restores your faith in contractors!',
    date: '2 weeks ago',
    verified: true,
  },
  {
    name: 'Lisa Patel',
    initial: 'L',
    location: 'Stoney Creek, ON',
    rating: 5,
    text: 'We have been using Iron Air Home Comfort for 3 years now on our maintenance plan. Best decision ever! They always show up on time, the technicians are friendly and explain everything clearly. Nino even calls to follow up after service. You just do not see this kind of personal touch anymore.',
    date: '1 month ago',
    verified: true,
  },
  {
    name: 'Kevin Martinez',
    initial: 'K',
    location: 'Grimsby, ON',
    rating: 5,
    text: 'Hands down the best experience I have had with any contractor. Our old furnace was on its last legs and they got us a great deal on a new energy-efficient model. Install was quick, clean, and the team answered all my questions. The owner clearly trains his people well. A+',
    date: '4 days ago',
    verified: true,
  },
  {
    name: 'Rachel Thompson',
    initial: 'R',
    location: 'Dundas, ON',
    rating: 5,
    text: 'Called several companies for quotes on a ductless system. Iron Air was not the cheapest, but the owner took time to really understand what we needed. His expertise and honesty stood out immediately. Installation was flawless and they even helped us get rebates we did not know about. Worth every cent!',
    date: '1 week ago',
    verified: true,
  },
]

const certifications = [
  'BBB Accredited',
  'Licensed & Insured',
  'EPA Certified',
  'Energy Star Partner',
]

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Customer Reviews
          </span>
          <h2 className="heading-lg mb-4">
            Our Satisfied Customers
          </h2>
          <p className="text-xl text-iron-600 max-w-3xl mx-auto mb-8">
            Real reviews from real customers about their experience with Iron Air Home Comfort.
          </p>

          {/* Google-style Trust Badge */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white border border-iron-200 px-6 py-3 rounded-lg shadow-sm">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-iron-900">5.0</span>
              <span className="text-iron-600">on Google</span>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-iron-600">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                {cert}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Infinite Carousel Container */}
        <div className="relative overflow-hidden reviews-carousel-fade">
          <div 
            className="infinite-reviews-carousel"
            style={{
              display: 'flex',
              gap: '2rem',
              padding: '2rem 0',
              animation: 'infiniteReviewsCarousel 60s linear infinite',
              width: 'fit-content'
            }}
          >
            {/* First set of reviews */}
            {reviews.map((review, index) => (
              <div key={`set1-${index}`} className="flex-shrink-0">
                <div className="review-card-google">
                  <div className="bg-white border border-iron-200 rounded-2xl shadow-xl p-8 w-[420px] h-[320px] flex flex-col">
                    {/* Google Review Style Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 flex-shrink-0">
                        <svg viewBox="0 0 48 48" className="w-full h-full">
                          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                          <path fill="none" d="M0 0h48v48H0z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-base text-iron-900 truncate">{review.name}</h3>
                          {review.verified && (
                            <div className="flex items-center gap-1 text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded-full flex-shrink-0">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Verified</span>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-iron-600 truncate">{review.location}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex gap-0.5">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <span className="text-xs text-iron-500">{review.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <div className="flex-1 overflow-hidden">
                      <p className="text-iron-700 text-sm leading-relaxed line-clamp-6">
                        {review.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {reviews.map((review, index) => (
              <div key={`set2-${index}`} className="flex-shrink-0">
                <div className="review-card-google">
                  <div className="bg-white border border-iron-200 rounded-2xl shadow-xl p-8 w-[420px] h-[320px] flex flex-col">
                    {/* Google Review Style Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 flex-shrink-0">
                        <svg viewBox="0 0 48 48" className="w-full h-full">
                          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                          <path fill="none" d="M0 0h48v48H0z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-base text-iron-900 truncate">{review.name}</h3>
                          {review.verified && (
                            <div className="flex items-center gap-1 text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded-full flex-shrink-0">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Verified</span>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-iron-600 truncate">{review.location}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex gap-0.5">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <span className="text-xs text-iron-500">{review.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <div className="flex-1 overflow-hidden">
                      <p className="text-iron-700 text-sm leading-relaxed line-clamp-6">
                        {review.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

