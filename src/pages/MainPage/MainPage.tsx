import React, { FC } from 'react'
import { useHistory, Switch, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import SideBar from '@components/Menu/SideBar'
import Footer from '@components/Menu/Footer'
import Searcher from '@components/Searcher'
import ProfileBar from '@components/ProfileBar'
import MiniLogo from '@components/MiniLogo'
import PrivateRoute from '@components/PrivateRoute'
import { getToken } from '@config/appData'
import { paths } from '@config/routes'
import Player from '@components/Player'
import store from '@store/RootStore'

import DefaultLayout from './layouts/DefaultLayout'
import CategoryLayout from './layouts/CategoryLayout'
import ProfileLayout from './layouts/ProfileLayout'
import SearchLayout from './layouts/SearchLayout'

import './MainPage.scss'

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
        {window.innerWidth >= 800 ? (
          <div className={'sidebar'}>
            <div className={'sidebar__logo'}>
              <MiniLogo />
            </div>
            <div className={'sidebar__menu'}>
              <SideBar />
            </div>
          </div>
        ) : (
          <div className={'footer'}>
            <Footer />
          </div>
        )}
        <div className={'content'}>
          {history.location.pathname !== paths.PROFILE && (
            <div
              style={
                history.location.pathname.includes('albums') ||
                history.location.pathname.includes('playlists')
                  ? {
                      backgroundColor: store.userStore.color,
                    }
                  : {}
              }
              className="header"
            >
              <PrivateRoute path={paths.SEARCH}>
                <Searcher />
              </PrivateRoute>
              <div className={'header__profile'}>
                <ProfileBar />
              </div>
            </div>
          )}
          <div className="main">
            <div className={'main__layout'}>
              <Switch>
                <PrivateRoute exact path={paths.ROOT}>
                  <DefaultLayout />
                </PrivateRoute>
                <PrivateRoute exact path={paths.ALBUM}>
                  <CategoryLayout />
                </PrivateRoute>
                <PrivateRoute exact path={paths.PLAYLIST}>
                  <CategoryLayout />
                </PrivateRoute>
                <PrivateRoute exact path={paths.PROFILE}>
                  <ProfileLayout />
                </PrivateRoute>
                <PrivateRoute path={paths.SEARCH}>
                  <SearchLayout />
                </PrivateRoute>
                <Redirect to={paths.ROOT} />
              </Switch>
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

export default observer(MainPage)
