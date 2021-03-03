import React, { FC, memo } from 'react'

import './SideBar.scss'

import MenuItem from '../MenuItem'
import { mapMenuLabels, menuLabelOrder } from '../config'

const SideBar: FC = () => {
  return (
    <div className="sideBar">
      <div>
        {menuLabelOrder.map((value) => (
          <MenuItem
            key={mapMenuLabels[value].title}
            {...mapMenuLabels[value]}
          />
        ))}
      </div>
    </div>
  )
}

export default memo(SideBar)
