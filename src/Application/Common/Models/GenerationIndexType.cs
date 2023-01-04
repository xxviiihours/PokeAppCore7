using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using PokeAppCore7.Application.Common.Models.Base;

namespace PokeAppCore7.Application.Common.Models
{
    public class GenerationIndexType
    {
        [JsonProperty("game_index")]
        public int GameIndex { get; set; }
        
        [JsonProperty("generation")]
        public NamedAPIResource Generation { get; set; }
    }
}