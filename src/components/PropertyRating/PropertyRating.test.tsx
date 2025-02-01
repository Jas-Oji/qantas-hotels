import PropertyRating from './PropertyRating'
import exp from 'constants'

import { RatingTypeEnum } from '@/types'
import { render, screen } from '@testing-library/react'

describe('PropertyRating', () => {
  const defaultProps = {
    rating: {
      ratingValue: 1,
      ratingType: RatingTypeEnum.STAR,
    },
  }

  it('should render star rating icon', () => {
    render(<PropertyRating {...defaultProps} />)

    expect(screen.getAllByTestId('star-rating-capacity')).toHaveLength(5)
    expect(screen.getAllByTestId('star-rating-point')).toHaveLength(1)
    expect(screen.queryAllByTestId('half-star-rating')).toHaveLength(0)
    expect(screen.queryAllByTestId('circle-rating-capacity')).toHaveLength(0)
  })

  it('should render half star rating icon', () => {
    const props = {
      rating: {
        ratingValue: 1.5,
        ratingType: RatingTypeEnum.STAR,
      },
    }

    render(<PropertyRating {...props} />)

    expect(screen.getAllByTestId('half-star-rating')).toHaveLength(1)
  })

  it('should render circle rating icon', () => {
    const props = {
      rating: {
        ratingValue: 2,
        ratingType: RatingTypeEnum.SELF,
      },
    }

    render(<PropertyRating {...props} />)

    expect(screen.getAllByTestId('circle-rating-capacity')).toHaveLength(5)
    expect(screen.getAllByTestId('circle-rating-point')).toHaveLength(2)
    expect(screen.queryAllByTestId('half-circle-rating')).toHaveLength(0)
    expect(screen.queryAllByTestId('star-rating-capacity')).toHaveLength(0)
  })

  it('should render half circle rating icon', () => {
    const props = {
      rating: {
        ratingValue: 2.5,
        ratingType: RatingTypeEnum.SELF,
      },
    }

    render(<PropertyRating {...props} />)

    expect(screen.getAllByTestId('half-circle-rating')).toHaveLength(1)
  })
})
