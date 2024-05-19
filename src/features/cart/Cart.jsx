import { Link } from "react-router-dom";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

/**
 * The Cart component renders a user's shopping cart with options to order pizzas or clear the cart.
 * @returns The Cart component is being returned, which contains JSX elements for displaying the cart
 * contents and options for ordering pizzas or clearing the cart.
 */
function Cart() {
  const cart = fakeCart;

  return (
    <div>
      <Link
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline hover:underline-offset-4"
      >
        &larr; Back to menu
      </Link>

      <h2>Your cart, %NAME%</h2>

      <div>
        <Link to="/order/new">Order pizzas</Link>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
