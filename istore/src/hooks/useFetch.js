import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //this is main logic to call api/server/network
    console.log("fetching..");
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
