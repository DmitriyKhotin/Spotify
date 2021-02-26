import React, { FC, memo, useCallback, useMemo, useState } from 'react'
import Loader from 'react-loader-spinner'
import classNames from 'classnames'
import { observer } from 'mobx-react-lite'

import store from '@store/RootStore'
import { TrackModel, ArtistModel } from '@store/models'
import { convertMiliSecToMinSec } from '@utils/convertMiliSecToMinSec'

import track from './Track.module.scss'

interface IProps extends TrackModel {
  index: number
}

const Track: FC<IProps> = ({
  name,
  artists,
  duration,
  id,
  spotify,
  href,
  previewUrl,
  type,
  index,
}) => {
  const onclick = (event: MouseEvent) => {
    event.stopPropagation()
    console.log(store.userStore.curTrack.id === id)
    if (previewUrl) {
      store.userStore.setTrack({
        name,
        artists,
        duration,
        id,
        spotify,
        href,
        previewUrl,
        type,
        isPlaying:
          store.userStore.curTrack.id === id
            ? !store.userStore.curTrack.isPlaying
            : true,
      })
    } else {
      alert('Выбранный трек не воспроизводится')
    }
  }
  const memoDuration = useMemo(() => convertMiliSecToMinSec(duration), [
    duration,
  ])
  const onClickMemo = useCallback((event) => onclick(event), [])

  return (
    <div
      className={classNames(
        track.track,
        store.userStore.curTrack.id === id ? track.active : ''
      )}
      onClick={onClickMemo}
    >
      <div className={track.flex}>
        <p className={track.track__number}>{index}</p>
        <div>
          <p className={track.track__title}>{name}</p>
          <div className={track.track__authors}>
            {artists.map((artist: ArtistModel) => (
              <p key={artist.id} className={track.author}>
                {artist.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className={track.flex}>
        <a
          className={track.redirect__arrow}
          href={spotify || ''}
          onClick={(event) => event.stopPropagation()}
        />
        <p className={track.track__duration}>{memoDuration}</p>
      </div>
    </div>
  )
}

export default observer(Track)
