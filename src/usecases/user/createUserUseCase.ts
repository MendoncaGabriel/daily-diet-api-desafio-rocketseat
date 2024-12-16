import { randomUUID } from "crypto";
import { UserRepository } from "../../repositorys/userRepository";

class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository
  ){}

  async execute(
    {email, name, session_id}: {
      email: string,
      name: string,
      session_id?: string
    }
  ){  
    const id = randomUUID()
    await this.userRepository.create({
      id,
      email,
      name, 
      session_id
    })
  }
}

export { CreateUserUseCase }