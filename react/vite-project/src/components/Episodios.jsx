import { useState } from "react";
import { useEffect } from "react";

export function Episodio() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then((responseData) => setData(responseData.results));
  }, []);

  return (
    <>
      {!data ? (
        <> Login... </>
      ) : (
        <>
          {data.map((episodio) => (
            <>
              <p>Name: {episodio.name}</p>
            </>
          ))}
        </>
      )}
    </>
  );
}
