import React, { Component } from 'react';
import './Note.css';

export default class Note extends Component {
  removeNote = () => {
    this.props.removeNote(this.props.text);
  }

  render() {
    return (
      <div className='note'>
        <p>{this.props.text} || {this.props.tag}</p>
        <button className='remove' onClick={this.removeNote}>X</button>
      </div>
    )
  }
}
