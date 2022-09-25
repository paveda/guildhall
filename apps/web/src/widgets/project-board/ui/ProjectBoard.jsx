import React from 'react'
import './style.css'

export function ProjectBoard(props) {
  const { data } = props

  return (
    <div className="project-board">
      <ul className="project-board__column-list">
        {data.map(({ title, items }, i) => {
          return (
            <li className="project-board__column" key={i}>
              <h2 className="board-column__title">{title}</h2>
              <ul className="board-column__task-list">
                {items.map(({ id, text }) => {
                  return (
                    <li className="task-card" key={id}>
                      <p>{text}</p>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
