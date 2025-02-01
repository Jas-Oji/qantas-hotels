import ListingResult from '.'

import { render, screen } from '@testing-library/react'

describe('ListingResult', () => {
  test('should render with default number of items', () => {
    render(<ListingResult numberOfItems={0} />)

    expect(screen.getByTestId('hotel-counts')).toHaveTextContent('0')
  })

  test('should render with a given number of items', () => {
    render(<ListingResult numberOfItems={5} />)

    expect(screen.getByTestId('hotel-counts')).toHaveTextContent('5')
  })
})
