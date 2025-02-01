import PropertyImage from './PropoertyImage'

import { render, screen } from '@testing-library/react'

describe('PropertyImage', () => {
  const props = {
    src: '/test-image.jpg',
    alt: 'Test Image',
    promotionTitle: 'Special Offer',
  }

  it('should render the image with correct src and alt attributes', () => {
    render(<PropertyImage {...props} />)

    const image = screen.getByRole('img')

    expect(image.getAttribute('src')).toContain('test-image.jpg')
    expect(image.getAttribute('alt')).toContain(props.alt)
  })

  it('should render the promotion title', () => {
    render(<PropertyImage {...props} />)
    const promotionTag = screen.getByText(props.promotionTitle)

    expect(promotionTag).toBeInTheDocument()
  })
})
