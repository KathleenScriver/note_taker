import React, { Component } from 'react';
import './Note.css';

export default class Note extends Component {
  render() {
    return (
      <div className='note'>
        {this.props.name}
      </div>
    )
  }
}
