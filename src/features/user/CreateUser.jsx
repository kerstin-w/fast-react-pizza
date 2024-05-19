import { useState } from "react";

import Button from "../../ui/Button";

/**
 * The function CreateUser creates a form for users to input their name and start
 * ordering.
 * @returns The `CreateUser` function returns a form with an input field for the user to enter their
 * full name. Once the user enters their name, a button "Start ordering" is displayed below the input
 * field. The form also includes a welcome message prompting the user to enter their name. The form
 * submission is handled by the `handleSubmit` function, which prevents the default form submission
 * behavior.
 */
function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
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
