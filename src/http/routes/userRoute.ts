import { FastifyInstance } from "fastify";
import { CreateUserController } from "../controllers/user/createUserController";

const createUserController = new CreateUserController()

function userRouter(app: FastifyInstance) {
  app.post("/", createUserController.handle)
}

export { userRouter }