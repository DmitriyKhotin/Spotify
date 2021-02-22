import React, { FC } from 'react'
import './Card.scss'

const Card: FC<{src: string}> = ({src}) => {

  return (
    <div style={{backgroundImage: `url(${src})`}} className="card"/>
  )
}

export default Card