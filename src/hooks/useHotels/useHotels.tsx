import { useContext } from 'react'

import type { Context } from '@/context/HotelsContext'
import HotelsContext from '@/context/HotelsContext'

const useHotels = (): Context => useContext(HotelsContext)

export default useHotels
