import { Cancelation, Link, SubTitle, Title, Wrapper } from './PropertyDetails.styles'

import { CancellationTypeEnum, Offer, Property } from '@/types'

type PropertyDetailsProps = {
  title: Property['title']
  address: Property['address']
  offerName: Offer['name']
  cancellationType: CancellationTypeEnum
}

const PropertyDetails = ({ title, address, offerName, cancellationType }: PropertyDetailsProps) => {
  return (
    <Wrapper>
      <div>
        <Title>{title}</Title>
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
