import getSortedItemsByPrice from './getSortedItemsByPrice'

import hotelsData from '@/data/hotels.json'
import { Hotel, SortEnum } from '@/types'

const [hotel1, hotel2, hotel3] = hotelsData.results
const mockHotelsData = [hotel1, hotel2, hotel3] as Hotel[]

describe('getSortedItemsByPrice', () => {
  it('should sort hotels in ascending order based on price', () => {
    const result = getSortedItemsByPrice(mockHotelsData, SortEnum.ASCENDING)
    expect(result[0].offer.displayPrice.amount).toBe(227)
    expect(result[1].offer.displayPrice.amount).toBe(329)
    expect(result[2].offer.displayPrice.amount).toBe(375)
  })

  it('should sort hotels in descending order based on price', () => {
    const result = getSortedItemsByPrice(mockHotelsData, SortEnum.DESCENDING)
    expect(result[0].offer.displayPrice.amount).toBe(375)
    expect(result[1].offer.displayPrice.amount).toBe(329)
    expect(result[2].offer.displayPrice.amount).toBe(227)
  })

  it('should return the same array if all room prices are equal', () => {
    const hotelsWithEqualPrices = [
      { ...hotel1, offer: { displayPrice: { amount: 150 } } },
      { ...hotel2, offer: { displayPrice: { amount: 150 } } },
      { ...hotel3, offer: { displayPrice: { amount: 150 } } },
    ] as Hotel[]

    const result = getSortedItemsByPrice(hotelsWithEqualPrices, SortEnum.ASCENDING)
    expect(result).toEqual(hotelsWithEqualPrices)
  })

  it('should return an empty array if hotels array is empty', () => {
    const result = getSortedItemsByPrice([], SortEnum.ASCENDING)
    expect(result).toEqual([])
  })
})
