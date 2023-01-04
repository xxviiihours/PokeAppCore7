using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PokeAppCore7.PokedexApi.Core.Ability.Commands;

namespace PokeAppCore7.PokedexApi.Controllers
{
    public class AbilityController : ApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] GetAbilitiesRequest request)
        {
            return Ok(await Mediator.Send(request));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            var result = await Mediator.Send(new GetAbilityRequest {Id = id});

            if(result == null){
                return NotFound();
            }

            return Ok(result);
        }
    }
}