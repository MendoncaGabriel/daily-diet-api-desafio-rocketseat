import { FastifyInstance } from "fastify";
import { CreateUserController } from "../controllers/user/createUserController";
import { GetUserMetricsController } from "../controllers/user/getUserMetricsController";

const createUserController = new CreateUserController()
const getUserMetricsController = new GetUserMetricsController()

function userRouter(app: FastifyInstance) {
  app.post("/", createUserController.handle)
  app.get("/metrics", getUserMetricsController.handle)
}

export { userRouter }