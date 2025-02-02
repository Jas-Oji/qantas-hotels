import { FC, ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import HotelsContext from './HotelsContext'

import useDataFetcher from '@/hooks/useDataFetcher'
import { SortEnum } from '@/types'

type HotelsProviderProps = {
  children: ReactNode
}

const HotelsProvider: FC<HotelsProviderProps> = ({ children }) => {
  const { fetchData, hotelsData, isLoading } = useDataFetcher()
  const [sortOrder, setSortOrder] = useState(SortEnum.DEFAULT)

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const hotels = useMemo(() => {
    if (sortOrder === SortEnum.DEFAULT) {
      return hotelsData
    }

    return sortOrder === SortEnum.ASCENDING
      ? hotelsData.sort((a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount)
      : hotelsData.sort((a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount)
  }, [hotelsData, sortOrder])

  const sortBy = useCallback(
    (sortOrder: SortEnum) => {
      setSortOrder(sortOrder)
    },
    [setSortOrder]
  )

  const value = useMemo(() => {
    return {
      hotels,
      isLoading,
      sortBy,
    }
  }, [hotels, isLoading, sortBy, sortOrder])

  return <HotelsContext.Provider value={value}>{children}</HotelsContext.Provider>
}

export default HotelsProvider
