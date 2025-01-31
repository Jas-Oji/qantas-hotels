import RootLayout from './layout'

import { render, screen } from '@testing-library/react'

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
