import React, { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchABilities,
  fetchAbilityByQuery,
} from "../../reducers/features/abilitySlice";

const AbilityContext = createContext(null);

const useAbilityContext = () => useContext(AbilityContext);

export const AbilityWrapper = ({ children }) => {
  const { data } = useSelector((state) => state.ability);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchAbilityByQuery());
  };

  const handleNextItems = () => {
    dispatch(fetchABilities(nextItems, 20));
  };

  useEffect(() => {
    if (data === null || data.count === 0) {
      console.log(data);
      dispatch(fetchABilities());
    }
  }, [data]);

  const value = { data, handleClick, handleNextItems };
  return (
    <AbilityContext.Provider value={value}>
      {children(value)}
    </AbilityContext.Provider>
  );
};

export default AbilityWrapper;
