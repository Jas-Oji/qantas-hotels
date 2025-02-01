import PropertyDetails from './PropertyDetails'

import { CancellationTypeEnum, RatingTypeEnum } from '@/types'
import { render, screen } from '@testing-library/react'

describe('PropertyDetails', () => {
  const defaultProps = {
    title: 'Beautiful Apartment',
    address: ['123 Main St', 'City'],
    offerName: 'Special Offer',
    cancellationType: CancellationTypeEnum.FREE_CANCELLATION,
    rating: {
      ratingValue: 4,
      ratingType: RatingTypeEnum.STAR,
    },
  }

  it('should render title, address, and offer', () => {
    render(<PropertyDetails {...defaultProps} />)

    expect(screen.getByText('Beautiful Apartment')).toBeInTheDocument()
    expect(screen.getByText('123 Main St, City')).toBeInTheDocument()
    expect(screen.getByText('Special Offer')).toBeInTheDocument()
  })

  it('should render "free cancellation" tag when cancellation type is FREE_CANCELLATION', () => {
    render(<PropertyDetails {...defaultProps} />)

    expect(screen.getByText('Free cancellation')).toBeInTheDocument()
  })

  it('should not render "free cancellation" tag when cancellation type is not FREE_CANCELLATION', () => {
    const props = {
      ...defaultProps,
      cancellationType: CancellationTypeEnum.NOT_REFUNDABLE,
    }

    render(<PropertyDetails {...props} />)

    expect(screen.queryByText('Free cancellation')).not.toBeInTheDocument()
  })
})
