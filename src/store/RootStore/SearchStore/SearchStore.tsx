import { makeAutoObservable, observable, runInAction, toJS } from 'mobx'

import { Meta } from '../../../utils/meta'
import { getRequest } from '../../../utils/getRequest'
import { StatusCode } from '../../../utils/apiTypes'

export default class SearchStore {
  //@ts-ignore
  tracks
  meta: Meta = Meta.initial
  errorCode: StatusCode | null = null
  constructor() {
    makeAutoObservable(this, {
      tracks: observable,
      meta: observable,
      errorCode: observable,
    })
  }

  async fetch(url: string): Promise<void> {
    if (this.meta === Meta.loading) {
      return
    }
    console.log(url)
    this.meta = Meta.loading
    this.tracks = []

    const { errorCode, data } = await getRequest<any>(url)

    if (errorCode) {
      this.meta = Meta.error
      this.errorCode = errorCode
      return
    }

    runInAction(() => {
      this.meta = Meta.success
      this.errorCode = null
      console.log(toJS(data))
    })
  }
}
