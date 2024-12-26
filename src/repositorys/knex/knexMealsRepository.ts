import { knex } from "../../knex_db"
import { Meal, MealsRepository } from "../mealsRepository"

class KnextMealsRepository implements MealsRepository {
  async create(
    data: {
      id: string,
      user_id: string,
      name: string,
      description: string
      is_on_diet: boolean
      date: Date
    }
  ) {
    await knex('meals').insert(data)
  }

  async update(
    { id, data }: {
      data: {
        id: string,
        user_id: string,
        name: string,
        description: string
        is_on_diet: boolean
        date: Date
      },
      id: string
    }
  ) {
    await knex('meals').where({ id }).update({
      id, data
    })
  }

  async delete(
    { id }: { id: string }
  ) {
    await knex('meals').where({ id }).delete()
  }

  async listUserMeals(
    { user_id }: { user_id: string }
  ) {
    const meals = await knex('meals').where({ user_id }).select()
    return meals
  }

  async listMealById({ id }: { id: string }): Promise<Meal | null> {
    const meal = await knex<Meal>('meals').where({ id }).first();

    if (!meal) {
      return null
    }

    return meal;
  }

}

export { KnextMealsRepository }