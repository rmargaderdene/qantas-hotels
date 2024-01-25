import React, { useState } from 'react'

import styles from './sortMenu.module.css'

type Props = {
  value: number
}

export const SortMenu: React.FC<Props> = () => {
  const [sortOrder, setSortOrder] = useState('asc')
  const handleSort = (order: 'asc' | 'desc') => {
    console.log(sortOrder)
    setSortOrder(order)
  }

  return (
    <div className={styles.sortMenu}>
      <p>Sort by</p>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>Price</button>
        <div className={styles.dropdownContent}>
          <a href="#" onClick={() => handleSort('asc')}>
            Ascending
          </a>
          <a href="#" onClick={() => handleSort('desc')}>
            Descending
          </a>
        </div>
      </div>
    </div>
  )
}

export default SortMenu
