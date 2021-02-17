export const paths = {
  LOGIN: '/login',
  ROOT: '/',
  TOP_TRACKS: '/top/tracks',
  TOP_ARTISTS: '/top/artists',
  ALBUM: {
    mask: '/album/:id',
    create: (id: string) => `/album/${id}`
  }
}