import { Link } from "react-router-dom";

/**
 * The EmptyCart function renders a message indicating that the cart is empty and prompts the user to
 * start adding pizzas.
 * @returns The EmptyCart component is being returned, which includes a link to go back to the menu and
 * a message indicating that the cart is empty.
 */
function EmptyCart() {
  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
