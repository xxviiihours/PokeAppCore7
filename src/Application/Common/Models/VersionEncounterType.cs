using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using PokeAppCore7.Application.Common.Models.Base;

namespace PokeAppCore7.Application.Common.Models
{
    public class VersionEncounterType
    {
        [JsonProperty("version")]
        public NamedAPIResource Version { get; set; }

        [JsonProperty("max_chance")]
        public int MaxChance { get; set; }

        [JsonProperty("encounter_details")]
        public List<EncounterType> EncounterDetails { get; set; }
    }
}