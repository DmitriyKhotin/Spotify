import React, { FC } from 'react'

import { PlaylistModel } from '@store/models'

const PlaylistInfo: FC<{ category: PlaylistModel }> = ({ category }) => {
  return (
    <p className="category__header__title__item_color-white">
      {category.owner}
    </p>
  )
}

export default PlaylistInfo
