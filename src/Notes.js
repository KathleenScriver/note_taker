import React, { Component } from 'react';
import './Notes.css'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

export default class Notes extends Component {
  render() {
    return (
      <div className='note-main-page'>
        <div className='new-note'>
          <NoteForm />
        </div>

        <div className='note-list'>
          <NoteList />
        </div>
      </div>
    )
  }
}
