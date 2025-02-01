import { Wrapper } from './ListingResult.styles'

type ListingResultProps = {
  numberOfItems: number
}

const ListingResult = ({ numberOfItems = 0 }: ListingResultProps) => {
  return (
    <Wrapper>
      <b data-testid="hotel-counts">{numberOfItems}</b> hotels in <b>Sydney</b>
    </Wrapper>
  )
}

export default ListingResult
