import React from 'react'
import { Link } from 'wouter'
import './style.css'

export function AppHeader(props) {
  const { navigation } = props

  return (
    <header className="app-header">
      <div>
          🏰 Guildhall
      </div>
      <nav>
        <ul className="app-nav__list">
          {navigation.map((item, i) => {
            return (
              <li key={i}>
                <Link href={item.path}>
                    {item.icon} {item.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <button>
          @username 😺
      </button>
    </header>
  )
}
