import { combineReducers } from "@reduxjs/toolkit";
import comicsReducer from "./comics/comicsReducer";

export const rootReducer = combineReducers({
    comics: comicsReducer
})

export type RootState = ReturnType<typeof rootReducer>