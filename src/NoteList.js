import React, { Component } from 'react';
import './NoteList.css';
import Note from './Note'
import AddNote from './AddNote'

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        { text: 'Get groceries', tag: 'personal' },
        { text: 'Finish project', tag: 'work' },
        { text: 'Kayak with kids', tag: 'hobby' }
      ]
    }
  }

  renderNotes = () => {
    return this.state.notes.map(note => (
      <Note
        key={note.text}
        text={note.text}
        tag={note.tag}
        removeNote={this.removeNote}
      />
    ));
  }

  addNote = (newNoteText, newNoteTag) => {
    const newNote = { text: newNoteText, tag: newNoteTag }
    this.setState({ notes: [...this.state.notes, newNote] });
  }

  removeNote = (removedNote) => {
    const updatedNotes = this.state.notes.filter(note => (
      note.text !== removedNote
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
