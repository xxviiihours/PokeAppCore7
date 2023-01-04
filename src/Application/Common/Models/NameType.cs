using Newtonsoft.Json;
using PokeAppCore7.Application.Common.Models.Base;

namespace PokeAppCore7.Application.Common.Models
{
    public class NameType
    {
        [JsonProperty("name")]
        public string Name { get; set; }
        
        [JsonProperty("language")]
        public NamedAPIResource Language { get; set; }
    }
}