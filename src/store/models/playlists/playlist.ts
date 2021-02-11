import {BaseModel} from "../extends";
import {ImagesApiModel} from "../imagesApi";

export type PlaylistModel = BaseModel & {
  description: string
  owner:  string
  images: ImagesApiModel[]
  tracks: {
    href: string
    total: number
  }
}