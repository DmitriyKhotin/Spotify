import { makeAutoObservable, observable, runInAction } from 'mobx'

import { TrackModel, normalizeTracksModel } from '@store/models'
import { Meta } from '@utils/meta'
import { getRequest } from '@utils/getRequest'
import { StatusCode } from '@utils/apiTypes'
import { apiUrls } from '@config/apiUrls'

export default class SearchStore {
  tracks: TrackModel[] = []
  meta: Meta = Meta.initial
  errorCode: StatusCode | null = null
  constructor() {
    makeAutoObservable(this, {
      tracks: observable,
      meta: observable,
      errorCode: observable,
    })
  }

  async fetch(query: string): Promise<void> {
    if (this.meta === Meta.loading) {
      return
    }

    this.meta = Meta.loading
    this.tracks = []

    const { errorCode, data } = await getRequest<any>(
      `${apiUrls.search()}?q=${query}&type=track`
    )

    if (errorCode) {
      this.meta = Meta.error
      this.errorCode = errorCode
      return
    }

    runInAction(() => {
      this.meta = Meta.success
      this.errorCode = null
      this.tracks = normalizeTracksModel(data.tracks.items)
    })
  }

  setTracksVoid() {
    this.tracks = []
  }
}
