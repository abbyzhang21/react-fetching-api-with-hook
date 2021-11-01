import React, { useState, useEffect } from 'react';
import './style.css';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const [item] = data.results;
    setData(item);
    setLoading(false);
  }, []);
  return { data, loading };
};
export default function App() {
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch('https://api.randomuser.me/');
  return (
    <div>
      <h1>Fetching Data with React Hook</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      {loading ? <div>Loading ... </div> : <div>{data.name.first}</div>}
    </div>
  );
}
