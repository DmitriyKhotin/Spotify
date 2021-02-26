import React, { FC } from 'react'

import './Card.scss'
import { observer } from 'mobx-react-lite'

import store from '@store/RootStore'

const color =
  'linear-gradient(180.28deg, rgba(130, 125, 125, 0.67) 15.98%, rgba(68, 67, 67, 0.52) 36.72%, rgba(2, 2, 2, 0.43) 61.91%, rgba(33, 32, 32, 0.5) 86.36%)'
const Card: FC<{ src: string }> = ({
  src,
  // setColor,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className="card"
      // onMouseOver={setColor}
      // onMouseOut={() => store.userStore.setColor(color)}
    />
  )
}

export default observer(Card)
