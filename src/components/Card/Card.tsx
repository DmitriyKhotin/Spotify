import React, { FC } from 'react'
import './Card.scss'
import { observer } from 'mobx-react-lite'

const Card: FC<{ src: string }> = ({ src }) => {
  return <div style={{ backgroundImage: `url(${src})` }} className="card" />
}

export default observer(Card)
