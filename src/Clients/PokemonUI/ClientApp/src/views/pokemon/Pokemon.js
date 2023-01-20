import {
	CButton,
	CCard,
	CCardBody,
	CCardTitle,
	CCol,
	CPagination,
	CPaginationItem,
	CRow,
	CSpinner,
} from "@coreui/react";
import React from "react";
import PokemonWrapper from "./PokemonWrapper";

const Pokemon = () => {
	return (
		<PokemonWrapper>
			{({ loading, pokemons, handleViewPokemon, setItemCounter }) => (
				<>
					{loading === "pending" ? (
						<div className="my-5 d-flex align-items-center justify-content-center">
							<CSpinner />
						</div>
					) : (
						<CRow>
							<CCol
								sm={12}
								className="mb-3 d-flex align-items-center"
							>
								<h5 className="text-primary font-weight-bold text-uppercase mb-0">
									list of Pokemons
								</h5>
							</CCol>
							{pokemons?.results.map((x, i) => (
								<CCol
									key={i}
									sm={3}
									className="my-2"
								>
									<CCard key={i}>
										<CCardBody key={i}>
											<CCardTitle>{x.name}</CCardTitle>
											<hr />
											<div className="text-end">
												<CButton
													className="text-white"
													color="danger"
													onClick={() => {
														handleViewPokemon(x.name);
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
						<CPagination
							align="center"
							size="lg"
							aria-label="Page navigation example"
						>
							<CPaginationItem
								disabled={!pokemons?.previous}
								style={{ width: 150 }}
								onClick={() => setItemCounter((prevState) => prevState - 20)}
							>
								Previous
							</CPaginationItem>
							<CPaginationItem
								style={{ width: 150 }}
								onClick={() => setItemCounter((prevState) => prevState + 20)}
							>
								Next
							</CPaginationItem>
						</CPagination>
					</CRow>
				</>
			)}
		</PokemonWrapper>
	);
};

export default Pokemon;
