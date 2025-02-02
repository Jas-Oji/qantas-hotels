import useDataFetcher from './useDataFetcher'

import hotelsData from '@/data/hotels.json'
import { act, renderHook, waitFor } from '@testing-library/react'

describe('useDataFetcher', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(hotelsData),
      } as Response)
    )
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should return initial state', async () => {
    const { result } = renderHook(() => useDataFetcher())

    expect(result.current).toEqual({
      fetchData: expect.any(Function),
      hotelsData: [],
      isLoading: false,
    })
  })

  it('should set loading to true when fetching data', async () => {
    const { result } = renderHook(() => useDataFetcher())

    act(() => {
      result.current.fetchData()
    })

    expect(result.current.isLoading).toBe(true)
  })

  it('should fetch data', async () => {
    const { result } = renderHook(() => useDataFetcher())

    act(() => {
      result.current.fetchData()
    })

    await waitFor(() => {
      expect(result.current).toEqual({
        fetchData: expect.any(Function),
        hotelsData: hotelsData.results,
        isLoading: false,
      })
    })
  })

  it('should return empty data array if no results found', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({}),
      } as Response)
    )

    const { result } = renderHook(() => useDataFetcher())

    act(() => {
      result.current.fetchData()
    })

    await waitFor(() => {
      expect(result.current.hotelsData).toEqual([])
    })
  })

  it('should throw an error when fetching data fails', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Failed to fetch')))

    const { result } = renderHook(() => useDataFetcher())

    await expect(act(() => result.current.fetchData())).rejects.toThrow('Failed to fetch')
  })
})
