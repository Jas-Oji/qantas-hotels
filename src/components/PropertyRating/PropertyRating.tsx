import React, { FC } from 'react'
import {
  CircleIcon,
  HalfCircleIcon,
  RatingCapacity,
  RatingPoints,
  Wrapper,
} from './PropertyRating.style'
import { HalfStarIcon, StarIcon } from './svgs'
import getRating from './utils'

import type { Rating } from '@/types'

type RatingProps = {
  rating: Rating
}

const PropertyRating: FC<RatingProps> = ({ rating }) => {
  const { ratingValue, ratingType } = rating
  const { fullRating, hasHalfRating } = getRating(ratingValue)

  return (
    <Wrapper>
      <RatingCapacity>
        {Array.from({ length: 5 }, (_, index) =>
          ratingType === 'star' ? (
            <StarIcon testId="star-rating-capacity" key={index} />
          ) : (
            <CircleIcon data-testid="circle-rating-capacity" key={index} />
          )
        )}
      </RatingCapacity>
      <RatingPoints>
        {Array.from({ length: fullRating }, (_, index) =>
          ratingType === 'star' ? (
            <StarIcon testId="star-rating-point" color="#ffe260" key={index} />
          ) : (
            <CircleIcon data-testid="circle-rating-point" color="#ffe260" key={index} />
          )
        )}
        {hasHalfRating &&
          (ratingType === 'star' ? (
            <HalfStarIcon testId="half-star-rating" color="#ffe260" />
          ) : (
            <HalfCircleIcon data-testid="half-circle-rating" />
          ))}
      </RatingPoints>
    </Wrapper>
  )
}

export default PropertyRating
