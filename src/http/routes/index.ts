import { FastifyInstance } from "fastify";
import { userRouter } from "./userRoute";

function indexRouters(app: FastifyInstance) {
  app.register(userRouter, {
    prefix: "user"
  })
}

export { indexRouters }