import { createSlice } from "@reduxjs/toolkit";
import pokemonService from "../../services/pokemonService";

const initialState = {
	loading: "idle",
	pokemons: {
		count: 0,
		next: null,
		previous: null,
		results: [],
	},
	pokemon: null,
};

const pokemonSlice = createSlice({
	name: "pokemon",
	initialState: initialState,
	reducers: {
		pokemonLoading: (state, { payload }) => {
			if (state.loading === "idle") {
				state.loading = "pending";
			}
		},
		storePokemons: (state, { payload }) => {
			if (state.loading === "pending") {
				state.pokemons = { ...payload };
				state.loading = "idle";
			}
		},
		storePokemon: (state, { payload }) => {
			if (state.loading === "pending") {
				state.pokemon = { ...payload };
				state.loading = "idle";
			}
		},
		clearState: (state) => {
			state = { ...initialState };
		},
	},
});

export const fetchPokemons =
	(offset = null, limit = null) =>
	async (dispatch) => {
		dispatch(pokemonLoading());
		const result = await pokemonService.getPokemons(offset, limit);
		dispatch(storePokemons(result.data));
	};

export const fetchPokemonByQuery = (query) => async (dispatch) => {
	dispatch(pokemonLoading());
	const result = await pokemonService.getPokemonByQuery(query);

	dispatch(storePokemon(result.data));
};

export const { pokemonLoading, storePokemons, storePokemon, clearState } =
	pokemonSlice.actions;

export default pokemonSlice.reducer;
