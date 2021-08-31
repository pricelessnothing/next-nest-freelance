import { useState } from 'react'
import { getAllUsers } from '../services/api.service'
import { User } from '../types/user'

export const HomePage = () => {
  const [userList, setUserList] = useState<User[]>([])

  getAllUsers().then((users) => setUserList(users))

  return <p>{JSON.stringify(userList)}</p>
}
