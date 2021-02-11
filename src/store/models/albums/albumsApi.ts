import { AlbumModel } from "./album";
import {ImagesApiModel} from "../imagesApi";
import {BaseApiModel, normalizeBaseModel} from "../extends";
import {normalizeTrackModel, TrackApiModel} from "../tracks";
import {formatDateDDMMYYYY} from "@config/formateDateDDMMYYYY";

export type AlbumApiModel = BaseApiModel & {
  album_type: string
  added_at: string
  release_date: string
  images: ImagesApiModel[]
  total_tracks: number
  popularity: number
  tracks: TrackApiModel[]
}

export const normalizeAlbumModel = (
  albums: AlbumApiModel[]
): AlbumModel[] =>
  albums.map((album: AlbumApiModel) => ({
    ...normalizeBaseModel(album),
    addedAt: formatDateDDMMYYYY(new Date(album.added_at)),
    albumType: album.album_type,
    images: album.images,
    tracks: normalizeTrackModel(album.tracks),
    totalTracks: album.total_tracks,
    popularity: album.popularity,
    releaseDate: album.release_date
  }))