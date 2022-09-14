/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "./useFetchData";

const BlogDetails = () => {
  const { id } = useParams();
  const { myBlogs, error, loading } = useFetchData(
    "http://localhost:8000/blogs/" + id
  );
  return (
    <div className='blog-details'>
      {error && <div>{error}</div>}
      {loading && <div>Loading</div>}
      {myBlogs && (
        <article>
          <h5>{myBlogs.title}</h5>
          <p>
            Done by : <span> {myBlogs.author}</span>{" "}
          </p>
          <div id='bolog'>{myBlogs.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
