import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";
import { fetchPokemonByQuery, fetchPokemons } from "../../reducers/features/pokemonSlice";

const PokemonContext = createContext(null);
export const usePokemonContext = () => useContext(PokemonContext);

export default function PokemonWrapper({ children }) {
	const { loading, pokemons } = useSelector((state) => state.pokemon);
	const dispatch = useDispatch();

	const [itemCounter, setItemCounter] = useState(null);
	const navigate = useNavigate();

	const handleViewPokemon = (query) => {
		const path = generatePath("/pokemon/:id", { id: query });
		navigate(path);
		dispatch(fetchPokemonByQuery(query));
	};

	useEffect(() => {
		if (itemCounter != null) {
			dispatch(fetchPokemons(itemCounter, 20));
		}
		return () => {
			if (pokemons.count === 0) {
				dispatch(fetchPokemons());
			}
		};
	}, [itemCounter]);

	const value = { loading, pokemons, handleViewPokemon, setItemCounter };

	return <PokemonContext.Provider value={value}>{children(value)}</PokemonContext.Provider>;
}
