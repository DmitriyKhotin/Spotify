import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import store from '@store/RootStore'
import Carousel from '@components/Carousel'
import Loader from '@components/Loader'
import { Meta } from '@utils/meta'
import useAuth from '@utils/useAuth'

import './DefaultLayout.scss'

const DefaultLayout: FC = () => {
  useEffect(() => {
    Promise.all([
      store.userStore.fetchAlbums(true),
      store.userStore.fetchPlaylists(true),
    ])
  }, [])

  useAuth()

  if (store.userStore.meta === Meta.loading) {
    return <Loader />
  }

  return (
    <div className="defaultLayout">
      <Carousel title="Мои альбомы" data={store.userStore.albums} />
      <Carousel title="Мои плейлисты" data={store.userStore.playlists} />
    </div>
  )
}

export default observer(DefaultLayout)
