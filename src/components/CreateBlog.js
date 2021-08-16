import React from 'react';
import EntryFormPage from './EntryFormPage';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_BLOG } from '../apollo/protocol';

const CreateBlog = () => {
  const [newBlog, blog] = useMutation(CREATE_BLOG);

  return (
    <div className="page-container">
      <div className="create-container">
        <h1>Create blog</h1>
        <EntryFormPage
          onSubmit={(blogEntry) => {
            newBlog({
              variables: {
                createBlogInput: {
                  title: blogEntry.title,
                  content: blogEntry.content,
                },
              },
            }).then((response) => {
              window.location.replace('/');
            });
          }}
        />
      </div>
    </div>
  );
};

export default CreateBlog;
