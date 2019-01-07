import React, { Component } from 'react';
import './Note.css';

export default class Note extends Component {
  removeNote = () => {
    this.props.removeNote(this.props.text);
  }

  render() {
    const date = new Date(this.props.createdOn)

    return (
      <div className='note'>
        <p>{this.props.text}</p>
        <p>{this.props.tag}</p>
        <p>Created: {date.getMonth() + 1}/{date.getDate()}</p>
        <button className='remove' onClick={this.removeNote}>X</button>
      </div>
    )
  }
}
