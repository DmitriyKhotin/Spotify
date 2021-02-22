import {action, IReactionDisposer, makeAutoObservable, observable, reaction, runInAction,} from 'mobx'
import {
  AlbumApiModel,
  AlbumModel,
  ArtistApiModel,
  ArtistModel, BaseApiModelWithImage, BaseModelWithImage, normalizeAlbumModel,
  normalizeAlbumsModel, normalizeArtistsModel, normalizePlaylistModel,
  normalizePlaylistsModel, normalizeProfileModel, normalizeTracksModel, PlaylistApiModel, PlaylistModel,
  ProfileApiModel,
  ProfileModel, ResponseAlbumApiModel, TrackApiModel,
  TrackModel
} from '../models'
import {Meta} from '@utils/meta'
import {getRequest} from '@utils/getRequest'
import {apiUrls} from '@config/apiUrls'
import {StatusCode} from '@utils/apiTypes'
import { ApiResp } from '../../utils/apiTypes'

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
      fetchTopArtists: action.bound,
      fetchAlbum: action.bound,
      fetchPlaylist: action.bound
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
    if (data)
      console.log(normalizeTracksModel(data.items))
    !data ? this.topTracks = [] : this.topTracks = normalizeTracksModel(data.items)
  }

  setTopArtists(data?: Items<ArtistApiModel[]>): void {
    if (data)
      console.log(normalizeArtistsModel(data.items))
    !data ? this.topArtists = [] : this.topArtists = normalizeArtistsModel(data.items)
  }

  setProfile(data?: ProfileApiModel): void {
    if (data)
      console.log(normalizeProfileModel(data))
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

  async fetchAlbum(path: string): Promise<AlbumModel | void> {
    if ( this.meta === Meta.loading) {
      return
    }

    this.meta = Meta.loading;

    const { errorCode, data } = await getRequest<AlbumApiModel>(apiUrls.model(path))

    if (errorCode) {
      this.meta = Meta.error
      this.errorCode = errorCode
      return
    }

    runInAction(() => {
      this.meta = Meta.success
      this.errorCode = null
    })

    return normalizeAlbumModel(data!)
  }

  async fetchPlaylist(path: string): Promise<PlaylistModel | void> {
    if ( this.meta === Meta.loading) {
      return
    }

    this.meta = Meta.loading;

    const { errorCode, data } = await getRequest<PlaylistApiModel>(apiUrls.model(path))

    if (errorCode) {
      this.meta = Meta.error
      this.errorCode = errorCode
      return
    }

    runInAction(() => {
      this.meta = Meta.success
      this.errorCode = null
    })

    return normalizePlaylistModel(data!)
  }

  metaChangedReaction: IReactionDisposer = reaction(
    () => this.meta,
    (value) => {
      console.log(value)
    }
  )
}