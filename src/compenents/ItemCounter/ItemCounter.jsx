import { useState } from "react"
import "./ItemCounter.css"
import { Link } from "react-router-dom";


export const ItemCounter = ({ stock = 5, initial = 0, onAdd, quantity }) => {
  const [counter, setCounter] = useState(initial);

  // console.log(onAdd);


  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="ItemCounter">
      <button id="menos" onClick={decrement}>-</button>
      <button id="mas" onClick={increment}>+</button>
      <p id="contador">{counter}</p>
      {counter > 0 ? (
        <button id="add-btn-enabled" onClick={() => onAdd(counter)}>Agregar</button>
      ) : (
        <button id="add-btn" onClick={() => onAdd(counter)} disabled>Agregar</button>
      )}
      {quantity > 0 ? (
        <Link to={`/cart/`}>
          <button>Finalizar compra</button>
        </Link>

      ) : null}
    </div>
  );
};