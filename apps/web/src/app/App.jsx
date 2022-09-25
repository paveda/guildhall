import * as React from 'react'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import { MainLayout } from '~/layouts/main-layout'
import { AppLayout } from '~/layouts/app-layout'
import { HomePage } from '~/pages/home-page'
import { ProjectListPage } from '~/pages/project-list-page'
import { ProjectPage } from '~/pages/project-page'
import { NotebookPage } from '~/pages/notebook-page'

export function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<MainLayout />}>
          <Route path="login" />
          <Route path="app" element={<AppLayout />}>
            <Route path="home" element={<HomePage />} />
            <Route path="projects" element={<ProjectListPage />}>
              <Route path=":projectId" element={<ProjectPage />} />
            </Route>
            <Route path="notes" element={<NotebookPage />}>
              <Route path=":noteId" />
            </Route>
            <Route path="tracker" />
            <Route path="calendar" />
            <Route path="settings" />
          </Route>
        </Route>
      </Router>
    </BrowserRouter>
  )
}
