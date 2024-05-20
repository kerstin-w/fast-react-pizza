/*
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchAddress() {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
}
*/

import { createSlice } from "@reduxjs/toolkit";

/** The `const initialState = { username: "" };` line is defining the initial state for the user slice in a Redux store. In Redux, the initial state represents the initial values of the state managed by the reducer. 
In this case, the initial state for the user slice includes a property `username` with an initial value of an empty string. This initial state will be used as the starting point for the user slice's state before any actions are dispatched to update it. 
*/
const initialState = {
  username: "",
};

/** This code snippet is creating a slice for managing user-related state in a Redux store using the `createSlice` function from the `@reduxjs/toolkit` package.*/
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
