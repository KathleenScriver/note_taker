import React, { Component } from 'react';
import './Note.css';

export default class Note extends Component {
  render() {
    return (
      <div className='note'>
        <li key={this.props.name} value={this.props.name}>
          {this.props.name}
        </li>
      </div>
    )
  }
}
