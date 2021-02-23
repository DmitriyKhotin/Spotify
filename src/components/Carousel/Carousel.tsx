import React, { FC } from 'react'
// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import './Carousel.scss'
import { Link } from 'react-router-dom'

import Title from '@components/Title'
import Card from '@components/Card'
import { BaseModelWithImage } from '@store/models/extends'

const Carousel: FC<{ title: string; data: BaseModelWithImage[] }> = ({
  title,
  data,
}) => {
  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  // };

  return (
    <div className="carousel">
      <Title title={title} />
      <div className="carousel__slider">
        {data.map((value: BaseModelWithImage) => (
          <div key={value.id} className={'carousel__slider_cursor-pointer'}>
            <Link to={`${value.type}s/${value.id}`}>
              <Card src={value.images[0].url} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
