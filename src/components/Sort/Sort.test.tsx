import Sort from './Sort'

import { fireEvent, render, screen } from '@testing-library/react'

describe('Sort Component', () => {
  test('should render sort dropdown with options', () => {
    render(<Sort onChange={jest.fn()} />)
    expect(screen.getByText(/Sort By/i)).toBeInTheDocument()
    expect(screen.getByText(/Select/i)).toBeInTheDocument()
    expect(screen.getByText(/Price: Low to High/i)).toBeInTheDocument()
    expect(screen.getByText(/Price: High to Low/i)).toBeInTheDocument()
  })

  test('should call onChange with selected value', () => {
    const mockOnChange = jest.fn()
    render(<Sort onChange={mockOnChange} />)

    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'ascending' } })
    expect(mockOnChange).toHaveBeenCalledWith('ascending')

    fireEvent.change(select, { target: { value: 'descending' } })
    expect(mockOnChange).toHaveBeenCalledWith('descending')
  })
})
