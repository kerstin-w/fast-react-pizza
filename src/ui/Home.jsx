/**
 * The Home function enders a heading element with a message about the best pizza
 * straight out of the oven.
 * @returns A JSX element containing a `<div>` with an `<h1>` element inside. The `<h1>` element
 * contains the text "The best pizza." followed by a line break `<br />` and the text "Straight out of
 * the oven, straight to you."
 */
function Home() {
  return (
    <div className="text-center">
      <h1 className="text-center text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
    </div>
  )
}

export default Home
