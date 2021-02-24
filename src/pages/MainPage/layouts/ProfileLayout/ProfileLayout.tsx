import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'

import useAuth from '@utils/useAuth'
import store from '@store/UserStore'

import style from './ProfileLayout.module.scss'

const ProfileLayout: FC = () => {
  useEffect(() => {
    store.fetchProfile()
  }, [])

  useAuth()
  if (!store.profile.id) {
    return <div />
  }
  return (
    <div className={style['profile']}>
      <div className={style['profile__header']}>
        {store.profile.images.length !== 0 ? (
          <img
            className={style['profile__avatar']}
            src={store.profile.images[0].url}
            alt={'avatar'}
          />
        ) : (
          <div
            className={classNames(
              style['profile__avatar'],
              style['profile__avatar_icon']
            )}
          />
        )}
        <div>
          <div className={style['header__name']}>{store.profile.name}</div>
          <div className={style['header__email']}>{store.profile.email}</div>
        </div>
      </div>
      <div className={style['topTracks']}></div>
      <div className={style['topArtists']}></div>
    </div>
  )
}

export default observer(ProfileLayout)
