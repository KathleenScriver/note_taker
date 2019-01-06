import React, { Component } from 'react';

export default class NoteList extends Component {
  render() {
    return (
      <div className="note-list">
        <div className="new-note">
          <form>
            <input type='textarea' />
            <button type='submit'>Add Note</button>
          </form>
        </div>
      </div>
    )
  }
}
