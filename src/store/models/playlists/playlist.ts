import { BaseModelWithImage } from '../extends'
import { TrackModel } from '../tracks'

export type PlaylistModel = BaseModelWithImage & {
  description: string
  owner: string
  tracks: TrackModel[]
}
