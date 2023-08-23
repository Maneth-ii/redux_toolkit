import { configureStore } from "@reduxjs/toolkit";
import numberSlice from "./reducers/numberSlice";
import userSlice from "./reducers/userSlice";
import laptopSlice from "./reducers/laptopSlice";

export const store = configureStore({
    reducer:{
      numberSlice,
      userSlice,
      laptopSlice
    }
})