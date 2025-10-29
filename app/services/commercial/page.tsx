import { Metadata } from 'next'
import CommercialContent from './CommercialContent'

export const metadata: Metadata = {
  title: 'Commercial HVAC Services - Business Heating & Cooling',
  description: 'Professional commercial HVAC services for businesses. Installation, repair, and maintenance for offices, retail, and industrial facilities.',
}

export default function CommercialPage() {
  return <CommercialContent />
}
