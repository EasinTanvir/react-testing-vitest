import React, { useEffect, useState } from "react";
import axios from "axios";

type Data = {
  id: number;
  name: string;
};

const DataFetch = () => {
  const [data, setData] = useState<Data[]>([]);
  const [err, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setData(data);
    } catch (err) {
      setError("fetch failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Err...</p>;
  if (data.length === 0) return <p>No Product</p>;

  return (
    <div>
      {data.map((item) => (
        <h1 key={item?.id}>{item?.name}</h1>
      ))}
    </div>
  );
};

export default DataFetch;
