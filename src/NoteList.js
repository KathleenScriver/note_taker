import React, { Component } from 'react';
import './NoteList.css';
import Note from './Note'

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ['Get groceries', 'Finish project']
    }
  }

  renderNotes = () => {
    return this.state.notes.map(note => (
      <Note name={note} />
    ));
  }

  render() {
    return (
      <div className='note-list'>
        {this.renderNotes()}
      </div>
    )
  }
}
