import React, { Component } from 'react';
import './NoteList.css';
import Note from './Note'
import AddNote from './AddNote'

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      notes: [],
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })
    try {
      const response = await fetch(`https://cq31v4skne.execute-api.us-east-2.amazonaws.com/beta/todos?searchValue=all`)
      if (response.ok) {
        const data = await response.json()
        this.setState({ notes: data, isLoading: false })
      } else {
        throw new Error('Something went wrong, please try again.')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  renderNotes = () => {
    const { notes } = this.state;
    if (this.state.isLoading) {
      return (<p>"Loading..."</p>)
    }

    return (
      notes.map(note => (
        <Note
          key={note.todoDescription}
          text={note.todoDescription}
          tag={note.tag}
          removeNote={this.removeNote}
        />
      ))
    )
  }

  addNote = (newNoteText, newNoteTag) => {
    const newNote = { text: newNoteText, tag: newNoteTag }
    this.setState({ notes: [...this.state.notes, newNote] });
  }

  removeNote = (removedNote) => {
    const { notes } = this.state
    const updatedNotes = notes.filter(note => (
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
