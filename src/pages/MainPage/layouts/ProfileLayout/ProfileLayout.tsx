import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'

import { TrackModel } from '@store/models'
import store from '@store/RootStore'
import useAuth from '@utils/useAuth'
import Track from '@components/Track'
import Loader from '@components/Loader'

import style from './ProfileLayout.module.scss'

const ProfileLayout: FC = () => {
  useEffect(() => {
    Promise.all([
      store.userStore.fetchProfile(true),
      store.userStore.fetchTopTracks(true),
      store.userStore.fetchTopArtists(true),
    ])
  }, [])

  useAuth()
  if (
    !store.userStore.profile.id ||
    !store.userStore.topTracks.length ||
    !store.userStore.topArtists.length
  ) {
    return <Loader />
  }

  return (
    <div className={style['profile']}>
      <div className={style['profile__header']}>
        {store.userStore.profile.images.length !== 0 ? (
          <img
            className={style['profile__avatar']}
            src={store.userStore.profile.images[0].url}
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
          <div className={style['header__name']}>
            {store.userStore.profile.name}
          </div>
          <div className={style['header__email']}>
            {store.userStore.profile.email}
          </div>
        </div>
      </div>
      <div className={style['profile__topTracks']}>
        <p className={style['title']}>Топ треки</p>
        {store.userStore.topTracksNotRepeated.map(
          (track: TrackModel, index: number) => (
            <Track key={track.id} {...track} index={index + 1} />
          )
        )}
      </div>
      {/*<div className={style['profile__topArtists']}>*/}
      {/*  <p className={style['title']}>Топ артисты</p>*/}
      {/*</div>*/}
    </div>
  )
}

export default observer(ProfileLayout)
