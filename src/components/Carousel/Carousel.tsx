import React, {FC} from 'react'
// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import './Carousel.scss'
import Title from '@components/Title'
import Card from '@components/Card'

const Carousel: FC<{title: string, data: any}> = ({title, data}) => {

  if (!data) {
    return <div>Loading...</div>
  }

  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  // };

  const typeSwitcher = () => {
    switch (title) {
      case 'My albums':
        return (data.map((value: any) => <Card key={value.album.id} src={value.album.images[0].url} alt={value.album.name}/>));
      case 'My playlists':
        return (data.map((value: any) => <Card key={value.id} src={value.images[0].url} alt={value.name}/>));
      default:
        return []
    }
  }

  return (
    <div className="carousel">
      <Title title={title}/>
      <div className="carousel__slider">
        {typeSwitcher()}
      </div>
      {/*<Slider {...settings}>*/}
      {/*    {typeSwitcher()}*/}
      {/*</Slider>*/}
    </div>
  )
}

export default Carousel