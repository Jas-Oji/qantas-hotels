import type { PreviewImage } from './previewImage'
import type { Rating } from './rating'

export type Property = {
  propertyId: string
  title: string
  address: string[]
  previewImage: PreviewImage
  rating: Rating
}
