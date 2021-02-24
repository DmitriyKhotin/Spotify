import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Searcher from '@components/Searcher'
import SideBar from '@components/SideBar'
import ProfileBar from '@components/ProfileBar'
import MiniLogo from '@components/MiniLogo'
import PrivateRoute from '@components/PrivateRoute'
import { getToken } from '@config/appData'
import { paths } from '@config/routes'
import Player from '@components/Player'

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
      <div className={'wrapper'}>
        <div className={'sidebar'}>
          <div className={'sidebar__logo'}>
            <MiniLogo />
          </div>
          <div className={'sidebar__menu'}>
            <SideBar />
          </div>
        </div>
        <div className={'content'}>
          <div
            style={
              history.location.pathname === paths.SEARCH
                ? { justifyContent: 'space-between' }
                : { justifyContent: 'flex-end' }
            }
            className="header"
          >
            <PrivateRoute exact path={paths.SEARCH}>
              <Searcher />
            </PrivateRoute>
            <div className={'header__profile'}>
              <ProfileBar />
            </div>
          </div>
          <div className="main">
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
        </div>
      </div>
      <div className={'player'}>
        <Player />
      </div>
    </>
  )
}

export default MainPage
