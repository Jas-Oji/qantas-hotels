import { createContext } from 'react'

import { Hotel, SortEnum } from '@/types'

export type Context = {
  hotels: Hotel[]
  isLoading: boolean
  sortOrder: SortEnum
  sortBy: (sortOrder: SortEnum) => void
}

const HotelsContext = createContext<Context>({
  hotels: [],
  isLoading: false,
  sortOrder: SortEnum.DEFAULT,
  sortBy: () => {},
})

export default HotelsContext
