import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Debug from 'debug'
// import { getUsers } from './helpers/api/Users'
import { fetchUsers } from './redux/Users'
import logo from './logo.svg'
import './App.css'

const log = Debug('src:App')

class App extends PureComponent {

  componentWillMount () {

    const {
      getUsers,
    } = this.props
    getUsers()

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({
  users,
})
const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(fetchUsers()),
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(App)
