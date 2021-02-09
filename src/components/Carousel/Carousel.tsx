import React, {FC} from 'react'
import MaterialCarousel from 'react-material-ui-carousel'
import './Carousel.scss'
import Title from '@components/Title'
import Card from '@components/Card'

const Carousel: FC<{title: string}> = ({title}) => {
  return (
    <div className="carousel">
      <Title title={title}/>
      <MaterialCarousel autoPlay={false} indicators={false}>
        <div className="carousel__slider">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </MaterialCarousel>
    </div>
  )
}

export default Carousel