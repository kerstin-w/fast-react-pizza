import { useSelector } from "react-redux";

import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

/**
 * The Home function enders a heading element with a message about the best pizza
 * straight out of the oven.
 * @returns A JSX element containing a `<div>` with an `<h1>` element inside. The `<h1>` element
 * contains the text "The best pizza." followed by a line break `<br />` and the text "Straight out of
 * the oven, straight to you."
 */
function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
