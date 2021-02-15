import React, {FC, useEffect} from 'react'
import './DefaultLayout.scss'
import Carousel from '@components/Carousel'
import store from "@store/UserStore";
import {observer} from "mobx-react-lite";
import {Meta} from "@utils/meta";
import Loader from "@components/Loader";
import {useHistory} from "react-router-dom";
import {StatusCode} from "@utils/apiTypes";

const DefaultLayout: FC = () => {

  const history = useHistory<History>()

  useEffect(() => {
    store.fetchAlbums()
    store.fetchPlaylists(true)
  }, [])

  useEffect(() => {
    if (store.errorCode === StatusCode.unauthorized) {
      localStorage.removeItem('token')
      history.push('/login')
    }
  }, [store.errorCode])

  if (store.meta === Meta.loading || store.meta === Meta.error)
    return <Loader/>

  return (
    <div className="defaultLayout">
      <Carousel title="My albums" data={store.albums}/>
      <Carousel title="My playlists" data={store.playlists}/>
    </div>
  )
}

export default observer(DefaultLayout)