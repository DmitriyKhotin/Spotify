import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import './MiniLogo.scss'
import { paths } from '@config/routes'

const MiniLogo: FC = () => {
  return (
    <NavLink to={paths.ROOT}>
      <div className="minilogo" />
    </NavLink>
  )
}

export default MiniLogo
