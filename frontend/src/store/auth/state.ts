import { User } from '../../types/user'

export type UserState = Partial<User> & {
  isLogged: boolean
  token: string | null
}

export const initialUserState: UserState = {
  isLogged: false,
  token: null,
}
