import users from './Users'
import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  users,
})

const middleware = [
  thunk,
]

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    ...middleware
  )
))

export default store
