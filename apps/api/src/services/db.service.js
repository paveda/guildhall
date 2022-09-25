'use strict'

// @ts-check

import knex from 'knex'
import { knexConfig } from '~/configs/knexfile.js'

export const db = knex(knexConfig[process.env.NODE_ENV])
