import {action, IReactionDisposer, makeAutoObservable, observable, reaction, runInAction,} from 'mobx'
import {
  AlbumModel,
  ArtistModel,
  normalizeAlbumModel,
  normalizePlaylistsModel, normalizeProfileModel, normalizeTrackModel,
  PlaylistModel,
  ProfileModel,
  TrackModel
} from "../models";
import {Meta} from "@utils/meta";
import {getRequest} from "@utils/getRequest";
import {apiUrls} from "@config/apiUrls";
import {StatusCode} from "@utils/apiTypes";

const initialProfile = {
  id: '',
  name: '',
  product: '',
  images: [],
  email: '',
  href: '',
  spotify: '',
  type: ''
}

export default class UserStore {

  profile: ProfileModel = initialProfile
  albums: AlbumModel[] =[]
  playlists: PlaylistModel[] = []
  topTracks: TrackModel[] = []
  topArtists: ArtistModel[] = []
  meta: Meta = Meta.initial
  errorCode: StatusCode | null = null

  constructor() {
    makeAutoObservable(this, {
      profile: observable,
      albums: observable,
      playlists: observable,
      topTracks: observable,
      topArtists: observable,
      meta: observable,
      fetchAlbums: action.bound,
      fetchPlaylists: action.bound,
      fetchProfile: action.bound,
      fetchTopTracks: action.bound
    })
  }

  async fetch(callback: (value: any) => void , url: string, force: boolean = false): Promise<void> {

    if (!force && (this.meta === Meta.loading || this.meta === Meta.success)) {
      return
    }

    this.meta = Meta.loading;
    callback('')

    const { isError, data } = await getRequest(url)

    if (isError) {
      this.meta = Meta.error
      this.errorCode = isError
      return
    }

    runInAction(() => {
      this.meta = Meta.success
      this.errorCode = null
      callback(data)
    })
  }

  setPlaylist(data: any | void): void {
    if (!data)
      this.playlists = []
    else
      this.playlists = normalizePlaylistsModel(data.items)
  }

  setAlbums(data: any | void): void {
    if (!data)
      this.albums = []
    else
      this.albums = normalizeAlbumModel(data.items)
  }

  setTopTracks(data: any | void): void {
    console.log(data)
    if (!data)
      this.topTracks = []
    else
      this.topTracks = normalizeTrackModel(data.items)
  }

  setProfile(data: any | void): void {
    if (!data)
      this.profile = initialProfile
    else
      this.profile = normalizeProfileModel(data)
  }

  async fetchPlaylists(force: boolean = false): Promise<void> {
    // @ts-ignore
    this.fetch(this.setPlaylist.bind(this), apiUrls.user.playlists(), force)
  }

  async fetchAlbums(force: boolean = false): Promise<void> {
    // @ts-ignore
    this.fetch(this.setAlbums.bind(this), apiUrls.user.albums(), force)
  }

  async fetchTopTracks(force: boolean = false): Promise<void> {
    console.log('fetchTopTRacks')
    // @ts-ignore
    this.fetch(this.setTopTracks.bind(this), apiUrls.user.topTracks(), force)
  }

  async fetchProfile(force: boolean = false): Promise<void> {
    this.fetch(this.setProfile.bind(this), apiUrls.user.profile(), force)
  }

  metaChangedReaction: IReactionDisposer = reaction(
    () => this.meta,
    (value) => {
      console.log(value)
    }
  )
}