import React, { FC } from 'react'

import './OportunityList.scss'
import { oportunities } from './config'

const OportunityList: FC = () => {
  return (
    <div className="oportunities">
      <h3 className="oportunities__title">Вы можете:</h3>
      <ul className="oportunities__body list">
        {oportunities.map((value) => (
          <li className="list__elem" key={value.title}>
            {value.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OportunityList
