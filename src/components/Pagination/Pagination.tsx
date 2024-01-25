import React from 'react'

import styles from './pagination.module.css'

type Props = {
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  maxPageNum: number
}

export const Pagination: React.FC<Props> = ({ currentPage, setCurrentPage, maxPageNum }) => {
  const pages = []
  let left = currentPage - 2
  if (left <= 0) left = 1
  let right = currentPage + 2
  if (right > maxPageNum) right = maxPageNum

  for (let num = left; num <= right; num++) {
    pages.push(
      <div
        key={num}
        className={num === currentPage ? [styles.round, styles.active].join(' ') : styles.round}
        onClick={() => {
          setCurrentPage(num)
        }}>
        {num}
      </div>
    )
  }

  const goToNextPage = () => {
    if (currentPage < maxPageNum) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.paginateBtnContainer}>
        <div className={styles.round} onClick={goToPrevPage}>
          {' '}
          &lsaquo;{' '}
        </div>
        {pages}
        <div className={styles.round} onClick={goToNextPage}>
          {' '}
          &rsaquo;{' '}
        </div>
      </div>
    </div>
  )
}

export default Pagination
