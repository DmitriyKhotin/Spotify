import { BaseModelWithImage } from '../extends'

export type PlaylistModel = BaseModelWithImage & {
  description: string
  owner:  string
  tracks: {
    href: string
    total: number
  }
}