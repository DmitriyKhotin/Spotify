import React, {FC, memo} from 'react'
import { NavLink } from 'react-router-dom'
import './MiniLogo.scss'
import {Paths} from "../../config/routes";

const MiniLogo: FC = () => {
  return (
    <NavLink to={Paths.ROOT}>
      <div className="minilogo" />
    </NavLink>
  )
}

export default memo<FC>(MiniLogo)