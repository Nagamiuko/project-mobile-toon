import { configureStore } from "@reduxjs/toolkit";
import { BookReducer } from "./reducers/bookApi";

const Store = configureStore({
   reducer:{
      book:BookReducer
   },
})

export default Store;