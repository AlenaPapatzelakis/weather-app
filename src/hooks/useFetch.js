import { useState, useEffect } from "react";

import axios from "axios";

/*** Make an API Call and fetch data */

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (url?.length > 0) {
        setError(null);
        try {
          setIsLoading(true);
          const res = await axios.get(url);
          const { data } = res;
          setResponse(data);
        } catch (e) {
          setError(e);
          console.log(e);
        }
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [isLoading, response, error, setUrl];
};
