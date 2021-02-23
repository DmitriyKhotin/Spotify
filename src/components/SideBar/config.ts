import { paths } from '@config/routes'

import homeImg from './img/home.svg'
import homeClickedImg from './img/home-clicked.svg'
import searchImg from './img/loupe.svg'

export enum SideBarEnum {
  main = 'Главная',
  search = 'Поиск',
}

export type SideBarLabel = {
  defaultImg: string
  clickedImg: string
  title: SideBarEnum
  link: string
}

export const mapSideBarLabels: Record<SideBarEnum, SideBarLabel> = {
  [SideBarEnum.main]: {
    defaultImg: homeImg,
    clickedImg: homeClickedImg,
    title: SideBarEnum.main,
    link: paths.ROOT,
  },
  [SideBarEnum.search]: {
    defaultImg: searchImg,
    clickedImg: searchImg,
    title: SideBarEnum.search,
    link: paths.SEARCH,
  },
}

export const sideBarLabelOrder = [SideBarEnum.main, SideBarEnum.search]
