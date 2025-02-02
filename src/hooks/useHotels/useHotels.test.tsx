import useDataFetcher from '../useDataFetcher'
import useHotels from './useHotels'

import { HotelsProvider } from '@/context'
import hotelsData from '@/data/hotels.json'
import { Hotel, SortEnum } from '@/types'
import { act, renderHook, waitFor } from '@testing-library/react'

jest.mock('../useDataFetcher')
const mockedUseDataFetcher = jest.mocked(useDataFetcher)

const [hotel1, hotel2, hotel3] = hotelsData.results
const mockHotelsData = [hotel1, hotel2, hotel3] as Hotel[]

describe('useHotels', () => {
  beforeEach(() => {
    mockedUseDataFetcher.mockReturnValue({
      fetchData: jest.fn(),
      hotelsData: mockHotelsData,
      isLoading: false,
    })
  })

  afterEach(() => {
    mockedUseDataFetcher.mockClear()
    jest.resetAllMocks()
  })

  it('should return initial state', () => {
    const { result } = renderHook(() => useHotels(), {
      wrapper: ({ children }) => <HotelsProvider>{children}</HotelsProvider>,
    })

    expect(result.current).toEqual({
      hotels: mockHotelsData,
      isLoading: false,
      sortOrder: SortEnum.DEFAULT,
      sortBy: expect.any(Function),
    })
  })

  it('should sort hotels by price', async () => {
    const { result } = renderHook(() => useHotels(), {
      wrapper: ({ children }) => <HotelsProvider>{children}</HotelsProvider>,
    })

    act(() => {
      result.current.sortBy(SortEnum.ASCENDING)
    })

    await waitFor(() => {
      expect(result.current.hotels[0].offer.displayPrice.amount).toBe(227)
      expect(result.current.hotels[1].offer.displayPrice.amount).toBe(329)
      expect(result.current.hotels[2].offer.displayPrice.amount).toBe(375)
    })
  })
})
