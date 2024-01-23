import '../global.css'

import React, { useEffect } from 'react'

import { PropertyCard } from '../components'
import styles from './app.module.css'

export const App: React.FC = () => {
  useEffect(() => {
    console.log('test')
    return () => {}
  }, [])

  return (
    <div className={styles.container}>
      <PropertyCard
        image="image"
        name="name"
        location="location"
        rating="rating"
        inclusions="inclusions"
        priceForNight="111"
      />
    </div>
  )
}

export default App
