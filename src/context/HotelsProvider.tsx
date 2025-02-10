import { FC, ReactNode, useEffect, useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import HotelsContext from './HotelsContext'

import useDataFetcher from '@/hooks/useDataFetcher'
import { SortEnum } from '@/types'

type HotelsProviderProps = {
  children: ReactNode
}

const HotelsProvider: FC<HotelsProviderProps> = ({ children }) => {
  const { fetchData, hotelsData, isLoading } = useDataFetcher()
  const router = useRouter()

  const searchParams = useSearchParams()
  const sortOrder = searchParams.get('sort') as SortEnum

  useEffect(() => {
    fetchData(sortOrder)
  }, [fetchData, sortOrder])

  const value = useMemo(() => {
    const sortBy = (sort: SortEnum) => {
      router.push(`?sort=${sort}`)
    }

    return {
      hotels: hotelsData,
      isLoading,
      sortOrder,
      sortBy,
    }
  }, [hotelsData, isLoading, sortOrder, router])

  return <HotelsContext.Provider value={value}>{children}</HotelsContext.Provider>
}

export default HotelsProvider
