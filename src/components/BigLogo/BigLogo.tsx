import React, {FC, memo} from 'react'
import './BigLogo.scss'

const BigLogo: FC = () => {
  return (
    <div className="biglogo"/>
  )
}

export default memo<FC>(BigLogo)