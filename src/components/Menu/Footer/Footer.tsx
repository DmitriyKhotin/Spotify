import React, { FC, memo } from 'react'

import MenuItem from '../MenuItem'
import { mapMenuLabels, menuLabelOrder } from '../config'

import style from './Footer.module.scss'

const Footer: FC = () => {
  return (
    <div className={style['footer__content']}>
      {menuLabelOrder.map((value) => (
        <MenuItem key={mapMenuLabels[value].title} {...mapMenuLabels[value]} />
      ))}
    </div>
  )
}

export default memo(Footer)
