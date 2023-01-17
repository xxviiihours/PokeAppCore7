import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import rootReducer from './reducers'


const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware],
    devTools: true
});


export default store;