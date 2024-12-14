import { MealsRepository } from "../../repositorys/mealsRepository";

class UpdateMealUseCase {
  constructor(
    private readonly mealsRepository: MealsRepository
  ) { }

  async execute(
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
    }) {

    await this.mealsRepository.update({ id, data })
  }
}

export { UpdateMealUseCase }