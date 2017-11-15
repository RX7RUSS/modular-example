import { get } from './'
import Debug from 'debug'

const log = Debug('src:helpers:api:Users')

export const getUsers = () =>
  get('https://randomuser.me/api?results=25')
    .then(res => log(res))
