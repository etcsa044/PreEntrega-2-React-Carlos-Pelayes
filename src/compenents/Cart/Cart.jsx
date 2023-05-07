import "./Cart.css"
export const Cart = () => {
  const cart = {products:[]};

  return (
    <div>
      <h1> Tu Carrito actual contiene: </h1>

      <div>
        {cart.products.map((product) => {
          return (
            <div className="cartList" key={product.id}>
              <h2>{product.id}</h2>
              <p>{product.quantity}</p>
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};