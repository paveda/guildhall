import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App'

import './app/i18n'

const app = document.querySelector('#app')
const root = createRoot(app!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
