import { useState, useEffect } from "react";

const useFetch = (apiFunction, immediate = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (...params) => {
    setLoading(true);
    try {
      const response = await apiFunction(...params);
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) execute();
  }, []);

  return { data, loading, error, execute };
};

export default useFetch;