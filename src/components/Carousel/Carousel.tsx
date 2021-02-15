import React, {FC, useEffect, memo} from 'react'
// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import './Carousel.scss'
import Title from '@components/Title'
import Card from '@components/Card'
import {BaseModel} from "@store/models/extends";

const Carousel: FC<{title: string, data: any}> = ({title, data}) => {

  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  // };

  useEffect(() => {
    console.log('Carousel')
  }, [])

  return (
    <div className="carousel">
      <Title title={title}/>
      <div className="carousel__slider">
        {data.map((value: any) => <Card key={value.id} src={value.images[0].url} alt={value.name}/>)}
      </div>
    </div>
  )
}

export default memo(Carousel)