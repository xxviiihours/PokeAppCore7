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
	CSpinner,
} from "@coreui/react";

const Ability = () => {
	return (
		<>
			<AbilityWrapper>
				{({ loading, abilities, handleClick, setItemCounter }) => (
					<>
						{loading === "pending" ? (
							<div className="my-5 d-flex align-items-center justify-content-center">
								<CSpinner />
							</div>
						) : (
							<CRow>
								{abilities?.results.map((x, i) => (
									<CCol
										key={i}
										sm={4}
										className="my-2"
									>
										<CCard
											// className="d-flex justify-content-between"
											key={i}
										>
											<CCardBody key={i}>
												<CCardTitle>{x.name}</CCardTitle>
                        <hr />
												<div className="text-end">
													<CButton
														className="text-white"
														color="danger"
														onClick={() => {
															handleClick(x.name);
														}}
													>
														Check Information
													</CButton>
												</div>
											</CCardBody>
										</CCard>
									</CCol>
								))}
							</CRow>
						)}
						<CRow className="mb-2">
							<CCol md>
								<CButton
									disabled={!abilities.previous}
									style={{ width: 150 }}
									onClick={() => setItemCounter((prevState) => prevState - 20)}
								>
									Previous
								</CButton>
								<CButton
									style={{ width: 150 }}
									onClick={() => setItemCounter((prevState) => prevState + 20)}
								>
									Next
								</CButton>
							</CCol>
						</CRow>
					</>
				)}
			</AbilityWrapper>
		</>
	);
};

export default Ability;
