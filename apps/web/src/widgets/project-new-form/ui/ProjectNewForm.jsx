import React from 'react'
import './style.css'

export function ProjectNewForm() {
  return (
    <div>
      <form>
        <fieldset>
          <legend>project info</legend>
          <label>
            <span>
              project name:
            </span>
            <input type="text" name="title" />
          </label>
          <label>
            <span>
              project description:
            </span>
            <textarea name="description"/>
          </label>
        </fieldset>
        <button type="submit">
          create
        </button>
      </form>
    </div>
  )
}
