import type { Hotel } from '@/types'
import { SortEnum } from '@/types'

const getSortedItemsByPrice = (hotelsData: Hotel[], sortOrder: SortEnum) => {
  switch (sortOrder) {
    case SortEnum.ASCENDING:
      return hotelsData.sort(
        (firstItem, secondItem) =>
          firstItem.offer.displayPrice.amount - secondItem.offer.displayPrice.amount
      )

    case SortEnum.DESCENDING:
      return hotelsData.sort(
        (firstItem, secondItem) =>
          secondItem.offer.displayPrice.amount - firstItem.offer.displayPrice.amount
      )

    default:
      return hotelsData
  }
}

export default getSortedItemsByPrice
