import React, { Component } from 'react';
import './TagFilter.css';


export default class TagFilter extends Component {
  filterNotes = (event) => {
    const filterBy = event.target.value;
    this.props.filterNotes(filterBy);
  }

  render() {
    return (
      <div className="tag-filter">
        <button onClick={this.filterNotes} value="work">Work</button>
        <button onClick={this.filterNotes} value="hobby">Hobby</button>
        <button onClick={this.filterNotes} value="personal">Personal</button>
        <button onClick={this.filterNotes} value="all">All</button>
      </div>
    )
  }
}
