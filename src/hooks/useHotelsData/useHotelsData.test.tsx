import { act } from 'react'
import useHotelsData from './useHotelsData'

import hotelsData from '@/data/hotels.json'
import { renderHook, waitFor } from '@testing-library/react'

describe('useHotelsData', () => {
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
    const { result } = renderHook(() => useHotelsData())

    expect(result.current).toEqual({
      fetchData: expect.any(Function),
      hotelsData: [],
      isLoading: false,
    })
  })

  it('should set loading to true when fetching data', () => {
    const { result } = renderHook(() => useHotelsData())

    act(() => {
      result.current.fetchData()
    })

    expect(result.current).toEqual({
      fetchData: expect.any(Function),
      hotelsData: [],
      isLoading: true,
    })
  })

  it('should fetch data', async () => {
    const { result } = renderHook(() => useHotelsData())

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

  it('should throw an error when fetching data fails', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Failed to fetch')))

    const { result } = renderHook(() => useHotelsData())

    await expect(act(() => result.current.fetchData())).rejects.toThrow('Failed to fetch')
  })
})
