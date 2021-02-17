import { BaseModelWithImage } from '../extends'
import {TrackModel} from "../tracks";

export type AlbumModel = BaseModelWithImage & {
  albumType: string
  addedAt: string
  releaseDate: string
  totalTracks: number
  popularity: number
  tracks: TrackModel[]
}

