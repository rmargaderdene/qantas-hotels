import React from 'react'

import styles from './propertyCard.module.css'

export type Props = {
  image: string
  name: string
  location: string
  rating: string
  inclusions: string
  priceForNight: string
}
export const PropertyCard: React.FC<Props> = ({ image, name, location, rating, inclusions, priceForNight }) => {
  return (
    <div className={styles.card}>
      <div>{image}</div>
      <div>{name}</div>
      <div>{location}</div>
      <div>{rating}</div>
      <div>{inclusions}</div>
      <div>{priceForNight}</div>
    </div>
  )
}

export default PropertyCard
