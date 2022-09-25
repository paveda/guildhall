import React from 'react'
import { Async } from 'react-async'
import { Link } from 'wouter'
import { projectApi } from '~/entities/project'
import './style.css'

export function ProjectListPage() {
  return (
    <div>
      <div>
        <input type="text" placeholder="type to search" />
        <div>
          <button>
            create new project
          </button>
          <button>
            filter
          </button>
        </div>
      </div>
      <Async promiseFn={projectApi.fetchProjectList}>
        <Async.Pending>Loading...</Async.Pending>
        <Async.Rejected>Ooops...</Async.Rejected>
        <Async.Fulfilled>
          {(data) => {
            return (
              <ul>
                {data.map(({ id, name }, i) => {
                  return (
                    <li key={i}>
                      <Link href={`/projects/${id}`}>
                        {name}
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
  )
}
