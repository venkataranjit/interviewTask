import React, { useEffect } from "react";
import useCounter from "../hooks/useFetch";

const CustomeHook = () => {
  const { getData, loading, error, data } = useCounter();

  useEffect(() => {
    getData("https://dummyjson.com/products");
    console.log(data);
  }, []);

  if (loading) {
    return <h4>Loading</h4>;
  }
  if (error) {
    return <h6>{error}</h6>;
  }
  return (
    <>
      <h2>Custom Hook</h2>
      {data?.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
};

export default CustomeHook;
