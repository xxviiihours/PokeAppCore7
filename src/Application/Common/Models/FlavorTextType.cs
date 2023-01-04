using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using PokeAppCore7.Application.Common.Models.Base;

namespace PokeAppCore7.Application.Common.Models
{
    public class FlavorTextType
    {
        [JsonProperty("flavor_text")]
        public string FlavorText { get; set; }

        [JsonProperty("language")]
        public NamedAPIResource Language { get; set; }
        
        [JsonProperty("version")]
        public NamedAPIResource Version { get; set; }
    }
}