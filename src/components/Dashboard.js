import BlogItem from "./BlogItem";
import EntryListFilter from "./EntryListFilter";
import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { useQuery } from "@apollo/react-hooks";
import { LOAD_BLOGS } from "../apollo/protocol";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { db_mock } from "../apollo/db_mock";

const Dashboard = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("Title");
  const [page, setPage] = useState(1);

  const filterBlogs = (blogs) => {
    const end = page * 5;
    const start = end - 5;
    const result = [];

    for (let i = start; i < end; i++) {
      if (blogs[i]) result.push(blogs[i]);
    }

    return result;
  };

  const { data = { blogs: [] }, loading, error } = useQuery(LOAD_BLOGS);

  if (loading) {
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
  }

  let argBlogs = []; //required for page numbers

  if (error) {
    data.blogs = db_mock;
  }

  search === "Title"
    ? (argBlogs = data.blogs.filter((item) => item.title.includes(text)))
    : (argBlogs = data.blogs.filter((item) => item.content.includes(text)));

  const resultBlogs = filterBlogs(argBlogs); //required for display

  return (
    <div className="page-container">
      <EntryListFilter
        text={text}
        search={search}
        setText={setText}
        setSearch={setSearch}
      />
      <div className="blog-container">
        {resultBlogs.map((item) => (
          <BlogItem key={item.id} blog={{ ...item }} />
        ))}
        <div className="page-numbers">
          {[...Array(Math.ceil(argBlogs.length / 5))].map((val, idx) => (
            <button
              key={idx}
              className="page-button"
              onClick={() => setPage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
