import { Metadata } from 'next'
import AirQualityContent from './AirQualityContent'

export const metadata: Metadata = {
  title: 'Indoor Air Quality Solutions - Purification & Filtration',
  description: 'Improve your indoor air quality with professional air purification and filtration systems. Breathe cleaner, healthier air at home.',
}

export default function AirQualityPage() {
  return <AirQualityContent />
}
