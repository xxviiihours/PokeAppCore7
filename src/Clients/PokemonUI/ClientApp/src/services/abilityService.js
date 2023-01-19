import api from "./core/api";

const ability_url = "gateway/api/abilities";

export const getAbilities = async (offset = null, limit = null) => {
	let url = `${ability_url}?`;

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

export const getAbilityByQuery = async (query) => {
	const url = `${ability_url}/${query}`;

	const response = await api.get(url);

	return {
		succeeded: true,
		data: response.data,
	};
};

export default {
	getAbilities,
	getAbilityByQuery,
};
