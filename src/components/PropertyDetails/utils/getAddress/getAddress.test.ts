import getAddress from './getAddress'

describe('getAddress', () => {
  test('should return multiple address lines in array as string', () => {
    const result = getAddress(['2 Rose Garden', 'Springfield', '3377'])

    expect(result).toBe('2 Rose Garden, Springfield, 3377')
  })

  test('should return a single address line in array as string', () => {
    const result = getAddress(['Old hotel building'])

    expect(result).toBe('Old hotel building')
  })

  test('should return null if address array is empty', () => {
    const result = getAddress([])

    expect(result).toBe(null)
  })
})
