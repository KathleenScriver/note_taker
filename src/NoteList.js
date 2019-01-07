import React, { Component } from 'react';
import './NoteList.css';
import Note from './Note'

export default class NoteList extends Component {
  // renderNotes = () => {
  //   <Note name={"Get groceries."}/>
  // }

  render() {
    return (
      <div className='note-list'>
        <Note name="Get groceries." />
      </div>
    )
  }
}
