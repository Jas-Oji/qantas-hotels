import getAddress from './getAddress'

describe('getAddress', () => {
  test('should return address as string', () => {
    const result = getAddress(['2 Rose Garden', 'Springfield', '3377'])

    expect(result).toBe('2 Rose Garden, Springfield, 3377')
  })

  test('should return "-" if address array is empty', () => {
    const result = getAddress([])

    expect(result).toBe('-')
  })
})
