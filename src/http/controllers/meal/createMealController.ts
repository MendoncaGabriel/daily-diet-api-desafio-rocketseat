import { KnextMealsRepository } from "../../../repositorys/knex/knexMealsRepository"
import { CreateMealUseCase } from "../../../usecases/meal/createMealUseCase"

class CreateMealController {
  async handle(){
    const knextMealsRepository = new KnextMealsRepository()
    const createMealUseCase = new CreateMealUseCase(knextMealsRepository)
  }
}

export { CreateMealController }