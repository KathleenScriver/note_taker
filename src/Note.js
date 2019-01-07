import React, { Component } from 'react';
import './Note.css';

export default class Note extends Component {
  removeNote = () => {
    this.props.removeNote(this.props.name);
  }

  render() {
    return (
      <div className='note'>
        {this.props.name}
        <button onClick={this.removeNote}>X</button>
      </div>
    )
  }
}
