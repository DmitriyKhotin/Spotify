import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import useAuth from '@utils/useAuth'
import store from '@store/UserStore'
import style from './ProfileLayout.module.scss'


const ProfileLayout: FC = () => {

  useEffect(() => {
    store.fetchProfile()
  }, [])

  useAuth()

  return (
    <div className="topArtistsLAyout">

    </div>
  )
}

export default observer(ProfileLayout)