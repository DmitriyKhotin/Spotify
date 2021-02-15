const link = 'https://api.spotify.com/v1/me'

const userApi = (endpoint: string): string => `${link}${endpoint}`
const userTopApi = (endpoint: string): string => `${link}/top${endpoint}`

export const apiUrls = {
  user: {
    albums: (): string => userApi('/albums'),
    playlists: (): string => userApi('/playlists'),
    profile: (): string => userApi(''),
    topTracks: (): string => userTopApi('/tracks'),
    topArtists: (): string => userTopApi('/artists')
  }
}