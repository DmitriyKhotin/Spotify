import React, {FC} from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import Searcher from '@components/Searcher'
import SideBar from '@components/SideBar'
import ProfileBar from '@components/ProfileBar'
import MiniLogo from '@components/MiniLogo'
import DefaultLayout from '@layouts/DefaultLayout'
import './MainPage.scss'
import {Paths} from "../../config/routes";
import TopTracksLayout from "../../layouts/TopTracksLayout";
import TopArtistsLayout from "../../layouts/TopArtistsLayout";
import PrivateRoute from "../../components/PrivateRoute";
import {getToken} from "../../config/appData";


const MainPage: FC = () => {
  console.log('mainpage')
  const history = useHistory()
  const token: string = getToken(history.location.hash)
  if (token) {
    localStorage.setItem('token', token)
    history.replace('/')
  }

  return (
    <>
      <div className="header">
        <div className="flex">
          <div className="header__logo">
            <MiniLogo/>
          </div>
          <Searcher/>
        </div>
        <ProfileBar/>
      </div>
      <div className="main">
        <SideBar/>
        <div className="main__delimiter"/>
        <PrivateRoute exact path={Paths.ROOT} component={DefaultLayout}/>
        <PrivateRoute exact path={Paths.TOP_TRACKS} component={TopTracksLayout}/>
        <PrivateRoute exact path={Paths.TOP_ARTISTS} component={TopArtistsLayout}/>
      </div>
    </>
  );
}

export default MainPage;
