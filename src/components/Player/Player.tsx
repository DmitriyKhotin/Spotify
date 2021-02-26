import React, { FC, useEffect, useMemo, useRef } from 'react'
import { observer } from 'mobx-react-lite'

import store from '@store/RootStore'

const Player: FC = () => {
  const ref = useRef(null)

  const src = useMemo(() => store.userStore.curTrack.previewUrl, [
    store.userStore.curTrack.id,
  ])

  useEffect(() => {
    if (ref && ref.current && !store.userStore.curTrack.isPlaying) {
      console.log(ref)
      //@ts-ignore
      ref.current.pause()
    }
    if (ref && ref.current && store.userStore.curTrack.isPlaying) {
      //@ts-ignore
      ref.current.play()
    }
  }, [store.userStore.curTrack.isPlaying])

  return <audio ref={ref} src={src || ''} autoPlay controls />
}

export default observer(Player)
