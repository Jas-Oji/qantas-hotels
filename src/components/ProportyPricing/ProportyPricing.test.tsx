import ProportyPricing from './ProportyPricing'

import { Price } from '@/types'
import { render, screen } from '@testing-library/react'

describe('ProportyPricing', () => {
  const mockDisplayPrice: Price = {
    amount: 200,
    currency: 'AUD',
  }

  const mockSavings: Price = {
    amount: 50,
    currency: 'AUD',
  }

  it('should render property price correctly', () => {
    render(<ProportyPricing displayPrice={mockDisplayPrice} />)

    expect(screen.getByText('night total (AUD)')).toBeInTheDocument()
    expect(screen.getByText('$')).toBeInTheDocument()
    expect(screen.getByText('200')).toBeInTheDocument()
  })

  it('should render saving details when it is provided', () => {
    render(<ProportyPricing displayPrice={mockDisplayPrice} savings={mockSavings} />)

    expect(screen.getByText('Save $50')).toBeInTheDocument()
    expect(screen.getByText('~')).toBeInTheDocument()
  })

  it('should not render saving details when savings prop is not provided', () => {
    render(<ProportyPricing displayPrice={mockDisplayPrice} />)

    expect(screen.queryByText(/Save \$/)).not.toBeInTheDocument()
  })
})
