import * as React from 'react'
import './style.css'

export function MainLayout(props) {
  const { children } = props

  return (
    <div className="main-layout">
      <div>
        {children}
      </div>
      <footer className="main-footer">
        All rights reserved. No developer was harmed.
      </footer>
    </div>
  )
}
