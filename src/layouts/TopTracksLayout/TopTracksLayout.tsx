import React, {FC, useEffect} from "react";
import store from "@store/UserStore";
import {observer} from "mobx-react-lite";

const TopTracksLayout: FC = () => {

  useEffect(() => {
    console.log('TopTracks')
    store.fetchTopTracks()
  }, [])

  return (
    <div className="topTracksLayout">

    </div>
  )
}

export default observer(TopTracksLayout)