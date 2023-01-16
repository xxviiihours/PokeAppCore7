import React, { createContext, useContext } from "react";

const AbilityContext = createContext(null);

const useAbilityContext = () => useContext(AbilityContext);

export const AbilityWrapper = ({ children }) => {
  const value = {};
  return (
    <AbilityContext.Provider value={value}>
      {children(value)}
    </AbilityContext.Provider>
  );
};

export default AbilityWrapper;
