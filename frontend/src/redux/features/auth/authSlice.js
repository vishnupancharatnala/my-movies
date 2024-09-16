// This authSlice code defines a slice of the Redux store that manages the user authentication state, specifically userInfo, and provides two actions: setCredentials and logout.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));

      const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
      localStorage.setItem("expirationTime", expirationTime);
    },

    logout: (state) => {
      state.userInfo = null;
      localStorage.clear();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;


// The initialState in the authSlice is designed to set up the initial user 
// authentication state when the application first loads. It checks if there is user 
// information saved in the browser's localStorage and, based on that, initializes the state accordingly.


// localStorage.getItem("userInfo"):

// This line tries to retrieve the userInfo from the 
// browser's localStorage. localStorage is a web storage API that allows you to store key-value pairs in a web browser persistently, meaning the data will stay even after the page is refreshed or the browser is closed and reopened.
// The key being looked for is "userInfo". If this key exists in localStorage, it means there’s already 
// some user information stored from a previous session (like after a successful login or a profile update).


// What does this achieve?

// Automatic Login: If the user is already logged in (i.e., userInfo exists in localStorage), they don’t need to log in again, as their details will be automatically loaded into the Redux store.


// Why is JSON.parse() used?
// localStorage.setItem(): When you store data in localStorage, it stores everything 
// as a string. So, even if you're saving a JavaScript object, it gets saved as a string.
// JSON.parse(): When you retrieve the data from localStorage, it comes back as a string. To convert this 
// string back into a JavaScript object (so that the user info can be used in your application as an object), you use JSON.parse().