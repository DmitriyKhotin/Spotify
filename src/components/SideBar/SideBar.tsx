import React, {FC, memo} from 'react'
import './SideBar.scss'
import Title from "@components/Title";
import SideBarRow from "./SideBarRow";
import {mapSideBarLabels, SideBarEnum} from "./config";

const SideBar: FC = () => {

  return (
    <div className="sideBar">
      <Title title="My top"/>
      <div>
        <SideBarRow
          img={mapSideBarLabels[SideBarEnum.tracks].img}
          title={mapSideBarLabels[SideBarEnum.tracks].title}
          link={mapSideBarLabels[SideBarEnum.tracks].link}
        />
        <SideBarRow
          img={mapSideBarLabels[SideBarEnum.artists].img}
          title={mapSideBarLabels[SideBarEnum.artists].title}
          link={mapSideBarLabels[SideBarEnum.artists].link}
        />
      </div>
    </div>
  )
}

export default memo(SideBar)