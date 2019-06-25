// @flow

import 'whatwg-fetch'

const methods: string[] = ['get', 'post', 'put', 'patch', 'delete']
const BASE_URL: string = '/mobstaff-mobile'

type Input = {
  path: string,
  config?: RequestInfo,
  body?: {},
  withBase?: boolean,
  form: boolean,
}

export default class ApiClient {
  constructor() {
    const client: Object = this
    methods.forEach(method => {
      client[method] = ({
        path,
        config = {},
        body,
        withBase = true,
        form = false,
      }: Input): Promise<Response> => {
        config.method = method.toUpperCase()
        config.credentials = 'same-origin'
        if (!form) {
          config.headers = {
            'Content-Type': 'application/json',
            ...config.headers,
          }
          config.body = JSON.stringify(body)
        } else {
          config.body = body
        }

        const token = localStorage.getItem('jwt_token')
        if (token) {
          config.headers = Object.assign(
            { 'X-AUTH-TOKEN': token },
            config.headers,
          )
        }
        path = withBase ? BASE_URL + path : path
        return fetch(path, config)
      }
    })
  }
}
