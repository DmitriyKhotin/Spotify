import React, { FC, useEffect, useState } from 'react'
import style from './PlaylistLayout.module.scss'
import { TrackModel } from '../../../../store/models/tracks'
import { useHistory } from 'react-router-dom'
import store from '../../../../store/UserStore'
import Loader from '../../../../components/Loader'
import { PlaylistModel } from '../../../../store/models/playlists'
import { Meta } from '../../../../utils/meta'
import useAuth from '../../../../utils/useAuth'
import { observer } from 'mobx-react-lite'

const PlaylistLayout: FC = () => {
  const [playlist, setPlaylist] = useState<PlaylistModel>()
  const [track, setTrack] = useState<TrackModel>()
  const history = useHistory()

  useEffect(() => {
    if (store.meta !== Meta.loading)
    // проблема с типом response (AlbumModel | void)
    //@ts-ignore
      store.fetchPlaylist(history.location.pathname).then(response => setPlaylist(response))
  }, [])

  useAuth()

  if (!playlist)
    return <Loader/>

  return (
    <div>
    </div>
  )
}

export default observer(PlaylistLayout)