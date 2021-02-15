import React, {FC, useState} from 'react'
import { useHistory, Link } from 'react-router-dom'
import './ProfileBar.scss'
import {Paths} from "@config/routes";

const ProfileBar: FC = () => {
  const [active, setActive] = useState<Boolean>(false)
  const history = useHistory<History>()

  const signOut = (): void => {
    localStorage.removeItem('token')
    history.push('/login')
  }

  return (
    <div className="profileBar" onBlur={() => setActive(false)}>
      <button
        className={'profileBar__title' + (active ? ' active' : '')}
        onClick={() => setActive(prevState => !prevState)}
      >
        <p className="profileBar__name">Dmitriy</p>
        <p className={active ? 'arrow-top' : 'arrow-bottom'}/>
      </button>
      {active && <ul className="dropdown-list">
        <li className="dropdown-list__item">Profile</li>
        <li className="dropdown-list__item" onMouseDown={signOut}>Sign out</li>
      </ul>}
    </div>
  )
}

export default ProfileBar