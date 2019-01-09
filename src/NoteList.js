import React, { Component } from 'react';
import './NoteList.css';
import Note from './Note'
import AddNote from './AddNote'
import TagFilter from './TagFilter'

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      notes: [],
      filteredNotes: [],
      error: false
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
    const notes = (this.state.filteredNotes.length ? this.state.filteredNotes : this.state.notes);
    if (this.state.isLoading) {
      return (<p>"Loading..."</p>)
    }

    return (
      notes.map(note => (
        <Note
          key={note.todoDescription}
          text={note.todoDescription}
          tag={note.tag}
          createdOn={note.created}
          removeNote={this.removeNote}
        />
      ))
    )
  }

  filterNotes = (filterBy) => {
    const { notes } = this.state
    if (filterBy === "all") {
      this.setState({ filteredNotes: [] })
    } else {
      const filteredNotes = notes.filter(note => (
        note.tag === filterBy
      ));
      this.setState({ filteredNotes: [...filteredNotes] })
    }
  }

  addNote =  async (newNoteText, newNoteTag) => {
    const newNote = { todoDescription: newNoteText, tag: newNoteTag, created: new Date() }

    try {
      const response = await fetch('https://cq31v4skne.execute-api.us-east-2.amazonaws.com/beta/todos', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newNote)
      })
      if( response.status === 200 ){
        this.setState({
          notes: [...this.state.notes, newNote],
          error: false
        })
        console.log(this.state.notes)
      } else {
        throw Error
      }

    } catch (error) {
      console.log(error.message)
      this.setState({
        error: true
      })
    }
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
          <TagFilter filterNotes={this.filterNotes}/>
          {this.renderNotes()}
        </div>
      </div>
    )
  }
}
