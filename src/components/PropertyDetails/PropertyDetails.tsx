import PropertyRating from '../PropertyRating'
import { Cancelation, Link, SubTitle, Title, TitleWrapper, Wrapper } from './PropertyDetails.styles'

import { CancellationTypeEnum, Offer, Property, Rating } from '@/types'

type PropertyDetailsProps = {
  title: Property['title']
  address: Property['address']
  offerName: Offer['name']
  cancellationType: CancellationTypeEnum
  rating: Rating
}

const PropertyDetails = ({
  title,
  address,
  offerName,
  cancellationType,
  rating,
}: PropertyDetailsProps) => {
  return (
    <Wrapper>
      <div>
        <TitleWrapper>
          <Title>{title}</Title>
          <PropertyRating rating={rating} />
        </TitleWrapper>

        <SubTitle>{address.join(', ')}</SubTitle>

        <Link href="#">{offerName}</Link>
      </div>

      {cancellationType === CancellationTypeEnum.FREE_CANCELLATION && (
        <Cancelation>Free cancellation</Cancelation>
      )}
    </Wrapper>
  )
}

export default PropertyDetails
