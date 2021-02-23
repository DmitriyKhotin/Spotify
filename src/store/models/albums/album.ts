import { BaseModelWithImage } from '../extends'
import { TrackModel } from '../tracks'

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
