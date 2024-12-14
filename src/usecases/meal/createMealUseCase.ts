import { Meal, MealsRepository } from "../../repositorys/mealsRepository";

class CreateMealUseCase {
  constructor(
    private readonly mealRepository: MealsRepository
  ) { }

  async execute(data: Meal) {
    await this.mealRepository.create(data)
  }
}

export { CreateMealUseCase }