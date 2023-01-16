using System.Threading;
using System.Threading.Tasks;
using MediatR;
using PokeAppCore7.Application.Common.Models.Base;
using PokeAppCore7.Application.Shared.DataObjects;
using PokeAppCore7.PokemonAPI.Infrastructure.Services;

namespace PokeAppCore7.PokemonAPI.Core.Ability.Queries
{
    public class GetAbilitiesRequest : IRequest<PaginatedList<AbilityData>>
    {
        public int Limit { get; set; }
        public int Offset { get; set; }
    }

    public class GetAbilitiesRequestHandler : IRequestHandler<GetAbilitiesRequest, PaginatedList<AbilityData>>
    {
        private readonly IAbilityService _abilityService;

        public GetAbilitiesRequestHandler(IAbilityService abilityService)
        {
            _abilityService = abilityService;
        }

        public async Task<PaginatedList<AbilityData>> Handle(GetAbilitiesRequest request, CancellationToken cancellationToken)
        {
            var queries = await _abilityService.GetAbilities(request.Offset, request.Limit);

            return queries;
        }
    }
}