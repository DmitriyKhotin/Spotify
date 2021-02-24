import React, { FC, useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'

import store from '@store/UserStore'

import style from './PLayer.module.scss'

const Player: FC = () => {
  const ref = useRef<HTMLAudioElement>()

  useEffect(() => {
    if (ref && !store.curTrack.isPlaying) {
      console.log(ref)
      ref.current!.pause()
    }
    if (ref && store.curTrack.isPlaying) {
      ref.current!.play()
    }
  }, [store.curTrack.isPlaying])
  return (
    <audio
      // @ts-ignore
      ref={ref}
      src={store.curTrack.previewUrl || ''}
      autoPlay
      controls
    />
  )
}

export default observer(Player)
