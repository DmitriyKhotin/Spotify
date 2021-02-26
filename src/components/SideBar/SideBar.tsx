import React, { FC, memo } from 'react'

import './SideBar.scss'
import Title from '@components/Title'

import SideBarRow from './SideBarRow'
import { mapSideBarLabels, sideBarLabelOrder } from './config'

const SideBar: FC = () => {
  return (
    <div className="sideBar">
      <div>
        {sideBarLabelOrder.map((value) => (
          <SideBarRow
            key={mapSideBarLabels[value].title}
            {...mapSideBarLabels[value]}
          />
        ))}
      </div>
    </div>
  )
}

export default memo(SideBar)
