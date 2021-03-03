import React, { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import classNames from 'classnames'

import './Carousel.scss'

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
    centerMode: data.length > 5,
    slidesToShow: getNumber(5),
    slidesToScroll: getNumber(5),
    infinite: true,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          centerMode: data.length > 4,
          slidesToShow: getNumber(4),
          slidesToScroll: getNumber(4),
        },
      },
      {
        breakpoint: 1340,
        settings: {
          centerMode: data.length > 3,
          slidesToShow: getNumber(3),
          slidesToScroll: getNumber(3),
        },
      },
      {
        breakpoint: 1100,
        settings: {
          centerMode: data.length > 3,
          slidesToShow: getNumber(3),
          slidesToScroll: getNumber(3),
        },
      },
      {
        breakpoint: 1080,
        settings: {
          centerMode: data.length > 2,
          slidesToShow: getNumber(2),
          slidesToScroll: getNumber(2),
        },
      },
      {
        breakpoint: 940,
        settings: {
          centerPadding: '20px',
          centerMode: data.length > 2,
          slidesToShow: getNumber(2),
          slidesToScroll: getNumber(2),
        },
      },
      {
        breakpoint: 799,
        settings: {
          dots: true,
          arrows: false,
          centerPadding: '100px',
          centerMode: false,
          slidesToShow: getNumber(3),
          slidesToScroll: getNumber(3),
        },
      },
      {
        breakpoint: 670,
        settings: {
          dots: true,
          arrows: false,
          centerPadding: '50px',
          centerMode: false,
          slidesToShow: getNumber(2),
          slidesToScroll: getNumber(2),
        },
      },
      {
        breakpoint: 390,
        settings: {
          dots: true,
          arrows: false,
          centerPadding: '70px',
          centerMode: false,
          slidesToShow: getNumber(1),
          slidesToScroll: getNumber(1),
        },
      },
      // {
      //   breakpoint: 380,
      //   settings: {
      //     dots: true,
      //     arrows: false,
      //     centerPadding: '40px',
      //     centerMode: true,
      //     slidesToShow: getNumber(1),
      //     slidesToScroll: getNumber(1),
      //   },
      // },
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
              className={classNames('carousel__slider__hovered')}
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

export default memo(Carousel)
