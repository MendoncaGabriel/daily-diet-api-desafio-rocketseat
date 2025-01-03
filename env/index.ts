import { config } from 'dotenv'
import path from 'path'
import { z } from 'zod'


if (process.env.NODE_ENV === 'test') {
  config({ path: path.join(process.cwd(), '.env.test') })
} else {
  config()
}

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_CLIENT: z.enum(['sqlite3', 'pg']),
  DATABASE_URL: z.string()
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment variables!')
  throw new Error('Invalid environment variables!')
}

const env = _env.data

export { env }
