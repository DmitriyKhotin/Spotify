import {ImagesApiModel} from "../imagesApi";
import {BaseModel} from "../extends";

export type ProfileModel = BaseModel & {
  product: string
  images: ImagesApiModel[]
  email: string
}