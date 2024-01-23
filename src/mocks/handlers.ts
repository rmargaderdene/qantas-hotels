import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.qantashotels/card', () => {
    return HttpResponse.json({
      image: 'image',
      name: 'name',
      location: 'location',
      rating: 'rating',
      inclusions: 'inclusions',
      priceForNight: '111',
    })
  }),
]
