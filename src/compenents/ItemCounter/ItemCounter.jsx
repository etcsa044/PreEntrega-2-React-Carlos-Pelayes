import { useState } from "react"
import "./ItemCounter.css"



export const ItemCounter =
    ({
        stock = 5,
        initial = 0
    }) => {

        let [counter, setCounter] = useState(initial);

        const increment = () => {
            if(counter < stock){
                setCounter(counter + 1);
            }
        }

        const decrement = () => {
            if(counter > 0){
                setCounter(counter - 1);
            }
        }

        

        return (
            <div className="ItemCounter">
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
                <p>{counter}</p>
                <button id="add-btn">Agregar</button>
            </div>
        )
    }