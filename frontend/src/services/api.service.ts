import Axios from 'axios'
import { User } from '../types/user'

const axios = Axios.create({
  baseURL: 'http://127.0.0.1:3000',
})

export async function getAllUsers() {
  const { data } = await axios.get<User[]>('user')
  return data || []
}

export async function getUserByLogin(login: number) {
  const { data } = await axios.get<User>(`user/${login}`)

  return data
}
