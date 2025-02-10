import { FC, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { ImageWrapper, LoadingWrapper, PropertyInfoWrapper, Wrapper } from './HotelsListing.styles'

import ListingResult from '@/components/ListingResult'
import PropertyDetails from '@/components/PropertyDetails'
import PropertyImage from '@/components/PropertyImage'
import ProportyPricing from '@/components/ProportyPricing'

import useDataFetcher from '@/hooks/useDataFetcher'
import { SortEnum } from '@/types'

const HotelsListing: FC = () => {
  const { fetchData, hotelsData, isLoading } = useDataFetcher()

  const searchParams = useSearchParams()
  const sortOrder = searchParams.get('sort') as SortEnum

  useEffect(() => {
    fetchData(sortOrder)
  }, [fetchData, sortOrder])

  if (isLoading) {
    return <LoadingWrapper>Loading...</LoadingWrapper>
  }

  if (!hotelsData.length) {
    return null
  }

  return (
    <div>
      <ListingResult numberOfItems={hotelsData.length} />
      <ul>
        {hotelsData.map((hotel) => (
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
