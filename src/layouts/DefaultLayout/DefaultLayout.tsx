import React, {FC} from 'react'
import './DefaultLayout.scss'
import Carousel from '@components/Carousel'

const DefaultLayout: FC<{data: any}> = ({data}) => {

  return (
    <div className="defaultLayout">
      <Carousel title="My albums" data={data.albums}/>
      <Carousel title="My playlists" data={data.playlists}/>
    </div>
  )
}

export default DefaultLayout