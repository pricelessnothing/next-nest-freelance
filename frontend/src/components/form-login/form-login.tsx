import { ChangeEvent, FormEvent, useState } from 'react'
import { loginUser } from '../../services/api.service'

import './form-login.sass'

export const FormLogin = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  function handleLoginChange(e: ChangeEvent<HTMLInputElement>) {
    setLogin(e.target.value)
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault()

    loginUser(login, password)
  }

  return (
    <form className="form-login" onSubmit={handleFormSubmit}>
      <label htmlFor="login" className="form-login__label">
        Login
      </label>
      <input
        className="form-login__input"
        type="text"
        name="login"
        id="login"
        value={login}
        onChange={handleLoginChange}
      />
      <label htmlFor="password" className="form-login__label">
        Password
      </label>
      <input
        className="form-login__input"
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button className="form-login__submit-btn" type="submit">
        Log in
      </button>
    </form>
  )
}
