import { Metadata } from 'next'
import DuctworkContent from './DuctworkContent'

export const metadata: Metadata = {
  title: 'Ductwork Sealing & Repair Services',
  description: 'Professional ductwork services including sealing, repair, and installation. Improve airflow, efficiency, and indoor air quality.',
}

export default function DuctworkPage() {
  return <DuctworkContent />
}
