import React, { FC, memo, useCallback, useMemo } from 'react'

import { TrackModel } from '@store/models/tracks'

import track from './Track.module.scss'

interface IProps extends TrackModel {
  index: number
  onClick: () => void
}

const Track: FC<IProps> = ({ name, artists, duration, index, onClick }) => {
  const convertMiliSecToMinSec = () => {
    const min = Math.floor(duration / 1000 / 60)
    const sec = Math.floor((duration / 1000) % 60)
    return sec > 9 ? `${min}:${sec}` : `${min}:0${sec}`
  }

  const memoDuration = useMemo(() => convertMiliSecToMinSec(), [duration])
  const onClickMemo = useCallback(onClick, [])
  return (
    <div className={track.track} onClick={onClickMemo}>
      <div className={track.flex}>
        <p className={track.track__number}>{index}</p>
        <div>
          <p className={track.track__title}>{name}</p>
          <div className={track.track__authors}>
            <p className={track.author}>{artists[0].name}</p>
            {/*<div className={track.miniDot}/>*/}
            {/*<p className={track.author}>Sensato</p>*/}
          </div>
        </div>
      </div>
      <p className={track.track__duration}>{memoDuration}</p>
    </div>
  )
}

export default memo(Track)
