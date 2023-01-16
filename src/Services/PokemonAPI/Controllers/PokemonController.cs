using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PokeAppCore7.PokemonAPI.Core.Pokemon.Queries;

namespace PokeAppCore7.PokemonAPI.Controllers
{
    public class PokemonController : ApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] GetPokemonsRequest request)
        {
            return Ok(await Mediator.Send(request));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            var result = await Mediator.Send(new GetPokemonRequest(id));

            if(result == null){
                return NotFound();
            }

            return Ok(result);
        }
    }
}