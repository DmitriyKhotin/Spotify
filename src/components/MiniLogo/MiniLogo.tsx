import React, {FC, memo} from 'react'
import './MiniLogo.scss'

const MiniLogo: FC = () => {
  return (
    <div className="minilogo"/>
  )
}

export default memo<FC>(MiniLogo)