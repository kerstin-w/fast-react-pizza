/**
 * The Home function enders a heading element with a message about the best pizza
 * straight out of the oven.
 * @returns A JSX element containing a `<div>` with an `<h1>` element inside. The `<h1>` element
 * contains the text "The best pizza." followed by a line break `<br />` and the text "Straight out of
 * the oven, straight to you."
 */
function Home() {
  return (
    <div>
      <h1>
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
    </div>
  );
}

export default Home;
