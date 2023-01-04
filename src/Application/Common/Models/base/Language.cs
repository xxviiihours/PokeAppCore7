using System.Collections.Generic;
using Newtonsoft.Json;

namespace PokeAppCore7.Application.Common.Models.Base
{
    public class Language
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("official")]
        public bool Official { get; set; }

        [JsonProperty("iso639")]
        public string ISO639 { get; set; }

        [JsonProperty("iso3166")]
        public string ISO3166 { get; set; }
        
        [JsonProperty("names")]
        public List<NameType> Names { get; set; }
    }
}