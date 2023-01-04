using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Linq;
using PokeAppCore7.Application.Common.Models.Base;
using PokeAppCore7.Application.Shared.DataObjects;

namespace PokeAppCore7.PokedexApi.Infrastructure.Services
{
    public interface IPokemonService
    {
        Task<PaginatedList<PokemonData>> GetPokemons(int offset, int limit);
        Task<PokemonInfo> GetPokemonById(string id);
    }
    public class PokemonService : IPokemonService
    {
        private const string GET_URL = "pokemon";
        private readonly IHttpClientFactory _clientFactory;
        private readonly PokemonAPISettings _settings;
        public PokemonService(IHttpClientFactory clientFactory, IOptions<PokemonAPISettings> options)
        {
            _clientFactory = clientFactory;
            _settings = options.Value;
        }

        public async Task<PaginatedList<PokemonData>> GetPokemons(int offset, int limit)
        {
            var url = $"{_settings.Path}/{GET_URL}";
            if (limit > 0)
            {
                url += $"?limit={limit}";
            }
            if (offset > 0)
            {
                url += $"&offset={offset}";
            }
            var requestUrl = new Uri(url);
            var httpRequest = new HttpRequestMessage(HttpMethod.Get, requestUrl);

            var client = _clientFactory.CreateClient();
            var response = await client.SendAsync(httpRequest);
            if (response.IsSuccessStatusCode)
            {
                var json = await response.Content.ReadAsStringAsync();
                var jObject = JObject.Parse(json);

                return jObject.ToObject<PaginatedList<PokemonData>>();
            }

            return default;
        }

        public async Task<PokemonInfo> GetPokemonById(string id)
        {
            var requestUrl = new Uri($"{_settings.Path}/{GET_URL}/{id}");
            var httpRequest = new HttpRequestMessage(HttpMethod.Get, requestUrl);

            var client = _clientFactory.CreateClient();
            var response = await client.SendAsync(httpRequest);

            if (response.IsSuccessStatusCode)
            {
                var json = await response.Content.ReadAsStringAsync();
                var jObject = JObject.Parse(json);

                return jObject.ToObject<PokemonInfo>();
            }

            return default;
        }
    }
}