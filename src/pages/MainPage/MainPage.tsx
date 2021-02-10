import React, {FC, useEffect, useState} from 'react'
import { Route, useHistory } from 'react-router-dom'
import Searcher from '@components/Searcher'
import SideBar from '@components/SideBar'
import ProfileBar from '@components/ProfileBar'
import MiniLogo from '@components/MiniLogo'
import DefaultLayout from '@layouts/DefaultLayout'
import './MainPage.scss'
import {paths} from "@config/routes";
import axios from "axios";

const MainPage: FC = () => {
  const history = useHistory<History>()
  const [data, setData] = useState({albums: [], playlists: []})

  const getToken = (hash: string): string => {
    const tokenBegin: number = hash.indexOf('=') + 1
    const tokenEnd: number = hash.indexOf('&')
    return hash.slice(tokenBegin, tokenEnd)
  }

  useEffect(() => {
    const token: string = getToken(history.location.hash)
    if (!token && !localStorage.getItem('token')) {
      history.replace('/login')
    }
    else {
      history.replace('/')
      if (token)
        localStorage.setItem('token', token)

      axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/me/playlists',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then((response) => setData(prevState => ({...prevState, playlists: response.data.items})))
        .catch(error => {
          if (error.response.status === 401) {
            localStorage.setItem('token', '')
            history.push('/login')
          }
        })

      axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/me/albums',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then((response) => setData(prevState => ({...prevState, albums: response.data.items})))
        .catch(error => console.log(error))
    }
  }, [])

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
        <Route path={paths.ROOT}>
          <DefaultLayout data={data}/>
        </Route>
      </div>
    </>
  );
}

export default MainPage;
