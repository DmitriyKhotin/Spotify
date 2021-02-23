import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import Searcher from '@components/Searcher'
import SideBar from '@components/SideBar'
import ProfileBar from '@components/ProfileBar'
import MiniLogo from '@components/MiniLogo'
import PrivateRoute from '@components/PrivateRoute'
import { getToken } from '@config/appData'
import { paths } from '@config/routes'

import DefaultLayout from './layouts/DefaultLayout'
import './MainPage.scss'
import TopTracksLayout from './layouts/TopTracksLayout'
import TopArtistsLayout from './layouts/TopArtistsLayout'
import AlbumLayout from './layouts/AlbumLayout'
import PlaylistLayout from './layouts/PlaylistLayout'
import ProfileLayout from './layouts/ProfileLayout'

const MainPage: FC = () => {
  const history = useHistory()

  const token: string = getToken(history.location.hash)
  if (token) {
    localStorage.setItem('token', token)
    history.replace(paths.ROOT)
  }

  return (
    <>
      <div className="header">
        <div className="flex">
          <div className="header__logo">
            <MiniLogo />
          </div>
          <Searcher />
        </div>
        <ProfileBar />
      </div>
      <div className="main">
        <SideBar />
        <div className="main__delimiter" />
        <div className={'main__layout'}>
          <PrivateRoute exact path={paths.ROOT}>
            <DefaultLayout />
          </PrivateRoute>
          <PrivateRoute exact path={paths.TOP_TRACKS}>
            <TopTracksLayout />
          </PrivateRoute>
          <PrivateRoute exact path={paths.TOP_ARTISTS}>
            <TopArtistsLayout />
          </PrivateRoute>
          <PrivateRoute exact path={paths.ALBUM}>
            <AlbumLayout />
          </PrivateRoute>
          <PrivateRoute exact path={paths.PLAYLIST}>
            <PlaylistLayout />
          </PrivateRoute>
          <PrivateRoute exact path={paths.PROFILE}>
            <ProfileLayout />
          </PrivateRoute>
        </div>
      </div>
    </>
  )
}

export default MainPage
