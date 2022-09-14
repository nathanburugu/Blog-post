/** @format */

import React from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {
  const myBlogs = props.blog;
  return (
    <div className='blog-list'>
      {myBlogs.map((blog) => (
        <div className='preview' key={blog.id}>
          <Link to={`./blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
            <p>Done by: {blog.author}</p>
          </Link>

          {/* <button onClick={()=>handleDelete(blog.id)}>Delete</button>
                    <button onClick={changeName} >Change Name </button>
                    <p>{name}</p> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
