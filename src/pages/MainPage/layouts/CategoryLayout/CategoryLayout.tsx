import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import store from '@store/RootStore'
import { AlbumModel, PlaylistModel } from '@store/models'
import Track from '@components/Track'
import Loader from '@components/Loader'
import Card from '@components/Card'
import { Meta } from '@utils/meta'
import useAuth from '@utils/useAuth'

import AlbumInfo from './AlbumInfo'
import PlaylistInfo from './PlaylistInfo'

import './CategoryLayout.scss'

const ALBUM_PATH = '/albums'

const CategoryLayout: FC = () => {
  const history = useHistory()
  const [category, setCategory] = history.location.pathname.includes(ALBUM_PATH)
    ? useState<AlbumModel>()
    : useState<PlaylistModel>()

  useEffect(() => {
    if (store.userStore.meta !== Meta.loading) {
      history.location.pathname.includes(ALBUM_PATH)
        ? store.userStore
            .fetchAlbum(history.location.pathname)
            //@ts-ignore
            .then(setCategory)
        : store.userStore
            .fetchPlaylist(history.location.pathname)
            //@ts-ignore
            .then(setCategory)
    }
  }, [])

  useAuth()

  useEffect(() => {
    if (category) {
      category.color.then(store.userStore.setColor)
    }
  }, [category])

  if (!category) {
    return (
      <div>
        <Loader />
      </div>
    )
  }

  return (
    <div className="category">
      <div
        style={{ backgroundColor: store.userStore.color }}
        className="category__header"
      >
        <Card src={category.images[0].url} />
        <div className="category__header__title">
          <p className="category__header__title__item_size-middle">
            {category.type}
          </p>
          <p className="category__header__title__item_size-big">
            {category.name}
          </p>
          <div className="category__header__title__item">
            {history.location.pathname.includes(ALBUM_PATH) ? (
              // @ts-ignore
              <AlbumInfo category={category} />
            ) : (
              // @ts-ignore
              <PlaylistInfo category={category} />
            )}
          </div>
        </div>
      </div>
      <div className="category__track-wrapper">
        {category.tracks.map((track, index) => (
          <Track key={track.id} index={index + 1} {...track} />
        ))}
      </div>
    </div>
  )
}

export default observer(CategoryLayout)
