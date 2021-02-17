import {ProfileModel} from "./profile";
import {ImagesApiModel} from "../imagesApi";

export type ProfileApiModel = {
  id: string
  display_name: string
  product: string
  type: string
  images: ImagesApiModel[]
  external_urls: {
    spotify: string
  }
  email: string
}

export const normalizeProfileModel = (
  profile: ProfileApiModel
): ProfileModel => ({
  id: profile.id,
  name: profile.display_name,
  type: profile.type,
  spotify: profile.external_urls.spotify,
  email: profile.email,
  images: profile.images,
  product: profile.product
})