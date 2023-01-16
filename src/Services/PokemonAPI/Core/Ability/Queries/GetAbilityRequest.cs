using System.Threading;
using System.Threading.Tasks;
using MediatR;
using PokeAppCore7.Application.Common.Exceptions;
using PokeAppCore7.Application.Shared.DataObjects;
using PokeAppCore7.PokemonAPI.Infrastructure.Services;

namespace PokeAppCore7.PokemonAPI.Core.Ability.Queries
{
    public record GetAbilityRequest(string Id) : IRequest<AbilityInfo>;

    public class GetAbilityRequestHandler : IRequestHandler<GetAbilityRequest, AbilityInfo>
    {
        private readonly IAbilityService _abilityService;

        public GetAbilityRequestHandler(IAbilityService abilityService)
        {
            _abilityService = abilityService;
        }

        public async Task<AbilityInfo> Handle(GetAbilityRequest request, CancellationToken cancellationToken)
        {
            var result = await _abilityService.GetAbilityById(request.Id);

            if (result == null)
            {
                throw new NotFoundException(nameof(AbilityInfo).ToString(), request.Id);
            }

            return result;
        }
    }
}