import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPokemonByQuery } from "../../../reducers/features/pokemonSlice";

const PokemonDetailsContext = createContext(null);
export const usePokemonDetailsContext = () => usePokemonDetailsContext(PokemonDetailsContext);
export default function PokemonDetailsWrapper({ children }) {
	const { id } = useParams();

	const { loading, pokemon } = useSelector((state) => state.pokemon);
	const dispatch = useDispatch();

	useEffect(() => {
		if (pokemon === null) {
			dispatch(fetchPokemonByQuery(id));
		}
	}, [pokemon]);

	const handleViewPokemon = () => {
		console.log("test");
	};

	const value = {
		loading,
		pokemon,
		fetchPokemonByQuery,
		handleViewPokemon,
	};
	return (
		<>
			<PokemonDetailsContext.Provider value={value}>
				{children(value)}
			</PokemonDetailsContext.Provider>
		</>
	);
}
