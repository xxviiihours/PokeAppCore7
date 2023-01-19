import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";
import { fetchABilities, fetchAbilityByQuery } from "../../reducers/features/abilitySlice";

const AbilityContext = createContext(null);

const useAbilityContext = () => useContext(AbilityContext);

export const AbilityWrapper = ({ children }) => {
	const { loading, abilities } = useSelector((state) => state.ability);
	const [itemCounter, setItemCounter] = useState(null);
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const handleClick = (query) => {
		const path = generatePath("/ability/:id", { id: query });
		navigate(path);
		dispatch(fetchAbilityByQuery(query));
	};

	useEffect(() => {
		if (itemCounter != null) {
			console.log(itemCounter);
			dispatch(fetchABilities(itemCounter, 10));
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
		handleClick,
	};
	return <AbilityContext.Provider value={value}>{children(value)}</AbilityContext.Provider>;
};

export default AbilityWrapper;
