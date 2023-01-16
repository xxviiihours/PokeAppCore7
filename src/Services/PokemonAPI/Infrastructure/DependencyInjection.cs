using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PokeAppCore7.Application.Common.Models.Base;
using PokeAppCore7.PokemonAPI.Infrastructure.Services;

namespace PokeAppCore7.PokemonAPI.Infrastructure
{
   public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddHttpContextAccessor();

            services.AddScoped<IPokemonService, PokemonService>();
            services.AddScoped<IAbilityService, AbilityService>();
            services.Configure<PokemonAPISettings>(configuration.GetSection("PokemonAPISettings"));

            return services;
        }
    }
}