import { combineReducers } from "redux";
import abilityReducer from "./features/abilitySlice";
import userInterfaceReducer from "./features/userInterfaceSlice";

export default combineReducers({
    ui: userInterfaceReducer,
    ability: abilityReducer
})