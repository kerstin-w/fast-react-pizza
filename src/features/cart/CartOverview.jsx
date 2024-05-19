import { Link } from "react-router-dom";

/**
 * The CartOverview function displays the number of pizzas and total cost in a cart
 * with a link to open the cart.
 * @returns A JSX element representing a cart overview with information about 23 pizzas and a total
 * cost of .45, along with a link to open the cart.
 */
function CartOverview() {
  return (
    <div className="bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
