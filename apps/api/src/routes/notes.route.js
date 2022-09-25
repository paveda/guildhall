import { Router } from 'express'

export const notes = Router()

/**
 * @openapi
 * notes/:
 *   get:
 *     description: Get project list
 *     responses:
 *       200:
 *         description: Returns project list
 */
notes.get('/', (req, res) => {})

notes.put ('/new', (req, res) => {})

notes.get ('/:noteId', (req, res) => {})

