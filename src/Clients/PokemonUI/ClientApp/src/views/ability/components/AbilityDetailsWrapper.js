import React, { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAbilityByQuery } from "../../../reducers/features/abilitySlice";

const AbilityDetailsContext = createContext(null);

const useAbilityDetailsContext = () => useContext(AbilityDetailsContext);

export const AbilityDetailsWrapper = ({ children }) => {
	const { id } = useParams();

	const { ability } = useSelector((state) => state.ability);
	const dispatch = useDispatch();

	useEffect(() => {
		if (ability === null) {
			dispatch(fetchAbilityByQuery(id));
		}
	},[ability]);
  
	const value = { ability };
	return (
		<AbilityDetailsContext.Provider value={value}>
			{children(value)}
		</AbilityDetailsContext.Provider>
	);
};

export default AbilityDetailsWrapper;
