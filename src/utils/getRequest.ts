import axios, { AxiosResponse } from 'axios'

import { ApiResp } from './apiTypes'

export const getRequest = async <T>(
  url: string,
  optionalHeaders = {}
): Promise<ApiResp<T, null>> => {
  try {
    const response: AxiosResponse = await axios({
      method: 'get',
      url: url,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        ...optionalHeaders,
      },
    })
    console.log(response)
    return {
      errorCode: null,
      data: response.data,
    }
  } catch (e) {
    return {
      errorCode: e.response.status,
      data: null,
    }
  }
}
