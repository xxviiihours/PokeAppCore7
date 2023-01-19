import { createSlice } from "@reduxjs/toolkit";
import abilityService from "../../services/abilityService";

const initialState = {
	loading: "idle",
	abilities: {
		count: 0,
		next: null,
		previous: null,
		results: [],
	},
	ability: null,
};

const abilitySlice = createSlice({
	name: "ability",
	initialState: initialState,
	reducers: {
		abilityLoading: (state, { payload }) => {
			if (state.loading === "idle") {
				state.loading = "pending";
			}
		},
		storeAbilities: (state, { payload }) => {
			if (state.loading === "pending") {
				state.abilities = { ...payload };
				state.loading = "idle";
			}
		},
		storeAbility: (state, { payload }) => {
			if (state.loading === "pending") {
				state.ability = { ...payload };
				state.loading = "idle";
			}
		},
		clearState: (state) => {
			state = { ...initialState };
		},
	},
});

export const fetchABilities =
	(offset = null, limit = null) =>
	async (dispatch) => {
		dispatch(abilityLoading());
		const result = await abilityService.getAbilities(offset, limit);
		dispatch(storeAbilities(result.data));
	};

export const fetchAbilityByQuery = (query) => async (dispatch) => {
	dispatch(abilityLoading());
	const result = await abilityService.getAbilityByQuery(query);
	
	dispatch(storeAbility(result.data));
};

export const { abilityLoading, storeAbilities, storeAbility, clearState } =
	abilitySlice.actions;

export default abilitySlice.reducer;
