using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using PokeAppCore7.Application.Common.Exceptions;
using PokeAppCore7.Application.Shared.DataObjects;
using PokeAppCore7.PokedexApi.Infrastructure.Services;

namespace PokeAppCore7.PokedexApi.Core.Ability.Commands
{
    public class GetAbilityRequest : IRequest<AbilityInfo>
    {
        public string Id { get; set; }
    }

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