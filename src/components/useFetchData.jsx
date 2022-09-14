/** @format */

import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [error, setError] = useState(null);
  const [myBlogs, setMyblogs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error("Error Connecting to the server");
        return res.json();
      })
      .then((data) => {
        setMyblogs(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      }, 1000);
  }, [url]);

  return { myBlogs, loading, error };
};

export default useFetchData;
