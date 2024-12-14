import { MealsRepository } from "../../repositorys/mealsRepository";

class DeleteMealUseCase {
  constructor(
    private readonly mealRepository: MealsRepository
  ) { }

  async execute({ id }: { id: string }) {
    await this.mealRepository.delete({ id })
  }
}

export { DeleteMealUseCase }