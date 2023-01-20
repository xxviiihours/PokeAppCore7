import React, { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAbilityByQuery } from "../../../reducers/features/abilitySlice";

const AbilityDetailsContext = createContext(null);

export const useAbilityDetailsContext = () => useContext(AbilityDetailsContext);

export default function AbilityDetailsWrapper({children}) {
	const { id } = useParams();

	const { loading, ability } = useSelector((state) => state.ability);
	const dispatch = useDispatch();

	useEffect(() => {
		if (ability === null) {
			dispatch(fetchAbilityByQuery(id));
		}
	},[ability]);

	const handleViewPokemon = () => {
		console.log("test")
	}
  
	const value = { loading, ability, handleViewPokemon };
	return (
		<AbilityDetailsContext.Provider value={value}>
			{children(value)}
		</AbilityDetailsContext.Provider>
	);
}
