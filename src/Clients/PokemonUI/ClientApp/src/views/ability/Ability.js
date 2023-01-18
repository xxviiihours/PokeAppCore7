import React from "react";
import AbilityWrapper from "./AbilityWrapper";
import {
  CButton,
  CCard,
  CCardBody,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react";

export const Ability = () => {
  return (
    <>
      <AbilityWrapper>
        {({ data, handleClick, handleNextItems }) => (
          <>
            <CRow>
              {data?.results.map((x, i) => (
                <CCol key={i} sm={6} className="my-2">
                  <CCard key={i}>
                    <CCardBody key={i}>
                      <CCardTitle>{x.name}</CCardTitle>
                      <CButton
                        className="text-white"
                        color="danger"
                        onClick={() =>{handleClick(20)}}
                      >
                        Check Information
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCol>
              ))}
            </CRow>
            <CRow className="mb-2">
              <CCol md>
                <CButton disabled={!data.previous} style={{ width: 150 }}>
                  Previous
                </CButton>
                <CButton style={{ width: 150 }} onClick={handleNextItems}>
                  Next
                </CButton>
              </CCol>
              {/* <CCol md>
              </CCol> */}
            </CRow>
          </>
        )}
      </AbilityWrapper>
    </>
  );
};

export default Ability;
