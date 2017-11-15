import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


const initialState = {
  users: [],
}

const reducer = (state = initialState, action) => {
  switch(action.type) {

  default:
    return state

  }
}

const middleware = [
  thunk,
]

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(
    ...middleware
  )
))

export default store
