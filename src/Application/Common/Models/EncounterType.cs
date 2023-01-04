using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using PokeAppCore7.Application.Common.Models.Base;

namespace PokeAppCore7.Application.Common.Models
{
    public class EncounterType
    {
        [JsonProperty("min_level")]
        public int MinLevel { get; set; }

        [JsonProperty("max_level")]
        public int MaxLevel { get; set; }

        [JsonProperty("condition_values")]
        public List<NamedAPIResource> ConditionValues { get; set; }

        [JsonProperty("chance")]
        public int Chance { get; set; }
        
        [JsonProperty("method")]
        public NamedAPIResource Method { get; set; }
    }
}