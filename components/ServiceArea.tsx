'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'
import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const serviceCities = [
  { name: 'Hamilton', lat: 43.2557, lng: -79.8711 },
  { name: 'Toronto', lat: 43.6532, lng: -79.3832 },
  { name: 'Mississauga', lat: 43.5890, lng: -79.6441 },
  { name: 'Ancaster', lat: 43.2167, lng: -79.9833 },
  { name: 'Dundas', lat: 43.2667, lng: -79.9500 },
  { name: 'Waterdown', lat: 43.3333, lng: -79.9000 },
  { name: 'Stoney Creek', lat: 43.2167, lng: -79.7667 },
  { name: 'Burlington', lat: 43.3255, lng: -79.7990 },
  { name: 'Oakville', lat: 43.4675, lng: -79.6877 },
  { name: 'Milton', lat: 43.5183, lng: -79.8774 },
  { name: 'Brantford', lat: 43.1394, lng: -80.2644 },
  { name: 'Caledonia', lat: 43.0667, lng: -79.9500 },
  { name: 'Hagersville', lat: 42.9667, lng: -80.0500 },
  { name: 'St. Catharines', lat: 43.1594, lng: -79.2469 },
  { name: 'Niagara Falls', lat: 43.0896, lng: -79.0849 },
  { name: 'Grimsby', lat: 43.1967, lng: -79.5633 },
  { name: 'Beamsville', lat: 43.1667, lng: -79.4833 },
]

export default function ServiceArea() {
  const mapRef = useRef<HTMLDivElement>(null)
  const leafletMapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current || leafletMapRef.current) return

    // Initialize Leaflet map
    const map = L.map(mapRef.current).setView([43.2557, -79.5000], 9)

    // Add OpenStreetMap tiles (free, no API key needed)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map)

    leafletMapRef.current = map

    // Custom red marker icon
    const redIcon = L.divIcon({
      className: 'custom-red-marker',
      html: '<div style="background-color: #dc2626; width: 16px; height: 16px; border-radius: 50%; border: 3px solid #991b1b;"></div>',
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    })

    // Add markers and circles for each city
    serviceCities.forEach(city => {
      // Add marker
      L.marker([city.lat, city.lng], { icon: redIcon })
        .bindPopup(`<strong>${city.name}</strong>`)
        .addTo(map)

      // Add red circle around city
      L.circle([city.lat, city.lng], {
        color: '#dc2626',
        fillColor: '#dc2626',
        fillOpacity: 0.15,
        radius: 8000, // 8km radius
        weight: 2,
      }).addTo(map)
    })

    // Cleanup
    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove()
        leafletMapRef.current = null
      }
    }
  }, [])

  return (
    <section id="service-area" className="py-20 bg-white relative z-0">
      <div className="container-custom">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-iron-900 mb-4">
            Service Area Coverage
          </h2>
          <p className="text-iron-600 max-w-2xl mx-auto">
            We serve {serviceCities.length} cities across Hamilton and the Greater Toronto Area
          </p>
        </motion.div>

        {/* 4-Column Layout: Cities (1 col) + Map (3 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-8"
        >
          {/* Left Column - Cities List */}
          <div className="lg:col-span-1">
            <div className="bg-iron-50 rounded-2xl p-6 h-full">
              <h3 className="text-xl font-bold text-iron-900 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-600" />
                Cities We Serve
              </h3>
              <div className="space-y-3">
                {serviceCities.map((city, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 text-iron-700 hover:text-primary-600 transition-colors cursor-pointer group"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary-600 group-hover:bg-primary-600 transition-colors"></div>
                    <span className="font-medium">{city.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right 3 Columns - Map */}
          <div className="lg:col-span-3 relative z-0">
            <div 
              ref={mapRef}
              className="w-full h-[700px] rounded-2xl overflow-hidden shadow-2xl border-2 border-iron-200 relative z-0"
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-iron-600 mb-4">Don't see your area listed?</p>
          <a 
            href="tel:365-888-5854"
            className="inline-flex items-center gap-2 bg-iron-900 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Call (365) 888-5854
          </a>
        </motion.div>

      </div>
    </section>
  )
}

