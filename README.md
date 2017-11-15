# Modular Example

## 1) setup / helpers

### Logging
- `yarn add -D debug`

```javascript
// App.js

import Debug from 'debug'

const log = Debug('src:App')

// In the browser console

> localStorage.debug='src:*'

// Refresh

```

### Fetch Helpers
- grab a fetch polyfill
- `yarn add fetch-ponyfill`

```javascript
// src/helpers/api/index.js

// write fetch helpers

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
```

## 2) normalize API responses

### use lodash to normalize each response object

```javascript
// src/helpers/api/index.js

import { reduce, camelCase } from 'lodash'

const parseResponse = ({ results }) =>
  results.map((result) =>
    reduce(result, (accumulator, value, key) =>
      ({
        ...accumulator,
        [camelCase(key)]: value,
      }),
    {})
  )
```

### abstract out the getUsers helper

```javascript
import { get } from './'
import Debug from 'debug'

const log = Debug('src:helpers:api:Users')

export const getUsers = () =>
  get('https://randomuser.me/api?results=25')
    .then(res => log(res))
```

### test it in the App component

```javascript

export default class App extends PureComponent {
  componentWillMount () {
    getUsers()
  }
  ...
}
```

## 4) Redux

### installed deps

`yarn add react-redux redux redux-thunk redux-devtools-extension`

### write our Users redux module
- reducer
- action types
- action creator
