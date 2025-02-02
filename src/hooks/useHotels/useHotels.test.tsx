import useDataFetcher from '../useDataFetcher'
import useHotels from './useHotels'

import { HotelsProvider } from '@/context'
import hotelsData from '@/data/hotels.json'
import { Hotel } from '@/types'
import { renderHook } from '@testing-library/react'

jest.mock('../useDataFetcher')
const mockedUseDataFetcher = jest.mocked(useDataFetcher)

const hotels = hotelsData.results as Hotel[]

describe('useHotels', () => {
  beforeEach(() => {
    mockedUseDataFetcher.mockReturnValue({
      fetchData: jest.fn(),
      hotelsData: hotels,
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
      hotels,
      isLoading: false,
      sortBy: expect.any(Function),
    })
  })
})
