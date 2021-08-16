import React from "react";
import BlogItem from "./BlogItem";
import EntryItem from "./EntryItem";
import { useQuery } from "@apollo/react-hooks";
import { FIND_BLOG } from "../apollo/protocol";
import { db_mock } from "../apollo/db_mock";

const BlogPage = (props) => {
  const {
    data = { blog: {} },
    loading,
    error,
  } = useQuery(FIND_BLOG, {
    variables: {
      blogId: props.match.params.id,
    },
  });

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    data.blog = db_mock[props.match.params.id - 1];
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
