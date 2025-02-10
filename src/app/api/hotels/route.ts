import { NextRequest, NextResponse } from 'next/server'
import getSortedItemsByPrice from './utils'

import hotels from '@/data/hotels.json'
import { Hotel, SortEnum } from '@/types'

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)
  const sortBy = searchParams.get('sort') || ''

  const results = getSortedItemsByPrice(hotels.results as Hotel[], sortBy as SortEnum)

  return NextResponse.json({
    results,
  })
}
