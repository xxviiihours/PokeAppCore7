import React from "react";
import AbilityWrapper from "./AbilityWrapper";
import {CButton} from '@coreui/react';

export const Ability = () => {

  return (
    <>
      <AbilityWrapper>
        {({handleClick}) => (
          <>
            <h1>Hello World!</h1>
            <CButton onClick={handleClick}>TEST</CButton>
          </>
        )}
      </AbilityWrapper>
    </>
  );
};

export default Ability;
