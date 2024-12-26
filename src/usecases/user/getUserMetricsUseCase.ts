import { MealsRepository } from "../../repositorys/mealsRepository";

class GetUserMetricsUseCase {
  constructor(
    private readonly mealsRepository: MealsRepository
  ) { }

  async execute({ user_id }: { user_id: string }) {
    const metrics = await this.mealsRepository.getMetrics({ user_id })
    return metrics
  }
}

export { GetUserMetricsUseCase }