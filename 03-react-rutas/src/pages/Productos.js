import React from 'react';
import { useLocation, useHistory } from "react-router-dom";

const Productos = () => {
  let {search} = useLocation();
  let query = new URLSearchParams(search);
  // console.log(query);
  const LIMIT = 20;
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;
  // console.log(start, end);
  let history = useHistory();
  console.log(history);

  const handlePrev = (e) => {
    history.push({search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}`});
  };

  const handleNext = (e) => {
   history.push({search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}`});
  };

  return (
    <div>
      <h3>Productos</h3>
      <p>Mostrando productos del 1 al 20</p>
      {start > LIMIT && <button onClick={handlePrev}>Atras</button>}
      <button onClick={handleNext}>adelante</button>
    </div>
  )
};

export default Productos;
