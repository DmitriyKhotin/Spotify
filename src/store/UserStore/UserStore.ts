import {action, IReactionDisposer, makeAutoObservable, observable, reaction, runInAction,} from 'mobx'
import {
  ArtistApiModel,
  ArtistModel, BaseApiModelWithImage, BaseModelWithImage,
  normalizeAlbumsModel, normalizeArtistsModel,
  normalizePlaylistsModel, normalizeProfileModel, normalizeTrackModel, PlaylistApiModel,
  ProfileApiModel,
  ProfileModel, ResponseAlbumApiModel, TrackApiModel,
  TrackModel
} from '../models'
import {Meta} from '@utils/meta'
import {getRequest} from '@utils/getRequest'
import {apiUrls} from '@config/apiUrls'
import {StatusCode} from '@utils/apiTypes'

const initialProfile = {
  id: '',
  name: '',
  product: '',
  images: [],
  email: '',
  spotify: '',
  type: ''
}

type Items<T> = {
  items: T
}

export default class UserStore {

  profile: ProfileModel = initialProfile
  albums: BaseModelWithImage[] =[]
  playlists: BaseModelWithImage[] = []
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
      errorCode: observable,
      fetch: action.bound,
      setTopArtists: action.bound,
      setTopTracks: action.bound,
      setPlaylist: action.bound,
      setAlbums: action.bound,
      setProfile: action.bound,
      fetchAlbums: action.bound,
      fetchPlaylists: action.bound,
      fetchProfile: action.bound,
      fetchTopTracks: action.bound,
      fetchTopArtists: action.bound
    })
  }

  async fetch<T>(callback: (value?: T) => void , url: string, force: boolean = false): Promise<void> {

    if (!force && (this.meta === Meta.loading)) {
      return
    }

    this.meta = Meta.loading;
    callback()

    const { errorCode, data } = await getRequest<T>(url)

    if (errorCode) {
      this.meta = Meta.error
      this.errorCode = errorCode
      return
    }

    runInAction(() => {
      this.meta = Meta.success
      this.errorCode = null
      callback(data!)
    })
  }

  setPlaylist(data?: Items<BaseApiModelWithImage[]>): void {
    !data ? this.playlists = [] : this.playlists = normalizePlaylistsModel(data.items)
  }

  setAlbums(data?: Items<ResponseAlbumApiModel[]>): void {
    !data ? this.albums = [] : this.albums = normalizeAlbumsModel(data.items)
  }

  setTopTracks(data?: Items<TrackApiModel[]>): void {
    !data ? this.topTracks = [] : this.topTracks = normalizeTrackModel(data.items)
  }

  setTopArtists(data?: Items<ArtistApiModel[]>): void {
    !data ? this.topArtists = [] : this.topArtists = normalizeArtistsModel(data.items)
  }

  setProfile(data?: ProfileApiModel): void {
    !data ? this.profile = initialProfile : this.profile = normalizeProfileModel(data)
  }

  async fetchPlaylists(force: boolean = false): Promise<void> {
    await this.fetch<Items<PlaylistApiModel[]>>(this.setPlaylist.bind(this), apiUrls.user.playlists(), force)
  }

  async fetchAlbums(force: boolean = false): Promise<void> {
    await this.fetch<Items<ResponseAlbumApiModel[]>>(this.setAlbums.bind(this), apiUrls.user.albums(), force)
  }

  async fetchTopTracks(force: boolean = false): Promise<void> {
    await this.fetch<Items<TrackApiModel[]>>(this.setTopTracks.bind(this), apiUrls.user.topTracks(), force)
  }

  async fetchTopArtists(force: boolean = false): Promise<void> {
    await this.fetch<Items<ArtistApiModel[]>>(this.setTopArtists.bind(this), apiUrls.user.topArtists(), force)
  }

  async fetchProfile(force: boolean = false): Promise<void> {
    await this.fetch<ProfileApiModel>(this.setProfile.bind(this), apiUrls.user.profile(), force)
  }

  metaChangedReaction: IReactionDisposer = reaction(
    () => this.meta,
    (value) => {
      console.log(value)
    }
  )
}