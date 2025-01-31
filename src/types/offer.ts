import type { CancellationOption } from './cancellationOption'
import type { Price } from './price'
import type { Promotion } from './promotion'

export type Offer = {
  name: string
  displayPrice: Price
  savings: Price
  promotion: Promotion
  cancellationOption: CancellationOption
}
