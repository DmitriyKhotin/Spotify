import React, { FC, useEffect } from 'react'
import './DefaultLayout.scss'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'

import store from '@store/RootStore'
import Carousel from '@components/Carousel'
import { Meta } from '@utils/meta'
import Loader from '@components/Loader'
import useAuth from '@utils/useAuth'

const DefaultLayout: FC = () => {
  useEffect(() => {
    if (store.userStore.meta !== Meta.loading) {
      Promise.all([
        store.userStore.fetchAlbums(true),
        store.userStore.fetchPlaylists(true),
      ])
        .then((r) => console.log(r))
        .catch((e) => console.log(e))
    }
  }, [])

  useAuth()

  if (store.userStore.meta === Meta.loading) {
    return <Loader />
  }
  console.log(toJS(store.userStore.albums))
  return (
    <div className="defaultLayout">
      <Carousel title="Мои альбомы" data={store.userStore.albums} />
      <Carousel title="Мои плейлисты" data={store.userStore.playlists} />
    </div>
  )
}

export default observer(DefaultLayout)
