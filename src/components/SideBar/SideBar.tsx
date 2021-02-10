import React, {FC} from 'react'
import './SideBar.scss'
import Title from "@components/Title";
import SideBarRow from "./SideBarRow";
import {mapSideBarLabels, sideBarLabelOrder} from "./config";

const SideBar: FC = () => {

  return (
    <div className="sideBar">
      <Title title="My top"/>
      <div>
        {sideBarLabelOrder.map(value =>
          <SideBarRow
            key={mapSideBarLabels[value].title}
            title={mapSideBarLabels[value].title}
            img={mapSideBarLabels[value].img}
          />)
        }
      </div>
    </div>
  )
}

export default SideBar