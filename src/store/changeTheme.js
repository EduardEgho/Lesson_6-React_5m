import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    changeTheme:(state) =>{
      if (state === "light") {
        return "dark";
      } else {
        return "light";
      }
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;