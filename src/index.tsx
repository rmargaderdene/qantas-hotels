import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './app/app'
import { worker } from './mocks/browser'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

const root = createRoot(document.getElementById('root') as Element)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
