import { BaseModelWithImage } from '../extends'

export type ProfileModel = Omit<BaseModelWithImage, 'color'> & {
  product: string
  email: string
}
