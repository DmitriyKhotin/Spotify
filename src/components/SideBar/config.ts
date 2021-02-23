import { paths } from '@config/routes'

import artistsImg from './img/artists.svg'
import tracksImg from './img/tracks.svg'

export enum SideBarEnum {
  tracks = 'tracks',
  artists = 'artists',
}

export type SideBarLabel = {
  img: string
  title: string
  link: string
}

export const mapSideBarLabels: Record<SideBarEnum, SideBarLabel> = {
  [SideBarEnum.tracks]: {
    img: tracksImg,
    title: 'Tracks',
    link: paths.TOP_TRACKS,
  },
  [SideBarEnum.artists]: {
    img: artistsImg,
    title: 'Artists',
    link: paths.TOP_ARTISTS,
  },
}

export const sideBarLabelOrder = [SideBarEnum.tracks, SideBarEnum.artists]
