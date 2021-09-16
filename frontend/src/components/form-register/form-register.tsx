import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerAction } from '../../store/auth/actions'
import { User } from '../../types/user'
import './form-register.sass'

export const FormRegister = () => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState<Partial<User>>({
    type: 'freelancer',
    login: '',
    name: '',
    password: '',
  })

  function handleFieldChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const key = e.target.name
    setFormData((data) => ({
      ...data,
      [key]: e.target.value,
    }))
  }

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault()
    dispatch(registerAction(formData))
  }

  return (
    <form className="form-register" onSubmit={handleFormSubmit}>
      <label htmlFor="type" className="form-register__label">
        Тип пользователя
      </label>
      {/* eslint-disable-next-line jsx-a11y/no-onchange */}
      <select
        name="type"
        id="type"
        value={formData.type}
        onChange={handleFieldChange}
      >
        <option value="freelancer">Исполнитель</option>
        <option value="customer">Заказчик</option>
      </select>
      <label htmlFor="type" className="form-register__label">
        Логин
      </label>
      <input
        className="form-register__input"
        type="text"
        name="login"
        id="login"
        value={formData.login}
        onChange={handleFieldChange}
      />
      <label htmlFor="name" className="form-register__label">
        Имя
      </label>
      <input
        className="form-register__input"
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleFieldChange}
      />
      <label htmlFor="password" className="form-register__label">
        Пароль
      </label>
      <input
        className="form-register__input"
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleFieldChange}
      />
      <button className="form-register__submit-btn" type="submit">
        Зарегистрироваться
      </button>
    </form>
  )
}
