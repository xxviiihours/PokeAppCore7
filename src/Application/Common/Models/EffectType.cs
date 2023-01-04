using Newtonsoft.Json;
using PokeAppCore7.Application.Common.Models.Base;

namespace PokeAppCore7.Application.Common.Models
{
    public class EffectType
    {
        [JsonProperty("effect")]
        public string Effect { get; set; }
        
        [JsonProperty("language")]
        public NamedAPIResource Language { get; set; }
    }
}