import '../global.css'

import React, { Suspense, useEffect, useState } from 'react'

import { Pagination, PropertyCardList, PropertyCardType, SortMenu } from '../components'
import styles from './app.module.css'

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [hotelsData, setHotelsData] = useState<PropertyCardType[] | null>(null)

  const [currentPageHotelList, setCurrentPageHotelList] = useState<PropertyCardType[] | undefined>([])

  useEffect(() => {
    const fetchHotelsData = async () => {
      await fetch('https://api.qantas/hotels')
        .then((response) => response.json())
        .then((hotels) => {
          setHotelsData(hotels)
          setCurrentPageHotelList(hotels?.slice(0, 5))
        })
    }
    fetchHotelsData()
    return () => {}
  }, [])

  const handlePageClick = (pageNum: number) => {
    setCurrentPage(pageNum)
    const paginationStartIndex = (pageNum - 1) * 5
    const paginationEndIndex = paginationStartIndex + 5
    setCurrentPageHotelList(hotelsData?.slice(paginationStartIndex, paginationEndIndex))
  }

  const sortByPrice = (order: 'asc' | 'desc') => {
    const sortedHotelsData = hotelsData
    if (order === 'asc') {
      sortedHotelsData?.sort((a, b) => Number(a.price.total.amount) - Number(b.price.total.amount))
      setHotelsData(sortedHotelsData)
    } else {
      sortedHotelsData?.sort((a, b) => Number(b.price.total.amount) - Number(a.price.total.amount))
      setHotelsData(sortedHotelsData)
    }

    const paginationStartIndex = (currentPage - 1) * 5
    const paginationEndIndex = paginationStartIndex + 5
    setCurrentPageHotelList(hotelsData?.slice(paginationStartIndex, paginationEndIndex))
  }

  return (
    <>
      <header className={styles.header}>
        <h3 className={styles.appTitle}>Featured properties</h3>
        <nav className={styles.nav}>
          <SortMenu sortByPrice={sortByPrice} />
        </nav>
      </header>
      <main className={styles.appContainer}>
        <Suspense fallback={<p>Loading properties...</p>}>
          <PropertyCardList hotels={currentPageHotelList || []} />
        </Suspense>
      </main>
      <footer className={styles.footer}>
        <Pagination currentPage={currentPage} handlePageClick={handlePageClick} maxPageNum={Number(hotelsData ? hotelsData?.length / 5 : 1)} />
      </footer>
    </>
  )
}

export default App
