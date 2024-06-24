import { useState } from "react";
import { useEffect } from "react";

export default function RickYMorty() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((responseData) => setData(responseData.resutls));
  }, []);

  return (
    <>
      {!data ? (
        <> Login... </>
      ) : (
        <>
        {responseData.map((data) => (
            <p>id: {data.id}</p>
            <p>Name: {data.name}</p>
            <p>Status: {data.status} </p>
        ))}

        </>
      )}
    </>
  );
}
