import '../global.css'

import React, { Suspense, useEffect, useState } from 'react'

import { Pagination, PropertyCardList, PropertyCardType, SortMenu } from '../components'
import styles from './app.module.css'

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [hotelsData, setHotelsData] = useState<PropertyCardType[] | null>(null)

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
    <>
      <header className={styles.header}>
        <h2 className={styles.appTitle}>Featured properties</h2>
        <nav className={styles.nav}>
          <SortMenu value={1} />
        </nav>
      </header>
      <main className={styles.appContainer}>
        <Suspense fallback={<p>Loading properties...</p>}>
          <PropertyCardList hotels={hotelsData} />
        </Suspense>
      </main>
      <footer className={styles.footer}>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} maxPageNum={Number(hotelsData ? hotelsData?.length / 5 : 1)} />
      </footer>
    </>
  )
}

export default App
