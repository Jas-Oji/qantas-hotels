import type { Hotel } from '@/types'
import { SortEnum } from '@/types'

const getSortedItemsByPrice = (hotelsData: Hotel[], sortOrder: SortEnum) =>
  hotelsData.sort((firstItem, secondItem) =>
    sortOrder === SortEnum.ASCENDING
      ? firstItem.offer.displayPrice.amount - secondItem.offer.displayPrice.amount
      : secondItem.offer.displayPrice.amount - firstItem.offer.displayPrice.amount
  )

export default getSortedItemsByPrice
