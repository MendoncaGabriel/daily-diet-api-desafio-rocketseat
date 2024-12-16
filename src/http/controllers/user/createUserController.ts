import { z } from "zod";
import { KnexUserRepository } from "../../../repositorys/knex/knexUserRepository";
import { CreateUserUseCase } from "../../../usecases/user/createUserUseCase";

class CreateMealController {
  async handle() {

    const createUserSchema = z.object({

    })

    const userRepository = new KnexUserRepository()
    const createUserUsecase = new CreateUserUseCase(userRepository)

    await createUserUsecase.execute({
      
    })
  }
}

export { CreateMealController }