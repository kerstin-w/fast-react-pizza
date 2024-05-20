import LinkButton from "../../ui/LinkButton";

/**
 * The EmptyCart function renders a message indicating that the cart is empty and prompts the user to
 * start adding pizzas.
 * @returns The EmptyCart component is being returned, which includes a link to go back to the menu and
 * a message indicating that the cart is empty.
 */
function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
