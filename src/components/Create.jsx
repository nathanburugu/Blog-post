/** @format */

import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Create = () => {
  const history = useHistory();
  const [data, setData] = useState({
    title: "",
    body: "",
    author: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-type": "application.json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("new blog added");
      history.push("/");
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Author</Form.Label>
        <Form.Control
          type='text'
          placeholder='Title of blog'
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Blog</Form.Label>
        <Form.Control
          as='textarea'
          rows={3}
          id='body'
          placeholder='Start Your Blog Here'
          name='body'
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Author</Form.Label>
        <Form.Control
          type='text'
          placeholder='Author of the blog'
          name='author'
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Save Blog
      </Button>
    </Form>
  );
};
export default Create;
