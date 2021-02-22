import React, {FC, useEffect} from "react";
import {observer} from "mobx-react-lite";
import useAuth from '@utils/useAuth'
import store from "@store/UserStore";


const TopTracksLayout: FC = () => {

  useEffect(() => {
    store.fetchTopTracks()
  }, [])
  console.log(store.topTracks)
  useAuth()

  return (
    <div className="topTracksLayout">

    </div>
  )
}

export default observer(TopTracksLayout)