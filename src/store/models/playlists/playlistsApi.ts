import {BaseApiModel, normalizeBaseModel} from "../extends";
import {ImagesApiModel} from "../imagesApi";
import {PlaylistModel} from "./playlist";

export type PlaylistApiModel = BaseApiModel & {
  description: string
  owner: {
    display_name: string
  }
  images: ImagesApiModel[]
  tracks: {
    href: string
    total: number
  }
}

export const normalizeArtistModel = (
  playlists: PlaylistApiModel[]
): PlaylistModel[] =>
  playlists.map((playlist: PlaylistApiModel) => ({
    ...normalizeBaseModel(playlist),
    description: playlist.description,
    images: playlist.images,
    owner: playlist.owner.display_name,
    tracks: playlist.tracks
  }))