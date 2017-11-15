import { getUsers } from '../helpers/api/Users'

// Action types
const GET_USERS_BEGIN = 'GET_USERS'
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
const GET_USERS_ERROR = 'GET_USERS_ERROR'

const initialState = {
  isFetching: false,
  error: '',
  users: [],
}

// Reducer
const reducer = (state = initialState, action) => {

  switch (action.type) {

  case GET_USERS_BEGIN:
    return {
      ...state,
      isFetching: true,
    }

  case GET_USERS_SUCCESS:
    return {
      ...state,
      isFetching: false,
      users: action.payload,
      error: '',
    }

  case GET_USERS_ERROR:
    return {
      ...state,
      isFetching: false,
      error: action.payload,
      users: initialState.users,
    }

  default:
    return state

  }

}

// Action Creators

export const fetchUsersBegin = () => ({
  type: GET_USERS_BEGIN,
})

export const fetchUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
})

export const fetchUsersError = (error) => ({
  type: GET_USERS_ERROR,
  payload: error,
})

// Async Action Creators

export const fetchUsers = () =>
  dispatch => {
    dispatch(fetchUsersBegin())
    return getUsers()
      .then(users => dispatch(fetchUsersSuccess(users)))
      .catch(error => dispatch(fetchUsersError(error)))
  }

export default reducer
