import { FastifyRequest } from "fastify"
import { KnextMealsRepository } from "../../../repositorys/knex/knexMealsRepository"
import { ListUserMealsUseCase } from "../../../usecases/meal/listUserMealsUseCase"

class ListUserMealsController {
  async handle(
    req: FastifyRequest
  ) {
    const knextMealsRepository = new KnextMealsRepository()
    const listUserMealsUseCase = new ListUserMealsUseCase(knextMealsRepository)

    let userId = req.cookies.userId

    if(!userId) throw new Error("user_id not defined")

    const result = await listUserMealsUseCase.execute({
      user_id: userId
    })

    return result
  } 
}

export { ListUserMealsController }
