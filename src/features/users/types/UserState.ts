import User from "./user"
export default interface UserState {
    users: User[]
    error?: null | string
    isLoading?: boolean
  }