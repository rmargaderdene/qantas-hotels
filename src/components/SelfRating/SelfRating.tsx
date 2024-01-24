import React from 'react'

import styles from './selfRating.module.css'

type Props = {
  value: number
}

const SelfRating: React.FC<Props> = ({ value }) => {
  const emojiIndex = Math.floor(value)
  const emojis = ['fa-angry', 'fa-frown', 'fa-meh', 'fa-smile', 'fa-laugh']
  return (
    <div className={styles.emojiContainer}>
      <i className={['far', emojis[emojiIndex > 0 ? emojiIndex - 1 : emojiIndex], styles.emojiIcon].join(' ')}></i>
    </div>
  )
}

export default SelfRating
