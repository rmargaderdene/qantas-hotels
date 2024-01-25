import React from 'react'

import styles from './sortMenu.module.css'

type Props = {
  sortByPrice: (order: 'asc' | 'desc') => void
}

export const SortMenu: React.FC<Props> = ({ sortByPrice }) => {
  return (
    <div className={styles.sortMenu}>
      <p>Sort by</p>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>Price</button>
        <div className={styles.dropdownContent}>
          <a href="#" onClick={() => sortByPrice('asc')}>
            Ascending
          </a>
          <a href="#" onClick={() => sortByPrice('desc')}>
            Descending
          </a>
        </div>
      </div>
    </div>
  )
}

export default SortMenu
