import React from "react";

const useFetchData = (url, header, dataToSend) => {
  const [productList, setProductList] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  console.log(url)

  const fetchByUrl = React.useCallback( async () => {
    if (header && dataToSend) {
      const method = {
        method: header.toLocaleUpperCase(),
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      };
      try {
        setIsLoading(true);
        const res = await fetch(url, method);
        if (res) {
          const data = await res.json();
          if (data) setProductList(data);
        }
        setIsLoading(false);
      } catch (e) {
        setError(e);
        setIsLoading(false);
      }
    } else {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        if (res) {
          const data = await res.json();
          if (data) setProductList(data);
        }
        setIsLoading(false);
      } catch (e) {
        console.log(e)
        setError(e);
        setIsLoading(false);
      }
    }
  },[])

  React.useEffect(() => {
    fetchByUrl();
  }, [url]);

  return { productList, error, isLoading };
};

export default useFetchData;
