import { http, HttpResponse } from 'msw'

import mockResponse from './mock-data'

export const handlers = [
  http.get('https://api.qantas/hotels', () => {
    return HttpResponse.json(mockResponse)
  })
]
