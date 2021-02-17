import React, { FC, useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import classNames from 'classnames'
import './ProfileBar.scss'
import { paths } from '@config/routes'

const ProfileBar: FC = () => {
  const [active, setActive] = useState(false)
  const history = useHistory<History>()

  const signOut = (): void => {
    localStorage.removeItem('token')
    history.push(paths.LOGIN)
  }

  const signOutMemo = useCallback(signOut, [])

  const setActiveFalsy = useCallback(() => setActive(false), [])
  const setActiveInvert = useCallback(() => setActive(prevState => !prevState), [])

  return (
    <div className="profileBar" onBlur={setActiveFalsy}>
      <button
        className={classNames('profileBar__title', {'profileBar__title-active': active})}
        onClick={setActiveInvert}
      >
        <p className="profileBar__name">Dmitriy</p>
        <p className={classNames('profileBar__arrow', active ? 'profileBar__arrow-top' : 'profileBar__arrow-bottom')}/>
      </button>
      {active && <ul className="dropdown-list">
        <li className="dropdown-list__item">Profile</li>
        <li className="dropdown-list__item" onMouseDown={signOutMemo}>Sign out</li>
      </ul>}
    </div>
  )
}

export default ProfileBar