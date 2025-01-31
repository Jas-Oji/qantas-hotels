import type { Offer } from './offer'
import type { Property } from './property'

export type Hotel = {
  id: string
  offer: Offer
  property: Property
}
