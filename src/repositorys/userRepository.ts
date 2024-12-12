import { knex } from "../database/knex_db"

class User {
  async create(
    data: {
      id: string,
      session_id: string,
      name: string,
      email: string
    }
  ){
    await knex('users').insert(data)
  }
}

export { User }