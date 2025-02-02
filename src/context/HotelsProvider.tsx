import { FC, ReactNode, useEffect, useMemo, useState } from 'react'
import HotelsContext from './HotelsContext'
import getSortedItemsByPrice from './utils'

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

  const value = useMemo(() => {
    const sortedHotels =
      sortOrder === SortEnum.DEFAULT ? hotelsData : getSortedItemsByPrice(hotelsData, sortOrder)

    const sortBy = (sortOrder: SortEnum) => setSortOrder(sortOrder)

    return {
      hotels: sortedHotels,
      isLoading,
      sortOrder,
      sortBy,
    }
  }, [hotelsData, isLoading, sortOrder, setSortOrder])

  return <HotelsContext.Provider value={value}>{children}</HotelsContext.Provider>
}

export default HotelsProvider
