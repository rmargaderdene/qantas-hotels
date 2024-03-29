import React from 'react'

import SelfRating from '../SelfRating/SelfRating'
import StarRating from '../StarRating/StarRating'
import styles from './propertyCard.module.css'

type RatingType = {
  value: number
  type: 'star' | 'self'
}
type LocationType = {
  city: string
  country: string
}
type PriceType = {
  total: {
    amount: number
    currency: 'AUD' | 'USD'
  }
  stay: {
    checkIn: string
    checkout: string
    adults: number
    children: number
    infants: number
  }
}

export type PropertyCardType = {
  id: string
  heroImage: string
  name: string
  sleep: number
  location: LocationType
  price: PriceType
  inclusions: string[]
  rating: RatingType
}

export const Inclusions: React.FC<{ inclusions: string[] }> = ({ inclusions }) => {
  return (
    <div className={styles.inclusion}>
      {inclusions.map((inclusion, i) => {
        return <span key={i}>{inclusion}&nbsp;|&nbsp;</span>
      })}
    </div>
  )
}

const PropertyCard: React.FC<PropertyCardType> = ({ heroImage, name, price, location, inclusions, sleep, rating }) => {
  return (
    <div className={styles.card}>
      <div className={styles.heroImage} style={{ backgroundImage: `url(${heroImage})` }} />
      <div className={styles.cardBody}>
        <div className={styles.info}>
          <span className={styles.price}>{`$${price.total.amount}`}</span>
          <span className={styles.name}>{name}</span>
          <span className={styles.location}>{`${location.city}, ${location.country}`}</span>
          <Inclusions inclusions={inclusions} />
          <span className={styles.sleep}>{`Sleep ${sleep}`}</span>
        </div>
        {rating?.type === 'star' ? <StarRating value={rating.value} /> : <SelfRating value={rating.value} />}
      </div>
    </div>
  )
}

export default PropertyCard
