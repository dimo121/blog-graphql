import React, { useState } from 'react';

const EntryFormPage = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError('Both title and content are required');
    } else {
      props.onSubmit({
        title,
        content,
      });
    }
  };

  return (
    <div className="entry-form-container">
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          placeholder="..."
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <br />
        <br />
        <label htmlFor="content">Content:</label>
        <br />
        <textarea
          type="text"
          id="content"
          name="content"
          cols="120"
          rows="20"
          placeholder="Enter content here"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <br />
        <input className="button" type="submit" value="Save" />
      </form>
      {error && <p className="entry-error">Error : {error}</p>}
    </div>
  );
};

export default EntryFormPage;
