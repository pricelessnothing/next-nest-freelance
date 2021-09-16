import { User } from '../../types/user'

export type UserState = Partial<User> & {
  isLogged: boolean
  sessionId: string | null
}

export const initialUserState: UserState = {
  isLogged: false,
  sessionId: null,
}
