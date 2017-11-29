import { createSelector } from 'reselect'

// 1
const getUsers = state => state.users.users

const colorByTitle = title => {

  switch (title.toLowerCase()) {
  case 'miss':
    return 'cornsilk'
  case 'mr':
    return 'magenta'
  case 'mrs':
    return 'papayawhip'
  case 'madame':
  case 'monsieur':
    return 'chartreuse'
  default:
    return 'black'
  }

}

// 2
const getUsersByCity = createSelector(
  getUsers,
  users => users.map(({ name }) => ({
    name: {
      ...name,
      title: name.title.toUpperCase(),
      color: colorByTitle(name.title),
    },
  }))
)

export default getUsersByCity
