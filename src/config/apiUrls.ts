const userApi = (endpoint: string): string => `https://api.spotify.com/v1/me/${endpoint}`
const userTopApi = (endpoint: string): string => `https://api.spotify.com/v1/me/top/${endpoint}`

export const apiUrls = {
  user: {
    albums: (): string => userApi('albums'),
    playlists: (): string => userApi('playlists'),
    savedTracks: (): string => userApi('tracks'),
    topTracks: (): string => userTopApi('tracks'),
    topArtists: (): string => userTopApi('artists')
  }
}