import { render, screen } from '@testing-library/react'
import RootLayout from './layout'

describe('RootLayout', () => {
  it('renders children correctly', () => {
    render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    )

    expect(screen.getByText('Content')).toBeInTheDocument()
  })
})
