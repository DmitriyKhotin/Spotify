import { paths } from '@config/routes'

import homeImg from './img/home.svg'
import homeClickedImg from './img/home-clicked.svg'
import searchImg from './img/loupe.svg'

export enum MenuEnum {
  main = 'Главная',
  search = 'Поиск',
}

export type MenuLabel = {
  defaultImg: string
  clickedImg: string
  title: MenuEnum
  link: string
}

export const mapMenuLabels: Record<MenuEnum, MenuLabel> = {
  [MenuEnum.main]: {
    defaultImg: homeImg,
    clickedImg: homeClickedImg,
    title: MenuEnum.main,
    link: paths.ROOT,
  },
  [MenuEnum.search]: {
    defaultImg: searchImg,
    clickedImg: searchImg,
    title: MenuEnum.search,
    link: paths.SEARCH,
  },
}

export const menuLabelOrder = [MenuEnum.main, MenuEnum.search]
