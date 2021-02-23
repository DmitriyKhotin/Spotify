import {
  BaseApiModelWithImage,
  BaseModelWithImage,
  normalizeBaseModel,
} from '../extends'
import { normalizeTracksModel, TrackApiModel } from '../tracks'

import { AlbumModel } from './album'

export type ResponseAlbumApiModel = {
  added_at: string
  album: AlbumApiModel
}

type AlbumArtist = {
  name: string
  id: string
}

export type AlbumApiModel = BaseApiModelWithImage & {
  album_type: string
  added_at: string
  release_date: string
  total_tracks: number
  popularity: number
  tracks: {
    items: TrackApiModel[]
  }
  artists: AlbumArtist[]
}

export const normalizeAlbumModel = (album: AlbumApiModel): AlbumModel => ({
  ...normalizeBaseModel(album),
  albumType: album.album_type,
  tracks: normalizeTracksModel(album.tracks.items),
  totalTracks: album.total_tracks,
  popularity: album.popularity,
  artist: {
    name: album.artists[0].name,
    id: album.artists[0].id,
  },
  releaseDate: album.release_date,
  images: album.images,
})

export const normalizeAlbumsModel = (
  albums: ResponseAlbumApiModel[]
): BaseModelWithImage[] =>
  albums.map((album: ResponseAlbumApiModel) => ({
    ...normalizeBaseModel(album.album),
    images: album.album.images,
  }))
