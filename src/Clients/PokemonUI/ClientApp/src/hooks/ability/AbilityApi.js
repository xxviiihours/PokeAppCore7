import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import abilityService from "../../services/abilityService";

export const getAbilityByQuery = ({ query }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      if (query) {

        // const result = await abilityService.getAbilityByQuery(query);

        dispatch(storeAbility(result))
      }
    }

    fetchData();
  }, [query]);
};
