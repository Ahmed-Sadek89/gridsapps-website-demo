"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
//= Reducers
import userReducer from "./slices/user";

export const store = configureStore({
  reducer: combineReducers({
    user: userReducer
  }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;