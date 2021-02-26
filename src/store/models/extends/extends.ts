import { ImagesApiModel } from '../imagesApi'

export type BaseModel = {
  id: string
  href: string
  name: string
  type: string
  spotify: string | null
}

export type BaseModelWithImage = BaseModel & {
  images: ImagesApiModel[]
  color: Promise<string>
}
