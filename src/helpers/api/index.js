import FetchPonyFill from 'fetch-ponyfill'
import Debug from 'debug'

const log = Debug('src:helpers:api')

const parseResponse = (response) => log(response)
const parseError = (error) => log(error)

const {
  fetch,
} = FetchPonyFill()

export const get = (url, params) =>
  fetch(url, params)
    .then(res => res.json())
    .then(res => parseResponse(res))
    .catch(error => parseError(error))

export const post = (url, params) =>
  fetch(url, {
    ...params,
    method: 'POST',
  })
    .then(res => res.json())
    .then(res => parseResponse(res))
    .catch(error => parseError(error))
