import React, { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'

import './global.css'
import './i18n'

const app = document.querySelector('#app')
const root = createRoot(app)

root.render(
  <StrictMode>
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  </StrictMode>
)
