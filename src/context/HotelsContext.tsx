import { createContext } from 'react'

import { Hotel, SortEnum } from '@/types'

export type Context = {
  hotels: Hotel[]
  isLoading: boolean
  sortBy: (sortOrder: SortEnum) => void
}

const HotelsContext = createContext<Context>({
  hotels: [],
  isLoading: false,
  sortBy: () => [],
})

export default HotelsContext
