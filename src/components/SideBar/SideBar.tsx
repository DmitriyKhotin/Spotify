import React, { FC, memo } from 'react'

import './SideBar.scss'
import Title from '@components/Title'

import SideBarRow from './SideBarRow'
import { mapSideBarLabels, SideBarEnum } from './config'

const SideBar: FC = () => {
  return (
    <div className="sideBar">
      <div>
        <SideBarRow
          defaultImg={mapSideBarLabels[SideBarEnum.main].defaultImg}
          clickedImg={mapSideBarLabels[SideBarEnum.main].clickedImg}
          title={mapSideBarLabels[SideBarEnum.main].title}
          link={mapSideBarLabels[SideBarEnum.main].link}
        />
        <SideBarRow
          defaultImg={mapSideBarLabels[SideBarEnum.search].defaultImg}
          clickedImg={mapSideBarLabels[SideBarEnum.search].clickedImg}
          title={mapSideBarLabels[SideBarEnum.search].title}
          link={mapSideBarLabels[SideBarEnum.search].link}
        />
      </div>
    </div>
  )
}

export default memo(SideBar)
