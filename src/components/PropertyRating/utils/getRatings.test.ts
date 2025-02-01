import getRating from './getRating'

describe('getRating', () => {
  it('should return correct rating calculations for decimal number', () => {
    const result = getRating(4.5)

    expect(result.fullRating).toBe(4)
    expect(result.hasHalfRating).toBe(true)
  })

  it('should return hasHalfRating as false for whole number greater than zero', () => {
    const result = getRating(5)

    expect(result.hasHalfRating).toBe(false)
  })

  it('should return correct rating calculations for zero', () => {
    const result = getRating(0)

    expect(result.fullRating).toBe(0)
    expect(result.hasHalfRating).toBe(false)
  })
})
