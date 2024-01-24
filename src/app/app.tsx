import '../global.css'

import React, { useEffect, useState } from 'react'

import { PropertyCardList, PropertyCardType } from '../components'
import styles from './app.module.css'

export const App: React.FC = () => {
  const [hotelsData, setHotelsData] = useState<PropertyCardType[]>([])

  useEffect(() => {
    const fetchHotelsData = async () => {
      await fetch('https://api.qantas/hotels')
        .then((response) => response.json())
        .then((hotels) => {
          setHotelsData(hotels)
        })
    }
    fetchHotelsData()
    return () => {}
  }, [])

  return (
    <div className={styles.container}>
      <PropertyCardList hotels={hotelsData} />
    </div>
  )
}

export default App
