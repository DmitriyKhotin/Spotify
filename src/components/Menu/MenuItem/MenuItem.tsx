import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

import './MenuItem.scss'
import { MenuLabel } from '../config'

const MenuItem: FC<MenuLabel> = ({ title, clickedImg, defaultImg, link }) => {
  const location = useLocation()

  return (
    <Link
      className={classNames('menuItem', {
        'menuItem-active': location.pathname[1] === link[1],
      })}
      to={link}
    >
      <img
        src={location.pathname === link ? clickedImg : defaultImg}
        className="menuItem__icon"
        alt={title.toLowerCase()}
      />
      <p className="menuItem__title">{title}</p>
    </Link>
  )
}

export default MenuItem
