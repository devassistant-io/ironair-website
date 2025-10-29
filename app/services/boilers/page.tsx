import { Metadata } from 'next'
import BoilersContent from './BoilersContent'

export const metadata: Metadata = {
  title: 'Boiler Installation, Repair & Maintenance Services',
  description: 'Professional boiler services for water and steam heating systems. Expert installation, repair, and maintenance by licensed technicians.',
}

export default function BoilersPage() {
  return <BoilersContent />
}
