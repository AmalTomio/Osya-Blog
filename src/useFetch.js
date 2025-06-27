//Custom hook to fetch data from an API
//useEffect = re-render tapi better guna untuk certain data for render kat DOM (use dependencies [])
//useEffect good for fetch data
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // setIsPending(true);
    // setData(null);

    const controller = new AbortController(); // For cleanup

    setTimeout(() => {
      fetch(url, { signal: controller.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name !== "AbortError") {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 500); // 1-second simulated delay

    // Cleanup function if component unmounts before fetch finishes
    return () => controller.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
