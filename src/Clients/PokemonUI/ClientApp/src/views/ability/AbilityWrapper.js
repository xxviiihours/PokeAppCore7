import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";
import { fetchABilities, fetchAbilityByQuery } from "../../reducers/features/abilitySlice";

const AbilityContext = createContext(null);

export const useAbilityContext = () => useContext(AbilityContext);

export default function AbilityWrapper({ children }) {
	const { loading, abilities } = useSelector((state) => state.ability);
	const [itemCounter, setItemCounter] = useState(null);
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const handleViewAbility = (query) => {
		const path = generatePath("/ability/:id", { id: query });
		navigate(path);
		dispatch(fetchAbilityByQuery(query));
	};

	useEffect(() => {
		if (itemCounter != null) {
			dispatch(fetchABilities(itemCounter, 20));
		}
		return () => {
			if (abilities.count === 0) {
				dispatch(fetchABilities());
			}
		};
	}, [itemCounter]);

	const value = {
		loading,
		abilities,
		setItemCounter,
		handleViewAbility,
	};
	return <AbilityContext.Provider value={value}>{children(value)}</AbilityContext.Provider>;
}
