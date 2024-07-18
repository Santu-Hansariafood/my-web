// components/common/DataFetcher.js
import React, { useState, useEffect } from 'react';

const DataFetcher = ({ url, render }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [url]);

  if (loading) return <p>Loading...</p>;

  return render(data);
};

export default DataFetcher;
