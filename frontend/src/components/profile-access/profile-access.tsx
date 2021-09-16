import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserState } from '../../store/auth/state'
import { RootState } from '../../store/store'

import './profile-access.sass'

export const ProfileAccess = () => {
  const authState = useSelector<RootState, UserState>(
    (state: RootState) => state.auth,
  )

  const [isOpened, setIsOpened] = useState<boolean>(false)

  return (
    <div className="profile-access">
      {authState.isLogged ? (
        <div
          className="profile-access__username"
          onClick={() => setIsOpened((o) => !o)}
        >
          {authState.name}
        </div>
      ) : (
        <Link to="/auth?authType=login">Войти</Link>
      )}
      <div
        className={`
          profile-access__menu ${isOpened ? 'profile-access__menu--opened' : ''}
        `}
      >
        <div className="profile-access__menu__item">Профиль</div>
        <div className="profile-access__menu__item">Выйти</div>
      </div>
    </div>
  )
}
