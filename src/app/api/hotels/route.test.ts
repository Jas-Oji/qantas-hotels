import { NextResponse } from 'next/server'
import { GET } from './route'

import hotels from '@/data/hotels.json'

jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn(),
  },
}))

describe('Hotels API', () => {
  it('should return the correct mock data', async () => {
    ;(NextResponse.json as jest.Mock).mockReturnValueOnce({
      status: 200,
      json: hotels,
    })

    const response = await GET()

    expect(NextResponse.json).toHaveBeenCalledWith(hotels)
    expect(response.status).toBe(200)
    expect(response.json).toEqual(hotels)
  })
})
