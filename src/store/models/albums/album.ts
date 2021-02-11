import {BaseModel} from "../extends";
import {ImagesApiModel} from "../imagesApi";
import {TrackModel} from "../tracks";

export type AlbumModel = BaseModel & {
  albumType: string
  addedAt: string
  releaseDate: string
  images: ImagesApiModel[]
  totalTracks: number
  popularity: number
  tracks: TrackModel[]
}