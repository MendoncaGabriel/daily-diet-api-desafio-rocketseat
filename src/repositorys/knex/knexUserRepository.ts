import { knex } from "../../knex_db"

class KnexUserRepository {
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

export { KnexUserRepository }