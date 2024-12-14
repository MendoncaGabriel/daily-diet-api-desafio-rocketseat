export interface Meal {
  id: string,
  user_id: string,
  name: string,
  description: string,
  is_on_diet: boolean,
  date: Date
}

export interface MealsRepository {
  create(
    data: {
      id: string,
      user_id: string,
      name: string,
      description: string
      is_on_diet: boolean
      date: Date
    }
  ): Promise<void>

  update(
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
  ): Promise<void>

  delete(
    { id }: { id: string }
  ): Promise<void>

  listUserMeals(
    { user_id }: { user_id: string }
  ): Promise<Meal[]>

  listMealById(
    { id }: { id: string }
  ): Promise<Meal>
}