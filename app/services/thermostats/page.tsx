import { Metadata } from 'next'
import ThermostatsContent from './ThermostatsContent'

export const metadata: Metadata = {
  title: 'Smart Thermostat Installation & Programming',
  description: 'Professional smart thermostat installation and setup. Control your comfort from anywhere and save on energy bills.',
}

export default function ThermostatsPage() {
  return <ThermostatsContent />
}
