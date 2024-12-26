import fastify from 'fastify'
import { indexRouters } from './http/routes'
import fastifyCookie from '@fastify/cookie'

export const app = fastify()
app.register(fastifyCookie)

app.register(indexRouters)

app.setErrorHandler((error, request, reply) => {
 
  console.error(error)

  reply.status(500).send({
    message: 'Internal Server Error',
    error: error.message || error.toString(),
    stack: error.stack,
  })
})