import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import ReactAudioPlayer from 'react-audio-player'

import store from '@store/UserStore'

import style from './PLayer.module.scss'

const Player: FC = () => {
  console.log(store.curTrack.previewUrl)
  return (
    <ReactAudioPlayer src={store.curTrack.previewUrl || ''} autoPlay controls />
  )
}

export default observer(Player)
