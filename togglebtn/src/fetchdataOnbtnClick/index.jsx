import React, { useState, useEffect } from "react";

function FetchDataOnClick() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []); // Fetch initial data on component mount

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
    
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const newData = await response.json();
      setData((prevData) => [...prevData, ...newData]); // FetchDataOnClickend new data to existing data
      setPage((prevPage) => prevPage + 1); // Increment page number for next fetch
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}

export default FetchDataOnClick;
