using System.Threading;
using System.Threading.Tasks;
using MediatR;
using PokeAppCore7.Application.Common.Models.Base;
using PokeAppCore7.Application.Shared.DataObjects;
using PokeAppCore7.PokemonAPI.Infrastructure.Services;

namespace PokeAppCore7.PokemonAPI.Core.Pokemon.Queries
{
    public class GetPokemonsRequest : IRequest<PaginatedList<PokemonData>>
    {
        public int Limit { get; set; }
        public int Offset { get; set; }
    }

    public class GetPokemonsRequestHandler : IRequestHandler<GetPokemonsRequest, PaginatedList<PokemonData>>
    {
        private readonly IPokemonService _pokemonService;

        public GetPokemonsRequestHandler(IPokemonService pokemonService)
        {
            _pokemonService = pokemonService;
        }

        public async Task<PaginatedList<PokemonData>> Handle(GetPokemonsRequest request, CancellationToken cancellationToken)
        {
            var result = await _pokemonService.GetPokemons(request.Offset, request.Limit);

            return result;
        }
    }
}