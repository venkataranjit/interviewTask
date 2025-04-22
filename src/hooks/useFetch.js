import React, { useState } from "react";

const useCounter = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const getData = async (url) => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Data not fetched");
      }
      const response = await res.json();
      setData(response.products);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  return { getData, loading, error, data };
};

export default useCounter;
