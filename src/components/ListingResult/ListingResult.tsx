import Sort from '../Sort'
import { Wrapper } from './ListingResult.styles'

import useHotels from '@/hooks/useHotels'

type ListingResultProps = {
  numberOfItems: number
}

const ListingResult = ({ numberOfItems = 0 }: ListingResultProps) => {
  const { sortBy } = useHotels()

  return (
    <Wrapper>
      <p>
        <b data-testid="hotel-counts">{numberOfItems}</b> hotels in <b>Sydney</b>
      </p>

      <Sort onChange={sortBy} />
    </Wrapper>
  )
}

export default ListingResult
