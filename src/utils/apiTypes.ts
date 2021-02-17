export enum StatusCode {
  badRequest = 400,
  unauthorized = 401,
  notFound = 404
}

export type ApiResp<SuccessData = any, ErrorData = any> =
  | {
  errorCode: null;
  data: SuccessData;
}
  | {
  errorCode: StatusCode;
  data: ErrorData;
}

export enum ApiEnum {
  albums = 'albums',
  playlists = 'playlists',
  tracks = 'tracks',
  artists = 'artists',
  profile = 'profile'
}