import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import Track from '@components/Track'
import { AlbumModel } from '@store/models/albums'
import store from '@store/UserStore'
import Loader from '@components/Loader'
import Card from '@components/Card'
import Player from '@components/Player'
import { Meta } from '@utils/meta'
import useAuth from '@utils/useAuth'

import style from './AlbumLayout.module.scss'

const AlbumLayout: FC = () => {
  const [album, setAlbum] = useState<AlbumModel>()
  const history = useHistory()

  //в этом хуке проверка на лоадинг как и в других лейаутах, можно вынести
  //в отдельный хук, но запросы отличаются и некоторые сущности в сторах, а некоторые
  //прямо в лэйауте, хз как сделать...
  useEffect(() => {
    if (store.meta !== Meta.loading) {
      // проблема с типом response (AlbumModel | void)
      store
        .fetchAlbum(history.location.pathname)
        //@ts-ignore
        .then((response) => setAlbum(response))
    }
  }, [])

  useAuth()

  if (!album) {
    return <Loader />
  }

  return (
    <div className={style.album}>
      <div className={style.album__header}>
        <Card src={album.images[0].url} />
        <div className={style.album__header__title}>
          <p className={style['album__header__title__item_size-middle']}>
            {album.albumType}
          </p>
          <p className={style['album__header__title__item_size-big']}>
            {album.name}
          </p>
          <div className={style.album__header__title__item}>
            <p className={style['album__header__title__item_color-white']}>
              {album.artist.name}
            </p>
            <p className={style['album__header__title__item_color-gray']}>
              {album.releaseDate.match(/\d\d\d\d/)}
            </p>
            <p className={style['album__header__title__item_color-gray']}>
              {album.totalTracks} tracks
            </p>
            <p className={style['album__header__title__item_color-gray']}>
              {album.popularity} popularity
            </p>
          </div>
        </div>
      </div>
      <div className={style['album__track-wrapper']}>
        {album.tracks.map((track, index) => (
          <Track
            key={track.id}
            index={index + 1}
            id={track.id}
            type={track.type}
            artists={track.artists}
            duration={track.duration}
            name={track.name}
            previewUrl={track.previewUrl}
            href={track.href}
            spotify={track.spotify}
          />
        ))}
      </div>
    </div>
  )
}

export default observer(AlbumLayout)
