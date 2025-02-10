import { useCallback, useState } from 'react'

import { Hotel, SortEnum } from '@/types'

type Result = {
  fetchData: (sort?: SortEnum) => void
  hotelsData: Hotel[]
  isLoading: boolean
}

const useHotelsData = (): Result => {
  const [hotelsData, setHotelsData] = useState<Hotel[]>([])
  const [isLoading, setLoading] = useState<boolean>(false)

  const fetchData = useCallback(async (sort?: SortEnum) => {
    setLoading(true)

    try {
      const response = await fetch(`/api/hotels${sort ? `?sort=${sort}` : ''}`)
      const data = await response.json()

      setHotelsData(data?.results || [])
    } catch {
      throw new Error('Failed to fetch')
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    fetchData,
    hotelsData,
    isLoading,
  }
}

export default useHotelsData
