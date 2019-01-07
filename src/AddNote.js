import React, { Component } from 'react';
import './AddNote.css';

export default class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      noteTag: ''
    }
  }

  updateNoteText = (event) => {
    this.setState({ noteText: event.target.value });
  }

  updateNoteTag = (event) => {
    this.setState({ noteTag: event.target.value })
  }

  addNote = () => {
    this.props.addNote(this.state.noteText, this.state.noteTag);
    this.setState({ noteText: '' });
    this.setState({ noteTag: '' });
  }

  render() {
    return (
      <div className="add-note">
        <h1>Add a Note</h1>
        <textarea
          type='text'
          max='250'
          onChange={this.updateNoteText}
          value={this.state.noteText}
        />
        <select
          className='tag-list'
          onChange={this.updateNoteTag}
          required
        >
          <option value='' default>Select Tag</option>
          <option value='hobby'>Hobby</option>
          <option value='work'>Work</option>
          <option value='personal'>Personal</option>
        </select>
        <button onClick={this.addNote}>Add Note</button>
      </div>
    )
  }
}
