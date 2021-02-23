import React, { FC } from 'react'
import './Title.scss'

const Title: FC<{ title: string }> = ({ title }) => {
  return <p className="title">{title}</p>
}

export default Title
