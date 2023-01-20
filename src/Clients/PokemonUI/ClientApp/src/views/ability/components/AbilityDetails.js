import {
	CButton,
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

export default function AbilityDetails() {
	return (
		<>
			<AbilityDetailsWrapper>
				{({ loading, ability, handleViewPokemon }) => (
					<>
						{loading === "pending" ? (
							<div className="my-5 d-flex align-items-center justify-content-center">
								<CSpinner />
							</div>
						) : (
							<>
								<CRow>
									<CCol sm={7}>
										<h5 className="text-primary font-weight-bold text-uppercase mb-2">
											Ability Details
										</h5>
										<CCard className="mb-3 w-100">
											{/* <CCardImage
												orientation="top"
												src="/images/react.jpg"
											/> */}
											<CCardBody>
												<CCardTitle>{ability?.name?.toUpperCase()}</CCardTitle>
												<p className="text-muted fst-italic">
													{ability?.effectChanges.map((x) =>
														x.effects
															.filter((p) => p.language.name === "en")
															.map((v) => v.effect)
													)}
												</p>
												<hr />
												<p>
													<b>Full Description: </b>
													<br />
													{ability?.effectEntries
														.filter((p) => p.language.name === "en")
														.map((x) => x.effect)}
												</p>
											</CCardBody>
										</CCard>
									</CCol>

									<CCol sm={5}>
										<h5 className="text-primary font-weight-bold text-uppercase mb-2">
											LIST OF POKEMON WITH THIS ABILITY
										</h5>
										<CCard className="mb-2">
											<CCardBody>
												{ability?.pokemons.slice(0, 10).map((x, i) => (
													<CCol
														key={i}
														className="mb-2 d-flex justify-content-between"
													>
														{x.pokemon.name}
														<CButton
															className="text-white"
															color="danger"
														>
															Check Information
														</CButton>
													</CCol>
												))}
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
}
