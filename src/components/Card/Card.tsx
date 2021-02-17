import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

const Card: FC<{src: string, type: string, id: string}> = ({src, type, id}) => {

  return (
    <Link to={`${type}/${id}`}>
      <div style={{backgroundImage: `url(${src})`}} className="card"/>
    </Link>
  )
}

export default Card