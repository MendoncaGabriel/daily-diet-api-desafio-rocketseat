import { FastifyInstance } from "fastify";
import { CreateMealController } from "../controllers/meal/createMealController";
import { ListUserMealsController } from "../controllers/meal/listeUserMealsController";

const createMealController = new CreateMealController()
const listUserMealsController = new ListUserMealsController()

function mealRouter(app: FastifyInstance) {
  app.post("/", createMealController.handle)
  app.get("/", listUserMealsController.handle)
}

export { mealRouter }