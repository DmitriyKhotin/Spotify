import React, { FC } from 'react'
import track from './Track.module.scss'

const Track: FC = () => {
  return (
    <div className={track.track}>
      <div className={track.flex}>
        <p className={track.track__number}>1</p>
        <div>
          <p className={track.track__title}>Global Warming (feat. Sensato)</p>
          <div className={track.track__authors}>
            <p className={track.author}>Pitbull</p>
            <div className={track.miniDot}/>
            <p className={track.author}>Sensato</p>
          </div>
        </div>
      </div>
      <p className={track.track__duration}>1:25</p>
    </div>
  )
}

export default Track