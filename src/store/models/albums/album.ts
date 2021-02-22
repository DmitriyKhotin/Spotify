import { BaseModelWithImage } from '../extends'
import {TrackModel} from "../tracks";
import { ArtistModel } from '../artists'

export type AlbumModel = BaseModelWithImage & {
  albumType: string
  artist: {
    name: string
    id: string
  }
  releaseDate: string
  totalTracks: number
  popularity: number
  tracks: TrackModel[]
}

