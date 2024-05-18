/**
 * The CartOverview function displays the number of pizzas and total cost in a cart
 * with a link to open the cart.
 * @returns A JSX element representing a cart overview with information about 23 pizzas and a total
 * cost of .45, along with a link to open the cart.
 */
function CartOverview() {
  return (
    <div>
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <a href="#">Open cart &rarr;</a>
    </div>
  );
}

export default CartOverview;