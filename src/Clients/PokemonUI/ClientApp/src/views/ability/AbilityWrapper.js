import React, { createContext, useContext } from "react";
import { useDispatch } from "react-redux";
import { fetchABilities } from "../../reducers/features/abilitySlice";

const AbilityContext = createContext(null);

const useAbilityContext = () => useContext(AbilityContext);

export const AbilityWrapper = ({ children }) => {
  const dispatch = useDispatch();

  const handleClick = () =>{
    dispatch(fetchABilities())
  }
  const value = {handleClick};
  return (
    <AbilityContext.Provider value={value}>
      {children(value)}
    </AbilityContext.Provider>
  );
};

export default AbilityWrapper;
