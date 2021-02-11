import {BaseApiModel, normalizeBaseModel} from "../extends";
import {ArtistModel} from "./artist";
import {ImagesApiModel} from "../imagesApi";

export type ArtistApiModel = BaseApiModel & {
  images: ImagesApiModel[]
  popularity: number
  followers: {
    total: number
  }
}

export const normalizeArtistModel = (
  artists: ArtistApiModel[]
): ArtistModel[] =>
  artists.map((artist: ArtistApiModel) => ({
    ...normalizeBaseModel(artist),
    images: artist.images,
    folowers: artist.followers.total,
    popularity: artist.popularity
  }))