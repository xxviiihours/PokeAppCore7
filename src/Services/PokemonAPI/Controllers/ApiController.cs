using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using PokeAppCore7.Application.Common.Models.Base;

namespace PokeAppCore7.PokemonAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ApiController : ControllerBase
    {
        private IMediator _mediator;
        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();

        protected ActionResult Result<T>(BaseResponse<T> response)
        {
            if (response.IsSuccess)
            {
                return Ok(response.Data);
            }
            else
            {
                var details = new ValidationProblemDetails(response.Errors)
                {
                    Type = "https://tools.ietf.org/html/rfc7231#section-6.5.1"
                };

                return BadRequest(details);
            }
        }
    }
}