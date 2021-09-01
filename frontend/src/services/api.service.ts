import Axios from 'axios'
import { User } from '../types/user'
import md5 from 'md5'

const axios = Axios.create({
  baseURL: 'http://127.0.0.1:3000',
})

export async function getAllUsers() {
  const { data } = await axios.get<User[]>('user')
  return data || []
}

export async function getUserByLogin(login: string) {
  const { data } = await axios.get<User>(`user/${login}`)

  return data
}

export async function loginUser(login: string, password: string) {
  const { data } = await axios.post('auth', { login, password: md5(password) })

  return data
}
