import React, { useEffect } from 'react'

import styles from './app.module.css'

export const App: React.FC = () => {
  useEffect(() => {
    console.log('test')
    return () => {}
  }, [])

  return <div className={styles.title}>Hello, React and TypeScript!</div>
}

export default App
