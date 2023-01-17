using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PokeAppCore7.PokemonAPI.Core.Ability.Queries;

namespace PokeAppCore7.PokemonAPI.Controllers
{
    public class AbilitiesController : ApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] GetAbilitiesRequest request)
        {
            return Ok(await Mediator.Send(request));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            var result = await Mediator.Send(new GetAbilityRequest(id));

            if(result == null){
                return NotFound();
            }

            return Ok(result);
        }
    }
}