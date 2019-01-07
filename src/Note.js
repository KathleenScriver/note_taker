import React, { Component } from 'react';
import './Note.css';

export default class Note extends Component {
  removeNote = () => {
    this.props.removeNote(this.props.name);
  }

  render() {
    return (
      <div className='note'>
        <p>{this.props.name} || {this.props.tag}</p>
        <button className='remove' onClick={this.removeNote}>X</button>
      </div>
    )
  }
}
