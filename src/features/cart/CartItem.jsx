import { formatCurrency } from "../../utils";

/**
 * The `CartItem` function renders a list item displaying details of a pizza item
 * in a shopping cart.
 * @returns The `CartItem` component is being returned. It displays information about a specific item
 * in the cart, including the quantity, name, and total price.
 */
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
