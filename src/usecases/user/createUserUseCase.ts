import { UserCreate, UserRepository } from "../../repositorys/userRepository";

class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository
  ){}

  async execute(data: UserCreate){  
    await this.userRepository.create(data)
  }
}

export { CreateUserUseCase }