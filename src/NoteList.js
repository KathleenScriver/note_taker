import React, { Component } from 'react';
import './NoteList.css';
import Note from './Note'
import AddNote from './AddNote'

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ['Get groceries', 'Finish project', 'Do Stuff']
    }
  }

  renderNotes = () => {
    return this.state.notes.map(note => (
      <Note
        key={note}
        name={note}
        removeNote={this.removeNote}
      />
    ));
  }

  addNote = (newNote) => {
    this.setState({ notes: [...this.state.notes, newNote] });
  }

  removeNote = (removedNote) => {
    const updatedNotes = this.state.notes.filter(note => (
      note !== removedNote
    ))
    this.setState({ notes: updatedNotes })
  }

  render() {
    return (
      <div className='main-note-display'>

        <AddNote addNote={this.addNote}/>

        <div className='note-list'>
          <h1>Notes</h1>
          {this.renderNotes()}
        </div>
      </div>
    )
  }
}
