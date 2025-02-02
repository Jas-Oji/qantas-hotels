import '@testing-library/jest-dom'
import useDataFetcher from '../hooks/useDataFetcher'
import Page from './page'

import { act, render, screen } from '@testing-library/react'

jest.mock('../hooks/useDataFetcher')
const mockedUseDataFetcher = jest.mocked(useDataFetcher)

describe('Page', () => {
  beforeEach(() => {
    mockedUseDataFetcher.mockReturnValue({
      fetchData: jest.fn(),
      hotelsData: [],
      isLoading: false,
    })
  })

  afterEach(() => {
    mockedUseDataFetcher.mockClear()
    jest.resetAllMocks()
  })

  it('renders heading', async () => {
    await act(async () => {
      render(<Page />)
    })

    const logoElement = screen.getByAltText('Qantas Logo')

    expect(logoElement).toBeInTheDocument()
    expect(logoElement).toHaveAttribute('width', '72')
    expect(logoElement).toHaveAttribute('height', '16')
  })
})
