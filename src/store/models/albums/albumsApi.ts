import { AlbumModel } from "./album";
import { BaseApiModelWithImage, BaseModelWithImage, normalizeBaseModel } from '../extends'
import {normalizeTrackModel, TrackApiModel} from "../tracks";
import {formatDateDDMMYYYY} from "@config/formateDateDDMMYYYY";

export type ResponseAlbumApiModel = {
  added_at: string
  album: AlbumApiModel
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
}

export const normalizeAlbumModel = (
  album: ResponseAlbumApiModel
): AlbumModel =>({
    ...normalizeBaseModel(album.album),
    addedAt: formatDateDDMMYYYY(new Date(album.added_at)),
    albumType: album.album.album_type,
    tracks: normalizeTrackModel(album.album.tracks.items),
    totalTracks: album.album.total_tracks,
    popularity: album.album.popularity,
    releaseDate: album.album.release_date,
    images: album.album.images
  })

export const normalizeAlbumsModel = (
  albums: ResponseAlbumApiModel[]
): BaseModelWithImage[] =>
  albums.map((album: ResponseAlbumApiModel) => ({
    ...normalizeBaseModel(album.album),
    images: album.album.images
  }))
