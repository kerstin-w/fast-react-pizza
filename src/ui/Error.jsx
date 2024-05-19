import { useNavigate, useRouteError } from "react-router-dom";

/**
 * The NotFound function displays an error message, allows navigation
 * back, and includes a placeholder for a dynamic message.
 * @returns The `NotFound` function is returning a JSX element that displays a message indicating that
 * something went wrong, along with a placeholder `%MESSAGE%` where a specific message can be inserted.
 * It also includes a button that allows the user to navigate back using the `useNavigate` hook.
 */
function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
