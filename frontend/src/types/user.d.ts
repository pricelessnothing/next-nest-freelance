export type User = {
  id?: number
  type: 'freelancer' | 'customer'
  login: string
  password: string
  name: string
}

export type UserCredentials = {
  login: string
  password: string
}
