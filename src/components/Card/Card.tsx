import React, {FC} from 'react'
import './Card.scss'

const Card: FC<{src: string, alt: string}> = ({src, alt}) => {

  return (
    <div className="card">
      <img className="card__img" src={src} alt={alt}/>
    </div>
  )
}

export default Card