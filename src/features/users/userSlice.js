import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const userAPI = "http://localhost:2000/users";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userList: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.userList = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;

export function fetchUserData() {
  return async (dispatch) => {
    const response = await axios.get(userAPI);
    dispatch(setUser(response.data));
  };
}

export function postUserData(data) {
  return async (dispatch) => {
    await axios.post(userAPI, data);
    dispatch(fetchUserData());
  };
}
