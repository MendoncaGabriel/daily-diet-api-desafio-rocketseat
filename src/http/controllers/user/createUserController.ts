import { z } from "zod";
import { KnexUserRepository } from "../../../repositorys/knex/knexUserRepository";
import { CreateUserUseCase } from "../../../usecases/user/createUserUseCase";
import { FastifyRequest } from "fastify";

class CreateUserController {
  async handle(req: FastifyRequest) {

    const createUserSchema = z.object({
      email: z.string(),
      name: z.string()
    })

    const { email, name} = createUserSchema.parse(req.body)

    const userRepository = new KnexUserRepository()
    const createUserUsecase = new CreateUserUseCase(userRepository)

    await createUserUsecase.execute({
      email, name
    })
  }
}

export { CreateUserController }