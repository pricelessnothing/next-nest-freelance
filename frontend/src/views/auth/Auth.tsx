import { useState } from 'react'
import './Auth.sass'

export const AuthPage = () => {
  const [isRegistered, setIsRegistered] = useState(true)
  return (
    <div className="auth-page__wrapper">
      <div className="auth_page__form_type_select">
        <button
          className="auth-page__form-type-select__button"
          onClick={() => setIsRegistered(true)}
        >
          Вход
        </button>
        <button
          className="auth-page__form-type-select__button"
          onClick={() => setIsRegistered(false)}
        >
          Регистрация
        </button>
      </div>
      {isRegistered ? <p>Registered</p> : <p>NotRegistered</p>}
    </div>
  )
}
