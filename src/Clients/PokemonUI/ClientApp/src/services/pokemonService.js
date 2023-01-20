import api from "./core/api";


const pokemon_url = 'gateway/api/pokemons';

const getPokemons = async (offset = null, limit = null) => {
	let url = `${pokemon_url}?`;

	if (offset != null) {
		url += `&offset=${offset}`;
	}

	if (limit != null) {
		url += `&limit=${limit}`;
	}

	const response = await api.get(url);
	return {
		succeeded: true,
		data: response.data,
	};
};

const getPokemonByQuery = async (query) => {
	const url = `${pokemon_url}/${query}`;

	const response = await api.get(url);

	return {
		succeeded: true,
		data: response.data,
	};
};

export default {
	getPokemons,
	getPokemonByQuery,
};