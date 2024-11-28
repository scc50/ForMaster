import React, { useState, useEffect } from 'react';

function Hooks() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a data fetch from an API
    setTimeout(() => {
      setData({ message: "Data fetched successfully!" });
      setLoading(false);
    }, 2000);
  }, []);  // Empty dependency array ensures this runs only once after the component mounts

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>{data.message}</p>}
    </div>
  );
}

export default Hooks;
  