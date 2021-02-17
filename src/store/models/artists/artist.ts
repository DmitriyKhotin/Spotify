import { BaseModelWithImage } from '../extends'

export type ArtistModel = BaseModelWithImage & {
  popularity: number
  folowers: number | null
}