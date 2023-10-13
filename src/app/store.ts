import { configureStore } from "@reduxjs/toolkit";
import {bookSearchSlice} from "../features/Header/model/bookSearch.slice.ts";
import {appSlice} from "./app.slice.ts";


export const store = configureStore({
  reducer: {
    books: bookSearchSlice,
    app: appSlice,
  },
});


export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// @ts-ignore
window.store = store;
