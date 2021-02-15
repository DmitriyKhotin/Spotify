import {BaseApiModel, normalizeBaseModel} from "../extends";
import {ArtistModel} from "./artist";
import {ImagesApiModel} from "../imagesApi";

export type ArtistApiModel = BaseApiModel & {
  images: ImagesApiModel[]
  popularity: number
  followers:
    | {
      total: number
    }
    | null
}

export const normalizeArtistsModel = (
  artists: ArtistApiModel[]
): ArtistModel[] =>
  artists.map((artist: ArtistApiModel) => ({
    ...normalizeBaseModel(artist),
    images: artist.images,
    folowers: (artist.followers && artist.followers.total) ? artist.followers.total : null,
    popularity: artist.popularity
  }))