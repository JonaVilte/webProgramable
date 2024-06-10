//Hooks -> useState
import { useEffect, useState } from "react";

//camelcase es la manera de escribir en la cual
//cada palabra nueva arranca con Mayuscula

//

export const Estado = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  //El useEffect se va a ejecutar la cantidad de veces que las dependencias se actualicen.
  //Si no le pasan dependencia se ejecutara solo lo principal de la app
  //en el primer render.
  //Si no se le pasa el array de denpendencia siempre se va a ejecutar.
  useEffect(() => {
    console.log("El contador se a actualizado");
  }, [contador]);

  const arrayPersonajes = [
    {
      name: "Rick",
      lastName: "Sanchez",
      planet: "Earth",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      name: "Morty",
      lastName: "Smith",
      planet: "Earth",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
  ];

  return (
    <>
      <div>
        {
          //caundo deespues de la funcion flecha hay parantesis significa que el retur es implicito ose a

          //return implicito
          arrayPersonajes.map((personaje, i) => (
            <div key={i}>
              <h2>
                FullName: {personaje.name} {personaje.lastName}{" "}
              </h2>
              <p>planet: {personaje.planet} </p>
              <img src={personaje.image} alt="description" />
            </div>
          ))

          //return explicito
          /*arrayPersonajes.map(() => (
                return(

                )
            ))*/
        }
      </div>
      <button onClick={handleClick}>Aumentar</button>
      <p>{contador}</p>
    </>
  );
};
