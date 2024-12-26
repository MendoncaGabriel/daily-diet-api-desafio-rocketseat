import { knex as setupKnex, Knex } from 'knex'
import { env } from '../env/index'
import path from 'path'


const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection: env.DATABASE_CLIENT == "sqlite3" ? {
    filename: env.DATABASE_URL,
  } :  env.DATABASE_URL,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: path.join(process.cwd(), 'database', 'migrations'),
  },
}

const knex = setupKnex(config)

export { config, knex }