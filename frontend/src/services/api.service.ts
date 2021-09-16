import Axios from 'axios'
import { User, UserCredentials } from '../types/user'
import md5 from 'md5'
import { SafeResponse } from '../types/response'

const axios = Axios.create({
  baseURL: 'http://127.0.0.1:3000',
})

function makeError(error: unknown) {
  const { message, statusCode } = (error as any)?.response?.data

  const safeError = {
    message: message || 'Unknown Error',
    code: statusCode || 666,
  }

  return {
    error: safeError,
  }
}

export async function getAllUsers() {
  const { data } = await axios.get<User[]>('user')
  return data || []
}

export async function getUserByLogin(login: string) {
  const { data } = await axios.get<User>(`user/${login}`)

  return data
}

export async function loginUser({
  login,
  password,
}: UserCredentials): Promise<SafeResponse> {
  try {
    const { data } = await axios.post('auth/login', {
      login,
      password: md5(password),
    })

    return { data }
  } catch (error) {
    return makeError(error)
  }
}

export async function registerUser(user: Partial<User>): Promise<SafeResponse> {
  try {
    const { data } = await axios.post('auth/register', {
      ...user,
      password: md5(user.password || ''),
    })
    return { data }
  } catch (error) {
    return makeError(error)
  }
}
