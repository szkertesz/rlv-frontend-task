import axios, { AxiosRequestConfig } from 'axios'
import { IResponseData, ITokenResponse } from './client.interface'

// base axios instance
export const client = axios.create({
  baseURL: import.meta.env.VITE_RLV_BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
})

// a small API for client requests
export const clientRequest = async <T>(
  config: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await client(config)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getToken = async (): Promise<ITokenResponse> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/token',
    headers: {
      username: import.meta.env.VITE_RLV_USER,
      password: import.meta.env.VITE_RLV_PASSWORD,
    },
  }
  return await clientRequest<ITokenResponse>(config)
}

export const getData = async (): Promise<IResponseData[]> => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: '/affairs',
    data: {
      query: `query {
                    getData {
                      affairs
                      gender
                      age
                      yearsmarried
                      children
                      religiousness
                      education
                      occupation
                      rating
                    }
                }`,
    },
    transformResponse: [
      function (data) {
        const json = JSON.parse(data)
        data = json.data.getData
        return data
      },
    ],
  }

  return await clientRequest<IResponseData[]>(config)
}
