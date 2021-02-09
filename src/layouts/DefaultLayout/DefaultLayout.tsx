import React, {FC} from 'react'
import './DefaultLayout.scss'
import Carousel from '@components/Carousel'

const DefaultLayout: FC = () => {
  return (
    <div className="defaultLayout">
      <Carousel title="My albums"/>
      <Carousel title="My playlists"/>
    </div>
  )
}

export default DefaultLayout