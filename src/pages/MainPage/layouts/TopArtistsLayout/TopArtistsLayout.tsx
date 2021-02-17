import React, { FC, useEffect } from 'react'
import useAuth from '@utils/useAuth'
import store from '@store/UserStore'

const TopArtistsLayout: FC = () => {

  useEffect(() => {
    store.fetchTopArtists(true)
  }, [])

  useAuth()

  return (
    <div className="topArtistsLAyout">

    </div>
  )
}

export default TopArtistsLayout