import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { useLocation } from 'react-router-dom'

import store from '@store/RootStore'
import Track from '@components/Track'

import { Meta } from '../../../../utils/meta'
import Loader from '../../../../components/Loader'
import useAuth from '../../../../utils/useAuth'
import { paths } from '../../../../config/routes'

import style from './SearchLayout.module.scss'

const SearchLayout: FC = () => {
  const location = useLocation()

  useAuth()

  if (store.searchStore.meta === Meta.loading) {
    return <Loader />
  }

  if (!store.searchStore.tracks.length && location.pathname !== paths.SEARCH) {
    return <p className={style['voidRequest']}>Ничего не найдено</p>
  }

  return (
    <div className={style['searcher']}>
      {!!store.searchStore.tracks.length && (
        <p className={style['searcher__title']}>Найденные треки</p>
      )}
      {store.searchStore.tracks.map((track, index) => (
        <Track index={index + 1} {...track} key={track.id} />
      ))}
    </div>
  )
}

export default observer(SearchLayout)
