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
        <button onClick={this.filterNotes} value="work" className="work">Work</button>
        <button onClick={this.filterNotes} value="hobby" className="hobby">Hobby</button>
        <button onClick={this.filterNotes} value="personal" className="personal">Personal</button>
        <button onClick={this.filterNotes} value="all" className="all">All</button>
        <button onClick={this.filterNotes} value="recent" className="recent">Recent</button>
        <button onClick={this.filterNotes} value="oldest" className="oldest">Oldest</button>
      </div>
    )
  }
}
