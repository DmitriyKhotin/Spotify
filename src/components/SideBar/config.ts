import artistsImg from './img/artists.svg'
import tracksImg from './img/tracks.svg'
import {Paths} from "../../config/routes";

export enum SideBarEnum {
  tracks = 'tracks',
  artists = 'artists'
}

export type SideBarLabel = {
  img: string
  title: string
  link: Paths
}

export const mapSideBarLabels: Record<SideBarEnum, SideBarLabel> = {
  [SideBarEnum.tracks]: {
    img: tracksImg,
    title: 'Tracks',
    link: Paths.TOP_TRACKS
  },
  [SideBarEnum.artists]: {
    img: artistsImg,
    title: 'Artists',
    link: Paths.TOP_ARTISTS
  }
}

export const sideBarLabelOrder = [
  SideBarEnum.tracks,
  SideBarEnum.artists
]