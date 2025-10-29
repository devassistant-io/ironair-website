import { Metadata } from 'next'
import FurnacesContent from './FurnacesContent'

export const metadata: Metadata = {
  title: 'Furnace Installation, Repair & Maintenance',
  description: 'Expert furnace services including installation, repair, and maintenance. Keep your home warm and comfortable all winter long. Licensed technicians, quality work guaranteed.',
}

export default function FurnacesPage() {
  return <FurnacesContent />
}
