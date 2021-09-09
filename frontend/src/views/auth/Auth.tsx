import { useEffect, useState } from 'react'
import { FormLogin } from '../../components/form-login/form-login'
import { FormRegister } from '../../components/form-register/form-register'
import { useSyncQueryParam } from '../../helpers/hooks/useSyncQueryParam'
import './Auth.sass'

export const AuthPage = () => {
  const [urlAuthType, setUrlAuthType] = useSyncQueryParam('authType')
  const [authType, setAuthType] = useState<AuthTypes>(AuthTypes.Login)

  useEffect(() => {
    setUrlAuthType(authType === AuthTypes.Login ? 'login' : 'register')
  }, [authType, setUrlAuthType])

  useEffect(() => {
    if (urlAuthType.current === 'login') {
      setAuthType(AuthTypes.Login)
    } else {
      setAuthType(AuthTypes.Register)
    }
  }, [urlAuthType])

  return (
    <div className="auth-page__wrapper">
      <div className="auth_page__form_type_select">
        <button
          className="auth-page__form-type-select__button"
          onClick={() => setAuthType(AuthTypes.Login)}
        >
          Вход
        </button>
        <button
          className="auth-page__form-type-select__button"
          onClick={() => setAuthType(AuthTypes.Register)}
        >
          Регистрация
        </button>
      </div>
      {authType === AuthTypes.Login ? <FormLogin /> : <FormRegister />}
    </div>
  )
}

enum AuthTypes {
  Login,
  Register,
}
