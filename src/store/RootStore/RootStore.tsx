import { makeAutoObservable, observable } from 'mobx'

import UserStore from './UserStore'
import SearchStore from './SearchStore'

export default class RootStore {
  userStore: UserStore
  searchStore: SearchStore

  constructor() {
    this.userStore = new UserStore()
    this.searchStore = new SearchStore()
    makeAutoObservable(this, {
      userStore: observable,
      searchStore: observable,
    })
  }
}
