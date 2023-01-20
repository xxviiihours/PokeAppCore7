import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Pokemon = React.lazy(() => import("./views/pokemon/Pokemon"));
const PokemonDetails = React.lazy(() => import("./views/pokemon/components/PokemonDetals"));
const Ability = React.lazy(() => import("./views/ability/Ability"));
const AbilityDetails = React.lazy(() => import("./views/ability/components/AbilityDetails"));

const routes = [
	{ path: "/", exact: true, name: "Home" },
	{ path: "/dashboard", name: "Dashboard", element: Dashboard },
	{ path: "/pokemon", name: "Pokemon", element: Pokemon },
	{ path: "/pokemon/:id", name: "Pokemon", element: PokemonDetails },
	{ path: "/ability", name: "Ability", element: Ability },
	{ path: "/ability/:id", name: "Ability Details", element: AbilityDetails },
];

export default routes;
