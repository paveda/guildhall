import React from 'react'
import { AppHeader } from '~/widgets/app-header'
import './style.css'

const navigation = [
  {
    path: '/home',
    text: 'Home',
    icon: '🏠',
  },
  {
    path: '/projects',
    text: 'Projects',
    icon: '🗃️',
  },
  {
    path: '/notes',
    text: 'Notebook',
    icon: '📔',
  },
  {
    path: '/time',
    text: 'Time',
    icon: '⏱️',
  },
  {
    path: '/calendar',
    text: 'Calendar',
    icon: '️🗓️',
  },
  {
    path: '/settings',
    text: 'Settings',
    icon: '⚙️'
  }
]

export function AppLayout(props) {
  const { children } = props

  return (
    <div className="app-layout">
      <div className="app-layout__header">
        <AppHeader navigation={navigation}/>
      </div>
      <main className="app-layout__main">
        {children}
      </main>
    </div>
  )
}
