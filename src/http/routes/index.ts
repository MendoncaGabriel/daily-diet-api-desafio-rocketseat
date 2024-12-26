import { FastifyInstance } from "fastify";
import { userRouter } from "./userRoute";
import { mealRouter } from "./mealRoute";

function indexRouters(app: FastifyInstance) {
  app.register(userRouter, {
    prefix: "user"
  })

  app.register(mealRouter, {
    prefix: "meal"
  })
}

export { indexRouters }