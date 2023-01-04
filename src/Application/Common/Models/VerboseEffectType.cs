using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using PokeAppCore7.Application.Common.Models.Base;

namespace PokeAppCore7.Application.Common.Models
{
    public class VerboseEffectType
    {
        [JsonProperty("effect")]
        public string Effect { get; set; }
        
        [JsonProperty("short_effect")]
        public string ShortEffect { get; set; }

        [JsonProperty("language")]
        public NamedAPIResource Language { get; set; }
    }
}