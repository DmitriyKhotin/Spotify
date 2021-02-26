import React, { FC } from 'react'

import { AlbumModel } from '@store/models'

const AlbumInfo: FC<{ category: AlbumModel }> = ({ category }) => {
  return (
    <>
      <p className="category__header__title__item_color-white">
        {category.artist.name}
      </p>
      <p className="category__header__title__item_color-gray">
        {category.releaseDate.match(/\d\d\d\d/)}
      </p>
      <p className="category__header__title__item_color-gray">
        {category.totalTracks} tracks
      </p>
      <p className="category__header__title__item_color-gray">
        {category.popularity} popularity
      </p>
    </>
  )
}

export default AlbumInfo
