import api from "./core/api";

const ability_url = "gateway/api/abilities";
export const getAbilities = async (limit = null, offset = null) => {
  let url = `${ability_url}?`;
  if (limit != null) url += `&limit=${limit}`;
  if (offset != null) url += `&offset=${offset}`;

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
    getAbilityByQuery
}