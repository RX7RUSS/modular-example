import React, { Component } from 'react'
import Debug from 'debug'
import { get } from './helpers/api'
import logo from './logo.svg'
import './App.css'

const log = Debug('src:App')

class App extends Component {

  componentWillMount () {
    get('https://randomuser.me/api?results=25')
  }

  render() {
    log('here')
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

export default App
