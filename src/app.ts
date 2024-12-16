import fastify from 'fastify'
import { indexRouters } from './http/routes'

export const app = fastify()

app.register(indexRouters)

app.setErrorHandler((error, request, reply) => {
  // Exibe o erro completo, incluindo o stack trace
  console.error(error)

  reply.status(500).send({
    message: 'Internal Server Error',
    error: error.message || error.toString(),
    stack: error.stack, // Muito útil para entender onde o erro ocorreu
  })
})