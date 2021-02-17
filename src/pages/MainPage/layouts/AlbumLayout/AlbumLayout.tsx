import React, { FC, useEffect, useState } from 'react'
import Track from '@components/Track'

const AlbumLayout: FC = () => {
  const [album, setAlbum] = useState()

  useEffect(() => {

  }, [])

  return (
    <div>
      <div>
      </div>
      <div>
        <p>album</p>
        <p>Global Warming</p>
        <div>
          <p>Pitbull</p>
          <p>2012</p>
          <p>18 tracks</p>
          <p>60 popularity</p>
        </div>
      </div>
      <Track/>
    </div>
  )
}

export default AlbumLayout