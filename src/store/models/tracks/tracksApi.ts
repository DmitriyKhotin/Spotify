import {TrackModel} from './track'
import {BaseApiModel, normalizeBaseModel} from '../extends'
import {ArtistApiModel, normalizeArtistsModel} from '../artists'

export type TrackApiModel = BaseApiModel & {
  preview_url: string | null
  duration_ms: number
  artists: ArtistApiModel[]
}

export const normalizeTrackModel = (
  tracks: TrackApiModel[]
): TrackModel[] =>
  tracks.map((track: TrackApiModel) => ({
    ...normalizeBaseModel(track),
    artists: normalizeArtistsModel(track.artists),
    duration: track.duration_ms,
    previewUrl: track.preview_url
  }))