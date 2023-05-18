
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContext/CartContext"
import "./CheckOut.css"


export const CheckOut = () => {


    const { cartList } = useCartContext()

    let total = cartList.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

    return (

        <>
            <h2>Confirma tu orden</h2>
            <ol>
                {cartList.map((prod) => {
                    return (
                        <li className="checkout_list" key={prod.id}>
                            <p>{prod.title}</p>
                            <p>{prod.quantity}</p>
                            <p>{`$${prod.price * prod.quantity}`}</p>
                        </li>
                    )
                })}
            </ol>
            <div id="pagar">
                <h2>TOTAL $: {total}</h2>
                {total > 0 &&
                    <Link to="/payment/">
                        <button> Pagar</button>
                    </Link>
                }
            </div>
        </>
    )

}