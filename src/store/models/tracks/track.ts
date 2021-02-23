import { BaseModel } from '../extends'
import { ArtistModel } from '../artists'

export type TrackModel = BaseModel & {
  previewUrl: string | null
  duration: number
  artists: ArtistModel[]
}
