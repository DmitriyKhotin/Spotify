import {BaseModel} from "./extends";

export type BaseApiModel = {
  id: string
  href: string
  name: string
  type: string
  external_urls: {
    spotify: string | null
  }
}

export const normalizeBaseModel = (
  data: BaseApiModel
): BaseModel => ({
  id: data.id,
  name: data.name,
  spotify: data.external_urls.spotify,
  href: data.href,
  type: data.type
})