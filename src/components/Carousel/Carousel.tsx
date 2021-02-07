import React, {FC} from 'react'
import './BigLogo.scss'
import Title from "@components/Title";

const Carousel: FC<{title: string}> = ({title}) => {
  return (
    <div className="carousel">
      <Title title={title}/>
    </div>
  )
}

export default Carousel