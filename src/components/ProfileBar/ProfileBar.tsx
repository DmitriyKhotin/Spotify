import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import classNames from 'classnames'
import { observer } from 'mobx-react-lite'

import { paths } from '@config/routes'
import store from '@store/RootStore'
import { Meta } from '@utils/meta'

import './ProfileBar.scss'

const ProfileBar: FC = () => {
  const [active, setActive] = useState(false)
  const history = useHistory<History>()

  const signOut = (): void => {
    localStorage.removeItem('token')
    history.push(paths.LOGIN)
  }

  const redirectToProfile = (): void => {
    history.push(paths.PROFILE)
  }

  const setActiveFalsy = () => setActive(false)
  const setActiveInvert = () => setActive((prevState) => !prevState)

  useEffect(() => {
    if (store.userStore.meta !== Meta.loading) {
      store.userStore.fetchProfile(true)
    }
  }, [])
  return (
    <div className="profileBar" onBlur={setActiveFalsy}>
      <div
        className={classNames('profileBar__title', {
          'profileBar__title-active': active,
        })}
        onClick={setActiveInvert}
      >
        <p className="profileBar__name">{store.userStore.profile.name}</p>
        <p
          className={classNames(
            'profileBar__arrow',
            active ? 'profileBar__arrow-top' : 'profileBar__arrow-bottom'
          )}
        />
      </div>
      {active && (
        <ul className="dropdown-list">
          <li className="dropdown-list__item" onMouseDown={redirectToProfile}>
            Профиль
          </li>
          <li className="dropdown-list__item" onMouseDown={signOut}>
            Выход
          </li>
        </ul>
      )}
    </div>
  )
}

export default observer(ProfileBar)
