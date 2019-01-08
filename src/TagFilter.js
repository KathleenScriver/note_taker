import React, { Component } from 'react';
import './TagFilter.css';


export default class TagFilter extends Component {
  render() {
    return (
      <div className="tag-filter">
        <button onClick={this.filterNotes} value="work">Work</button>
        <button onClick={this.filterNotes} value="hobby">Hobby</button>
        <button onClick={this.filterNotes} value="personal">Personal</button>
      </div>
    )
  }
}
