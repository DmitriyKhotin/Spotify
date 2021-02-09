import artistsImg from './img/artists.svg'
import tracksImg from './img/tracks.svg'

export enum SideBarEnum {
  tracks = 'tracks',
  artists = 'artists'
}

export type SideBarLabel = {
  img: string
  title: string
}

export const mapSideBarLabels: Record<SideBarEnum, SideBarLabel> = {
  [SideBarEnum.tracks]: {
    img: tracksImg,
    title: 'Tracks'
  },
  [SideBarEnum.artists]: {
    img: artistsImg,
    title: 'Artists'
  }
}

export const sideBarLabelOrder = [
  SideBarEnum.tracks,
  SideBarEnum.artists
]