import EntryFormPage from './EntryFormPage';
import { CREATE_ENTRY } from '../apollo/protocol';
import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

//change to hooks FC with useMutation
const CreateEntry = (props) => {
  const [blog_id, setId] = useState('');
  const [newEntry, entry] = useMutation(CREATE_ENTRY);

  useEffect(() => {
    setId(props.location.state.blog_id);
  }, []);

  return (
    <div className="page-container">
      <div className="create-container">
        <h1>Create entry</h1>
        <EntryFormPage
          onSubmit={(entry) => {
            newEntry({
              variables: {
                createEntryInput: {
                  title: entry.title,
                  content: entry.content,
                  blog_id,
                },
              },
            }).then(() => {
              window.location.replace('/');
            });
          }}
        />
      </div>
    </div>
  );
};

export default CreateEntry;
