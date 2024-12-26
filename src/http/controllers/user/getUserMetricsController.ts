import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { KnextMealsRepository } from "../../../repositorys/knex/knexMealsRepository";
import { ListUserMealsUseCase } from "../../../usecases/meal/listUserMealsUseCase";
import { GetUserMetricsUseCase } from "../../../usecases/user/getUserMetricsUseCase";

class GetUserMetricsController {
  async handle(
    req: FastifyRequest,
    res: FastifyReply
  ) {
    const { userId } = req.cookies

    if(!userId) return res.status(400).send({ message: 'User not found' })

    const knextMealsRepository = new KnextMealsRepository()
    const getUserMetricsUseCase = new GetUserMetricsUseCase(knextMealsRepository)
    
    const metrics = await getUserMetricsUseCase.execute({ user_id: userId })
    
    return metrics
  }
}

export { GetUserMetricsController }