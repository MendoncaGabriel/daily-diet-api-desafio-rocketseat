import { knex } from "../database/knex_db"

class Meals {
  async create(
    data: {
      id: string,
      user_id: string,
      name: string,
      description: string
      is_on_diet: boolean
      date: Date
    }
  ){
    await knex('meals').insert(data)
  }
}

export { Meals }