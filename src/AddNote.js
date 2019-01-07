import React, { Component } from 'react';
import './AddNote.css';

export default class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: ''
    }
  }

  updateNote = (event) => {
    this.setState({ noteText: event.target.value });
  }

  addNote = () => {
    this.props.addNote(this.state.noteText);
    this.setState({ noteText: '' });
  }

  render() {
    return (
      <div className="add-note">
        <h1>Add a Note</h1>
        <textarea
          type='text'
          max='250'
          onChange={this.updateNote}
          value={this.state.noteText}
        />
        <button onClick={this.addNote}>Add Note</button>
      </div>
    )
  }
}
