import React, {FC} from 'react'
import { NavLink } from 'react-router-dom'
import './SideBarRow.scss'
import {SideBarLabel} from "../config";

const SideBarRow: FC<SideBarLabel> = ({title, img, link}) => {

  return (
    <NavLink className="sideBarRow" to={link} activeClassName={'sideBarRow-active'}>
      <img src={img} className="sideBarRow__icon" alt={title.toLowerCase()}/>
      <span className="sideBarRow__title">{ title }</span>
    </NavLink>
  )
}

export default SideBarRow