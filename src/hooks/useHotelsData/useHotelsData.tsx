import { useCallback, useState } from 'react'

import { Hotel } from '@/types'

type Result = {
  fetchData: () => void
  hotelsData: Hotel[]
  isLoading: boolean
}

const useHotelsData = (): Result => {
  const [hotelsData, setHotelsData] = useState<Hotel[]>([])
  const [isLoading, setLoading] = useState<boolean>(false)

  const fetchData = useCallback(async () => {
    setLoading(true)

    try {
      const response = await fetch('/api/hotels')
      const { results } = await response.json()

      setHotelsData(results)
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
