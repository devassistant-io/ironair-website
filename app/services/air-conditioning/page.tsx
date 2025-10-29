import { Metadata } from 'next'
import AirConditioningContent from './AirConditioningContent'

export const metadata: Metadata = {
  title: 'Air Conditioning Installation, Repair & Tune-Ups',
  description: 'Professional AC installation, repair, and maintenance services. Stay cool all summer with reliable air conditioning from licensed technicians.',
}

export default function AirConditioningPage() {
  return <AirConditioningContent />
}
