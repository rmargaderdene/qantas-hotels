import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './app/app'
import { worker } from './mocks/browser'

const enableMocking = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  return worker.start()
}

enableMocking().then(() => {
  const root = createRoot(document.getElementById('root') as Element)

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
})
