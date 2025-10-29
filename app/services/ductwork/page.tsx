import { Metadata } from 'next'
import DuctworkContent from './DuctworkContent'

export const metadata: Metadata = {
  title: 'Ductwork Cleaning, Sealing & Repair Services',
  description: 'Professional ductwork services including cleaning, sealing, and repair. Improve airflow, efficiency, and indoor air quality.',
}

export default function DuctworkPage() {
  return <DuctworkContent />
}
