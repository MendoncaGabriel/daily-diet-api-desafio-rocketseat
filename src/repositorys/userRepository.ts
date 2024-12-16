export interface UserCreate {
  id: string,
  session_id?: string,
  name: string,
  email: string
}

export interface UserRepository {
  create(
    data: UserCreate
  ): Promise<void>
}