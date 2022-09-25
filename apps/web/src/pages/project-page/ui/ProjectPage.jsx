import React from 'react'
import { Async } from 'react-async'
import { ProjectBoard } from '~/widgets/project-board'
import { projectApi } from '~/entities/project'

export function ProjectPage(props) {
  const { params } = props

  return (
    <div>
      <Async promiseFn={() => projectApi.fetchProjectById(params.projectId)}>
        <Async.Pending>Loading...</Async.Pending>
        <Async.Rejected>Ooops...</Async.Rejected>
        <Async.Fulfilled>
          {(data) => {
            return (
              <div>
                <div>
                  <h1>{data.name}</h1>
                  <ul>
                    <li>
                      <button>add new column</button>
                    </li>
                    <li>
                      <button>project settings</button>
                    </li>
                  </ul>
                </div>
                <ProjectBoard data={data.board} />
              </div>
            )
          }}
        </Async.Fulfilled>
      </Async>
    </div>
  )
}
