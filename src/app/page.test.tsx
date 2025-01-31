import '@testing-library/jest-dom'
import Page from '../app/page'

import { render, screen } from '@testing-library/react'

it('renders a heading', () => {
  render(<Page />)

  const logoElement = screen.getByAltText('Qantas Logo')

  expect(logoElement).toBeInTheDocument()
  expect(logoElement).toHaveAttribute('width', '72')
  expect(logoElement).toHaveAttribute('height', '16')
})
