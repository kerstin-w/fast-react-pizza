import Button from "../../ui/Button";

/**
 * The UpdateItemQuantity function renders buttons to decrease or increase the quantity of a pizza item.
 * @returns A JSX element is being returned, which contains two Button components wrapped in a div with specific class names for styling.
 */
function UpdateItemQuantity({ pizzaId }) {
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round">-</Button>
      <Button type="round">+</Button>
    </div>
  );
}

export default UpdateItemQuantity;
