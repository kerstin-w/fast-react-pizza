import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateName } from "./userSlice";
import Button from "../../ui/Button";

/**
 * The `CreateUser` function in JavaScript React creates a form for users to input their name, dispatches an action to update the user's name in the Redux store, and navigates to the menu page upon submission.
 * @returns The `CreateUser` function returns a form component that allows a user to input their full name. The user's input is stored in the `username` state using `useState` hook. When the form is submitted, the `handleSubmit` function is called, which dispatches an action to update the user's name in the Redux store and then navigates to the "/menu" route. If the `username` state is not empty, a submit button is rendered.
 */
function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    // Dispatch an action to update the user's name in the Redux store
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
