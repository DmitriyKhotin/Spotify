import { BaseModelWithImage } from '../extends'

export type ProfileModel = Omit<BaseModelWithImage, 'href'> & {
  product: string
  email: string
}
