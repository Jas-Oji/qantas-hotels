import { useRouter, useSearchParams } from 'next/navigation'
import Sort from '../Sort'
import { Wrapper } from './ListingResult.styles'

import { SortEnum } from '@/types'

type ListingResultProps = {
  numberOfItems: number
}

const ListingResult = ({ numberOfItems = 0 }: ListingResultProps) => {
  const router = useRouter()
  const params = useSearchParams()

  const sortOrder = params.get('sort') || ''
  const handleSort = (sort: SortEnum) => router.push(`?sort=${sort}`)

  return (
    <Wrapper>
      <p>
        <b data-testid="hotel-counts">{numberOfItems}</b> <i>hotels in</i> <b>Sydney</b>
      </p>

      <Sort onChange={handleSort} sortOrder={sortOrder as SortEnum} />
    </Wrapper>
  )
}

export default ListingResult
