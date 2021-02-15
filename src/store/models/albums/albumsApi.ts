import { AlbumModel } from "./album";
import {ImagesApiModel} from "../imagesApi";
import {BaseApiModel, normalizeBaseModel} from "../extends";
import {normalizeTrackModel, TrackApiModel} from "../tracks";
import {formatDateDDMMYYYY} from "@config/formateDateDDMMYYYY";

export type ResponseAlbumApiModel = {
  added_at: string
  album: AlbumApiModel
}

export type AlbumApiModel = BaseApiModel & {
  album_type: string
  added_at: string
  release_date: string
  images: ImagesApiModel[]
  total_tracks: number
  popularity: number
  tracks: {
    items: TrackApiModel[]
  }
}

export const normalizeAlbumModel = (
  albums: ResponseAlbumApiModel[]
): AlbumModel[] =>
  albums.map((album: ResponseAlbumApiModel) => ({
    ...normalizeBaseModel(album.album),
    addedAt: formatDateDDMMYYYY(new Date(album.added_at)),
    albumType: album.album.album_type,
    images: album.album.images,
    tracks: normalizeTrackModel(album.album.tracks.items),
    totalTracks: album.album.total_tracks,
    popularity: album.album.popularity,
    releaseDate: album.album.release_date
  }))