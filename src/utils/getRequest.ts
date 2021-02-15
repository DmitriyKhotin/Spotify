import axios, {AxiosResponse} from "axios";

import {ApiResp} from "./apiTypes";


// const getNormalizedData = (response: AxiosResponse, type: ApiEnum) => {
//   switch (type) {
//     case ApiEnum.albums:
//       return normalizeAlbumModel(response.data.items)
//     case ApiEnum.playlists:
//       return normalizePlaylistsModel(response.data.items)
//     case ApiEnum.tracks:
//       return normalizeTrackModel(response.data.items)
//     case ApiEnum.artists:
//       return normalizeArtistsModel(response.data.items)
//     case ApiEnum.profile:
//       return normalizeProfileModel(response.data)
//   }
// }

export const getRequest = async (url: string, optionalHeaders = {}): Promise<ApiResp<any, null>> => {
  try {
    const response: AxiosResponse  = await axios({
      method: 'get',
      url: url,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        ...optionalHeaders
      }
    })
    console.log(response)
    return {
      isError: null,
      data: response.data
    }
  }
  catch (e) {
    console.log(e.response)
    return {
      isError: e.response.status,
      data: null
    }
  }
}