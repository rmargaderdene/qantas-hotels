import React from 'react'

import PropertyCard, { PropertyCardType } from '../PropertyCard/PropertyCard'
import styles from './propertyCardList.module.css'

export type PropertyCardListProps = {
  hotels: PropertyCardType[] | null
}

export const PropertyCardList: React.FC<PropertyCardListProps> = ({ hotels }) => {
  return <div className={styles.cardList}>{hotels && hotels.map((hotel) => <PropertyCard key={hotel.id} {...hotel} />)}</div>
}

export default PropertyCardList
