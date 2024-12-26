import { env } from '../env'
import { app } from './app'

app.listen({
  port: env.PORT
}, () => {
  console.log('🚀 HTTP server Running!')
})