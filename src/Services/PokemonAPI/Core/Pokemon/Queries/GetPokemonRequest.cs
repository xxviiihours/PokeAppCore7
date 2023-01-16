using System.Threading;
using System.Threading.Tasks;
using MediatR;
using PokeAppCore7.Application.Shared.DataObjects;
using PokeAppCore7.PokemonAPI.Infrastructure.Services;

namespace PokeAppCore7.PokemonAPI.Core.Pokemon.Queries
{
     public record GetPokemonRequest(string Id) : IRequest<PokemonInfo>;
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