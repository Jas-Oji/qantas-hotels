import { FC } from 'react'
import { ImageWrapper, PropertyInfoWrapper, Wrapper } from './HotelsListing.styles'

import ListingResult from '@/components/ListingResult'
import PropertyDetails from '@/components/PropertyDetails'
import PropertyImage from '@/components/PropertyImage'
import ProportyPricing from '@/components/ProportyPricing'

import useHotels from '@/hooks/useHotels'

const HotelsListing: FC = () => {
  const { hotels } = useHotels()

  return (
    <div>
      <ListingResult numberOfItems={hotels.length} />
      <ul>
        {hotels.map((hotel) => (
          <Wrapper key={hotel.id}>
            <ImageWrapper>
              <PropertyImage
                src={hotel.property.previewImage.url}
                alt={hotel.property.previewImage.caption}
                promotionTitle={hotel.offer.promotion.title}
              />
            </ImageWrapper>

            <PropertyInfoWrapper>
              <PropertyDetails
                title={hotel.property.title}
                address={hotel.property.address}
                offerName={hotel.offer.name}
                cancellationType={hotel.offer.cancellationOption.cancellationType}
                rating={hotel.property.rating}
              />

              <ProportyPricing
                displayPrice={hotel.offer.displayPrice}
                savings={hotel.offer.savings}
              />
            </PropertyInfoWrapper>
          </Wrapper>
        ))}
      </ul>
    </div>
  )
}

export default HotelsListing
