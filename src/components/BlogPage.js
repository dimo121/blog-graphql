import React from 'react';
import BlogItem from './BlogItem';
import EntryItem from './Entryitem';
import { useQuery } from '@apollo/react-hooks';
import { FIND_BLOG } from '../apollo/protocol';

const BlogPage = (props) => {
  const { data, loading, error } = useQuery(FIND_BLOG, {
    variables: {
      blogId: props.match.params.id,
    },
  });

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <div className="page-container">
      <div className="blog-container">
        <BlogItem key={data.blog.id} blog={{ ...data.blog }} />
        {data.blog.entries.map((item) => {
          return <EntryItem key={item.id} entry={item} />;
        })}
      </div>
    </div>
  );
};

export default BlogPage;
