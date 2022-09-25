import React from 'react'
import { Async } from 'react-async'
import { Link, Router } from 'wouter'
import { noteApi } from '~/entities/note'

export function NotebookPage(props) {
  const { children } = props

  return (
    <div>
      <div className="notebook-sidebar">
        <input type="text" placeholder="type to search" />
        <Async promiseFn={noteApi.fetchNoteList}>
          <Async.Pending>Loading...</Async.Pending>
          <Async.Rejected>Ooops...</Async.Rejected>
          <Async.Fulfilled>
            {(data) => {
              return (
                <ul className="">
                  {data.map(({ id, title }, i) => {
                    return (
                      <li key={i}>
                        <Link href={'/' + id}>
                          {title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )
            }}
          </Async.Fulfilled>
        </Async>
      </div>
      <div>
        <Router>

        </Router>
      </div>
    </div>
  )
}
