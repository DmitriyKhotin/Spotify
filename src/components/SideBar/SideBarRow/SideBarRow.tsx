import React, {FC} from 'react'
import './SideBarRow.scss'
import {SideBarLabel} from "../config";

const SideBarRow: FC<SideBarLabel> = ({title, img}) => {


  return (
    <div className="sideBarRow">
      <img src={img} className="sideBarRow__icon" alt={title.toLowerCase()}/>
      <span className="sideBarRow__title">{ title }</span>
    </div>
  )
}

export default SideBarRow