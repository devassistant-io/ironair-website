import { Metadata } from 'next'
import DuctlessSystemsContent from './DuctlessSystemsContent'

export const metadata: Metadata = {
  title: 'Ductless Mini Split Installation & Service',
  description: 'Professional ductless mini split installation and service. Flexible multi-zone heating and cooling solutions for any space.',
}

export default function DuctlessSystemsPage() {
  return <DuctlessSystemsContent />
}
