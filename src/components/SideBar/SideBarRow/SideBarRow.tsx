import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

import './SideBarRow.scss'
import { SideBarLabel } from '../config'

const SideBarRow: FC<SideBarLabel> = ({
  title,
  clickedImg,
  defaultImg,
  link,
}) => {
  const location = useLocation()

  return (
    <Link
      className={classNames('sideBarRow', {
        'sideBarRow-active': location.pathname === link,
      })}
      to={link}
    >
      <img
        src={location.pathname === link ? clickedImg : defaultImg}
        className="sideBarRow__icon"
        alt={title.toLowerCase()}
      />
      <span className="sideBarRow__title">{title}</span>
    </Link>
  )
}

export default SideBarRow
