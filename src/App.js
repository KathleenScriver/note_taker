import React, { Component } from 'react';
import './App.css';
import NoteList from './NoteList.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: []
    }
  }


  render() {
    return (
      <div className="App">
        <NoteList />
      </div>
    )
  }
}

export default App;
