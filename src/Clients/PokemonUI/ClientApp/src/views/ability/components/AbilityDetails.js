import {
	CCard,
	CCardBody,
	CCardImage,
	CCardText,
	CCardTitle,
	CCol,
	CRow,
	CSpinner,
} from "@coreui/react";
import React from "react";
import AbilityDetailsWrapper from "./AbilityDetailsWrapper";

const AbilityDetails = () => {
	return (
		<>
			<AbilityDetailsWrapper>
				{({ loading, ability }) => (
					<>
						{loading === "pending" ? (
							<div className="my-5 d-flex align-items-center justify-content-center">
								<CSpinner />
							</div>
						) : (
							<>
								<CRow>
									<CCol sm={7}>
										<CCard className="mb-3">
											<CCardImage
												orientation="top"
												src="/images/react.jpg"
											/>
											<CCardBody>
												<CCardTitle>{ability?.name.toUpperCase()}</CCardTitle>
												<CCardText>
                          <b>Description: </b><br />
													{ability?.effectEntries
														.filter((p) => p.language.name === "en")
														.map((x) => x.effect)}
												</CCardText>
											</CCardBody>
										</CCard>
									</CCol>
									<CCol sm={5}>
										<CCard>
											<CCardBody>
												<CCardTitle>{ability?.name.toUpperCase()}</CCardTitle>
												<CCardText>
                          <b>Description: </b>
													{ability?.effectEntries
														.filter((p) => p.language.name === "en")
														.map((x) => x.effect)}
												</CCardText>
											</CCardBody>
										</CCard>

										<CCard sm={5}>
											<CCardBody>
												<CCardTitle>{ability?.name.toUpperCase()}</CCardTitle>
												<CCardText>
													{ability?.effectEntries
														.filter((p) => p.language.name === "en")
														.map((x) => x.effect)}
												</CCardText>
											</CCardBody>
										</CCard>
									</CCol>
								</CRow>
							</>
						)}
					</>
				)}
			</AbilityDetailsWrapper>
		</>
	);
};

export default AbilityDetails;
