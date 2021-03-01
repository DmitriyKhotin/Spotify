import React, { FC } from 'react'

import style from './Pointer.module.scss'
const Pointer: FC<{ text: string }> = ({ text }) => {
  return (
    <div className={style['pointer']}>
      <div className={style['pointer__arrow']} />
      <p className={style['pointer__title']}>{text}</p>
    </div>
  )
}

export default Pointer
