using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using PokeAppCore7.PokedexApi.Core.Pokemon.Queries;

namespace PokeAppCore7.PokedexApi.Endpoints
{
    public static class PokemonEndpointExt
    {
        public static void MapPokemonEndpoints(this WebApplication app)
        {
            app.MapGet("/pokemon", (GetPokemonsRequest request) =>
            {
                // Mediator
            });
        }
    }
}