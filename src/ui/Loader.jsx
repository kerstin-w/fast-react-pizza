/**
 * The Loader function returns an element that displays a loader centered on the screen.
 * @returns A JSX element is being returned. It consists of a `div` element with the class names "absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm" and contains another `div` element with the class name "loader". This structure is used to display a loading spinner or animation on the screen.
 */
function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
