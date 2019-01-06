import React, { Component } from 'react';

export default class NoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteText: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      noteText: event.target.value
    });
  }

  render() {
    return(
      <div>
        Your new note:
        <input
          type='textarea'
          value={this.state.noteText}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
