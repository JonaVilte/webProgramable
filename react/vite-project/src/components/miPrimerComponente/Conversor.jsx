import React, { useEffect, useState } from "react";

export function Conversor() {
  const [moneda, setMoneda] = useState([]); // Inicializa moneda como null para manejar el estado de carga
  const [monedaBase, setMonedaBase] = useState("USD");
  const [monedaObjetivo, setMonedaObjetivo] = useState("EUR");
  const [conversion, setConversion] = useState(null);

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/b78bb348ccb3ecc8c5199a64/latest/USD"
    )
      .then((response) => response.json())
      .then((data) => {
        setMoneda(Object.keys(data.conversion_rates));
        setConversion(data.conversion_rates[monedaObjetivo]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [monedaObjetivo]);

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/b78bb348ccb3ecc8c5199a64/latest/${monedaBase}`
    )
      .then((response) => response.json())
      .then((data) => setConversion(data.conversion_rates[monedaObjetivo]))
      .catch((error) => console.error("Error fetching data:", error));
  }, [monedaBase, monedaObjetivo]);

  const handleMonedaBaseChange = (e) => {
    setMonedaBase(e.target.value);
  };

  const handleMonedaObjetivoChange = (e) => {
    setMonedaObjetivo(e.target.value);
  };

  return (
    <div className="conversor-container">
      <div className="select-container">
        <label>Selecciona la moneda base:</label>
        <select value={monedaBase} onChange={handleMonedaBaseChange}>
          {moneda.map((moneda) => (
            <option key={moneda} value={moneda}>
              {moneda}
            </option>
          ))}
        </select>
      </div>
      <div className="select-container">
        <label>Selecciona la moneda objetivo:</label>
        <select value={monedaObjetivo} onChange={handleMonedaObjetivoChange}>
          {moneda.map((moneda) => (
            <option key={moneda} value={moneda}>
              {moneda}
            </option>
          ))}
        </select>
      </div>
      <div className="result-container">
        {conversion ? (
          <p>
            1 {monedaBase} equivale a {conversion} {monedaObjetivo}
          </p>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
