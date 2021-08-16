import React from 'react';

export default (props) => (
  <div className="list-filter-container">
    <input
      className="search-bar"
      type="text"
      value={props.text}
      onChange={(e) => props.setText(e.target.value)}
    />
    <span>
      <select
        className="search-pulldown"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      >
        <option value="Title">Title</option>
        <option value="Content">Content</option>
      </select>
    </span>
  </div>
);
