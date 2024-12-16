import fastify from 'fastify'
import { indexRouters } from './http/routes'

export const app = fastify()

app.register(indexRouters)
