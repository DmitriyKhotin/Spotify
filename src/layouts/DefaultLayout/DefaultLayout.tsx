import React, {FC} from 'react'
import './DefaultLayout.scss'
import Carousel from '@components/Carousel'

const DefaultLayout: FC = () => {
  return (
    <div>
      <Carousel title="My albums"/>
    </div>
  )
}

export default DefaultLayout