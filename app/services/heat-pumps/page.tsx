import { Metadata } from 'next'
import HeatPumpsContent from './HeatPumpsContent'

export const metadata: Metadata = {
  title: 'Heat Pump Installation & Service - Year-Round Comfort',
  description: 'Expert heat pump installation, repair, and maintenance. Efficient heating and cooling in one system. Licensed HVAC professionals.',
}

export default function HeatPumpsPage() {
  return <HeatPumpsContent />
}
