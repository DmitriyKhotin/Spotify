import React, {FC, useEffect} from 'react'
import './DefaultLayout.scss'
import Carousel from '@components/Carousel'
import store from "@store/UserStore";
import {observer} from "mobx-react-lite";
import {Meta} from "@utils/meta";
import Loader from "@components/Loader";
import useAuth from '@utils/useAuth'

const DefaultLayout: FC = () => {

  useEffect(() => {
    if (store.meta !== Meta.loading)
      Promise.all([store.fetchAlbums(true), store.fetchPlaylists(true)]).then()
  }, [])

  useAuth()

  if (store.meta === Meta.loading)
    return <Loader/>

  return (
    <div className="defaultLayout">
      <Carousel title="My albums" data={store.albums}/>
      <Carousel title="My playlists" data={store.playlists}/>
    </div>
  )
}

export default observer(DefaultLayout)