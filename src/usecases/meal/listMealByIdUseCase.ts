import { MealsRepository } from "../../repositorys/mealsRepository";

class ListMealByIdUseCase {
  constructor(
    private readonly mealRepository: MealsRepository
  ) { }

  async execute(
    { id }: { id: string }
  ) {
    const meal = await this.mealRepository.listMealById({ id })
    return meal
  }
}

export { ListMealByIdUseCase }