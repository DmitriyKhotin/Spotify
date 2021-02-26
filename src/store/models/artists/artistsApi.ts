import { BaseApiModel, normalizeBaseModel } from '../extends'
import { ImagesApiModel } from '../imagesApi'
import getColor from '../../../utils/getColor'

import { ArtistModel } from './artist'

export type ArtistApiModel = BaseApiModel & {
  images: ImagesApiModel[]
  popularity: number
  followers: {
    total: number
  } | null
}

export const normalizeArtistsModel = (
  artists: ArtistApiModel[]
): ArtistModel[] =>
  artists?.map((artist: ArtistApiModel) => ({
    ...normalizeBaseModel(artist),
    images: artist.images,
    folowers:
      artist.followers && artist.followers.total
        ? artist.followers.total
        : null,
    popularity: artist.popularity,
    color: artist.images
      ? getColor(artist.images[0].url)
      : new Promise((resolve) => resolve('')),
  }))
