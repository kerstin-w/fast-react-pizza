import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";

/**
 * The `CartItem` function renders a list item displaying details of a pizza item
 * in a shopping cart.
 * @returns The `CartItem` component is being returned. It displays information about a specific item
 * in the cart, including the quantity, name, and total price.
 */
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small">🗑️ Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
