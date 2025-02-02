import useHotels from '../../hooks/useHotels'
import HotelsListing from '../HotelsListing'

import hotelsData from '@/data/hotels.json'
import { Hotel, SortEnum } from '@/types'
import { render, screen } from '@testing-library/react'

const [hotel1] = hotelsData.results
const mockHotelsData = [hotel1] as Hotel[]

jest.mock('../../hooks/useHotels')
const mockedUseHotels = jest.mocked(useHotels)

describe('HotelsListing', () => {
  beforeEach(() => {
    mockedUseHotels.mockReturnValue({
      hotels: mockHotelsData,
      isLoading: false,
      sortOrder: SortEnum.DEFAULT,
      sortBy: jest.fn(),
    })
  })

  afterEach(() => {
    mockedUseHotels.mockClear()
    jest.resetAllMocks()
  })

  it('should render nothing when there are no hotels', () => {
    mockedUseHotels.mockReturnValue({
      hotels: [],
      isLoading: false,
      sortOrder: SortEnum.DEFAULT,
      sortBy: jest.fn(),
    })

    const result = render(<HotelsListing />)

    expect(result.container).toBeEmptyDOMElement()
  })

  it('should render loading spinner when loading', () => {
    mockedUseHotels.mockReturnValue({
      hotels: [],
      isLoading: true,
      sortOrder: SortEnum.DEFAULT,
      sortBy: jest.fn(),
    })

    render(<HotelsListing />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should render hotel listing correctly', () => {
    render(<HotelsListing />)

    expect(screen.getByText(hotel1.property.title)).toBeInTheDocument()
    expect(screen.getByText(hotel1.offer.name)).toBeInTheDocument()
    expect(screen.getByText(hotel1.offer.displayPrice.amount)).toBeInTheDocument()
  })
})
