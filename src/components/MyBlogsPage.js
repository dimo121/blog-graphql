import React from 'react';
import BlogItem from './BlogItem';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { config } from '../config/config';
import jwt from 'jsonwebtoken';
import { useMutation } from '@apollo/react-hooks';
import { BLOGS_BY_USER, DELETE_BLOG } from '../apollo/protocol';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const MyBlogsPage = () => {
  const [deleteBlog, blog] = useMutation(DELETE_BLOG);

  const funcDeleteBlog = (deleteBlogId) => {
    deleteBlog({
      variables: {
        deleteBlogId,
      },
    })
      .then((response) => {
        console.log(response);
        refetch();
      })
      .catch((error) => console.log(error));
  };

  const token = localStorage.getItem('jwtoken');

  let decoded;

  if (!token) {
    return <p>You are not signed in</p>;
  } else {
    try {
      decoded = jwt.verify(token, config.jwtSecret);
    } catch (e) {
      console.log(e);
    }
  }

  const { data, loading, error, refetch, networkStatus } = useQuery(
    BLOGS_BY_USER,
    {
      variables: {
        userId: decoded.id,
      },
      notifyOnNetworkStatusChange: true,
    },
  );

  if (networkStatus === 4) return <p>reloading...</p>;

  if (loading)
    return (
      <div className="page-container">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );

  if (error) return <p>error</p>;

  return (
    <div className="page-container">
      <div className="blog-container">
        {data.blogsByUser.map((item) => (
          <div key={item.id}>
            <BlogItem blog={{ ...item }} />
            <button
              className="blog-button delete-button"
              onClick={() => funcDeleteBlog(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlogsPage;
