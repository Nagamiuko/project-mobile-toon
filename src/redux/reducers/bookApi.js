import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const BookReducer = createReducer(initialState, {
    // get Book all 
    getBookRequest: (state) => {
      state.isLoading = true;
    },
    getBookSuccess: (state, action) => {
      state.isLoading = false;
      state.books= action.payload;
    },
    getBookFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // get Details book
    getBookDetailRequest: (state) => {
      state.isLoading = true;
    },
    getBookDetailSuccess: (state, action) => {
      state.isLoading = false;
      state.bookDetail= action.payload;
    },
    getBookDetailFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },


    clearErrors: (state) => {
      state.error = null;
    },


})