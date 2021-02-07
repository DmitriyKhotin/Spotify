import React, {FC} from 'react'
import './SideBarRow.scss'

const SideBarRow: FC<{title: string}> = ({title}) => {


  return (
    <div className="sideBarRow">
      <img src={`../img/${title.toLowerCase()}.png`} className="sideBarRow__icon" alt={title.toLowerCase()}/>
      <span className="sideBarRow__title">{ title }</span>
    </div>
  )
}

export default SideBarRow