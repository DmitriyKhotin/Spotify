import {
  BaseApiModel,
  BaseApiModelWithImage,
  BaseModelWithImage,
  normalizeBaseModel,
} from '../extends'
import { ImagesApiModel } from '../imagesApi'
import { normalizeTrackModel, TrackApiModel } from '../tracks'

import { PlaylistModel } from './playlist'

export type PlaylistApiModel = BaseApiModel & {
  description: string
  owner: {
    display_name: string
  }
  images: ImagesApiModel[]
  tracks: {
    href: string
    items: [
      {
        track: TrackApiModel
      }
    ]
    total: number
  }
}

export const normalizePlaylistModel = (
  playlist: PlaylistApiModel
): PlaylistModel => ({
  ...normalizeBaseModel(playlist),
  description: playlist.description,
  owner: playlist.owner.display_name,
  tracks: playlist.tracks.items.map((track) =>
    normalizeTrackModel(track.track)
  ),
  images: playlist.images,
})

export const normalizePlaylistsModel = (
  playlists: BaseApiModelWithImage[]
): BaseModelWithImage[] =>
  playlists.map((playlist: BaseApiModelWithImage) => ({
    ...normalizeBaseModel(playlist),
    images: playlist.images,
  }))
