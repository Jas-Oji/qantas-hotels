import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

it('renders a heading', () => {
  render(<Page />)

  const logoElement = screen.getByAltText('Qantas Logo')

  expect(logoElement).toBeInTheDocument()
  expect(logoElement).toHaveAttribute('width', '72')
  expect(logoElement).toHaveAttribute('height', '16')
})
