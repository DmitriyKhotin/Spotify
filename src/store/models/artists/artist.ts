import {BaseModel} from "../extends";
import {ImagesApiModel} from "../imagesApi";

export type ArtistModel = BaseModel & {
  images: ImagesApiModel[]
  popularity: number
  folowers: number | null
}