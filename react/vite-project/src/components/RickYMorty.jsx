import { Episodio } from "./Episodios";
import { useState } from "react";
import { useEffect } from "react";

export function RickYMorty() {
  //estado tenemos dos partes el valor, el seteador del valor y por ultimo el valor inicial
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((responseData) => setData(responseData.results));
  }, []);

  <Episodio />;
  return (
    <>
      {!data ? (
        <> Login... </>
      ) : (
        <>
          {data.map((personaje) => (
            <>
              <p>id: {personaje.id}</p>
              <p>Name: {personaje.name}</p>
              <p>Status: {personaje.status} </p>
              <img src={personaje.image} alt="" />
              <p> {}</p>
            </>
          ))}
        </>
      )}
    </>
  );
}
