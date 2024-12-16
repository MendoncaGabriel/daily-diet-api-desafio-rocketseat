import { z } from "zod";
import { KnexUserRepository } from "../../../repositorys/knex/knexUserRepository";
import { CreateUserUseCase } from "../../../usecases/user/createUserUseCase";
import { FastifyRequest } from "fastify";

class CreateUserController {
  async handle(req: FastifyRequest) {

    const createUserSchema = z.object({
      session_id: z.string().optional(),
      email: z.string(),
      name: z.string()
    })

    const { email, name, session_id } = createUserSchema.parse(req.body)

    const userRepository = new KnexUserRepository()
    const createUserUsecase = new CreateUserUseCase(userRepository)

    await createUserUsecase.execute({
      email, name, session_id
    })
  }
}

export { CreateUserController }