const API_URL = "https://react-fast-pizza-api.onrender.com/api";

/**
 * This function fetches the menu data from a specified API URL and throws an error if the
 * response is not successful.
 * @returns The `getMenu` function is returning the `data` from the response of the API call to
 * `/menu`.
 */
export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually.
  // This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting menu");

  const { data } = await res.json();
  return data;
}

/**
 * This function fetches an order with a specific ID from an API and returns the order data.
 * @param id - The `id` parameter in the `getOrder` function represents the unique identifier of the
 * order that you want to retrieve from the API.
 * @returns The function `getOrder(id)` returns the data of the order with the specified `id`.
 */
export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

/**
 * The function `createOrder` sends a POST request to a specified API endpoint to create a new order
 * and returns the data if successful.
 * @param newOrder - It seems like you were about to provide information about the `newOrder` parameter
 * in the `createOrder` function. Could you please provide the details or specific structure of the
 * `newOrder` object that is expected as a parameter for this function?
 * @returns The `createOrder` function returns the `data` object from the response if the request is
 * successful. If there is an error during the process, it throws an error message "Failed creating
 * your order".
 */
export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

/**
 * The function `updateOrder` sends a PATCH request to update an order using the provided `id` and
 * `updateObj`.
 * @param id - The `id` parameter in the `updateOrder` function represents the unique identifier of the
 * order that you want to update. This identifier is used to specify which order in the system should
 * be updated with the provided `updateObj`.
 * @param updateObj - The `updateObj` parameter is an object containing the data that you want to
 * update in the order. It should have key-value pairs where the key represents the field you want to
 * update in the order, and the value is the new value you want to set for that field.
 */
export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
