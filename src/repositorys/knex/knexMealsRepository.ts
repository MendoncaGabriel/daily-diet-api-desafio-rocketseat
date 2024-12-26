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

  async getMetrics(
    { user_id }: { user_id: string }
  ): Promise<{
    total: string | number;
    diet: string | number;
    off_diet: string | number;
    best_diet_sequence: any;
  }> {

    const totalMeals = await knex('meals')
      .count('id', { as: 'total' })
      .where('user_id', user_id)
      .first();

    const dietMeals = await knex('meals')
      .count('id', { as: 'diet' })
      .where('user_id', user_id)
      .andWhere('is_on_diet', true)
      .first();

    const offDietMeals = await knex('meals')
      .count('id', { as: 'off_diet' })
      .where('user_id', user_id)
      .andWhere('is_on_diet', false)
      .first();



    return {
      total: totalMeals?.total ?? 0,
      diet: dietMeals?.diet ?? 0,
      off_diet: offDietMeals?.off_diet ?? 0,
      best_diet_sequence: Number(dietMeals?.diet ?? 0) - Number(offDietMeals?.off_diet ?? 0) > 0 ? Number(dietMeals?.diet ?? 0) - Number(offDietMeals?.off_diet ?? 0) : 0
    }
  }
}

export { KnextMealsRepository }