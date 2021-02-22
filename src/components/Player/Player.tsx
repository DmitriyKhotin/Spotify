import React, { FC } from 'react'
import style from './PLayer.module.scss'

const Player: FC<{src: string}> = ({src}) => {

  console.log(src)
  return (
      <audio className={style.player} autoPlay loop controls>
        <source src={src}/>
      </audio>
  )
}

export default Player