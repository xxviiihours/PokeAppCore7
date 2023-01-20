import { CCard, CCardBody, CCardImage, CCardTitle, CCol, CRow, CSpinner } from "@coreui/react";
import React from "react";
import PokemonDetailsWrapper from "./PokemonDetailsWrapper";

export default function PokemonDetals() {
	return (
		<PokemonDetailsWrapper>
			{({
				loading,
				pokemon,
				fetchPokemonByQuery,
				handleViewPokemon,
			}) => (
				<>
					{loading === "pending" ? (
						<div className="my-5 d-flex align-items-center justify-content-center">
							<CSpinner />
						</div>
					) : (
						<>
							<CRow>
								<CCol sm={5}>
									<h5 className="text-primary font-weight-bold text-uppercase mb-2">
										Pokemon Details
									</h5>
									<CCard className="mb-3">
										<CCardImage
											orientation="top"
											src={pokemon?.sprites.other.officialArtwork.frontDefault}
										/>
										<CCardBody>
											<CCardTitle>{pokemon?.name?.toUpperCase()}</CCardTitle>
											<p className="text-muted fst-italic">
												{/* {ability?.effectChanges.map((x) =>
														x.effects
															.filter((p) => p.language.name === "en")
															.map((v) => v.effect)
													)} */}
											</p>
											<hr />
											<p>
												<b>Stats: </b>
												<br />
												{/* {ability?.effectEntries
														.filter((p) => p.language.name === "en")
														.map((x) => x.effect)} */}
											</p>
										</CCardBody>
									</CCard>
								</CCol>

								{/* <CCol sm={5}>
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
									</CCol> */}
							</CRow>
						</>
					)}
				</>
			)}
		</PokemonDetailsWrapper>
	);
}
