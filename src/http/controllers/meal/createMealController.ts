import { z } from "zod"
import { KnextMealsRepository } from "../../../repositorys/knex/knexMealsRepository"
import { CreateMealUseCase } from "../../../usecases/meal/createMealUseCase"
import { randomUUID } from "crypto"
import { FastifyReply, FastifyRequest } from "fastify"

class CreateMealController {
  async handle(
    req: FastifyRequest,
    res: FastifyReply
  ) {

    const createMealSchema = z.object({
      description: z.string(),
      name: z.string(),
      is_on_diet: z.boolean().default(false),
    })

    const { description, is_on_diet, name } = createMealSchema.parse(req.body)

    const knextMealsRepository = new KnextMealsRepository()
    const createMealUseCase = new CreateMealUseCase(knextMealsRepository)

    let userId = req.cookies.userId
    
    if(!userId){
      userId = randomUUID()

      res.setCookie('userId', userId, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7 // 7 dias
      })
    }

    await createMealUseCase.execute({
      date: new Date(),
      description,
      id: randomUUID(),
      name,
      user_id: userId,
      is_on_diet
    })
  }
}

export { CreateMealController }