import { combineReducers } from "redux";
import userInterfaceReducer from "./features/userInterfaceSlice";

export default combineReducers({
    ui: userInterfaceReducer
})