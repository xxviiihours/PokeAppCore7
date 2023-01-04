using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace PokeAppCore7.Application.Common.Models.Base
{
    public class APIResource
    {
        [JsonProperty("url")]
        public string Url { get; set; }
    }

    public class NamedAPIResource
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("url")]
        public string Url { get; set; }
    }

    public class PokemonAPISettings {
        public string Path { get; set; }
    }
}