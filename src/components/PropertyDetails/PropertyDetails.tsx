import PropertyRating from '../PropertyRating'
import { Cancelation, Link, SubTitle, Title, TitleWrapper, Wrapper } from './PropertyDetails.styles'
import getAddress from './utils/getAddress'

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
}: PropertyDetailsProps) => (
  <Wrapper>
    <div>
      <TitleWrapper>
        <Title>{title}</Title>
        <PropertyRating rating={rating} />
      </TitleWrapper>

      <SubTitle>{getAddress(address)}</SubTitle>

      <Link href="#">{offerName}</Link>
    </div>

    {cancellationType === CancellationTypeEnum.FREE_CANCELLATION && (
      <Cancelation>Free cancellation</Cancelation>
    )}
  </Wrapper>
)

export default PropertyDetails
