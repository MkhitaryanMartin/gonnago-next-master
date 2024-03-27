import {configureStore, combineReducers } from "@reduxjs/toolkit";
import cities from "./header/reducer";
import categories from "./categories/reducer";

const rootReducer = combineReducers({cities, categories});

const store = configureStore({reducer: rootReducer})

export default store