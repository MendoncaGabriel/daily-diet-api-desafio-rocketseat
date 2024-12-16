import { MealsRepository } from "../../repositorys/mealsRepository";

class ListUserMealsUseCase {
  constructor(
    private readonly mealsRepository: MealsRepository
  ) { }

  async execute(
    { user_id }: { user_id: string }
  ){
    const meals = await this.mealsRepository.listUserMeals({
      user_id
    })

    return meals
  }
}

export { ListUserMealsUseCase }