import React, { FC, useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'

import store from '@store/RootStore'

import style from './PLayer.module.scss'

const Player: FC = () => {
  const ref = useRef(null)

  useEffect(() => {
    if (ref && ref.current && !store.userStore.curTrack.isPlaying) {
      //@ts-ignore
      ref.current.pause()
    }
    if (ref && ref.current && store.userStore.curTrack.isPlaying) {
      //@ts-ignore
      ref.current.play()
    }
  }, [store.userStore.curTrack.isPlaying])

  return (
    <audio
      ref={ref}
      src={store.userStore.curTrack.previewUrl || ''}
      autoPlay
      controls
      className={style.player}
    />
  )
}

export default observer(Player)
