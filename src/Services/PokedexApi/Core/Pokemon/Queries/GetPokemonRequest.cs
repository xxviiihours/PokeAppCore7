using System.Threading;
using System.Threading.Tasks;
using MediatR;
using PokeAppCore7.Application.Common.Exceptions;
using PokeAppCore7.Application.Shared.DataObjects;
using PokeAppCore7.PokedexApi.Infrastructure.Services;

namespace PokeAppCore7.PokedexApi.Core.Pokemon.Queries
{
    public class GetPokemonRequest : IRequest<PokemonInfo>
    {
        public string Id { get; set; }
    }

    public class GetPokemonRequestHandler : IRequestHandler<GetPokemonRequest, PokemonInfo>
    {
        private readonly IPokemonService _pokemonService;

        public GetPokemonRequestHandler(IPokemonService pokemonService)
        {
            _pokemonService = pokemonService;
        }

        public async Task<PokemonInfo> Handle(GetPokemonRequest request, CancellationToken cancellationToken)
        {
            var pokemon = await _pokemonService.GetPokemonById(request.Id);
            
            return pokemon;
        }
    }
}