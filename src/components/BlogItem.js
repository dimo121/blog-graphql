import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogItem = (props) => {
  return (
    <React.Fragment>
      <NavLink style={{ textDecoration: 'none' }} to={`/blog/${props.blog.id}`}>
        <div className="item-container">
          <div className="itemUpper">
            <h1>{props.blog.title}</h1>
            <span>{props.blog.createdAt}</span>
          </div>
          <div className="itemInner">
            <p>{props.blog.content}</p>
          </div>
          <div className="itemLower">
            <p>Written by: {props.blog.owner.username}</p>
            <p>Replies: {props.blog.entries.length}</p>
          </div>
        </div>
      </NavLink>
      <NavLink
        to={{
          pathname: '/createentry',
          state: {
            blog_id: props.blog.id,
          },
        }}
      >
        <button className="blog-button">Reply</button>
      </NavLink>
    </React.Fragment>
  );
};

export default BlogItem;
