import React, { FC } from 'react'

import './Carousel.scss'

import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import classNames from 'classnames'

import Title from '@components/Title'
import Card from '@components/Card'
import { BaseModelWithImage } from '@store/models/extends'

const Carousel: FC<{ title: string; data: BaseModelWithImage[] }> = ({
  title,
  data,
}) => {
  const getNumber = (number: number) => {
    return data.length > number ? number : data.length
  }

  const settings = {
    speed: 500,
    dots: false,
    arrows: true,
    slidesToShow: getNumber(5),
    slidesToScroll: getNumber(5),
    centerMode: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: getNumber(4),
          slidesToScroll: getNumber(4),
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: getNumber(3),
          slidesToScroll: getNumber(3),
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: getNumber(2),
          slidesToScroll: getNumber(2),
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: getNumber(1),
          slidesToScroll: getNumber(1),
        },
      },
    ],
  }

  return (
    <div className="carousel">
      <Title title={title} />
      {data.length ? (
        <Slider {...settings} className="carousel__slider">
          {data.map((value: BaseModelWithImage) => (
            <div
              key={value.id}
              className={classNames('carousel__slider__hovered', {
                carousel__card__margin_zero: data.length < 5,
              })}
            >
              <Link to={`${value.type}s/${value.id}`}>
                <Card src={value.images[0].url} />
              </Link>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Пусто</p>
      )}
    </div>
  )
}

export default Carousel
