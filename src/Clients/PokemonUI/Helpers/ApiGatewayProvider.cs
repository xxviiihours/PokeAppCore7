using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ocelot.Middleware;

namespace PokeAppCore7.PokemonUI.Helpers;

public static class ApiGatewayProvider
{
    public static async void UseOcelot(IApplicationBuilder app)
    {
        await app.UseOcelot();
    }
}
