import { randomUUID } from "crypto";
import { UserRepository } from "../../repositorys/userRepository";

class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository
  ){}

  async execute(
    {email, name}: {
      email: string,
      name: string,
    }
  ){  
    const id = randomUUID()
    const session_id = randomUUID()
    
    await this.userRepository.create({
      id,
      email,
      name, 
      session_id
    })
  }
}

export { CreateUserUseCase }