import { combineReducers } from "redux";
import abilityReducer from "./features/abilitySlice";
import pokemonReducer from "./features/pokemonSlice";
import userInterfaceReducer from "./features/userInterfaceSlice";

export default combineReducers({
    ui: userInterfaceReducer,
    pokemon: pokemonReducer,
    ability: abilityReducer
})