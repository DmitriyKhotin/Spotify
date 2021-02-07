import React, {FC} from 'react'
import './SideBar.scss'
import Title from "@components/Title";
import SideBarRow from "./SideBarRow";

interface Row {
  id: string
  title: string
}

const SideBar: FC = () => {

  const menu: Row[] = [
    {id: '1', title: 'Tracks'},
    {id: '2', title: 'Artists'}
  ]

  return (
    <div className="sideBar">
      <Title title="My top"/>
      <div>
        {menu.map(value => <SideBarRow key={value.id} title={value.title}/>)}
      </div>
    </div>
  )
}

export default SideBar