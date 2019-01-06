import React, { Component } from 'react';

export default class NoteForm extends Component {
  render() {
    return (
      <form>
        <input type='textarea'></input>
        <button type='submit'>Add Note</button>
      </form>
    )
  }
}
