import React, { FC, useEffect } from 'react'
import useAuth from '@utils/useAuth'
import store from '@store/UserStore'
import { observer } from 'mobx-react-lite'

const TopArtistsLayout: FC = () => {

  useEffect(() => {
    store.fetchTopArtists()
  }, [])
  console.log(store.topArtists)
  useAuth()

  return (
    <div className="topArtistsLayout">

    </div>
  )
}

export default observer(TopArtistsLayout)